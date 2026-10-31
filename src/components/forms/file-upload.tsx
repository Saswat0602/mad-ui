"use client"

import * as React from "react"
import { UploadCloud, FileText, Image as ImageIcon, X, AlertCircle } from "lucide-react"
import { cn } from "../../lib/utils"
import { useControllableState } from "../../lib/use-controllable-state"

export interface FileUploadProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> {
  accept?: string
  multiple?: boolean
  maxSize?: number // In bytes, e.g. 5 * 1024 * 1024 = 5MB
  maxFiles?: number
  value?: File[]
  defaultValue?: File[]
  onChange?: (files: File[]) => void
  disabled?: boolean
  variant?: "dropzone" | "compact"
  title?: string
  description?: string
}

export function formatBytes(bytes: number, decimals = 1): string {
  if (bytes === 0) return "0 B"
  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ["B", "KB", "MB", "GB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

export const FileUpload = React.forwardRef<HTMLDivElement, FileUploadProps>(
  (
    {
      className,
      accept,
      multiple = false,
      maxSize,
      maxFiles,
      value: controlledFiles,
      defaultValue = [],
      onChange,
      disabled = false,
      variant = "dropzone",
      title = "Upload your files",
      description = "Drag and drop or browse from your device",
      ...props
    },
    ref
  ) => {
    const [files, setFiles] = useControllableState<File[]>({
      prop: controlledFiles,
      defaultProp: defaultValue,
      onChange,
    })

    const [isDragging, setIsDragging] = React.useState(false)
    const [errorMessage, setErrorMessage] = React.useState<string | null>(null)
    const inputRef = React.useRef<HTMLInputElement>(null)

    const validateFiles = (newFiles: File[]): File[] => {
      setErrorMessage(null)
      const valid: File[] = []

      for (const file of newFiles) {
        if (maxSize && file.size > maxSize) {
          setErrorMessage(`File "${file.name}" exceeds ${formatBytes(maxSize)}.`)
          continue
        }
        valid.push(file)
      }

      const combined = multiple ? [...(files ?? []), ...valid] : valid
      if (maxFiles && combined.length > maxFiles) {
        setErrorMessage(`Cannot exceed maximum of ${maxFiles} files.`)
        return combined.slice(0, maxFiles)
      }

      return combined
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      e.stopPropagation()
      setIsDragging(false)
      if (disabled) return

      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        const droppedFiles = Array.from(e.dataTransfer.files)
        const updated = validateFiles(droppedFiles)
        setFiles(updated)
      }
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      e.stopPropagation()
      if (!disabled) setIsDragging(true)
    }

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      e.stopPropagation()
      setIsDragging(false)
    }

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        const selectedFiles = Array.from(e.target.files)
        const updated = validateFiles(selectedFiles)
        setFiles(updated)
        // Reset input value so re-uploading same file triggers change
        if (inputRef.current) inputRef.current.value = ""
      }
    }

    const removeFile = (index: number) => {
      if (disabled) return
      setFiles((files ?? []).filter((_, i) => i !== index))
    }

    const getFileIcon = (file: File) => {
      if (file.type.startsWith("image/")) {
        return <ImageIcon className="h-4 w-4 text-blue-500" />
      }
      return <FileText className="h-4 w-4 text-zinc-500" />
    }

    return (
      <div ref={ref} className={cn("w-full space-y-3", className)} {...props}>
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => !disabled && inputRef.current?.click()}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={(e) => {
            if (!disabled && (e.key === "Enter" || e.key === " ")) {
              e.preventDefault()
              inputRef.current?.click()
            }
          }}
          className={cn(
            "flex flex-col items-center justify-center rounded-xl border-2 border-dashed transition-all cursor-pointer select-none",
            variant === "compact" ? "p-4" : "p-8",
            isDragging
              ? "border-blue-500 bg-blue-50/50 dark:bg-blue-950/20"
              : "border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-600 bg-zinc-50/50 dark:bg-zinc-900/50",
            disabled && "cursor-not-allowed opacity-50 pointer-events-none"
          )}
        >
          <input
            ref={inputRef}
            type="file"
            accept={accept}
            multiple={multiple}
            disabled={disabled}
            onChange={handleFileSelect}
            className="sr-only"
            aria-label="Upload files"
          />

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300 mb-3 shadow-2xs">
            <UploadCloud className="h-5 w-5" />
          </div>

          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{title}</p>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 max-w-xs text-center">
            {description}
          </p>

          {maxSize && (
            <p className="mt-2 text-[11px] text-zinc-400">
              Max file size: {formatBytes(maxSize)}
            </p>
          )}
        </div>

        {errorMessage && (
          <div className="flex items-center gap-1.5 text-xs text-red-600 dark:text-red-400">
            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {(files ?? []).length > 0 && (
          <div className="space-y-2">
            {(files ?? []).map((file, idx) => (
              <div
                key={`${file.name}-${idx}`}
                className="flex items-center justify-between p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-card text-xs shadow-2xs"
              >
                <div className="flex items-center gap-2.5 truncate">
                  {getFileIcon(file)}
                  <span className="font-medium text-zinc-800 dark:text-zinc-200 truncate">
                    {file.name}
                  </span>
                  <span className="text-muted-foreground shrink-0 text-[11px]">
                    ({formatBytes(file.size)})
                  </span>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    removeFile(idx)
                  }}
                  aria-label={`Remove file ${file.name}`}
                  className="p-1 rounded text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
)

FileUpload.displayName = "FileUpload"

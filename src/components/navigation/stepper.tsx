"use client"

import * as React from "react"
import { Check } from "../../icons"
import { cn } from "../../lib/utils"
import { useControllableState } from "../../lib/use-controllable-state"

export interface StepItem {
  title: string
  description?: string
  icon?: any
}

export interface StepperProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  steps?: StepItem[]
  activeStep?: number
  defaultStep?: number
  onStepChange?: (step: number) => void
  orientation?: "horizontal" | "vertical"
  clickable?: boolean
}

interface StepperContextValue {
  activeStep: number
  orientation: "horizontal" | "vertical"
  clickable: boolean
  goToStep: (step: number) => void
}

const StepperContext = React.createContext<StepperContextValue | null>(null)

export const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      className,
      steps,
      activeStep: controlledStep,
      defaultStep = 0,
      onStepChange,
      orientation = "horizontal",
      clickable = false,
      children,
      ...props
    },
    ref
  ) => {
    const [activeStep, setActiveStep] = useControllableState<number>({
      prop: controlledStep,
      defaultProp: defaultStep,
      onChange: onStepChange,
    })

    const isVertical = orientation === "vertical"

    const goToStep = (step: number) => {
      if (clickable) setActiveStep(step)
    }

    const contextValue = React.useMemo(
      () => ({
        activeStep: activeStep ?? 0,
        orientation,
        clickable,
        goToStep,
      }),
      [activeStep, orientation, clickable]
    )

    return (
      <StepperContext.Provider value={contextValue}>
        <div
          ref={ref}
          role="navigation"
          aria-label="Progress steps"
          className={cn(
            "flex w-full",
            isVertical ? "flex-col space-y-4" : "flex-row items-center justify-between",
            className
          )}
          {...props}
        >
          {steps ? (
            steps.map((s, idx) => {
              const status: "completed" | "current" | "upcoming" =
                idx < (activeStep ?? 0)
                  ? "completed"
                  : idx === (activeStep ?? 0)
                  ? "current"
                  : "upcoming"

              return (
                <React.Fragment key={idx}>
                  <div
                    onClick={() => goToStep(idx)}
                    className={cn(
                      "flex items-center gap-3",
                      clickable && "cursor-pointer select-none",
                      isVertical ? "w-full" : "flex-1 last:flex-none"
                    )}
                  >
                    <div
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-all duration-200",
                        status === "completed" && "bg-primary text-primary-foreground",
                        status === "current" && "border-2 border-primary text-primary bg-background shadow-xs",
                        status === "upcoming" && "border border-input text-muted-foreground bg-muted/40"
                      )}
                      aria-current={status === "current" ? "step" : undefined}
                    >
                      {status === "completed" ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <span>{idx + 1}</span>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <span
                        className={cn(
                          "text-xs font-medium tracking-tight",
                          status === "current"
                            ? "text-foreground font-semibold"
                            : status === "completed"
                            ? "text-foreground"
                            : "text-muted-foreground"
                        )}
                      >
                        {s.title}
                      </span>
                      {s.description && (
                        <span className="text-[11px] text-muted-foreground">
                          {s.description}
                        </span>
                      )}
                    </div>

                    {!isVertical && idx < steps.length - 1 && (
                      <div
                        className={cn(
                          "h-[2px] flex-1 mx-3 transition-colors",
                          idx < (activeStep ?? 0)
                            ? "bg-primary"
                            : "bg-muted"
                        )}
                      />
                    )}
                  </div>
                </React.Fragment>
              )
            })
          ) : (
            children
          )}
        </div>
      </StepperContext.Provider>
    )
  }
)

Stepper.displayName = "Stepper"

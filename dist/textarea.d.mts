import * as React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: boolean;
    success?: boolean;
    resize?: "none" | "vertical" | "horizontal" | "both";
    fullWidth?: boolean;
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;

export { Textarea };
export type { TextareaProps };

import React__default from 'react';

interface FormFieldProps {
    name: string;
    children: React__default.ReactNode;
    className?: string;
}
interface FormItemProps {
    children: React__default.ReactNode;
    className?: string;
}
interface FormLabelProps {
    children: React__default.ReactNode;
    className?: string;
    htmlFor?: string;
}
interface FormControlProps {
    children: React__default.ReactNode;
    className?: string;
}
interface FormDescriptionProps {
    children: React__default.ReactNode;
    className?: string;
}
interface FormMessageProps {
    children?: React__default.ReactNode;
    className?: string;
    variant?: 'default' | 'error' | 'success' | 'warning';
}
interface FormProps {
    children: React__default.ReactNode;
    onSubmit?: (e: React__default.FormEvent) => void;
    className?: string;
}
declare const Form: React__default.FC<FormProps>;
declare const FormField: React__default.FC<FormFieldProps>;
declare const FormItem: React__default.FC<FormItemProps>;
declare const FormLabel: React__default.FC<FormLabelProps>;
declare const FormControl: React__default.FC<FormControlProps>;
declare const FormDescription: React__default.FC<FormDescriptionProps>;
declare const FormMessage: React__default.FC<FormMessageProps>;

export { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage };
export type { FormControlProps, FormDescriptionProps, FormFieldProps, FormItemProps, FormLabelProps, FormMessageProps, FormProps };

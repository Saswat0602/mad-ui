import React__default from 'react';

interface CommandProps {
    children: React__default.ReactNode;
    className?: string;
}
interface CommandInputProps {
    placeholder?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    className?: string;
}
interface CommandListProps {
    children: React__default.ReactNode;
    className?: string;
}
interface CommandEmptyProps {
    children: React__default.ReactNode;
    className?: string;
}
interface CommandGroupProps {
    children: React__default.ReactNode;
    heading?: string;
    className?: string;
}
interface CommandItemProps {
    children: React__default.ReactNode;
    onSelect?: () => void;
    disabled?: boolean;
    className?: string;
}
interface CommandSeparatorProps {
    className?: string;
}
declare const Command: React__default.FC<CommandProps>;
declare const CommandInput: React__default.FC<CommandInputProps>;
declare const CommandList: React__default.FC<CommandListProps>;
declare const CommandEmpty: React__default.FC<CommandEmptyProps>;
declare const CommandGroup: React__default.FC<CommandGroupProps>;
declare const CommandItem: React__default.FC<CommandItemProps>;
declare const CommandSeparator: React__default.FC<CommandSeparatorProps>;

export { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator };
export type { CommandEmptyProps, CommandGroupProps, CommandInputProps, CommandItemProps, CommandListProps, CommandProps, CommandSeparatorProps };

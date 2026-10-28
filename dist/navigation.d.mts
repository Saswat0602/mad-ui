import React__default from 'react';

interface NavigationMenuProps {
    children: React__default.ReactNode;
    className?: string;
}
declare const NavigationMenu: React__default.FC<NavigationMenuProps>;

interface MenubarProps {
    children: React__default.ReactNode;
    className?: string;
}
declare const Menubar: React__default.FC<MenubarProps>;

interface CommandProps {
    children: React__default.ReactNode;
    className?: string;
}
declare const Command: React__default.FC<CommandProps>;

interface ComboboxOption {
    value: string;
    label: string;
    disabled?: boolean;
}
interface ComboboxProps {
    options: ComboboxOption[];
    value?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    searchable?: boolean;
}
declare const Combobox: React__default.FC<ComboboxProps>;

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    className?: string;
    showPageNumbers?: boolean;
    showFirstLast?: boolean;
    showPrevNext?: boolean;
}
declare const Pagination: React__default.FC<PaginationProps>;

export { Combobox, Command, Menubar, NavigationMenu, Pagination };
export type { ComboboxProps, CommandProps, MenubarProps, NavigationMenuProps, PaginationProps };

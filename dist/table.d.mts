import * as React from 'react';

interface TableColumn<T> {
    key: keyof T;
    header: string;
    sortable?: boolean;
    render?: (value: unknown, row: T) => React.ReactNode;
    width?: string | number;
    align?: "left" | "center" | "right";
    className?: string;
}
interface TableProps<T> extends React.HTMLAttributes<HTMLDivElement> {
    data: T[];
    columns: TableColumn<T>[];
    selectedRows?: string[];
    onSelectionChange?: (selectedRows: string[]) => void;
    pagination?: {
        current: number;
        total: number;
        pageSize: number;
        onChange: (page: number) => void;
    };
    sortable?: boolean;
    selectable?: boolean;
    hoverable?: boolean;
    striped?: boolean;
    bordered?: boolean;
    size?: "sm" | "md" | "lg";
    variant?: "default" | "outlined" | "elevated";
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
    headerColor?: string;
    borderRadius?: string | number;
    shadow?: "none" | "sm" | "md" | "lg";
    fullWidth?: boolean;
    emptyMessage?: string;
    loading?: boolean;
    onRowClick?: (row: T, index: number) => void;
    rowKey?: keyof T | ((row: T, index: number) => string);
    editable?: boolean;
    onAddRow?: () => void;
    onAddColumn?: () => void;
    onEditCell?: (row: T, column: keyof T, value: any) => void;
    onDeleteRow?: (row: T, index: number) => void;
    showAddRowButton?: boolean;
    showAddColumnButton?: boolean;
    showDeleteRowButton?: boolean;
    addRowButtonText?: string;
    addColumnButtonText?: string;
    deleteRowButtonText?: string;
}
declare function Table<T extends Record<string, unknown>>({ data, columns, selectedRows, onSelectionChange, pagination, sortable, selectable, hoverable, striped, bordered, size, variant, color, backgroundColor, borderColor, textColor, headerColor, borderRadius, shadow, fullWidth, emptyMessage, loading, onRowClick, rowKey, editable, onAddRow, onAddColumn, onEditCell, onDeleteRow, showAddRowButton, showAddColumnButton, showDeleteRowButton, addRowButtonText, addColumnButtonText, deleteRowButtonText, className, style, ...props }: TableProps<T>): React.JSX.Element;
declare namespace Table {
    var displayName: string;
}

export { Table };
export type { TableProps };

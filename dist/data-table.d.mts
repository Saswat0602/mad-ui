import React__default from 'react';

interface DataTableColumn<T> {
    key: keyof T;
    header: string;
    cell?: (item: T) => React__default.ReactNode;
    sortable?: boolean;
    width?: string;
}
interface DataTableProps<T> {
    data: T[];
    columns: DataTableColumn<T>[];
    className?: string;
    sortable?: boolean;
    searchable?: boolean;
    pagination?: boolean;
    pageSize?: number;
    onRowClick?: (item: T) => void;
}
interface DataTableHeaderProps<T> {
    columns: DataTableColumn<T>[];
    sortColumn?: keyof T;
    sortDirection?: 'asc' | 'desc';
    onSort?: (column: keyof T) => void;
    sortable?: boolean;
}
interface DataTableRowProps<T> {
    item: T;
    columns: DataTableColumn<T>[];
    onClick?: () => void;
}
interface DataTablePaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    className?: string;
}
declare const DataTable: <T extends Record<string, any>>({ data, columns, className, sortable, searchable, pagination, pageSize, onRowClick }: DataTableProps<T>) => React__default.JSX.Element;
declare const DataTableHeader: <T extends Record<string, any>>({ columns, sortColumn, sortDirection, onSort, sortable }: DataTableHeaderProps<T>) => React__default.JSX.Element;
declare const DataTableRow: <T extends Record<string, any>>({ item, columns, onClick }: DataTableRowProps<T>) => React__default.JSX.Element;
declare const DataTablePagination: React__default.FC<DataTablePaginationProps>;

export { DataTable, DataTableHeader, DataTablePagination, DataTableRow };
export type { DataTableHeaderProps, DataTablePaginationProps, DataTableProps, DataTableRowProps };

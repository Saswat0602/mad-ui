import React__default from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    className?: string;
    showPageNumbers?: boolean;
    showFirstLast?: boolean;
    showPrevNext?: boolean;
}
interface PaginationItemProps {
    children: React__default.ReactNode;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    active?: boolean;
}
declare const Pagination: React__default.FC<PaginationProps>;
declare const PaginationItem: React__default.FC<PaginationItemProps>;

export { Pagination, PaginationItem };
export type { PaginationItemProps, PaginationProps };

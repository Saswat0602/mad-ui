import React__default from 'react';

interface TabItem {
    id: string;
    label: string;
    content: React__default.ReactNode;
    disabled?: boolean;
    icon?: React__default.ReactNode;
    badge?: string | number;
}
interface TabsProps extends Omit<React__default.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    items: TabItem[];
    variant?: 'default' | 'pills' | 'underline' | 'cards' | 'minimal';
    size?: 'sm' | 'md' | 'lg';
    orientation?: 'horizontal' | 'vertical';
    defaultActiveTab?: string;
    animation?: 'fade' | 'slide' | 'scale' | 'none';
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    activeColor?: string;
    borderRadius?: string | number;
    shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    fullWidth?: boolean;
    onChange?: (activeTab: string) => void;
}
declare const Tabs: React__default.ForwardRefExoticComponent<TabsProps & React__default.RefAttributes<HTMLDivElement>>;

export { Tabs };
export type { TabItem, TabsProps };

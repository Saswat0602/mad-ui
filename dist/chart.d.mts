import React__default from 'react';

interface ChartData {
    label: string;
    value: number;
    color?: string;
}
interface ChartProps {
    data: ChartData[];
    type?: 'bar' | 'line' | 'pie' | 'doughnut';
    className?: string;
    height?: number;
    width?: number;
}
interface BarChartProps {
    data: ChartData[];
    className?: string;
    height?: number;
    width?: number;
}
interface LineChartProps {
    data: ChartData[];
    className?: string;
    height?: number;
    width?: number;
}
interface PieChartProps {
    data: ChartData[];
    className?: string;
    height?: number;
    width?: number;
}
declare const Chart: React__default.FC<ChartProps>;
declare const BarChart: React__default.FC<BarChartProps>;
declare const LineChart: React__default.FC<LineChartProps>;
declare const PieChart: React__default.FC<PieChartProps>;
declare const DoughnutChart: React__default.FC<PieChartProps>;

export { BarChart, Chart, DoughnutChart, LineChart, PieChart };
export type { BarChartProps, ChartProps, LineChartProps, PieChartProps };

import React from 'react'
import { cn } from '../lib/utils'

export interface ChartData {
  label: string
  value: number
  color?: string
}

export interface ChartProps {
  data: ChartData[]
  type?: 'bar' | 'line' | 'pie' | 'doughnut'
  className?: string
  height?: number
  width?: number
}

export interface BarChartProps {
  data: ChartData[]
  className?: string
  height?: number
  width?: number
}

export interface LineChartProps {
  data: ChartData[]
  className?: string
  height?: number
  width?: number
}

export interface PieChartProps {
  data: ChartData[]
  className?: string
  height?: number
  width?: number
}

export const Chart: React.FC<ChartProps> = ({
  data,
  type = 'bar',
  className,
  height = 300,
  width = 400
}) => {
  const renderChart = () => {
    switch (type) {
      case 'bar':
        return <BarChart data={data} height={height} width={width} />
      case 'line':
        return <LineChart data={data} height={height} width={width} />
      case 'pie':
        return <PieChart data={data} height={height} width={width} />
      case 'doughnut':
        return <DoughnutChart data={data} height={height} width={width} />
      default:
        return <BarChart data={data} height={height} width={width} />
    }
  }

  return (
    <div className={cn('w-full', className)}>
      {renderChart()}
    </div>
  )
}

export const BarChart: React.FC<BarChartProps> = ({
  data,
  className,
  height = 300,
  width = 400
}) => {
  const maxValue = Math.max(...data.map(d => d.value))
  const barWidth = width / data.length - 10

  return (
    <div className={cn('relative', className)}>
      <svg width={width} height={height} className="w-full h-auto">
        {/* Y-axis */}
        <line
          x1={40}
          y1={20}
          x2={40}
          y2={height - 40}
          stroke="currentColor"
          strokeWidth="1"
          className="text-border"
        />
        
        {/* X-axis */}
        <line
          x1={40}
          y1={height - 40}
          x2={width - 20}
          y2={height - 40}
          stroke="currentColor"
          strokeWidth="1"
          className="text-border"
        />

        {/* Bars */}
        {data.map((item, index) => {
          const barHeight = (item.value / maxValue) * (height - 80)
          const x = 50 + index * (barWidth + 10)
          const y = height - 40 - barHeight

          return (
            <g key={index}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                fill={item.color || 'hsl(var(--primary))'}
                className="transition-all duration-300 hover:opacity-80"
              />
              <text
                x={x + barWidth / 2}
                y={height - 20}
                textAnchor="middle"
                className="text-xs fill-current text-muted-foreground"
              >
                {item.label}
              </text>
              <text
                x={x + barWidth / 2}
                y={y - 5}
                textAnchor="middle"
                className="text-xs fill-current text-foreground"
              >
                {item.value}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}

export const LineChart: React.FC<LineChartProps> = ({
  data,
  className,
  height = 300,
  width = 400
}) => {
  const maxValue = Math.max(...data.map(d => d.value))
  const pointSpacing = (width - 80) / (data.length - 1)

  const points = data.map((item, index) => ({
    x: 40 + index * pointSpacing,
    y: height - 40 - (item.value / maxValue) * (height - 80)
  }))

  const pathData = points.map((point, index) => 
    `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
  ).join(' ')

  return (
    <div className={cn('relative', className)}>
      <svg width={width} height={height} className="w-full h-auto">
        {/* Y-axis */}
        <line
          x1={40}
          y1={20}
          x2={40}
          y2={height - 40}
          stroke="currentColor"
          strokeWidth="1"
          className="text-border"
        />
        
        {/* X-axis */}
        <line
          x1={40}
          y1={height - 40}
          x2={width - 20}
          y2={height - 40}
          stroke="currentColor"
          strokeWidth="1"
          className="text-border"
        />

        {/* Line */}
        <path
          d={pathData}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          className="transition-all duration-300"
        />

        {/* Points */}
        {points.map((point, index) => (
          <g key={index}>
            <circle
              cx={point.x}
              cy={point.y}
              r="4"
              fill="hsl(var(--primary))"
              className="transition-all duration-300 hover:r-6"
            />
            <text
              x={point.x}
              y={point.y - 10}
              textAnchor="middle"
              className="text-xs fill-current text-foreground"
            >
              {data[index].value}
            </text>
          </g>
        ))}

        {/* Labels */}
        {data.map((item, index) => (
          <text
            key={index}
            x={40 + index * pointSpacing}
            y={height - 20}
            textAnchor="middle"
            className="text-xs fill-current text-muted-foreground"
          >
            {item.label}
          </text>
        ))}
      </svg>
    </div>
  )
}

export const PieChart: React.FC<PieChartProps> = ({
  data,
  className,
  height = 300,
  width = 400
}) => {
  const total = data.reduce((sum, item) => sum + item.value, 0)
  const centerX = width / 2
  const centerY = height / 2
  const radius = Math.min(width, height) / 3

  let currentAngle = -Math.PI / 2

  const slices = data.map((item, index) => {
    const sliceAngle = (item.value / total) * 2 * Math.PI
    const startAngle = currentAngle
    const endAngle = currentAngle + sliceAngle

    const x1 = centerX + radius * Math.cos(startAngle)
    const y1 = centerY + radius * Math.sin(startAngle)
    const x2 = centerX + radius * Math.cos(endAngle)
    const y2 = centerY + radius * Math.sin(endAngle)

    const largeArcFlag = sliceAngle > Math.PI ? 1 : 0

    const pathData = [
      `M ${centerX} ${centerY}`,
      `L ${x1} ${y1}`,
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
      'Z'
    ].join(' ')

    currentAngle = endAngle

    return {
      pathData,
      color: item.color || `hsl(${(index * 137.5) % 360}, 70%, 50%)`,
      label: item.label,
      percentage: ((item.value / total) * 100).toFixed(1),
      centerAngle: startAngle + sliceAngle / 2
    }
  })

  return (
    <div className={cn('relative', className)}>
      <svg width={width} height={height} className="w-full h-auto">
        {slices.map((slice, index) => (
          <g key={index}>
            <path
              d={slice.pathData}
              fill={slice.color}
              className="transition-all duration-300 hover:opacity-80"
            />
            <text
              x={centerX + (radius * 0.7) * Math.cos(slice.centerAngle)}
              y={centerY + (radius * 0.7) * Math.sin(slice.centerAngle)}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-xs fill-white font-medium"
            >
              {slice.percentage}%
            </text>
          </g>
        ))}
      </svg>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-4 justify-center">
        {slices.map((slice, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: slice.color }}
            />
            <span className="text-sm text-muted-foreground">
              {slice.label} ({slice.percentage}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export const DoughnutChart: React.FC<PieChartProps> = (props) => {
  // For now, we'll use the same implementation as PieChart
  // In a real implementation, you'd modify the path to create a hole in the center
  return <PieChart {...props} />
}

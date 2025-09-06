import React from 'react'
import { Table, DataTable, Chart } from 'mad-ui-components'

export interface ComponentExample {
  title: string
  description?: string
  code: string
  preview: React.ReactNode
}

export const dataExamples: Record<string, ComponentExample[]> = {
  table: [
    {
      title: 'Basic Table',
      description: 'A simple table component',
      code: `import { Table } from 'mad-ui-components'

export function TableExample() {
  const columns = [
    { key: 'name', header: 'Name' },
    { key: 'age', header: 'Age' },
    { key: 'email', header: 'Email' }
  ]

  const data = [
    { name: 'John Doe', age: 30, email: 'john@example.com' },
    { name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { name: 'Bob Johnson', age: 35, email: 'bob@example.com' }
  ]

  return <Table columns={columns} data={data} />
}`,
      preview: (
        <div className="w-full max-w-md">
          <Table 
            columns={[
              { key: 'name', header: 'Name' },
              { key: 'age', header: 'Age' },
              { key: 'email', header: 'Email' }
            ]} 
            data={[
              { name: 'John Doe', age: 30, email: 'john@example.com' },
              { name: 'Jane Smith', age: 25, email: 'jane@example.com' },
              { name: 'Bob Johnson', age: 35, email: 'bob@example.com' }
            ]} 
          />
        </div>
      )
    }
  ],

  'data-table': [
    {
      title: 'Basic Data Table',
      description: 'A simple data table component',
      code: `import { DataTable } from 'mad-ui-components'

export function DataTableExample() {
  const columns = [
    { key: 'id', header: 'ID' },
    { key: 'name', header: 'Name' },
    { key: 'status', header: 'Status' }
  ]

  const data = [
    { id: 1, name: 'Project A', status: 'Active' },
    { id: 2, name: 'Project B', status: 'Inactive' },
    { id: 3, name: 'Project C', status: 'Active' }
  ]

  return <DataTable columns={columns} data={data} />
}`,
      preview: (
        <div className="w-full max-w-md">
          <DataTable 
            columns={[
              { key: 'id', header: 'ID' },
              { key: 'name', header: 'Name' },
              { key: 'status', header: 'Status' }
            ]} 
            data={[
              { id: 1, name: 'Project A', status: 'Active' },
              { id: 2, name: 'Project B', status: 'Inactive' },
              { id: 3, name: 'Project C', status: 'Active' }
            ]} 
          />
        </div>
      )
    }
  ],

  chart: [
    {
      title: 'Basic Chart',
      description: 'A simple chart component',
      code: `import { Chart } from 'mad-ui-components'

export function ChartExample() {
  const data = [
    { label: 'Jan', value: 100 },
    { label: 'Feb', value: 150 },
    { label: 'Mar', value: 200 },
    { label: 'Apr', value: 180 }
  ]

  return <Chart data={data} type="line" />
}`,
      preview: (
        <div className="w-full max-w-md">
          <Chart 
            data={[
              { label: 'Jan', value: 100 },
              { label: 'Feb', value: 150 },
              { label: 'Mar', value: 200 },
              { label: 'Apr', value: 180 }
            ]} 
            type="line" 
          />
        </div>
      )
    }
  ]
}

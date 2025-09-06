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
    },
    {
      title: 'Editable Table',
      description: 'A table with add/delete row functionality and inline editing',
      code: `import { Table } from 'mad-ui-components'

export function EditableTableExample() {
  const [data, setData] = useState([
    { id: '1', name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { id: '3', name: 'Bob Johnson', age: 35, email: 'bob@example.com' }
  ])

  const columns = [
    { key: 'name', header: 'Name', sortable: true },
    { key: 'age', header: 'Age', sortable: true },
    { key: 'email', header: 'Email', sortable: true }
  ]

  const handleAddRow = () => {
    const newRow = {
      id: String(data.length + 1),
      name: 'New User',
      age: 25,
      email: 'new@example.com'
    }
    setData([...data, newRow])
  }

  const handleDeleteRow = (row: any, index: number) => {
    setData(data.filter((_, i) => i !== index))
  }

  const handleEditCell = (row: any, column: string, value: any) => {
    setData(data.map(item => 
      item.id === row.id ? { ...item, [column]: value } : item
    ))
  }

  return (
    <Table
      columns={columns}
      data={data}
      editable
      showAddRowButton
      showDeleteRowButton
      onAddRow={handleAddRow}
      onDeleteRow={handleDeleteRow}
      onEditCell={handleEditCell}
    />
  )
}`,
      preview: (
        <div className="w-full max-w-md">
          <Table 
            columns={[
              { key: 'name', header: 'Name', sortable: true },
              { key: 'age', header: 'Age', sortable: true },
              { key: 'email', header: 'Email', sortable: true }
            ]} 
            data={[
              { id: '1', name: 'John Doe', age: 30, email: 'john@example.com' },
              { id: '2', name: 'Jane Smith', age: 25, email: 'jane@example.com' },
              { id: '3', name: 'Bob Johnson', age: 35, email: 'bob@example.com' }
            ]}
            editable
            showAddRowButton
            showDeleteRowButton
            onAddRow={() => console.log('Add row')}
            onDeleteRow={(row, index) => console.log('Delete row:', row, index)}
            onEditCell={(row, column, value) => console.log('Edit cell:', row, column, value)}
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

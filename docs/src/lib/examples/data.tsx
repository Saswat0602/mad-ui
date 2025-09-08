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
      description: 'A clean, responsive table with sortable columns',
      code: `import { Table } from 'mad-ui-components'

export function BasicTable() {
  const columns = [
    { key: 'name', header: 'Name', sortable: true },
    { key: 'role', header: 'Role', sortable: true },
    { key: 'status', header: 'Status', sortable: true },
    { key: 'email', header: 'Email' }
  ]

  const data = [
    { id: '1', name: 'Alex Johnson', role: 'Developer', status: 'Active', email: 'alex@company.com' },
    { id: '2', name: 'Sarah Chen', role: 'Designer', status: 'Active', email: 'sarah@company.com' },
    { id: '3', name: 'Mike Wilson', role: 'Manager', status: 'Inactive', email: 'mike@company.com' },
    { id: '4', name: 'Emma Davis', role: 'Developer', status: 'Active', email: 'emma@company.com' }
  ]

  return (
    <Table 
      columns={columns} 
      data={data} 
      variant="outlined"
      hoverable
      size="md"
    />
  )
}`,
      preview: (
        <div className="w-full">
          <Table 
            columns={[
              { key: 'name', header: 'Name', sortable: true },
              { key: 'role', header: 'Role', sortable: true },
              { key: 'status', header: 'Status', sortable: true },
              { key: 'email', header: 'Email' }
            ]} 
            data={[
              { id: '1', name: 'Alex Johnson', role: 'Developer', status: 'Active', email: 'alex@company.com' },
              { id: '2', name: 'Sarah Chen', role: 'Designer', status: 'Active', email: 'sarah@company.com' },
              { id: '3', name: 'Mike Wilson', role: 'Manager', status: 'Inactive', email: 'mike@company.com' },
              { id: '4', name: 'Emma Davis', role: 'Developer', status: 'Active', email: 'emma@company.com' }
            ]}
            variant="outlined"
            hoverable
            size="md"
          />
        </div>
      )
    },
    {
      title: 'Advanced Table with Selection',
      description: 'Table with row selection, striped rows, and custom rendering',
      code: `import { Table, Badge } from 'mad-ui-components'
import { useState } from 'react'

export function AdvancedTable() {
  const [selectedRows, setSelectedRows] = useState<string[]>([])

  const columns = [
    { key: 'name', header: 'Employee', sortable: true },
    { key: 'department', header: 'Department', sortable: true },
    { 
      key: 'status', 
      header: 'Status', 
      render: (value: unknown) => (
        <Badge variant={value === 'Active' ? 'success' : 'secondary'}>
          {String(value)}
        </Badge>
      )
    },
    { key: 'salary', header: 'Salary', align: 'right' as const }
  ]

  const data = [
    { id: '1', name: 'John Smith', department: 'Engineering', status: 'Active', salary: '$85,000' },
    { id: '2', name: 'Lisa Wong', department: 'Design', status: 'Active', salary: '$78,000' },
    { id: '3', name: 'David Brown', department: 'Marketing', status: 'Inactive', salary: '$65,000' },
    { id: '4', name: 'Anna Garcia', department: 'Engineering', status: 'Active', salary: '$92,000' }
  ]

  return (
    <Table
      columns={columns}
      data={data}
      selectable
      striped
      hoverable
      selectedRows={selectedRows}
      onSelectionChange={setSelectedRows}
      variant="elevated"
      shadow="md"
    />
  )
}`,
      preview: (
        <div className="w-full">
          <Table 
            columns={[
              { key: 'name', header: 'Employee', sortable: true },
              { key: 'department', header: 'Department', sortable: true },
              { 
                key: 'status', 
                header: 'Status', 
                render: (value: unknown) => (
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    value === 'Active' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' 
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
                  }`}>
                    {String(value)}
                  </span>
                )
              },
              { key: 'salary', header: 'Salary', align: 'right' as const }
            ]} 
            data={[
              { id: '1', name: 'John Smith', department: 'Engineering', status: 'Active', salary: '$85,000' },
              { id: '2', name: 'Lisa Wong', department: 'Design', status: 'Active', salary: '$78,000' },
              { id: '3', name: 'David Brown', department: 'Marketing', status: 'Inactive', salary: '$65,000' },
              { id: '4', name: 'Anna Garcia', department: 'Engineering', status: 'Active', salary: '$92,000' }
            ]}
            selectable
            striped
            hoverable
            selectedRows={[]}
            onSelectionChange={() => {}}
            variant="elevated"
            shadow="md"
          />
        </div>
      )
    },
    {
      title: 'Interactive Table',
      description: 'Editable table with add/delete functionality',
      code: `import { Table } from 'mad-ui-components'
import { useState } from 'react'

export function InteractiveTable() {
  const [data, setData] = useState([
    { id: '1', task: 'Review code', priority: 'High', assignee: 'John' },
    { id: '2', task: 'Update docs', priority: 'Medium', assignee: 'Sarah' },
    { id: '3', task: 'Fix bug #123', priority: 'High', assignee: 'Mike' }
  ])

  const columns = [
    { key: 'task', header: 'Task', sortable: true },
    { key: 'priority', header: 'Priority', sortable: true },
    { key: 'assignee', header: 'Assignee', sortable: true }
  ]

  const handleAddRow = () => {
    const newTask = {
      id: String(Date.now()),
      task: 'New Task',
      priority: 'Medium',
      assignee: 'Unassigned'
    }
    setData([...data, newTask])
  }

  const handleDeleteRow = (row: any, index: number) => {
    setData(data.filter((_, i) => i !== index))
  }

  const handleEditCell = (row: any, column: any, value: any) => {
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
      variant="outlined"
      hoverable
    />
  )
}`,
      preview: (
        <div className="w-full">
          <Table 
            columns={[
              { key: 'task', header: 'Task', sortable: true },
              { key: 'priority', header: 'Priority', sortable: true },
              { key: 'assignee', header: 'Assignee', sortable: true }
            ]} 
            data={[
              { id: '1', task: 'Review code', priority: 'High', assignee: 'John' },
              { id: '2', task: 'Update docs', priority: 'Medium', assignee: 'Sarah' },
              { id: '3', task: 'Fix bug #123', priority: 'High', assignee: 'Mike' }
            ]}
            editable
            showAddRowButton
            showDeleteRowButton
            onAddRow={() => console.log('Add row clicked')}
            onDeleteRow={(row, index) => console.log('Delete row:', row, index)}
            onEditCell={(row, column, value) => console.log('Edit cell:', row, column, value)}
            variant="outlined"
            hoverable
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

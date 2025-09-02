'use client';

import { useState } from 'react';
import {
  Table,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Skeleton,
  Progress,
  Rating,
  Button,
} from '@saswat0602/ui-library';

export default function DataDisplayPage() {
  const [rating, setRating] = useState(4);
  const [progress, setProgress] = useState(75);

  const tableData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', rating: 4.5 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active', rating: 4.2 },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor', status: 'Inactive', rating: 3.8 },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User', status: 'Active', rating: 4.7 },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Admin', status: 'Active', rating: 4.1 },
  ];

  const tableColumns = [
    { key: 'id' as const, header: 'ID' },
    { key: 'name' as const, header: 'Name' },
    { key: 'email' as const, header: 'Email' },
    { key: 'role' as const, header: 'Role' },
    { key: 'status' as const, header: 'Status' },
    { key: 'rating' as const, header: 'Rating' },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Data Display Components</h1>
        <p className="text-gray-600">Explore data presentation and visualization components</p>
      </div>

      {/* Table Component */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Data Table</CardTitle>
          <CardDescription>Responsive table with sorting and data display</CardDescription>
        </CardHeader>
        <CardContent>
          <Table
            data={tableData}
            columns={tableColumns}
            variant="outlined"
            hoverable
            striped
          />
        </CardContent>
      </Card>

      {/* Progress and Rating */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Progress Indicators</CardTitle>
            <CardDescription>Different types of progress bars</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Overall Progress</span>
                <span className="text-sm text-gray-600">{progress}%</span>
              </div>
              <Progress value={progress} className="w-full" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Task Completion</span>
                <span className="text-sm text-gray-600">65%</span>
              </div>
              <Progress value={65} className="w-full" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Upload Status</span>
                <span className="text-sm text-gray-600">90%</span>
              </div>
              <Progress value={90} className="w-full" />
            </div>
            <div className="pt-4">
              <label className="text-sm font-medium mb-2 block">Adjust Progress</label>
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={(e) => setProgress(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rating Component</CardTitle>
            <CardDescription>Interactive rating system</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="text-sm font-medium mb-2 block">Current Rating: {rating}/5</label>
              <Rating value={rating} onChange={setRating} />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Read-only Ratings</label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Product A:</span>
                  <Rating value={4.5} onChange={() => {}} />
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Product B:</span>
                  <Rating value={3.2} onChange={() => {}} />
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Product C:</span>
                  <Rating value={5.0} onChange={() => {}} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Skeleton Components */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Skeleton Loading States</CardTitle>
          <CardDescription>Loading placeholders for content</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[90%]" />
              <Skeleton className="h-4 w-[75%]" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-20 w-full" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Simple Interactive Elements */}
      <Card>
        <CardHeader>
          <CardTitle>Interactive Elements</CardTitle>
          <CardDescription>Simple interactive components</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Sample Buttons</label>
              <div className="flex gap-2">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Progress Control</label>
              <div className="space-y-2">
                <Progress value={progress} className="w-full" />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={(e) => setProgress(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

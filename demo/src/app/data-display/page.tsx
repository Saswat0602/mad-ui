'use client';

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Skeleton,
  Progress,
  Rating,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
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
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      user.role === 'Admin' ? 'bg-red-100 text-red-800' :
                      user.role === 'Editor' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {user.role}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {user.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Rating value={user.rating} onChange={() => {}} readonly />
                  </TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline">Edit</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
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
                <Label>Overall Progress</Label>
                <span className="text-sm text-gray-600">{progress}%</span>
              </div>
              <Progress value={progress} className="w-full" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <Label>Task Completion</Label>
                <span className="text-sm text-gray-600">65%</span>
              </div>
              <Progress value={65} className="w-full" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <Label>Upload Status</Label>
                <span className="text-sm text-gray-600">90%</span>
              </div>
              <Progress value={90} className="w-full" />
            </div>
            <div className="pt-4">
              <Label className="mb-2 block">Adjust Progress</Label>
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
              <Label className="mb-2 block">Current Rating: {rating}/5</Label>
              <Rating value={rating} onChange={setRating} />
            </div>
            <div>
              <Label className="mb-2 block">Read-only Ratings</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Product A:</span>
                  <Rating value={4.5} onChange={() => {}} readonly />
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Product B:</span>
                  <Rating value={3.2} onChange={() => {}} readonly />
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Product C:</span>
                  <Rating value={5.0} onChange={() => {}} readonly />
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

      {/* Popover Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Popover Components</CardTitle>
          <CardDescription>Contextual information overlays</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">User Info</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">User Profile</h4>
                    <p className="text-sm text-muted-foreground">
                      Detailed information about the selected user.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="username">Username</Label>
                      <span className="col-span-2">john_doe</span>
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="email">Email</Label>
                      <span className="col-span-2">john@example.com</span>
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="role">Role</Label>
                      <span className="col-span-2">Administrator</span>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Settings</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Quick Settings</h4>
                    <p className="text-sm text-muted-foreground">
                      Configure your preferences here.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="notifications">Notifications</Label>
                      <Switch id="notifications" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="darkMode">Dark Mode</Label>
                      <Switch id="darkMode" />
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

'use client';

import { useState } from 'react';
import {
  Alert,
  Button,
  Calendar,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Input,
  Label,
  Progress,
  Radio,
  Rating,
  Select,
  Skeleton,
  Switch,
  Table,
  Textarea,
  TimePicker,
} from '@saswat0602/ui-library';

export default function ComponentShowcase() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('12:00');
  const [rating, setRating] = useState(3);
  const [progress, setProgress] = useState(65);
  const [switchValue, setSwitchValue] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [selectValue, setSelectValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  const tableData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' },
  ];

  const tableColumns = [
    { key: 'id' as const, header: 'ID' },
    { key: 'name' as const, header: 'Name' },
    { key: 'email' as const, header: 'Email' },
    { key: 'role' as const, header: 'Role' },
  ];

  const selectOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          UI Component Library Showcase
        </h1>
        <p className="text-xl text-gray-600">
          A comprehensive display of all available components from @saswat0602/ui-library
        </p>
      </div>

      {/* Alert Components */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Alert Components</h2>
        <div className="grid gap-4">
          <Alert type="info" title="Default Alert" message="This is a default alert message." />
          <Alert type="error" title="Destructive Alert" message="This is a destructive alert message." />
        </div>
      </section>

      {/* Button Components */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Button Components</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Default Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="error">Error Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button size="sm">Small Button</Button>
          <Button size="lg">Large Button</Button>
          <Button disabled>Disabled Button</Button>
        </div>
      </section>

      {/* Form Components */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Form Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="input-demo">Input Field</Label>
              <Input
                id="input-demo"
                placeholder="Enter text here..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="textarea-demo">Textarea</Label>
              <Textarea
                id="textarea-demo"
                placeholder="Enter longer text here..."
                value={textareaValue}
                onChange={(e) => setTextareaValue(e.target.value)}
                rows={4}
              />
            </div>
            <div>
              <Label htmlFor="select-demo">Select</Label>
              <Select
                options={selectOptions}
                placeholder="Select an option"
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="checkbox-demo"
                checked={checkboxValue}
                onChange={(e) => setCheckboxValue(e.target.checked)}
              />
              <Label htmlFor="checkbox-demo">Checkbox</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="switch-demo"
                checked={switchValue}
                onChange={(e) => setSwitchValue(e.target.checked)}
              />
              <Label htmlFor="switch-demo">Switch</Label>
            </div>
            <div>
              <Label>Radio Group</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Radio value="option1" id="radio1" />
                  <Label htmlFor="radio1">Option 1</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Radio value="option2" id="radio2" />
                  <Label htmlFor="radio2">Option 2</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Radio value="option3" id="radio3" />
                  <Label htmlFor="radio3">Option 3</Label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar and TimePicker */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Calendar & TimePicker</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label>Calendar</Label>
            <Calendar
              value={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="rounded-md border"
            />
          </div>
          <div>
            <Label>Time Picker</Label>
            <TimePicker
              value={selectedTime}
              onChange={setSelectedTime}
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Rating and Progress */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Rating & Progress</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label>Rating</Label>
            <Rating value={rating} onChange={setRating} />
          </div>
          <div>
            <Label>Progress Bar</Label>
            <Progress value={progress} className="w-full" />
            <p className="text-sm text-gray-600 mt-2">{progress}% complete</p>
          </div>
        </div>
      </section>

      {/* Card Components */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Card Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description goes here</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is the main content of the card.</p>
            </CardContent>
            <CardFooter>
              <Button>Action</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Another Card</CardTitle>
              <CardDescription>With different content</CardDescription>
            </CardHeader>
            <CardContent>
              <p>More content here to demonstrate the card layout.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Third Card</CardTitle>
              <CardDescription>Final example</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This shows how cards look in a grid layout.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Table Component */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Table Component</h2>
        <Card>
          <CardHeader>
            <CardTitle>User Management</CardTitle>
            <CardDescription>A list of users in the system</CardDescription>
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
      </section>

      {/* Skeleton Component */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Skeleton Component</h2>
        <div className="space-y-3">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[300px]" />
        </div>
      </section>

      {/* Interactive Demo Controls */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Interactive Controls</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label>Adjust Progress: {progress}%</Label>
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={(e) => setProgress(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <Label>Adjust Rating: {rating}/5</Label>
              <input
                type="range"
                min="1"
                max="5"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="demo-toggle"
                checked={switchValue}
                onChange={(e) => setSwitchValue(e.target.checked)}
              />
              <Label htmlFor="demo-toggle">Toggle Switch State</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="demo-switch"
                checked={checkboxValue}
                onChange={(e) => setCheckboxValue(e.target.checked)}
              />
              <Label htmlFor="demo-switch">Toggle Checkbox State</Label>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';

import { useState } from 'react';
import {
  Button,
  Input,
  Label,
  Textarea,
  Select,
  Checkbox,
  Switch,
  Radio,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from 'mad-ui-components';

export default function FormsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    category: '',
    newsletter: false,
    notifications: false,
    preference: 'option1',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const selectOptions = [
    { value: 'general', label: 'General' },
    { value: 'support', label: 'Support' },
    { value: 'feedback', label: 'Feedback' },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Form Components</h1>
        <p className="text-gray-600">Explore all form-related components from the UI library</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Basic Form */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Form</CardTitle>
            <CardDescription>Simple form with input, textarea, and select</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="category">Category</Label>
              <Select
                options={selectOptions}
                placeholder="Select a category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSubmit}>Submit Form</Button>
          </CardFooter>
        </Card>

        {/* Interactive Controls */}
        <Card>
          <CardHeader>
            <CardTitle>Interactive Controls</CardTitle>
            <CardDescription>Checkboxes, switches, and radio buttons</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="newsletter"
                  checked={formData.newsletter}
                  onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                />
                <Label htmlFor="newsletter">Subscribe to newsletter</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="notifications"
                  checked={formData.notifications}
                  onChange={(e) => setFormData({ ...formData, notifications: e.target.checked })}
                />
                <Label htmlFor="notifications">Enable notifications</Label>
              </div>
            </div>

            <div>
              <Label className="mb-3 block">Communication Preference</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Radio value="option1" id="radio1" />
                  <Label htmlFor="radio1">Email</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Radio value="option2" id="radio2" />
                  <Label htmlFor="radio2">SMS</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Radio value="option3" id="radio3" />
                  <Label htmlFor="radio3">Phone</Label>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Button Variants */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Button Variants</CardTitle>
          <CardDescription>All available button styles and sizes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label className="mb-2 block">Button Variants</Label>
              <div className="flex flex-wrap gap-2">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="error">Error</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </div>
            <div>
              <Label className="mb-2 block">Button Sizes</Label>
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
            <div>
              <Label className="mb-2 block">Button States</Label>
              <div className="flex flex-wrap gap-2">
                <Button>Normal</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

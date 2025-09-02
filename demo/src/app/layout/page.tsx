'use client';

import { useState } from 'react';
import {
  Calendar,
  TimePicker,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Button,
  Label,
} from '@saswat0602/ui-library';

export default function LayoutPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('12:00');

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Layout Components</h1>
        <p className="text-gray-600">Explore layout and date/time components</p>
      </div>

      {/* Calendar and TimePicker */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Calendar Component</CardTitle>
            <CardDescription>Date selection and calendar functionality</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label className="mb-2 block">Selected Date</Label>
                <p className="text-sm text-gray-600">
                  {selectedDate ? selectedDate.toLocaleDateString() : 'No date selected'}
                </p>
              </div>
              <Calendar
                value={selectedDate}
                onChange={setSelectedDate}
                className="rounded-md border"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Time Picker Component</CardTitle>
            <CardDescription>Time selection with custom formatting</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label className="mb-2 block">Selected Time</Label>
                <p className="text-sm text-gray-600">
                  {selectedTime || 'No time selected'}
                </p>
              </div>
              <TimePicker
                value={selectedTime}
                onChange={setSelectedTime}
                className="w-full"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Layout Examples */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Layout Patterns</CardTitle>
          <CardDescription>Common layout structures and grid systems</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Header Layout */}
            <div>
              <Label className="mb-3 block">Header Layout</Label>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">UI</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Application Name</h3>
                      <p className="text-sm text-gray-600">Tagline or description</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline">Settings</Button>
                    <Button size="sm">Profile</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Layout */}
            <div>
              <Label className="mb-3 block">Sidebar Layout</Label>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="flex space-x-4">
                  <div className="w-48 bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium mb-3">Navigation</h4>
                    <nav className="space-y-2">
                      <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Dashboard</a>
                      <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Projects</a>
                      <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Team</a>
                      <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Settings</a>
                    </nav>
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium mb-3">Main Content</h4>
                    <p className="text-gray-600">This is the main content area that takes up the remaining space.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Grid Layout */}
            <div>
              <Label className="mb-3 block">Card Grid Layout</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <h5 className="font-medium mb-2">Card 1</h5>
                  <p className="text-sm text-gray-600">This is a sample card in the grid layout.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <h5 className="font-medium mb-2">Card 2</h5>
                  <p className="text-sm text-gray-600">Another card with different content.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <h5 className="font-medium mb-2">Card 3</h5>
                  <p className="text-sm text-gray-600">Third card in the responsive grid.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <h5 className="font-medium mb-2">Card 4</h5>
                  <p className="text-sm text-gray-600">Fourth card showing grid flexibility.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <h5 className="font-medium mb-2">Card 5</h5>
                  <p className="text-sm text-gray-600">Fifth card demonstrating the layout.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <h5 className="font-medium mb-2">Card 6</h5>
                  <p className="text-sm text-gray-600">Final card in the grid system.</p>
                </div>
              </div>
            </div>

            {/* Form Layout */}
            <div>
              <Label className="mb-3 block">Form Layout</Label>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <input
                        type="text"
                        id="firstName"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter first name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <input
                        type="text"
                        id="lastName"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter last name"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter email address"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter your message"
                    />
                  </div>
                  <div className="flex justify-end space-x-3">
                    <Button variant="outline" type="button">Cancel</Button>
                    <Button type="submit">Submit</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Responsive Design */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Responsive Design</CardTitle>
          <CardDescription>Layout that adapts to different screen sizes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Mobile First Approach</h4>
              <p className="text-sm text-blue-800">
                This layout is designed mobile-first and scales up to larger screens. 
                The grid system automatically adjusts columns based on available space.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-gray-700">1</div>
                <div className="text-sm text-gray-600">Column</div>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-gray-700">2</div>
                <div className="text-sm text-gray-600">Columns</div>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-gray-700">3</div>
                <div className="text-sm text-gray-600">Columns</div>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-gray-700">4</div>
                <div className="text-sm text-gray-600">Columns</div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium text-green-900 mb-2">Breakpoint System</h4>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• <strong>sm:</strong> 640px and up (2 columns)</li>
                <li>• <strong>md:</strong> 768px and up (2 columns)</li>
                <li>• <strong>lg:</strong> 1024px and up (4 columns)</li>
                <li>• <strong>xl:</strong> 1280px and up (4 columns)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Spacing and Typography */}
      <Card>
        <CardHeader>
          <CardTitle>Spacing and Typography</CardTitle>
          <CardDescription>Consistent spacing and text hierarchy</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Heading 1</h1>
              <h2 className="text-3xl font-semibold text-gray-800 mb-2">Heading 2</h2>
              <h3 className="text-2xl font-medium text-gray-700 mb-2">Heading 3</h3>
              <h4 className="text-xl font-medium text-gray-600 mb-2">Heading 4</h4>
              <h5 className="text-lg font-medium text-gray-600 mb-2">Heading 5</h5>
              <h6 className="text-base font-medium text-gray-600 mb-2">Heading 6</h6>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                This is a large paragraph with more emphasis. It demonstrates the text sizing and spacing system.
              </p>
              <p className="text-base text-gray-600">
                This is the default paragraph size. It provides good readability for most content.
              </p>
              <p className="text-sm text-gray-500">
                This is a small paragraph, useful for secondary information or captions.
              </p>
              <p className="text-xs text-gray-400">
                This is extra small text, typically used for labels or very fine print.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Spacing Scale</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>p-1:</span>
                    <span className="text-gray-600">0.25rem (4px)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>p-2:</span>
                    <span className="text-gray-600">0.5rem (8px)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>p-4:</span>
                    <span className="text-gray-600">1rem (16px)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>p-8:</span>
                    <span className="text-gray-600">2rem (32px)</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Margin Scale</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>m-1:</span>
                    <span className="text-gray-600">0.25rem (4px)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>m-2:</span>
                    <span className="text-gray-600">0.5rem (8px)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>m-4:</span>
                    <span className="text-gray-600">1rem (16px)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>m-8:</span>
                    <span className="text-gray-600">2rem (32px)</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Gap Scale</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>gap-1:</span>
                    <span className="text-gray-600">0.25rem (4px)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>gap-2:</span>
                    <span className="text-gray-600">0.5rem (8px)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>gap-4:</span>
                    <span className="text-gray-600">1rem (16px)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>gap-8:</span>
                    <span className="text-gray-600">2rem (32px)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

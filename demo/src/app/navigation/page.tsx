'use client';

import {
  Breadcrumbs,
  BreadcrumbsItem,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@saswat0602/ui-library';

export default function NavigationPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Navigation Components</h1>
        <p className="text-gray-600">Explore navigation and wayfinding components</p>
      </div>

      {/* Breadcrumbs */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Breadcrumbs</CardTitle>
          <CardDescription>Hierarchical navigation breadcrumbs</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label className="mb-2 block">Simple Breadcrumbs</Label>
            <Breadcrumbs>
              <BreadcrumbsItem href="/">Home</BreadcrumbsItem>
              <BreadcrumbsItem href="/components">Components</BreadcrumbsItem>
              <BreadcrumbsItem href="/components/navigation">Navigation</BreadcrumbsItem>
            </Breadcrumbs>
          </div>

          <div>
            <Label className="mb-2 block">Deep Navigation</Label>
            <Breadcrumbs>
              <BreadcrumbsItem href="/">Home</BreadcrumbsItem>
              <BreadcrumbsItem href="/dashboard">Dashboard</BreadcrumbsItem>
              <BreadcrumbsItem href="/dashboard/users">Users</BreadcrumbsItem>
              <BreadcrumbsItem href="/dashboard/users/profile">Profile</BreadcrumbsItem>
              <BreadcrumbsItem href="/dashboard/users/profile/settings">Settings</BreadcrumbsItem>
            </Breadcrumbs>
          </div>

          <div>
            <Label className="mb-2 block">E-commerce Example</Label>
            <Breadcrumbs>
              <BreadcrumbsItem href="/">Home</BreadcrumbsItem>
              <BreadcrumbsItem href="/electronics">Electronics</BreadcrumbsItem>
              <BreadcrumbsItem href="/electronics/computers">Computers</BreadcrumbsItem>
              <BreadcrumbsItem href="/electronics/computers/laptops">Laptops</BreadcrumbsItem>
            </Breadcrumbs>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Patterns */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Navigation Patterns</CardTitle>
          <CardDescription>Common navigation layouts and patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label className="mb-3 block">Primary Navigation</Label>
              <nav className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
                <Button variant="default" size="sm">Dashboard</Button>
                <Button variant="ghost" size="sm">Projects</Button>
                <Button variant="ghost" size="sm">Team</Button>
                <Button variant="ghost" size="sm">Settings</Button>
              </nav>
            </div>

            <div>
              <Label className="mb-3 block">Secondary Navigation</Label>
              <nav className="flex space-x-1 bg-gray-50 p-1 rounded-lg">
                <Button variant="ghost" size="sm">Overview</Button>
                <Button variant="ghost" size="sm">Analytics</Button>
                <Button variant="ghost" size="sm">Reports</Button>
                <Button variant="ghost" size="sm">Export</Button>
              </nav>
            </div>

            <div>
              <Label className="mb-3 block">Tab Navigation</Label>
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8">
                  <button className="border-b-2 border-blue-500 py-2 px-1 text-sm font-medium text-blue-600">
                    General
                  </button>
                  <button className="border-b-2 border-transparent py-2 px-1 text-sm font-medium text-gray-500 hover:text-gray-700">
                    Security
                  </button>
                  <button className="border-b-2 border-transparent py-2 px-1 text-sm font-medium text-gray-500 hover:text-gray-700">
                    Notifications
                  </button>
                </nav>
              </div>
            </div>

            <div>
              <Label className="mb-3 block">Pagination</Label>
              <nav className="flex items-center space-x-2">
                <Button variant="outline" size="sm">Previous</Button>
                <Button variant="outline" size="sm">1</Button>
                <Button size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">Next</Button>
              </nav>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Navigation */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Interactive Navigation</CardTitle>
          <CardDescription>Navigation with popovers and dropdowns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">User Menu</Button>
              </PopoverTrigger>
              <PopoverContent className="w-56">
                <div className="space-y-2">
                  <div className="px-3 py-2">
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-gray-500">john@example.com</p>
                  </div>
                  <div className="border-t border-gray-200 pt-2">
                    <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded">
                      Profile Settings
                    </button>
                    <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded">
                      Account Preferences
                    </button>
                    <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded text-red-600">
                      Sign Out
                    </button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Quick Actions</Button>
              </PopoverTrigger>
              <PopoverContent className="w-48">
                <div className="space-y-1">
                  <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded">
                    New Project
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded">
                    Import Data
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded">
                    Export Report
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded">
                    Share Dashboard
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle>Navigation Best Practices</CardTitle>
          <CardDescription>Guidelines for effective navigation design</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Consistency</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Use consistent navigation patterns</li>
                  <li>• Maintain visual hierarchy</li>
                  <li>• Follow established conventions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Accessibility</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Provide clear labels</li>
                  <li>• Support keyboard navigation</li>
                  <li>• Include ARIA attributes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">User Experience</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Minimize cognitive load</li>
                  <li>• Provide clear feedback</li>
                  <li>• Support user goals</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Mobile First</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Design for touch interfaces</li>
                  <li>• Consider screen constraints</li>
                  <li>• Optimize for thumb navigation</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

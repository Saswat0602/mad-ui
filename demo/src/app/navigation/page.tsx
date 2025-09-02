'use client';

import {
  Breadcrumbs,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Button,
} from 'mad-ui-components';

export default function NavigationPage() {
  const simpleBreadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Components', href: '/components' },
    { label: 'Navigation' },
  ];

  const deepBreadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Users', href: '/dashboard/users' },
    { label: 'Profile', href: '/dashboard/users/profile' },
    { label: 'Settings' },
  ];

  const ecommerceBreadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Electronics', href: '/electronics' },
    { label: 'Computers', href: '/electronics/computers' },
    { label: 'Laptops' },
  ];

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
            <label className="text-sm font-medium mb-2 block">Simple Breadcrumbs</label>
            <Breadcrumbs items={simpleBreadcrumbs} />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Deep Navigation</label>
            <Breadcrumbs items={deepBreadcrumbs} />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">E-commerce Example</label>
            <Breadcrumbs items={ecommerceBreadcrumbs} />
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
              <label className="text-sm font-medium mb-3 block">Primary Navigation</label>
              <nav className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
                <Button size="sm">Dashboard</Button>
                <Button variant="ghost" size="sm">Projects</Button>
                <Button variant="ghost" size="sm">Team</Button>
                <Button variant="ghost" size="sm">Settings</Button>
              </nav>
            </div>

            <div>
              <label className="text-sm font-medium mb-3 block">Secondary Navigation</label>
              <nav className="flex space-x-1 bg-gray-50 p-1 rounded-lg">
                <Button variant="ghost" size="sm">Overview</Button>
                <Button variant="ghost" size="sm">Analytics</Button>
                <Button variant="ghost" size="sm">Reports</Button>
                <Button variant="ghost" size="sm">Export</Button>
              </nav>
            </div>

            <div>
              <label className="text-sm font-medium mb-3 block">Tab Navigation</label>
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
              <label className="text-sm font-medium mb-3 block">Pagination</label>
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

'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  Alert,
  Button,
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
  Skeleton,
  Switch,
} from 'mad-ui-components';

const componentData = {
  alert: {
    name: 'Alert',
    description: 'Displays a callout for user attention',
    category: 'Feedback',
    examples: [
      {
        title: 'Default Alert',
        description: 'Basic alert with title and message',
        component: <Alert type="info" title="Information" message="This is an informational alert message." />
      },
      {
        title: 'Success Alert',
        description: 'Success alert for positive feedback',
        component: <Alert type="success" title="Success" message="Operation completed successfully!" />
      },
      {
        title: 'Warning Alert',
        description: 'Warning alert for caution',
        component: <Alert type="warning" title="Warning" message="Please review your input before proceeding." />
      },
      {
        title: 'Error Alert',
        description: 'Error alert for problems',
        component: <Alert type="error" title="Error" message="Something went wrong. Please try again." />
      }
    ],
    props: [
      { name: 'type', type: 'string', default: 'info', description: 'Alert type (info, success, warning, error)' },
      { name: 'title', type: 'string', default: '', description: 'Alert title' },
      { name: 'message', type: 'string', default: '', description: 'Alert message content' },
      { name: 'className', type: 'string', default: '', description: 'Additional CSS classes' }
    ]
  },
  button: {
    name: 'Button',
    description: 'Interactive button component with various styles',
    category: 'Input',
    examples: [
      {
        title: 'Button Variants',
        description: 'Different button styles',
        component: (
          <div className="flex flex-wrap gap-3">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="error">Error</Button>
          </div>
        )
      },
      {
        title: 'Button Sizes',
        description: 'Various button sizes',
        component: (
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </div>
        )
      },
      {
        title: 'Button States',
        description: 'Different button states',
        component: (
          <div className="flex flex-wrap gap-3">
            <Button>Normal</Button>
            <Button disabled>Disabled</Button>
            <Button loading>Loading</Button>
          </div>
        )
      }
    ],
    props: [
      { name: 'variant', type: 'string', default: 'primary', description: 'Button style variant' },
      { name: 'size', type: 'string', default: 'md', description: 'Button size (sm, md, lg, xl)' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Whether button is disabled' },
      { name: 'loading', type: 'boolean', default: 'false', description: 'Whether button shows loading state' }
    ]
  },
  input: {
    name: 'Input',
    description: 'Text input field for user data entry',
    category: 'Input',
    examples: [
      {
        title: 'Basic Input',
        description: 'Standard text input',
        component: <Input placeholder="Enter text here..." />
      },
      {
        title: 'Input with Label',
        description: 'Input with associated label',
        component: (
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
        )
      },
      {
        title: 'Input Types',
        description: 'Different input types',
        component: (
          <div className="space-y-3">
            <Input type="text" placeholder="Text input" />
            <Input type="email" placeholder="Email input" />
            <Input type="password" placeholder="Password input" />
            <Input type="number" placeholder="Number input" />
          </div>
        )
      }
    ],
    props: [
      { name: 'type', type: 'string', default: 'text', description: 'Input type (text, email, password, etc.)' },
      { name: 'placeholder', type: 'string', default: '', description: 'Placeholder text' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Whether input is disabled' },
      { name: 'className', type: 'string', default: '', description: 'Additional CSS classes' }
    ]
  },
  card: {
    name: 'Card',
    description: 'Container for organizing content and actions',
    category: 'Layout',
    examples: [
      {
        title: 'Basic Card',
        description: 'Simple card with content',
        component: (
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description goes here</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is the main content of the card.</p>
            </CardContent>
          </Card>
        )
      },
      {
        title: 'Card with Footer',
        description: 'Card with action buttons',
        component: (
          <Card>
            <CardHeader>
              <CardTitle>Card with Actions</CardTitle>
              <CardDescription>Card that includes footer actions</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Content with footer actions below.</p>
            </CardContent>
            <CardFooter>
              <Button>Action</Button>
            </CardFooter>
          </Card>
        )
      }
    ],
    props: [
      { name: 'className', type: 'string', default: '', description: 'Additional CSS classes' },
      { name: 'children', type: 'ReactNode', default: '', description: 'Card content' }
    ]
  },
  checkbox: {
    name: 'Checkbox',
    description: 'Checkbox input for boolean selection',
    category: 'Input',
    examples: [
      {
        title: 'Basic Checkbox',
        description: 'Simple checkbox input',
        component: (
          <div className="flex items-center space-x-2">
            <Checkbox id="checkbox1" />
            <Label htmlFor="checkbox1">Accept terms and conditions</Label>
          </div>
        )
      },
      {
        title: 'Checkbox Group',
        description: 'Multiple checkboxes',
        component: (
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="option1" />
              <Label htmlFor="option1">Option 1</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="option2" />
              <Label htmlFor="option2">Option 2</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="option3" />
              <Label htmlFor="option3">Option 3</Label>
            </div>
          </div>
        )
      }
    ],
    props: [
      { name: 'id', type: 'string', default: '', description: 'Unique identifier for the checkbox' },
      { name: 'checked', type: 'boolean', default: 'false', description: 'Whether checkbox is checked' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Whether checkbox is disabled' },
      { name: 'onChange', type: 'function', default: '', description: 'Change event handler' }
    ]
  },
  switch: {
    name: 'Switch',
    description: 'Toggle switch for binary states',
    category: 'Input',
    examples: [
      {
        title: 'Basic Switch',
        description: 'Simple toggle switch',
        component: (
          <div className="flex items-center space-x-2">
            <Switch id="switch1" />
            <Label htmlFor="switch1">Enable notifications</Label>
          </div>
        )
      },
      {
        title: 'Switch States',
        description: 'Different switch states',
        component: (
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Switch id="switch2" />
              <Label htmlFor="switch2">Normal</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="switch3" disabled />
              <Label htmlFor="switch3">Disabled</Label>
            </div>
          </div>
        )
      }
    ],
    props: [
      { name: 'id', type: 'string', default: '', description: 'Unique identifier for the switch' },
      { name: 'checked', type: 'boolean', default: 'false', description: 'Whether switch is checked' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Whether switch is disabled' },
      { name: 'onChange', type: 'function', default: '', description: 'Change event handler' }
    ]
  },
  radio: {
    name: 'Radio',
    description: 'Radio button for single selection',
    category: 'Input',
    examples: [
      {
        title: 'Radio Group',
        description: 'Group of radio buttons',
        component: (
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Radio value="option1" id="radio1" name="radio-group" />
              <Label htmlFor="radio1">Option 1</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Radio value="option2" id="radio2" name="radio-group" />
              <Label htmlFor="radio2">Option 2</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Radio value="option3" id="radio3" name="radio-group" />
              <Label htmlFor="radio3">Option 3</Label>
            </div>
          </div>
        )
      }
    ],
    props: [
      { name: 'value', type: 'string', default: '', description: 'Value of the radio button' },
      { name: 'id', type: 'string', default: '', description: 'Unique identifier' },
      { name: 'name', type: 'string', default: '', description: 'Name for the radio group' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Whether radio is disabled' }
    ]
  },
  rating: {
    name: 'Rating',
    description: 'Star rating component',
    category: 'Feedback',
    examples: [
      {
        title: 'Basic Rating',
        description: 'Simple star rating',
        component: <Rating value={3} />
      },
      {
        title: 'Interactive Rating',
        description: 'Rating with change handler',
        component: <Rating value={4} onChange={(value) => console.log(value)} />
      },
      {
        title: 'Read-only Rating',
        description: 'Display-only rating',
        component: <Rating value={5} readOnly />
      }
    ],
    props: [
      { name: 'value', type: 'number', default: '0', description: 'Current rating value' },
      { name: 'max', type: 'number', default: '5', description: 'Maximum rating value' },
      { name: 'onChange', type: 'function', default: '', description: 'Change event handler' },
      { name: 'readOnly', type: 'boolean', default: 'false', description: 'Whether rating is read-only' }
    ]
  },
  progress: {
    name: 'Progress',
    description: 'Progress bar for loading states',
    category: 'Feedback',
    examples: [
      {
        title: 'Basic Progress',
        description: 'Simple progress bar',
        component: <Progress value={65} />
      },
      {
        title: 'Progress with Label',
        description: 'Progress with percentage',
        component: (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>65%</span>
            </div>
            <Progress value={65} />
          </div>
        )
      },
      {
        title: 'Indeterminate Progress',
        description: 'Loading progress bar',
        component: <Progress value={0} />
      }
    ],
    props: [
      { name: 'value', type: 'number', default: '0', description: 'Current progress value (0-100)' },
      { name: 'max', type: 'number', default: '100', description: 'Maximum progress value' },
      { name: 'className', type: 'string', default: '', description: 'Additional CSS classes' }
    ]
  },
  skeleton: {
    name: 'Skeleton',
    description: 'Loading placeholder component',
    category: 'Feedback',
    examples: [
      {
        title: 'Basic Skeleton',
        description: 'Simple loading placeholder',
        component: <Skeleton className="h-4 w-[250px]" />
      },
      {
        title: 'Skeleton Group',
        description: 'Multiple skeleton elements',
        component: (
          <div className="space-y-3">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[300px]" />
          </div>
        )
      },
      {
        title: 'Avatar Skeleton',
        description: 'Skeleton for avatar and text',
        component: (
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        )
      }
    ],
    props: [
      { name: 'className', type: 'string', default: '', description: 'Additional CSS classes' },
      { name: 'children', type: 'ReactNode', default: '', description: 'Skeleton content' }
    ]
  }
};

export default function ComponentPage() {
  const params = useParams();
  const componentName = params.component as string;
  const component = componentData[componentName as keyof typeof componentData];

  if (!component) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Component Not Found</h1>
            <p className="text-slate-300 mb-8">The component you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/">
              <Button>Back to Components</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-slate-400 hover:text-white transition-colors">
              ← Back to Components
            </Link>
            <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
            <span className="text-slate-400">{component.category}</span>
            <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
            <span className="text-white font-semibold">{component.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Component Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">{component.name}</h1>
          <p className="text-xl text-slate-300 max-w-3xl">{component.description}</p>
        </div>

        {/* Examples */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Examples</h2>
          <div className="space-y-12">
            {component.examples.map((example, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{example.title}</h3>
                <p className="text-slate-400 mb-6">{example.description}</p>
                <div className="bg-slate-900 border border-slate-700 rounded-lg p-6">
                  {example.component}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Props */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Props</h2>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-700/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Default</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {component.props.map((prop, index) => (
                  <tr key={index} className="hover:bg-slate-700/30">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{prop.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-purple-400">{prop.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">{prop.default}</td>
                    <td className="px-6 py-4 text-sm text-slate-300">{prop.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Usage */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Usage</h2>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4">
              <code className="text-slate-300 text-sm">
                {`import { ${component.name} } from 'mad-ui-components';

// Basic usage
<${component.name} />

// With props
<${component.name} 
  // Add your props here
/>`}
              </code>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-slate-800">
          <Link href="/" className="text-slate-400 hover:text-white transition-colors">
            ← Back to Components
          </Link>
          <div className="text-slate-400 text-sm">
            Component: {component.name}
          </div>
        </div>
      </div>
    </div>
  );
}

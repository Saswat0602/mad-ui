import Link from "next/link"
import { Button } from "mad-ui-components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "mad-ui-components/card"
import { Badge } from "mad-ui-components/badge"
import { Input } from "mad-ui-components/input"
import { Label } from "mad-ui-components/label"
import { Checkbox } from "mad-ui-components/checkbox"
import { RadioGroup, RadioGroupItem } from "mad-ui-components/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "mad-ui-components/select"
import { Textarea } from "mad-ui-components/textarea"
import { Switch } from "mad-ui-components/switch"
import { Slider } from "mad-ui-components/slider"
import { Progress } from "mad-ui-components/progress"
import { Rating } from "mad-ui-components/rating"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "mad-ui-components/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "mad-ui-components/accordion"
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Clock,
  Star,
  Settings,
  Bell,
  Shield,
  Palette
} from "lucide-react"

export default function ExamplesPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Examples</h1>
        <p className="text-xl text-muted-foreground">
          Real-world examples and use cases for Mad UI components.
        </p>
      </div>

      <div className="space-y-12">
        {/* User Profile Form */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">User Profile Form</h2>
          <Card className="max-w-2xl">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                A complete form example using various Mad UI components
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter last name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter email address" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="Enter phone number" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea id="address" placeholder="Enter your address" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Enter city" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-3">
                <Label>Preferences</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" />
                    <Label htmlFor="newsletter">Subscribe to newsletter</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="notifications" />
                    <Label htmlFor="notifications">Enable notifications</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="marketing" />
                    <Label htmlFor="marketing">Receive marketing emails</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Label>Theme Preference</Label>
                <RadioGroup defaultValue="light">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="light" id="light" />
                    <Label htmlFor="light">Light</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="dark" id="dark" />
                    <Label htmlFor="dark">Dark</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="system" id="system" />
                    <Label htmlFor="system">System</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label>Notification Volume</Label>
                <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Quiet</span>
                  <span>Loud</span>
                </div>
              </div>

              <div className="space-y-3">
                <Label>Profile Completion</Label>
                <Progress value={75} className="w-full" />
                <p className="text-sm text-muted-foreground">75% complete</p>
              </div>

              <div className="space-y-3">
                <Label>Rate your experience</Label>
                <Rating defaultValue={4} />
              </div>

              <div className="flex gap-3">
                <Button>Save Changes</Button>
                <Button variant="outline">Cancel</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Settings Panel */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Settings Panel</h2>
          <Card className="max-w-4xl">
            <CardHeader>
              <CardTitle>Application Settings</CardTitle>
              <CardDescription>
                A comprehensive settings interface using tabs and form components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="appearance">Appearance</TabsTrigger>
                  <TabsTrigger value="notifications">Notifications</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                </TabsList>

                <TabsContent value="general" className="space-y-4 mt-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Auto-save</Label>
                        <p className="text-sm text-muted-foreground">
                          Automatically save your work every few minutes
                        </p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Offline mode</Label>
                        <p className="text-sm text-muted-foreground">
                          Allow working without internet connection
                        </p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Analytics</Label>
                        <p className="text-sm text-muted-foreground">
                          Help improve the app by sending usage data
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="appearance" className="space-y-4 mt-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Theme</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="auto">Auto</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Font Size</Label>
                      <Slider defaultValue={[16]} min={12} max={24} step={1} className="w-full" />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Small</span>
                        <span>Large</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Color Scheme</Label>
                      <div className="grid grid-cols-3 gap-2">
                        <Button variant="outline" size="sm" className="h-12">Blue</Button>
                        <Button variant="outline" size="sm" className="h-12">Green</Button>
                        <Button variant="outline" size="sm" className="h-12">Purple</Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="notifications" className="space-y-4 mt-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Email notifications</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications via email
                        </p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Push notifications</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive push notifications
                        </p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Sound alerts</Label>
                        <p className="text-sm text-muted-foreground">
                          Play sound for notifications
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="security" className="space-y-4 mt-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Two-factor authentication</Label>
                        <p className="text-sm text-muted-foreground">
                          Add an extra layer of security
                        </p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Biometric login</Label>
                        <p className="text-sm text-muted-foreground">
                          Use fingerprint or face ID
                        </p>
                      </div>
                      <Switch />
                    </div>
                    <div className="space-y-2">
                      <Label>Session timeout</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeout" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="15">15 minutes</SelectItem>
                          <SelectItem value="30">30 minutes</SelectItem>
                          <SelectItem value="60">1 hour</SelectItem>
                          <SelectItem value="never">Never</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <Card className="max-w-3xl">
            <CardHeader>
              <CardTitle>Common Questions</CardTitle>
              <CardDescription>
                An accordion-style FAQ section using the Accordion component
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I install Mad UI components?</AccordionTrigger>
                  <AccordionContent>
                    You can install Mad UI components using npm, yarn, or pnpm. Run <code>npm install mad-ui-components</code> in your project directory.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Can I customize the components?</AccordionTrigger>
                  <AccordionContent>
                    Yes! You can either import components and override styles with Tailwind classes, or copy them to your project for full customization control.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What's the difference between importing and copying?</AccordionTrigger>
                  <AccordionContent>
                    Importing gives you smaller bundle sizes but limited customization. Copying gives you full control but requires managing the code yourself.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Do I need Tailwind CSS?</AccordionTrigger>
                  <AccordionContent>
                    Yes, Mad UI components are built with Tailwind CSS and require it to function properly. Make sure to configure Tailwind in your project.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>How do I get help or report issues?</AccordionTrigger>
                  <AccordionContent>
                    You can report issues on our GitHub repository or reach out to our support team. We're always happy to help!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Ready to build amazing UIs?</CardTitle>
              <CardDescription>
                Start using Mad UI components in your next project today.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg">
                  <Link href="/docs/getting-started">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/docs/components">Browse Components</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Join thousands of developers building better interfaces with Mad UI
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}


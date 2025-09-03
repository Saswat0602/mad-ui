"use client"

import React, { useState } from 'react'
import { Checkbox } from 'mad-ui-components/checkbox'
import { Label } from 'mad-ui-components/label'
import { Button } from 'mad-ui-components/button'
import { Card, CardContent, CardHeader, CardTitle } from 'mad-ui-components/card'
import { ComponentDocLayout, LivePreview, CopyCodeBlock } from '@/components/component-doc-layout'
import { 
  Check,
  Star,
  Heart,
  Settings,
  Mail,
  Bell,
  Lock
} from 'lucide-react'

export default function CheckboxDocPage() {
  const [basicChecked, setBasicChecked] = useState(false)
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: false
  })
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['analytics'])

  const handleFeatureChange = (feature: string, checked: boolean) => {
    if (checked) {
      setSelectedFeatures([...selectedFeatures, feature])
    } else {
      setSelectedFeatures(selectedFeatures.filter(f => f !== feature))
    }
  }

  const checkboxExamples = (
    <div className="space-y-8">
      {/* Basic Checkbox */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Checkbox</h3>
        <LivePreview title="Basic Checkbox Usage">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="basic-checkbox"
                checked={basicChecked}
                onChange={(e) => setBasicChecked(e.target.checked)}
              />
              <Label htmlFor="basic-checkbox">Basic checkbox</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="checked-checkbox" defaultChecked />
              <Label htmlFor="checked-checkbox">Checked by default</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="disabled-checkbox" disabled />
              <Label htmlFor="disabled-checkbox" className="text-muted-foreground">Disabled checkbox</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="disabled-checked-checkbox" defaultChecked disabled />
              <Label htmlFor="disabled-checked-checkbox" className="text-muted-foreground">Disabled and checked</Label>
            </div>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="basic-checkbox.tsx"
          code={`const [checked, setChecked] = useState(false)

<div className="flex items-center space-x-2">
  <Checkbox 
    id="basic-checkbox"
    checked={checked}
    onChange={(e) => setChecked(e.target.checked)}
  />
  <Label htmlFor="basic-checkbox">Basic checkbox</Label>
</div>

<div className="flex items-center space-x-2">
  <Checkbox id="checked-checkbox" defaultChecked />
  <Label htmlFor="checked-checkbox">Checked by default</Label>
</div>

<div className="flex items-center space-x-2">
  <Checkbox id="disabled-checkbox" disabled />
  <Label htmlFor="disabled-checkbox">Disabled checkbox</Label>
</div>`}
        />
      </div>

      {/* Checkbox Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <LivePreview title="Checkbox Sizes">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="small-checkbox" size="sm" defaultChecked />
              <Label htmlFor="small-checkbox">Small checkbox</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="medium-checkbox" size="md" defaultChecked />
              <Label htmlFor="medium-checkbox">Medium checkbox (default)</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="large-checkbox" size="lg" defaultChecked />
              <Label htmlFor="large-checkbox">Large checkbox</Label>
            </div>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="checkbox-sizes.tsx"
          code={`<Checkbox id="small-checkbox" size="sm" defaultChecked />
<Checkbox id="medium-checkbox" size="md" defaultChecked />
<Checkbox id="large-checkbox" size="lg" defaultChecked />`}
        />
      </div>

      {/* Checkbox with Icons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">With Icons</h3>
        <LivePreview title="Checkbox with Icons">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="icon-left-checkbox" 
                leftIcon={<Star className="h-3 w-3" />}
                defaultChecked 
              />
              <Label htmlFor="icon-left-checkbox">Favorite this item</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="icon-right-checkbox" 
                rightIcon={<Heart className="h-3 w-3" />}
                defaultChecked 
              />
              <Label htmlFor="icon-right-checkbox">Add to wishlist</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="icon-both-checkbox" 
                leftIcon={<Settings className="h-3 w-3" />}
                rightIcon={<Check className="h-3 w-3" />}
                defaultChecked 
              />
              <Label htmlFor="icon-both-checkbox">Configure settings</Label>
            </div>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="checkbox-with-icons.tsx"
          code={`import { Star, Heart, Settings, Check } from 'lucide-react'

<Checkbox 
  id="icon-left-checkbox" 
  leftIcon={<Star className="h-3 w-3" />}
  defaultChecked 
/>

<Checkbox 
  id="icon-right-checkbox" 
  rightIcon={<Heart className="h-3 w-3" />}
  defaultChecked 
/>

<Checkbox 
  id="icon-both-checkbox" 
  leftIcon={<Settings className="h-3 w-3" />}
  rightIcon={<Check className="h-3 w-3" />}
  defaultChecked 
/>`}
        />
      </div>

      {/* Checkbox States */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">States</h3>
        <LivePreview title="Checkbox States">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="default-state" />
                <Label htmlFor="default-state">Default state</Label>
              </div>
              <p className="text-xs text-muted-foreground ml-6">Normal checkbox state</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="success-state" success defaultChecked />
                <Label htmlFor="success-state">Success state</Label>
              </div>
              <p className="text-xs text-success ml-6">Valid selection</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="error-state" error="This field is required" />
                <Label htmlFor="error-state">Error state</Label>
              </div>
              <p className="text-xs text-destructive ml-6">This field is required</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="indeterminate-state" 
                  indeterminate 
                />
                <Label htmlFor="indeterminate-state">Indeterminate state</Label>
              </div>
              <p className="text-xs text-muted-foreground ml-6">Partially selected</p>
            </div>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="checkbox-states.tsx"
          code={`// Default state
<Checkbox id="default-state" />

// Success state
<Checkbox id="success-state" success defaultChecked />

// Error state  
<Checkbox id="error-state" error="This field is required" />

// Indeterminate state
<Checkbox id="indeterminate-state" indeterminate />`}
        />
      </div>

      {/* Form Examples */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Form Examples</h3>
        <LivePreview title="Real-world Form Usage">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Terms Agreement */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sign Up</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <input 
                    id="email"
                    type="email" 
                    placeholder="your@email.com"
                    className="w-full px-3 py-2 border border-input rounded-md"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <input 
                    id="password"
                    type="password" 
                    placeholder="••••••••"
                    className="w-full px-3 py-2 border border-input rounded-md"
                  />
                </div>
                
                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="terms"
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                    className="mt-1"
                  />
                  <Label htmlFor="terms" className="text-sm leading-relaxed">
                    I agree to the{" "}
                    <a href="#" className="text-primary underline">Terms of Service</a>{" "}
                    and{" "}
                    <a href="#" className="text-primary underline">Privacy Policy</a>
                  </Label>
                </div>
                
                <Button className="w-full" disabled={!agreeToTerms}>
                  Create Account
                </Button>
              </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Notification Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <Label htmlFor="email-notifications">Email Notifications</Label>
                        <p className="text-xs text-muted-foreground">Receive updates via email</p>
                      </div>
                    </div>
                    <Checkbox 
                      id="email-notifications"
                      checked={notifications.email}
                      onChange={(e) => setNotifications(prev => ({
                        ...prev,
                        email: e.target.checked
                      }))}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Bell className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <Label htmlFor="push-notifications">Push Notifications</Label>
                        <p className="text-xs text-muted-foreground">Receive push notifications</p>
                      </div>
                    </div>
                    <Checkbox 
                      id="push-notifications"
                      checked={notifications.push}
                      onChange={(e) => setNotifications(prev => ({
                        ...prev,
                        push: e.target.checked
                      }))}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Lock className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <Label htmlFor="sms-notifications">SMS Notifications</Label>
                        <p className="text-xs text-muted-foreground">Receive text messages</p>
                      </div>
                    </div>
                    <Checkbox 
                      id="sms-notifications"
                      checked={notifications.sms}
                      onChange={(e) => setNotifications(prev => ({
                        ...prev,
                        sms: e.target.checked
                      }))}
                    />
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <Button className="w-full">Save Settings</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="form-checkbox.tsx"
          code={`const [agreeToTerms, setAgreeToTerms] = useState(false)

<div className="flex items-start space-x-2">
  <Checkbox 
    id="terms"
    checked={agreeToTerms}
    onChange={(e) => setAgreeToTerms(e.target.checked)}
    className="mt-1"
  />
  <Label htmlFor="terms" className="text-sm leading-relaxed">
    I agree to the{" "}
    <a href="#" className="text-primary underline">Terms of Service</a>{" "}
    and{" "}
    <a href="#" className="text-primary underline">Privacy Policy</a>
  </Label>
</div>

<Button className="w-full" disabled={!agreeToTerms}>
  Create Account
</Button>`}
        />
      </div>

      {/* Checkbox Groups */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Checkbox Groups</h3>
        <LivePreview title="Checkbox Groups and Lists">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Select Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { id: 'analytics', label: 'Analytics Dashboard', description: 'Track your app usage and performance' },
                    { id: 'notifications', label: 'Real-time Notifications', description: 'Get instant updates and alerts' },
                    { id: 'collaboration', label: 'Team Collaboration', description: 'Work together with your team' },
                    { id: 'api', label: 'API Access', description: 'Integrate with external services' },
                    { id: 'support', label: 'Priority Support', description: '24/7 dedicated customer support' }
                  ].map((feature) => (
                    <div key={feature.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <Checkbox 
                        id={feature.id}
                        checked={selectedFeatures.includes(feature.id)}
                        onChange={(e) => handleFeatureChange(feature.id, e.target.checked)}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <Label htmlFor={feature.id} className="font-medium cursor-pointer">
                          {feature.label}
                        </Label>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-3 bg-muted rounded-lg">
                  <p className="text-sm font-medium">Selected features: {selectedFeatures.length}</p>
                  <p className="text-xs text-muted-foreground">
                    {selectedFeatures.length > 0 
                      ? selectedFeatures.join(', ') 
                      : 'No features selected'
                    }
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="checkbox-group.tsx"
          code={`const [selectedFeatures, setSelectedFeatures] = useState(['analytics'])

const handleFeatureChange = (feature: string, checked: boolean) => {
  if (checked) {
    setSelectedFeatures([...selectedFeatures, feature])
  } else {
    setSelectedFeatures(selectedFeatures.filter(f => f !== feature))
  }
}

{features.map((feature) => (
  <div key={feature.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
    <Checkbox 
      id={feature.id}
      checked={selectedFeatures.includes(feature.id)}
      onChange={(e) => handleFeatureChange(feature.id, e.target.checked)}
      className="mt-1"
    />
    <div className="flex-1">
      <Label htmlFor={feature.id} className="font-medium cursor-pointer">
        {feature.label}
      </Label>
      <p className="text-sm text-muted-foreground">{feature.description}</p>
    </div>
  </div>
))}`}
        />
      </div>
    </div>
  )

  return (
    <ComponentDocLayout
      name="Checkbox"
      description="A checkbox component for binary choices and selections. Supports various states, sizes, and styling options with full accessibility."
      category="core"
      complexity="Simple"
    >
      {checkboxExamples}
    </ComponentDocLayout>
  )
}

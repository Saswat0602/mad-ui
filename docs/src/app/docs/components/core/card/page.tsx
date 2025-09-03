"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from 'mad-ui-components/card'
import { Button } from 'mad-ui-components/button'
import { Badge } from 'mad-ui-components/badge'
import { Avatar } from 'mad-ui-components/avatar'
import { ComponentDocLayout, LivePreview, CopyCodeBlock } from '@/components/component-doc-layout'
import { 
  Heart,
  Share,
  MoreHorizontal,
  Calendar,
  MapPin,
  Star,
  Users,
  Download,
  Eye,
  MessageCircle,
  ThumbsUp
} from 'lucide-react'

export default function CardDocPage() {
  const cardExamples = (
    <div className="space-y-8">
      {/* Basic Card */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Card</h3>
        <LivePreview title="Simple Card Structure">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>
                  This is a simple card description that explains what this card is about.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>This is the main content area of the card where you can put any content you want.</p>
              </CardContent>
              <CardFooter>
                <Button>Action</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Minimal Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p>A card with just title and content, no description or footer.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p>Content only card without header or footer sections.</p>
              </CardContent>
            </Card>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="basic-card.tsx"
          code={`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>
      This is a simple card description that explains what this card is about.
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p>This is the main content area of the card where you can put any content you want.</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`}
        />
      </div>

      {/* Product Cards */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Product Cards</h3>
        <LivePreview title="E-commerce Product Cards">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden hover-lift">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 relative">
                <div className="absolute top-3 left-3">
                  <Badge variant="success">New</Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <Button variant="ghost" size="sm" className="rounded-full h-8 w-8 p-0">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-3 w-3 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">(124)</span>
                </div>
                <h3 className="font-semibold mb-1">Premium Headphones</h3>
                <p className="text-sm text-muted-foreground mb-3">Wireless noise-cancelling headphones with premium audio quality</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">$299</span>
                    <span className="text-sm text-muted-foreground line-through">$399</span>
                  </div>
                  <Badge variant="outline">25% off</Badge>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full">Add to Cart</Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden hover-lift">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-100 relative">
                <div className="absolute top-3 right-3">
                  <Button variant="ghost" size="sm" className="rounded-full h-8 w-8 p-0">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-3 w-3 ${i < 5 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">(89)</span>
                </div>
                <h3 className="font-semibold mb-1">Organic Coffee Beans</h3>
                <p className="text-sm text-muted-foreground mb-3">Premium single-origin coffee beans, ethically sourced</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">$24.99</span>
                  <Badge variant="outline">Organic</Badge>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full" variant="outline">Add to Cart</Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden hover-lift">
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 relative">
                <div className="absolute top-3 left-3">
                  <Badge variant="error">Sale</Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <Button variant="ghost" size="sm" className="rounded-full h-8 w-8 p-0">
                    <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-3 w-3 ${i < 3 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">(45)</span>
                </div>
                <h3 className="font-semibold mb-1">Vintage Watch</h3>
                <p className="text-sm text-muted-foreground mb-3">Classic design with modern functionality</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">$199</span>
                    <span className="text-sm text-muted-foreground line-through">$299</span>
                  </div>
                  <Badge variant="outline">33% off</Badge>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full">Add to Cart</Button>
              </CardFooter>
            </Card>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="product-card.tsx"
          code={`<Card className="overflow-hidden hover-lift">
  <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 relative">
    <div className="absolute top-3 left-3">
      <Badge variant="success">New</Badge>
    </div>
    <div className="absolute top-3 right-3">
      <Button variant="ghost" size="sm" className="rounded-full h-8 w-8 p-0">
        <Heart className="h-4 w-4" />
      </Button>
    </div>
  </div>
  <CardContent className="p-4">
    <div className="flex items-center gap-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={\`h-3 w-3 \${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}\`} />
      ))}
      <span className="text-xs text-muted-foreground ml-1">(124)</span>
    </div>
    <h3 className="font-semibold mb-1">Premium Headphones</h3>
    <p className="text-sm text-muted-foreground mb-3">
      Wireless noise-cancelling headphones with premium audio quality
    </p>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold">$299</span>
        <span className="text-sm text-muted-foreground line-through">$399</span>
      </div>
      <Badge variant="outline">25% off</Badge>
    </div>
  </CardContent>
  <CardFooter className="p-4 pt-0">
    <Button className="w-full">Add to Cart</Button>
  </CardFooter>
</Card>`}
        />
      </div>

      {/* User Profile Cards */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">User Profile Cards</h3>
        <LivePreview title="Profile and User Cards">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover-lift">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-20 w-20 mb-4">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-full w-full flex items-center justify-center text-white text-xl font-bold">
                      JD
                    </div>
                  </Avatar>
                  <h3 className="font-semibold mb-1">John Doe</h3>
                  <p className="text-sm text-muted-foreground mb-4">Software Engineer</p>
                  <div className="flex gap-2 mb-4">
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">Node.js</Badge>
                  </div>
                  <div className="flex gap-2 w-full">
                    <Button variant="outline" size="sm" className="flex-1">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                    <Button size="sm" className="flex-1">
                      <Users className="h-4 w-4 mr-2" />
                      Connect
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader className="text-center">
                <Avatar className="h-16 w-16 mx-auto mb-2">
                  <div className="bg-gradient-to-br from-green-500 to-teal-600 h-full w-full flex items-center justify-center text-white text-lg font-bold">
                    SA
                  </div>
                </Avatar>
                <CardTitle className="text-lg">Sarah Anderson</CardTitle>
                <CardDescription>UX Designer • 5 years experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    San Francisco
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    Joined 2019
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="font-bold">12K</div>
                    <div className="text-xs text-muted-foreground">Followers</div>
                  </div>
                  <div>
                    <div className="font-bold">1.2K</div>
                    <div className="text-xs text-muted-foreground">Following</div>
                  </div>
                  <div>
                    <div className="font-bold">89</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View Profile</Button>
              </CardFooter>
            </Card>

            <Card className="hover-lift">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-3">
                      <Avatar className="h-10 w-10">
                        <div className="bg-gradient-to-br from-orange-500 to-red-600 h-full w-full flex items-center justify-center text-white text-sm font-bold">
                          MJ
                        </div>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">Mike Johnson</h4>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <p className="text-sm">
                    Just shipped a new feature! Really excited about the improved user experience. 
                    The team did an amazing job on this one. 🚀
                  </p>
                  
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-gray-500 text-sm">Feature Preview</div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex gap-4">
                      <Button variant="ghost" size="sm" className="h-auto p-0 text-muted-foreground hover:text-foreground">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        24
                      </Button>
                      <Button variant="ghost" size="sm" className="h-auto p-0 text-muted-foreground hover:text-foreground">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        8
                      </Button>
                      <Button variant="ghost" size="sm" className="h-auto p-0 text-muted-foreground hover:text-foreground">
                        <Share className="h-4 w-4 mr-1" />
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="profile-card.tsx"
          code={`<Card className="hover-lift">
  <CardContent className="pt-6">
    <div className="flex flex-col items-center text-center">
      <Avatar className="h-20 w-20 mb-4">
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-full w-full flex items-center justify-center text-white text-xl font-bold">
          JD
        </div>
      </Avatar>
      <h3 className="font-semibold mb-1">John Doe</h3>
      <p className="text-sm text-muted-foreground mb-4">Software Engineer</p>
      <div className="flex gap-2 mb-4">
        <Badge variant="outline">React</Badge>
        <Badge variant="outline">TypeScript</Badge>
        <Badge variant="outline">Node.js</Badge>
      </div>
      <div className="flex gap-2 w-full">
        <Button variant="outline" size="sm" className="flex-1">
          <MessageCircle className="h-4 w-4 mr-2" />
          Message
        </Button>
        <Button size="sm" className="flex-1">
          <Users className="h-4 w-4 mr-2" />
          Connect
        </Button>
      </div>
    </div>
  </CardContent>
</Card>`}
        />
      </div>

      {/* Analytics Cards */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Analytics & Stats Cards</h3>
        <LivePreview title="Dashboard Analytics Cards">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                    <p className="text-2xl font-bold">12,493</p>
                  </div>
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Badge variant="success" className="text-xs">+12%</Badge>
                  <span className="text-xs text-muted-foreground">from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Downloads</p>
                    <p className="text-2xl font-bold">45,231</p>
                  </div>
                  <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Download className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Badge variant="success" className="text-xs">+24%</Badge>
                  <span className="text-xs text-muted-foreground">from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Page Views</p>
                    <p className="text-2xl font-bold">1,234K</p>
                  </div>
                  <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Eye className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Badge variant="warning" className="text-xs">-5%</Badge>
                  <span className="text-xs text-muted-foreground">from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Revenue</p>
                    <p className="text-2xl font-bold">$89,432</p>
                  </div>
                  <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-orange-600">$</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Badge variant="success" className="text-xs">+18%</Badge>
                  <span className="text-xs text-muted-foreground">from last month</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="analytics-card.tsx"
          code={`<Card>
  <CardContent className="p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-muted-foreground">Total Users</p>
        <p className="text-2xl font-bold">12,493</p>
      </div>
      <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
        <Users className="h-6 w-6 text-blue-600" />
      </div>
    </div>
    <div className="mt-4 flex items-center gap-2">
      <Badge variant="success" className="text-xs">+12%</Badge>
      <span className="text-xs text-muted-foreground">from last month</span>
    </div>
  </CardContent>
</Card>`}
        />
      </div>
    </div>
  )

  return (
    <ComponentDocLayout
      name="Card"
      description="A flexible card component for displaying content in a contained layout. Perfect for showcasing products, profiles, analytics, and more."
      category="core"
      complexity="Simple"
    >
      {cardExamples}
    </ComponentDocLayout>
  )
}

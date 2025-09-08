import React from 'react'
import { Badge, Avatar, AspectRatio, Carousel, TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyH5, TypographyH6, TypographyP, TypographyBlockquote, TypographyCode, TypographyLead, TypographyLarge, TypographySmall, TypographyMuted } from 'mad-ui-components'

export interface ComponentExample {
  title: string
  description?: string
  code: string
  preview: React.ReactNode
}

export const mediaExamples: Record<string, ComponentExample[]> = {
  badge: [
    {
      title: 'Basic Badge',
      description: 'A simple badge component',
      code: `import { Badge } from 'mad-ui-components'

export function BadgeExample() {
  return <Badge>Badge</Badge>
}`,
      preview: <Badge>Badge</Badge>
    },
    {
      title: 'Badge Variants',
      description: 'Different badge variants',
      code: `import { Badge } from 'mad-ui-components'

export function BadgeVariants() {
  return (
    <div className="flex gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  )
}`,
      preview: (
        <div className="flex gap-2">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      )
    }
  ],

  avatar: [
    {
      title: 'Basic Avatar',
      description: 'A simple avatar component',
      code: `import { Avatar } from 'mad-ui-components'

export function AvatarExample() {
  return <Avatar />
}`,
      preview: <Avatar />
    },
    {
      title: 'Avatar with Image',
      description: 'Avatar with a profile image',
      code: `import { Avatar } from 'mad-ui-components'

export function AvatarWithImage() {
  return <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" alt="User" />
}`,
      preview: (
        <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" alt="User" />
      )
    }
  ],

  'aspect-ratio': [
    {
      title: 'Basic Aspect Ratio',
      description: 'A simple aspect ratio component',
      code: `import { AspectRatio } from 'mad-ui-components'

export function AspectRatioExample() {
  return (
    <AspectRatio ratio={16/9}>
      <img 
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&h=600&fit=crop" 
        alt="Landscape" 
        className="rounded-md object-cover"
      />
    </AspectRatio>
  )
}`,
      preview: (
        <div className="w-full max-w-md">
          <AspectRatio ratio={16/9}>
            <img 
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&h=600&fit=crop" 
              alt="Landscape" 
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </div>
      )
    }
  ],

  carousel: [
    {
      title: 'Basic Carousel',
      description: 'A simple carousel component',
      code: `import { Carousel } from 'mad-ui-components'

export function CarouselExample() {
  return (
    <Carousel>
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
    </Carousel>
  )
}`,
      preview: (
        <div className="w-full max-w-md">
          <Carousel>
            <div>Slide 1</div>
            <div>Slide 2</div>
            <div>Slide 3</div>
          </Carousel>
        </div>
      )
    },
    {
      title: 'Enterprise Features',
      description: 'Carousel with autoplay, analytics, and accessibility features',
      code: `import { Carousel } from 'mad-ui-components'

export function EnterpriseCarousel() {
  const items = [
    {
      id: 'slide-1',
      image: '/api/placeholder/400/300',
      title: 'Welcome to Our Platform',
      description: 'Discover amazing features and capabilities'
    },
    {
      id: 'slide-2',
      image: '/api/placeholder/400/300',
      title: 'Advanced Analytics',
      description: 'Get insights with our powerful analytics tools'
    },
    {
      id: 'slide-3',
      image: '/api/placeholder/400/300',
      title: 'Enterprise Security',
      description: 'Bank-grade security for your data and applications'
    }
  ]

  return (
    <Carousel
      items={items}
      autoplay={true}
      autoplayInterval={4000}
      loop={true}
      showDots={true}
      showArrows={true}
      orientation="horizontal"
      analyticsId="hero-carousel"
      analyticsEvent="carousel_interaction"
      analyticsData={{ section: 'hero' }}
      ariaLabel="Hero carousel with platform features"
      dataTestId="hero-carousel"
      onSlideChange={(index) => console.log('Slide changed to:', index)}
      onAnalytics={(event, data) => {
        console.log('Carousel analytics:', event, data)
      }}
    />
  )
}`,
      preview: (
        <div className="w-full max-w-md">
          <Carousel
            analyticsId="hero-carousel"
            analyticsEvent="carousel_interaction"
            analyticsData={{ section: 'hero' }}
            ariaLabel="Hero carousel with platform features"
            dataTestId="hero-carousel"
            onAnalytics={(event, data) => {
              console.log('Carousel analytics:', event, data)
            }}
          >
            <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
              <div className="text-center">
                <h3 className="text-lg font-semibold">Welcome to Our Platform</h3>
                <p className="text-sm text-gray-600">Discover amazing features and capabilities</p>
              </div>
            </div>
            <div className="flex items-center justify-center h-64 bg-gray-200 rounded-lg">
              <div className="text-center">
                <h3 className="text-lg font-semibold">Advanced Analytics</h3>
                <p className="text-sm text-gray-600">Get insights with our powerful analytics tools</p>
              </div>
            </div>
            <div className="flex items-center justify-center h-64 bg-gray-300 rounded-lg">
              <div className="text-center">
                <h3 className="text-lg font-semibold">Enterprise Security</h3>
                <p className="text-sm text-gray-600">Bank-grade security for your data and applications</p>
              </div>
            </div>
          </Carousel>
        </div>
      )
    }
  ],

  typography: [
    {
      title: 'Typography Headings',
      description: 'Different typography heading components',
      code: `import { TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyH5, TypographyH6 } from 'mad-ui-components'

export function TypographyHeadings() {
  return (
    <div className="space-y-4">
      <TypographyH1>Heading 1</TypographyH1>
      <TypographyH2>Heading 2</TypographyH2>
      <TypographyH3>Heading 3</TypographyH3>
      <TypographyH4>Heading 4</TypographyH4>
      <TypographyH5>Heading 5</TypographyH5>
      <TypographyH6>Heading 6</TypographyH6>
    </div>
  )
}`,
      preview: (
        <div className="space-y-4">
          <TypographyH1>Heading 1</TypographyH1>
          <TypographyH2>Heading 2</TypographyH2>
          <TypographyH3>Heading 3</TypographyH3>
          <TypographyH4>Heading 4</TypographyH4>
          <TypographyH5>Heading 5</TypographyH5>
          <TypographyH6>Heading 6</TypographyH6>
        </div>
      )
    },
    {
      title: 'Typography Text',
      description: 'Different typography text components',
      code: `import { TypographyP, TypographyLead, TypographyLarge, TypographySmall, TypographyMuted } from 'mad-ui-components'

export function TypographyText() {
  return (
    <div className="space-y-4">
      <TypographyLead>This is a lead paragraph.</TypographyLead>
      <TypographyP>This is a regular paragraph.</TypographyP>
      <TypographyLarge>This is large text.</TypographyLarge>
      <TypographySmall>This is small text.</TypographySmall>
      <TypographyMuted>This is muted text.</TypographyMuted>
    </div>
  )
}`,
      preview: (
        <div className="space-y-4">
          <TypographyLead>This is a lead paragraph.</TypographyLead>
          <TypographyP>This is a regular paragraph.</TypographyP>
          <TypographyLarge>This is large text.</TypographyLarge>
          <TypographySmall>This is small text.</TypographySmall>
          <TypographyMuted>This is muted text.</TypographyMuted>
        </div>
      )
    },
    {
      title: 'Typography Special',
      description: 'Special typography components',
      code: `import { TypographyBlockquote, TypographyCode } from 'mad-ui-components'

export function TypographySpecial() {
  return (
    <div className="space-y-4">
      <TypographyBlockquote>
        This is a blockquote with some important information.
      </TypographyBlockquote>
      <TypographyCode>const example = "Hello World";</TypographyCode>
    </div>
  )
}`,
      preview: (
        <div className="space-y-4">
          <TypographyBlockquote>
            This is a blockquote with some important information.
          </TypographyBlockquote>
          <TypographyCode>const example = &quot;Hello World&quot;;</TypographyCode>
        </div>
      )
    }
  ]
}

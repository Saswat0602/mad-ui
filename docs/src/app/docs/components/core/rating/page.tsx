"use client"

import React, { useState } from 'react'
import { Rating } from 'mad-ui-components/rating'
import { ComponentDocLayout, LivePreview, CopyCodeBlock } from '@/components/component-doc-layout'

const RatingPage = () => {
  const [rating, setRating] = useState(0)
  const [readOnlyRating] = useState(4.5)

  const ratingExamples = (
    <div className="space-y-8">
      {/* Default Example */}
      <div className="space-y-4">
        <LivePreview title="Default">
          <Rating value={3} />
        </LivePreview>
        <CopyCodeBlock
          filename="rating.tsx"
          code={`<Rating value={3} />`}
        />
      </div>

      {/* Interactive */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Interactive</h3>
        <LivePreview title="Interactive Rating">
          <div className="space-y-2">
            <Rating 
              value={rating} 
              onChange={setRating}
            />
            <p className="text-sm text-muted-foreground">
              Current rating: {rating} star{rating !== 1 ? 's' : ''}
            </p>
          </div>
        </LivePreview>
        <CopyCodeBlock
          filename="interactive-rating.tsx"
          code={`const [rating, setRating] = useState(0)

return (
  <div className="space-y-2">
    <Rating 
      value={rating} 
      onChange={setRating}
    />
    <p className="text-sm text-muted-foreground">
      Current rating: {rating} star{rating !== 1 ? 's' : ''}
    </p>
  </div>
)`}
        />
      </div>

      {/* Read Only */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Read Only</h3>
        <LivePreview title="Read Only Rating">
          <div className="space-y-4">
            <div className="space-y-2">
              <Rating value={5} readOnly />
              <p className="text-sm text-muted-foreground">Perfect score!</p>
            </div>
            <div className="space-y-2">
              <Rating value={readOnlyRating} readOnly />
              <p className="text-sm text-muted-foreground">4.5 out of 5 stars</p>
            </div>
            <div className="space-y-2">
              <Rating value={2} readOnly />
              <p className="text-sm text-muted-foreground">Could be better</p>
            </div>
          </div>
        </LivePreview>
        <CopyCodeBlock
          filename="readonly-rating.tsx"
          code={`<Rating value={5} readOnly />
<Rating value={4.5} readOnly />
<Rating value={2} readOnly />`}
        />
      </div>

      {/* Different Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <LivePreview title="Different Sizes">
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Small</p>
              <Rating value={4} size="sm" readOnly />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Medium (Default)</p>
              <Rating value={4} readOnly />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Large</p>
              <Rating value={4} size="lg" readOnly />
            </div>
          </div>
        </LivePreview>
        <CopyCodeBlock
          filename="rating-sizes.tsx"
          code={`<Rating value={4} size="sm" readOnly />
<Rating value={4} readOnly />
<Rating value={4} size="lg" readOnly />`}
        />
      </div>
    </div>
  )

  return (
    <ComponentDocLayout
      name="Rating"
      description="Star rating component for feedback"
      category="core"
    >
      {ratingExamples}
    </ComponentDocLayout>
  )
}

export default RatingPage

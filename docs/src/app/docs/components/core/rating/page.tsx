"use client"

import React, { useState } from 'react'
import { Rating } from 'mad-ui-components/rating'
import { ComponentDocLayout, LivePreview, CopyCodeBlock } from '@/components/component-doc-layout'
import { Star, Heart, ThumbsUp } from 'lucide-react'

export default function RatingDocPage() {
  const [productRating, setProductRating] = useState(4)
  const [serviceRating, setServiceRating] = useState(3.5)
  const [heartRating, setHeartRating] = useState(3)

  const ratingExamples = (
    <div className="space-y-8">
      {/* Basic Rating */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Rating</h3>
        <LivePreview title="Basic Rating Usage">
          <div className="w-full max-w-sm space-y-4">
            <Rating value={3} />
            <Rating value={4.5} />
            <Rating value={5} />
            <Rating value={0} />
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="basic-rating.tsx"
          code={`<Rating value={3} />
<Rating value={4.5} />
<Rating value={5} />
<Rating value={0} />`}
        />
      </div>

      {/* Interactive Rating */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Interactive Rating</h3>
        <LivePreview title="Interactive Rating">
          <div className="w-full max-w-sm space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Rate this product: {productRating}/5</label>
              <Rating 
                value={productRating}
                onChange={setProductRating}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Service quality: {serviceRating}/5</label>
              <Rating 
                value={serviceRating}
                onChange={setServiceRating}
                max={5}
              />
            </div>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="interactive-rating.tsx"
          code={`const [productRating, setProductRating] = useState(4)

<div className="space-y-2">
  <label className="text-sm font-medium">Rate this product: {productRating}/5</label>
  <Rating 
    value={productRating}
    onChange={setProductRating}
  />
</div>

<div className="space-y-2">
  <label className="text-sm font-medium">Service quality: {serviceRating}/5</label>
  <Rating 
    value={serviceRating}
    onChange={setServiceRating}
    max={5}
  />
</div>`}
        />
      </div>

      {/* Rating Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <LivePreview title="Rating Sizes">
          <div className="w-full max-w-sm space-y-4">
            <Rating value={4} size="sm" />
            <Rating value={4} size="md" />
            <Rating value={4} size="lg" />
            <Rating value={4} size="xl" />
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="rating-sizes.tsx"
          code={`<Rating value={4} size="sm" />
<Rating value={4} size="md" />
<Rating value={4} size="lg" />
<Rating value={4} size="xl" />`}
        />
      </div>

      {/* Read-only Rating */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Read-only Rating</h3>
        <LivePreview title="Read-only Rating">
          <div className="w-full max-w-sm space-y-4">
            <Rating value={4.2} readOnly />
            <Rating value={3.8} readOnly showValue />
            <Rating value={4.5} readOnly showValue showLabel label="Average Rating" />
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="readonly-rating.tsx"
          code={`<Rating value={4.2} readOnly />
<Rating value={3.8} readOnly showValue />
<Rating value={4.5} readOnly showValue showLabel label="Average Rating" />`}
        />
      </div>

      {/* Custom Icons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Custom Icons</h3>
        <LivePreview title="Rating with Custom Icons">
          <div className="w-full max-w-sm space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Rate with hearts: {heartRating}/5</label>
              <Rating 
                value={heartRating}
                onChange={setHeartRating}
                icon={<Heart className="h-5 w-5" />}
                emptyIcon={<Heart className="h-5 w-5" />}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Thumbs up rating</label>
              <Rating 
                value={4}
                readOnly
                icon={<ThumbsUp className="h-5 w-5" />}
                emptyIcon={<ThumbsUp className="h-5 w-5" />}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Custom star rating</label>
              <Rating 
                value={3.5}
                readOnly
                icon={<Star className="h-6 w-6 fill-current" />}
                emptyIcon={<Star className="h-6 w-6" />}
              />
            </div>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="custom-icons.tsx"
          code={`import { Star, Heart, ThumbsUp } from 'lucide-react'

<Rating 
  value={heartRating}
  onChange={setHeartRating}
  icon={<Heart className="h-5 w-5" />}
  emptyIcon={<Heart className="h-5 w-5" />}
/>

<Rating 
  value={4}
  readOnly
  icon={<ThumbsUp className="h-5 w-5" />}
  emptyIcon={<ThumbsUp className="h-5 w-5" />}
/>

<Rating 
  value={3.5}
  readOnly
  icon={<Star className="h-6 w-6 fill-current" />}
  emptyIcon={<Star className="h-6 w-6" />}
/>`}
        />
      </div>

      {/* Product Reviews */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Product Reviews</h3>
        <LivePreview title="Product Review Ratings">
          <div className="w-full max-w-md space-y-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Rating value={5} readOnly size="sm" />
                <span className="text-sm font-medium">John Doe</span>
                <span className="text-xs text-slate-500">2 days ago</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Excellent product! Fast shipping and great quality. Highly recommended.
              </p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Rating value={4} readOnly size="sm" />
                <span className="text-sm font-medium">Sarah Wilson</span>
                <span className="text-xs text-slate-500">1 week ago</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Good product overall, but could be better. Delivery was on time.
              </p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Rating value={3} readOnly size="sm" />
                <span className="text-sm font-medium">Mike Johnson</span>
                <span className="text-xs text-slate-500">2 weeks ago</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Average product. Nothing special but gets the job done.
              </p>
            </div>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="product-reviews.tsx"
          code={`<div className="p-4 border rounded-lg">
  <div className="flex items-center gap-2 mb-2">
    <Rating value={5} readOnly size="sm" />
    <span className="text-sm font-medium">John Doe</span>
    <span className="text-xs text-slate-500">2 days ago</span>
  </div>
  <p className="text-sm text-slate-600 dark:text-slate-400">
    Excellent product! Fast shipping and great quality. Highly recommended.
  </p>
</div>

<div className="p-4 border rounded-lg">
  <div className="flex items-center gap-2 mb-2">
    <Rating value={4} readOnly size="sm" />
    <span className="text-sm font-medium">Sarah Wilson</span>
    <span className="text-xs text-slate-500">1 week ago</span>
  </div>
  <p className="text-sm text-slate-600 dark:text-slate-400">
    Good product overall, but could be better. Delivery was on time.
  </p>
</div>

<div className="p-4 border rounded-lg">
  <div className="flex items-center gap-2 mb-2">
    <Rating value={3} readOnly size="sm" />
    <span className="text-sm font-medium">Mike Johnson</span>
    <span className="text-xs text-slate-500">2 weeks ago</span>
  </div>
  <p className="text-sm text-slate-600 dark:text-slate-400">
    Average product. Nothing special but gets the job done.
  </p>
</div>`}
        />
      </div>

      {/* Rating Summary */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Rating Summary</h3>
        <LivePreview title="Rating Summary with Statistics">
          <div className="w-full max-w-md space-y-4">
            <div className="p-6 border rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">4.2</div>
                  <Rating value={4.2} readOnly size="sm" />
                  <div className="text-sm text-slate-600 dark:text-slate-400">Based on 127 reviews</div>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm w-8">5</span>
                    <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <span className="text-sm text-slate-600 dark:text-slate-400">76</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm w-8">4</span>
                    <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                    <span className="text-sm text-slate-600 dark:text-slate-400">32</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm w-8">3</span>
                    <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                    <span className="text-sm text-slate-600 dark:text-slate-400">13</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm w-8">2</span>
                    <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '3%' }}></div>
                    </div>
                    <span className="text-sm text-slate-600 dark:text-slate-400">4</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm w-8">1</span>
                    <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '2%' }}></div>
                    </div>
                    <span className="text-sm text-slate-600 dark:text-slate-400">2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="rating-summary.tsx"
          code={`<div className="p-6 border rounded-lg">
  <div className="flex items-center gap-4 mb-4">
    <div className="text-center">
      <div className="text-3xl font-bold">4.2</div>
      <Rating value={4.2} readOnly size="sm" />
      <div className="text-sm text-slate-600 dark:text-slate-400">Based on 127 reviews</div>
    </div>
    <div className="flex-1 space-y-2">
      <div className="flex items-center gap-2">
        <span className="text-sm w-8">5</span>
        <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
          <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '60%' }}></div>
        </div>
        <span className="text-sm text-slate-600 dark:text-slate-400">76</span>
      </div>
      {/* ... more rating bars */}
    </div>
  </div>
</div>`}
        />
      </div>

      {/* Custom Styling */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Custom Styling</h3>
        <LivePreview title="Custom Styled Ratings">
          <div className="w-full max-w-sm space-y-4">
            <Rating 
              value={4} 
              color="#10b981"
              activeColor="#10b981"
              inactiveColor="#d1d5db"
            />
            <Rating 
              value={3.5} 
              color="#8b5cf6"
              activeColor="#8b5cf6"
              inactiveColor="#d1d5db"
            />
            <Rating 
              value={5} 
              color="#f59e0b"
              activeColor="#f59e0b"
              inactiveColor="#d1d5db"
            />
          </div>
        </LivePreview>
        
        <CopyCodeBlock
          filename="custom-styling.tsx"
          code={`<Rating 
  value={4} 
  color="#10b981"
  activeColor="#10b981"
  inactiveColor="#d1d5db"
/>
<Rating 
  value={3.5} 
  color="#8b5cf6"
  activeColor="#8b5cf6"
  inactiveColor="#d1d5db"
/>
<Rating 
  value={5} 
  color="#f59e0b"
  activeColor="#f59e0b"
  inactiveColor="#d1d5db"
/>`}
        />
      </div>
    </div>
  )

  return (
    <ComponentDocLayout
      name="Rating"
      description="A star rating component for displaying and collecting user ratings. Perfect for reviews, feedback, and quality assessments."
      category="core"
    >
      {ratingExamples}
    </ComponentDocLayout>
  )
}
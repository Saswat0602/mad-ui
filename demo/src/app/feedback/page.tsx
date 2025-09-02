'use client';

import { useState } from 'react';
import {
  Alert,
  Modal,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Textarea,
  Rating,
} from '@saswat0602/ui-library';

export default function FeedbackPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Feedback Components</h1>
        <p className="text-gray-600">Explore user feedback and communication components</p>
      </div>

      {/* Alert Components */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Alert Messages</CardTitle>
          <CardDescription>Different types of alert notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert type="info" title="Information" message="This is a default alert message. Use it to provide general information to users." />

          <Alert type="error" title="Error" message="This is an error alert message. Use it to show errors or critical information." />

          <Alert type="success" title="Success" message="This is a success alert message. Use it to confirm successful actions." />

          <Alert type="warning" title="Warning" message="This is a warning alert message. Use it to show important warnings." />
        </CardContent>
      </Card>

      {/* Modal Components */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Basic Modal</CardTitle>
            <CardDescription>Simple modal with content and actions</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Welcome to our platform!">
              <div className="space-y-4">
                <p>This is a sample modal that demonstrates the modal component functionality. You can customize the content, styling, and behavior as needed.</p>
                <div className="flex justify-end space-x-3">
                  <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setIsModalOpen(false)}>
                    Continue
                  </Button>
                </div>
              </div>
            </Modal>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Confirmation Modal</CardTitle>
            <CardDescription>Modal for confirming destructive actions</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="error" onClick={() => setIsDeleteModalOpen(true)}>
              Delete Item
            </Button>
            <Modal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} title="Confirm Deletion">
              <div className="space-y-4">
                <p>Are you sure you want to delete this item? This action cannot be undone.</p>
                <div className="flex justify-end space-x-3">
                  <Button variant="outline" onClick={() => setIsDeleteModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button variant="error" onClick={() => setIsDeleteModalOpen(false)}>
                    Delete
                  </Button>
                </div>
              </div>
            </Modal>
          </CardContent>
        </Card>
      </div>

      {/* Feedback Form */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Feedback Form</CardTitle>
          <CardDescription>Collect user feedback and ratings</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="category">Category</Label>
              <select
                id="category"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select a category</option>
                <option value="bug">Bug Report</option>
                <option value="feature">Feature Request</option>
                <option value="general">General Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <Label htmlFor="rating">Rating</Label>
              <div className="mt-2">
                <Rating value={rating} onChange={setRating} />
                <p className="text-sm text-gray-600 mt-1">
                  {rating > 0 ? `You rated us ${rating} out of 5 stars` : 'Please rate your experience'}
                </p>
              </div>
            </div>

            <div>
              <Label htmlFor="feedback">Feedback</Label>
              <Textarea
                id="feedback"
                placeholder="Please share your thoughts, suggestions, or report any issues..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows={4}
                className="mt-1"
              />
            </div>

            <div className="flex justify-end space-x-3">
              <Button variant="outline" type="button">
                Cancel
              </Button>
              <Button type="submit">
                Submit Feedback
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Toast Notifications */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Toast Notifications</CardTitle>
          <CardDescription>Inline notification examples</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-green-800">
                  Successfully saved!
                </p>
                <p className="text-sm text-green-700">
                  Your changes have been saved to the database.
                </p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-blue-800">
                  Information
                </p>
                <p className="text-sm text-blue-700">
                  New features are available in the latest update.
                </p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-yellow-800">
                  Warning
                </p>
                <p className="text-sm text-yellow-700">
                  Your session will expire in 5 minutes.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Progress Indicators */}
      <Card>
        <CardHeader>
          <CardTitle>Progress Feedback</CardTitle>
          <CardDescription>Show progress and loading states</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <Label className="mb-2 block">Upload Progress</Label>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>File upload</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>

            <div>
              <Label className="mb-2 block">Processing Status</Label>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-sm text-gray-600">Processing your request...</span>
              </div>
            </div>

            <div>
              <Label className="mb-2 block">Step Progress</Label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-sm">Account Created</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <span className="ml-2 text-sm">Verifying Email</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-xs text-gray-600">3</span>
                  </div>
                  <span className="ml-2 text-sm text-gray-500">Complete Setup</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { apiCall } from "@/lib/auth";
import { Shield, User, Server, CheckCircle, XCircle } from "lucide-react";

export default function TestAuthPage() {
  const { user, isLoading } = useUser();
  const [backendResponse, setBackendResponse] = useState<any>(null);
  const [isTestingBackend, setIsTestingBackend] = useState(false);

  const testBackendConnection = async () => {
    setIsTestingBackend(true);
    try {
      const response = await apiCall('/api/test');
      const data = await response.json();
      setBackendResponse({ success: true, data });
    } catch (error) {
      setBackendResponse({ success: false, error: error instanceof Error ? error.message : 'Unknown error' });
    } finally {
      setIsTestingBackend(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-10 lg:ml-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
            Authentication Test Page
          </h1>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Auth0 Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Auth0 Status
                </CardTitle>
                <CardDescription>
                  Current authentication state
                </CardDescription>
              </CardHeader>
              <CardContent>
                {user ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-medium">Authenticated</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          Name: {user.name || 'N/A'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          Email: {user.email || 'N/A'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">
                          {user.sub}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    <span className="font-medium">Not Authenticated</span>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Backend Connection Test */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="w-5 h-5" />
                  Backend Connection
                </CardTitle>
                <CardDescription>
                  Test protected API endpoints
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button 
                    onClick={testBackendConnection}
                    disabled={!user || isTestingBackend}
                    className="w-full"
                  >
                    {isTestingBackend ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Testing...
                      </>
                    ) : (
                      'Test Backend Connection'
                    )}
                  </Button>

                  {backendResponse && (
                    <div className="mt-4 p-3 rounded-lg border">
                      {backendResponse.success ? (
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="font-medium text-green-700 dark:text-green-300">
                              Backend Connection Successful
                            </span>
                          </div>
                          <pre className="text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-auto">
                            {JSON.stringify(backendResponse.data, null, 2)}
                          </pre>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <XCircle className="w-4 h-4 text-red-500" />
                            <span className="font-medium text-red-700 dark:text-red-300">
                              Backend Connection Failed
                            </span>
                          </div>
                          <p className="text-sm text-red-600 dark:text-red-400">
                            {backendResponse.error}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Instructions */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Testing Instructions</CardTitle>
              <CardDescription>
                How to test the authentication and backend integration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-medium mb-2">1. Authentication Test</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    <li>Click "Sign In" in the navigation to authenticate with Auth0</li>
                    <li>Verify that your user information appears in the Auth0 Status card</li>
                    <li>Check that the Backend Connection Test button becomes enabled</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">2. Backend Integration Test</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    <li>Ensure your backend server is running on port 3333</li>
                    <li>Click "Test Backend Connection" to verify JWT token validation</li>
                    <li>Check that the backend responds with user information</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">3. Environment Setup</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    <li>Copy <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">env.example</code> to <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">.env.local</code></li>
                    <li>Configure your Auth0 application settings</li>
                    <li>Set up backend environment variables in <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">backend/.env</code></li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 
"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Mail, Chrome } from "lucide-react";

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState<string | null>(null);

  const handleSignIn = async (provider: string) => {
    setIsLoading(provider);
    try {
      await signIn(provider, { callbackUrl: "/dashboard" });
    } catch (error) {
      console.error("Sign in error:", error);
    } finally {
      setIsLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="flex items-center justify-center py-20">
        <div className="container px-4 md:px-6">
          <Card className="max-w-md mx-auto">
            <CardHeader className="text-center space-y-4">
              <CardTitle className="text-2xl">Create Your Account</CardTitle>
              <CardDescription>
                Get started with MailMind AI and transform your email experience
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => handleSignIn("google")}
                disabled={isLoading === "google"}
              >
                {isLoading === "google" ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary mr-2" />
                ) : (
                  <Chrome className="mr-2 h-4 w-4" />
                )}
                Continue with Google
              </Button>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    More providers coming soon
                  </span>
                </div>
              </div>
              
              <Button className="w-full" disabled>
                Email Sign Up (Coming Soon)
              </Button>
              
              <div className="text-center text-sm text-muted-foreground">
                By signing up, you agree to our{" "}
                <a href="#" className="underline hover:text-primary">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="underline hover:text-primary">
                  Privacy Policy
                </a>
              </div>
              
              <div className="text-center text-sm">
                Already have an account?{" "}
                <a href="/login" className="underline hover:text-primary">
                  Sign in
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
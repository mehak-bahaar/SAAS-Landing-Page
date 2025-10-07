"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { 
  CheckCircle, 
  X, 
  Star, 
  Zap, 
  Users, 
  Shield,
  ArrowRight,
  Crown
} from "lucide-react";

export default function PricingPage() {
  const handleCheckout = async (priceId: string) => {
    try {
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId }),
      });

      const data = await response.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error('No checkout URL returned');
      }
    } catch (error) {
      console.error('Error initiating checkout:', error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 max-w-[800px] mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Simple, Transparent
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  {" "}Pricing
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Choose the perfect plan for your email management needs. Start free, upgrade when you are ready.
              </p>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm text-muted-foreground">14-day free trial on all paid plans</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
              
              {/* Free Plan */}
              <Card className="relative border-2">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl">Free</CardTitle>
                  <CardDescription className="text-base">
                    Perfect for getting started
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$0</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Up to 100 emails/month</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Basic AI categorization</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">1 email account</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Basic analytics</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Email support</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <X className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Conversation summaries</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <X className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Advanced rules</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <X className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Priority support</span>
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="/signup">
                      Get Started Free
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Pro Plan */}
              <Card className="relative border-2 border-primary shadow-lg scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl">Pro</CardTitle>
                  <CardDescription className="text-base">
                    For professionals and power users
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$12</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Unlimited emails</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Advanced AI categorization</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Up to 5 email accounts</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Conversation summaries</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Smart prioritization</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Advanced analytics dashboard</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Custom rules & filters</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Priority email support</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Mobile app access</span>
                    </li>
                  </ul>
                  <Button className="w-full" onClick={() => handleCheckout('price_pro')}>
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>

              {/* Team Plan */}
              <Card className="relative border-2">
                <CardHeader className="text-center pb-8">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Crown className="h-5 w-5 text-yellow-500" />
                    <CardTitle className="text-2xl">Team</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    For growing teams and businesses
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$29</span>
                    <span className="text-muted-foreground">/user/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Everything in Pro</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Unlimited email accounts</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Team collaboration tools</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Shared templates & rules</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Team analytics & reporting</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Admin dashboard</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">SSO & advanced security</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Dedicated account manager</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">24/7 phone & email support</span>
                    </li>
                  </ul>
                  <Button className="w-full" onClick={() => handleCheckout('price_team')}>
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Compare Features
              </h2>
              <p className="text-xl text-muted-foreground">
                See exactly what's included in each plan
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-semibold">Feature</th>
                      <th className="text-center p-4 font-semibold">Free</th>
                      <th className="text-center p-4 font-semibold">Pro</th>
                      <th className="text-center p-4 font-semibold">Team</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4">Monthly Email Limit</td>
                      <td className="text-center p-4">100</td>
                      <td className="text-center p-4">Unlimited</td>
                      <td className="text-center p-4">Unlimited</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Email Accounts</td>
                      <td className="text-center p-4">1</td>
                      <td className="text-center p-4">5</td>
                      <td className="text-center p-4">Unlimited</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">AI Categorization</td>
                      <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Conversation Summaries</td>
                      <td className="text-center p-4"><X className="h-5 w-5 text-muted-foreground mx-auto" /></td>
                      <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Smart Prioritization</td>
                      <td className="text-center p-4"><X className="h-5 w-5 text-muted-foreground mx-auto" /></td>
                      <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Advanced Analytics</td>
                      <td className="text-center p-4"><X className="h-5 w-5 text-muted-foreground mx-auto" /></td>
                      <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Custom Rules</td>
                      <td className="text-center p-4"><X className="h-5 w-5 text-muted-foreground mx-auto" /></td>
                      <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Team Collaboration</td>
                      <td className="text-center p-4"><X className="h-5 w-5 text-muted-foreground mx-auto" /></td>
                      <td className="text-center p-4"><X className="h-5 w-5 text-muted-foreground mx-auto" /></td>
                      <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Priority Support</td>
                      <td className="text-center p-4"><X className="h-5 w-5 text-muted-foreground mx-auto" /></td>
                      <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="p-4">24/7 Phone Support</td>
                      <td className="text-center p-4"><X className="h-5 w-5 text-muted-foreground mx-auto" /></td>
                      <td className="text-center p-4"><X className="h-5 w-5 text-muted-foreground mx-auto" /></td>
                      <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Got questions? We have answers.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I change plans anytime?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we will prorate any differences.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What happens after my free trial ends?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    After your 14-day free trial, you will be automatically charged for the plan you selected. You can cancel anytime before the trial ends without being charged.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Is my data secure?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Absolutely. We use bank-level encryption, are SOC 2 Type II certified, and are fully GDPR compliant. Your data is never shared with third parties.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you offer discounts for annual billing?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! Annual billing saves you 20% compared to monthly billing. Contact our sales team for enterprise pricing.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What email providers do you support?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We support Gmail, Google Workspace, Outlook, Microsoft 365, Yahoo Mail, and any provider that offers IMAP/POP3 access.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <Card className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground border-0">
              <CardContent className="pt-12 pb-12 text-center space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Ready to Get Started?
                </h2>
                <p className="text-xl opacity-90 max-w-[600px] mx-auto">
                  Join thousands of professionals who have transformed their email experience with MailMind AI.
                </p>
                <Button size="lg" variant="secondary" asChild className="text-base px-8">
                  <Link href="/signup">
                    <Zap className="mr-2 h-5 w-5" />
                    Start Your Free Trial
                  </Link>
                </Button>
                <div className="flex items-center justify-center space-x-4 text-sm opacity-75">
                  <div className="flex items-center">
                    <CheckCircle className="mr-1 h-4 w-4" />
                    No credit card required
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-1 h-4 w-4" />
                    Cancel anytime
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
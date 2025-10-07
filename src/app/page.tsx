import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { 
  Mail, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Inbox Zero,{" "}
                    <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                      Effortlessly
                    </span>
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    Transform your chaotic inbox into a perfectly organized workspace with AI-powered email management. Save hours, reduce stress, and focus on what matters most.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild className="text-base px-8">
                    <Link href="/signup">
                      <Zap className="mr-2 h-5 w-5" />
                      Get Started Free
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="text-base px-8">
                    <Link href="#demo">
                      <Mail className="mr-2 h-5 w-5" />
                      Watch Demo
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <CheckCircle className="mr-1 h-4 w-4 text-green-500" />
                    No credit card required
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-1 h-4 w-4 text-green-500" />
                    14-day free trial
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-xl"></div>
                  <Card className="relative border-2 shadow-2xl">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">MailMind AI Dashboard</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm font-medium">Urgent</span>
                          </div>
                          <span className="text-sm text-muted-foreground">3 emails</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-sm font-medium">Personal</span>
                          </div>
                          <span className="text-sm text-muted-foreground">12 emails</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-950 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span className="text-sm font-medium">Newsletters</span>
                          </div>
                          <span className="text-sm text-muted-foreground">28 emails</span>
                        </div>
                      </div>
                      <div className="pt-2 border-t">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Time saved today</span>
                          <span className="text-sm font-bold text-green-600">2h 45m</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                  Tired of Email Overload?
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    The average professional spends 28% of their workday managing emails. That is over 11 hours per week wasted on sorting, filtering, and searching through cluttered inboxes.
                  </p>
                  <p>
                    Important messages get lost in the noise. Critical deadlines are missed. Digital fatigue sets in, affecting your productivity and well-being.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">The MailMind AI Solution</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Smart Categorization</h4>
                      <p className="text-sm text-muted-foreground">AI automatically sorts emails into meaningful categories</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Intelligent Prioritization</h4>
                      <p className="text-sm text-muted-foreground">Learns what matters to you and brings it to the top</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Time-Saving Summaries</h4>
                      <p className="text-sm text-muted-foreground">Get the gist of long threads in seconds</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Powerful Features, Simple Experience
              </h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                Everything you need to conquer your inbox, nothing you do not
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>AI-Powered Categorization</CardTitle>
                  <CardDescription>
                    Automatically sorts emails into smart categories like Urgent, Personal, Newsletters, and more.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Conversation Summaries</CardTitle>
                  <CardDescription>
                    Get AI-generated summaries of long email threads and catch up in seconds instead of minutes.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Smart Prioritization</CardTitle>
                  <CardDescription>
                    Learns your behavior to surface important messages and reduce noise automatically.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Analytics Dashboard</CardTitle>
                  <CardDescription>
                    Visual insights into your email habits, time saved, and productivity trends.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Multi-Inbox Support</CardTitle>
                  <CardDescription>
                    Connect Gmail, Outlook, and other accounts to manage everything from one dashboard.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Enterprise Security</CardTitle>
                  <CardDescription>
                    Bank-level encryption and privacy controls to keep your data safe and secure.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Trusted by Professionals Worldwide
              </h2>
              <p className="text-xl text-muted-foreground">
                Join thousands who have reclaimed their inbox
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 mb-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                  <p className="text-muted-foreground">Active Users</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">2M+</div>
                  <p className="text-muted-foreground">Emails Processed Daily</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">15hrs</div>
                  <p className="text-muted-foreground">Average Time Saved Weekly</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                        &quot;MailMind AI has completely transformed how I handle email. I save at least 2 hours every day!&quot; 
                      </p>
                  <div>
                    <p className="font-semibold text-sm">Sarah Chen</p>
                    <p className="text-xs text-muted-foreground">Product Manager, TechCorp</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    &quot;The AI categorization is incredibly accurate. Finally, my inbox feels organized and manageable.&quot;
                  </p>
                  <div>
                    <p className="font-semibold text-sm">Michael Rodriguez</p>
                    <p className="text-xs text-muted-foreground">Freelance Designer</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    &quot;Worth every penny. The time savings alone make this the best productivity tool I have ever used.&quot;
                  </p>
                  <div>
                    <p className="font-semibold text-sm">Emily Watson</p>
                    <p className="text-xs text-muted-foreground">CEO, StartupHub</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <Card className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground border-0">
              <CardContent className="pt-12 pb-12 text-center space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Ready to Achieve Inbox Zero?
                </h2>
                <p className="text-xl opacity-90 max-w-[600px] mx-auto">
                  Join thousands of professionals who have transformed their email experience. Start your free 14-day trial today.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                  <Button size="lg" variant="secondary" asChild className="text-base px-8">
                    <Link href="/signup">
                      <Zap className="mr-2 h-5 w-5" />
                      Get Started Free
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="text-base px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    <Link href="/pricing">
                      View Pricing
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
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
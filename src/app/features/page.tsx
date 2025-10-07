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
  TrendingUp,
  Filter,
  Globe,
  Smartphone,
  Lock,
  Database,
  Bot,
  Eye,
  Calendar
} from "lucide-react";

export const metadata = {
  title: "Features - MailMind AI",
  description: "Our privacy practices and how we handle your data.",
};
export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar/>
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 max-w-[800px] mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Powerful Features for
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  {" "}Email Mastery
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Discover how MailMind AI transforms your email experience with intelligent automation and smart organization
              </p>
              <Button size="lg" asChild>
                <Link href="/signup">
                  <Zap className="mr-2 h-5 w-5" />
                  Start Free Trial
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Core Features
              </h2>
              <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
                The essential tools you need to conquer your inbox
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <Card className="p-6 border-2">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold">AI-Powered Categorization</h3>
                    <p className="text-muted-foreground">
                      Our advanced machine learning algorithms automatically sort your emails into intelligent categories:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span><strong>Urgent:</strong> Time-sensitive messages requiring immediate attention</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span><strong>Personal:</strong> Messages from friends, family, and close contacts</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span><strong>Work:</strong> Professional correspondence and project updates</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span><strong>Newsletters:</strong> Marketing emails and subscriptions</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span><strong>Receipts:</strong> Purchase confirmations and financial documents</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span><strong>Social:</strong> Notifications from social media platforms</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold">Conversation Summaries</h3>
                    <p className="text-muted-foreground">
                      Never read through long email threads again. Our AI generates concise summaries that capture:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Key decisions and action items</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Important dates and deadlines</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Participant contributions and opinions</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Next steps and follow-up requirements</span>
                      </li>
                    </ul>
                    <p className="text-sm text-muted-foreground italic">
                      Save up to 80% of the time you'd normally spend reading long threads
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold">Smart Prioritization</h3>
                    <p className="text-muted-foreground">
                      Our AI learns from your behavior to understand what matters most to you:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Analyzes which emails you open and respond to quickly</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Identifies your most important contacts and topics</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Surfaces critical messages at the top of your inbox</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Adapts to changing priorities and work patterns</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold">Analytics Dashboard</h3>
                    <p className="text-muted-foreground">
                      Gain insights into your email habits and productivity:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Track time saved through automation</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Monitor email volume trends and patterns</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Identify your most productive email times</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Measure response times and efficiency</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Advanced Features */}
        <section className="py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Advanced Capabilities
              </h2>
              <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
                Professional-grade features for power users and teams
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Multi-Inbox Support</h3>
                <p className="text-muted-foreground mb-4">
                  Connect and manage all your email accounts from one unified dashboard.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Gmail & Google Workspace</li>
                  <li>• Outlook & Microsoft 365</li>
                  <li>• Yahoo Mail</li>
                  <li>• IMAP/POP3 support</li>
                </ul>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Filter className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Custom Rules & Filters</h3>
                <p className="text-muted-foreground mb-4">
                  Create personalized automation rules that work alongside our AI.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Keyword-based filtering</li>
                  <li>• Sender-based rules</li>
                  <li>• Time-based automation</li>
                  <li>• Conditional workflows</li>
                </ul>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Mobile-First Design</h3>
                <p className="text-muted-foreground mb-4">
                  Stay productive on the go with our responsive mobile experience.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Native mobile apps</li>
                  <li>• Push notifications</li>
                  <li>• Offline mode</li>
                  <li>• Touch-optimized interface</li>
                </ul>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
                <p className="text-muted-foreground mb-4">
                  Bank-level security to protect your sensitive communications.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• End-to-end encryption</li>
                  <li>• SOC 2 Type II certified</li>
                  <li>• GDPR compliant</li>
                  <li>• 2FA authentication</li>
                </ul>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Unlimited Storage</h3>
                <p className="text-muted-foreground mb-4">
                  Never worry about running out of space for your emails.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Cloud-based storage</li>
                  <li>• Automatic backups</li>
                  <li>• Easy export options</li>
                  <li>• Searchable archive</li>
                </ul>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Smart Scheduling</h3>
                <p className="text-muted-foreground mb-4">
                  AI-powered scheduling that finds the perfect time for meetings.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Calendar integration</li>
                  <li>• Time zone detection</li>
                  <li>• Availability insights</li>
                  <li>• Automatic reminders</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Seamless Integrations
              </h2>
              <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
                Connect MailMind AI with the tools you already use
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-red-50 dark:bg-red-950 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-semibold">Gmail</h3>
                <p className="text-sm text-muted-foreground">Full integration with Google Workspace</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-950 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold">Outlook</h3>
                <p className="text-sm text-muted-foreground">Microsoft 365 and Exchange support</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-50 dark:bg-purple-950 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold">Calendar</h3>
                <p className="text-sm text-muted-foreground">Sync with Google and Outlook calendars</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-green-50 dark:bg-green-950 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold">Slack</h3>
                <p className="text-sm text-muted-foreground">Get notifications in your workspace</p>
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
                  Ready to Transform Your Inbox?
                </h2>
                <p className="text-xl opacity-90 max-w-[600px] mx-auto">
                  Experience the power of AI-driven email management. Start your free 14-day trial today.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                  <Button size="lg" variant="secondary" asChild className="text-base px-8">
                    <Link href="/signup">
                      <Zap className="mr-2 h-5 w-5" />
                      Start Free Trial
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="text-base px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    <Link href="/pricing">
                      View Pricing
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
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
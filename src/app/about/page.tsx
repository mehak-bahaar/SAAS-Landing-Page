import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { 
  Mail, 
  Users, 
  Shield, 
  Target,
  Heart,
  Lightbulb,
  Award,
  Globe,
  ArrowRight,
  CheckCircle
} from "lucide-react";
export const metadata = {
    title: "About - MailMind AI",
    description: "Learn about MailMind AI, our mission, values, team, and commitment to transforming email productivity for professionals worldwide.",
};
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 max-w-[800px] mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                About
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  {' '}MailMind AI
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                We are on a mission to help professionals reclaim their time and focus on what truly matters.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    MailMind AI was born from a simple observation: email, meant to make us more productive, had become one of the biggest sources of stress and inefficiency in the modern workplace.
                  </p>
                  <p>
                    Our founders, having experienced the overwhelming burden of managing hundreds of emails daily across multiple accounts, asked themselves: &quot;What if AI could handle the repetitive work of email organization, leaving humans to focus on meaningful communication?&quot;
                  </p>
                  <p>
                    Today, MailMind AI helps thousands of professionals worldwide achieve inbox zero, save countless hours, and reduce digital fatigue. We are proud to be transforming how people interact with their most important communication channel.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-xl"></div>
                <Card className="relative border-2 shadow-2xl">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="space-y-2">
                        <div className="text-3xl font-bold text-primary">2023</div>
                        <p className="text-sm text-muted-foreground">Founded</p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl font-bold text-primary">10K+</div>
                        <p className="text-sm text-muted-foreground">Users</p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl font-bold text-primary">15</div>
                        <p className="text-sm text-muted-foreground">Team Members</p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl font-bold text-primary">2M+</div>
                        <p className="text-sm text-muted-foreground">Emails Processed Daily</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="p-8 border-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To eliminate email overload through intelligent automation, enabling professionals to focus on meaningful work and achieve better work-life balance.
                </p>
              </Card>

              <Card className="p-8 border-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  A world where technology seamlessly handles digital noise, allowing humans to focus on creativity, connection, and high-impact work.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">User-First</h3>
                <p className="text-muted-foreground">
                  Every decision starts with &quot;How does this help our users save time and reduce stress?&quot;
                </p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Privacy & Security</h3>
                <p className="text-muted-foreground">
                  We treat your data with the same care we would want for our own. Security is never an afterthought.
                </p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Empathy</h3>
                <p className="text-muted-foreground">
                  We understand the pain of email overload because we have lived it. Your challenges are our challenges.
                </p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  We are obsessed with creating the best possible experience and continuously improving our product.
                </p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Global Impact</h3>
                <p className="text-muted-foreground">
                  We are building a solution that helps professionals everywhere, regardless of location or industry.
                </p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  We are constantly pushing the boundaries of what is possible with AI and email management.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Meet Our Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
                The passionate people behind MailMind AI
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">JD</span>
                  </div>
                  <h3 className="font-semibold">John Davidson</h3>
                  <p className="text-sm text-muted-foreground mb-2">CEO & Co-Founder</p>
                  <p className="text-xs text-muted-foreground">
                    Former Google engineer with 15+ years in AI and productivity software.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">SC</span>
                  </div>
                  <h3 className="font-semibold">Sarah Chen</h3>
                  <p className="text-sm text-muted-foreground mb-2">CTO & Co-Founder</p>
                  <p className="text-xs text-muted-foreground">
                    ML expert from Stanford, passionate about making AI accessible and useful.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">MR</span>
                  </div>
                  <h3 className="font-semibold">Michael Rodriguez</h3>
                  <p className="text-sm text-muted-foreground mb-2">Head of Product</p>
                  <p className="text-xs text-muted-foreground">
                    Product leader focused on user experience and solving real-world problems.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">EW</span>
                  </div>
                  <h3 className="font-semibold">Emily Watson</h3>
                  <p className="text-sm text-muted-foreground mb-2">Head of Design</p>
                  <p className="text-xs text-muted-foreground">
                    Creating beautiful, intuitive interfaces that make complex tasks simple.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Security & Privacy */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Security & Privacy First
              </h2>
              <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
                Your trust is our highest priority
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">End-to-End Encryption</h3>
                    <p className="text-sm text-muted-foreground">
                      Your emails are encrypted in transit and at rest using industry-standard protocols.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">SOC 2 Type II Certified</h3>
                    <p className="text-sm text-muted-foreground">
                      We undergo rigorous third-party audits to ensure the highest security standards.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">GDPR Compliant</h3>
                    <p className="text-sm text-muted-foreground">
                      Fully compliant with EU data protection regulations and privacy laws.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">No Data Selling</h3>
                    <p className="text-sm text-muted-foreground">
                      We never sell, rent, or share your data with third parties for marketing purposes.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Regular Security Audits</h3>
                    <p className="text-sm text-muted-foreground">
                      Continuous monitoring and regular penetration testing to keep your data safe.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Data Portability</h3>
                    <p className="text-sm text-muted-foreground">
                      Easy export of your data at any time. You are always in control of your information.
                    </p>
                  </div>
                </div>
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
                  Join Our Mission
                </h2>
                <p className="text-xl opacity-90 max-w-[600px] mx-auto">
                  Ready to transform your email experience and reclaim your time?
                </p>
                <Button size="lg" variant="secondary" asChild className="text-base px-8">
                  <Link href="/signup">
                    Start Your Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
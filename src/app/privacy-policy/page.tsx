import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata = {
  title: "Privacy Policy - MailMind AI",
  description: "Our privacy practices and how we handle your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main>
        {/* Hero Section - matches About page styling */}
        <section className="py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 max-w-[800px] mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Privacy Policy
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  {" "}MailMind AI
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                This Privacy Policy explains how MailMind AI collects, uses, and discloses information when you use our
                services.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto my-12 w-full max-w-4xl px-4">

        <section className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
              <CardDescription>
                We collect information you provide directly and information collected automatically when you use the
                service.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li>Account details (email, name) when you sign up.</li>
                <li>Content you create using the service (emails, templates).</li>
                <li>Usage data and analytics to improve the product.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
              <CardDescription>To provide, maintain, and improve MailMind AI.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We use collected information to operate the service, personalize your experience, send important
                notices, and develop new features. We may also use anonymized data for research and analytics.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sharing & Disclosure</CardTitle>
              <CardDescription>When we share information and the legal bases for doing so.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We do not sell your personal information. We may share data with service providers who help operate
                the service, comply with law enforcement requests, or protect our rights.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
              <CardDescription>How we protect your information.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">We implement reasonable security measures to protect data.</p>
              <p className="text-sm text-muted-foreground mt-2">
                However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Choices</CardTitle>
              <CardDescription>Manage your account and data.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                You can access and update your account information in settings. To delete your account, contact us at
                the address below.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>Questions or requests regarding privacy.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Email: <Link href="mailto:privacy@mailmind.ai" className="text-primary underline">privacy@mailmind.ai</Link>
              </p>
              <p className="text-sm text-muted-foreground mt-2">Effective date: October 7, 2025</p>
            </CardContent>
          </Card>
        </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

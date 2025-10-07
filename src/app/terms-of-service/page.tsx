import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Terms of Service - MailMind AI",
  description: "Terms governing the use of MailMind AI services.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Hero Section - consistent with site */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 max-w-[800px] mx-auto">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Terms of Service
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {" "}MailMind AI
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              These Terms govern your use of MailMind AI. Please read them carefully.
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto my-12 w-full max-w-4xl px-4">
        <section className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Acceptance of Terms</CardTitle>
              <CardDescription>By using MailMind AI, you agree to these Terms.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                These Terms constitute a legally binding agreement between you and MailMind AI. If you
                do not agree, do not use the service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Use of the Service</CardTitle>
              <CardDescription>Rules and acceptable use.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                You agree to use the service only as permitted by law and these Terms. You must not misuse the service or
                attempt to interfere with its operation.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Intellectual Property</CardTitle>
              <CardDescription>What you retain and what we own.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                You retain ownership of content you submit. We retain ownership of the service, branding, and
                underlying technology. We grant you a limited license to use the service as described in these Terms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Limitations of Liability</CardTitle>
              <CardDescription>Our liability and disclaimers.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                The service is provided as is. To the fullest extent permitted by law, MailMind AI disclaims all
                warranties and limits liability for damages.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Termination</CardTitle>
              <CardDescription>How accounts can be terminated or suspended.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We may suspend or terminate access for violations of these Terms or for security reasons. You can close
                your account in settings or by contacting support.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Governing Law</CardTitle>
              <CardDescription>Which laws apply and dispute resolution.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                These Terms are governed by the laws of the jurisdiction where MailMind AI is incorporated, without
                regard to conflict-of-law principles.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Contact</CardTitle>
              <CardDescription>How to reach us with questions or concerns.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Questions about these Terms can be sent to <Link href="mailto:legal@mailmind.ai" className="text-primary underline">legal@mailmind.ai</Link>.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}

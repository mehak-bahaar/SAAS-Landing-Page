import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Cookie Policy - MailMind AI",
  description: "How MailMind AI uses cookies and similar technologies.",
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 max-w-[800px] mx-auto">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Cookie Policy
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {" "}MailMind AI
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              This Cookie Policy explains how we use cookies and similar technologies when you visit our website.
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto my-12 w-full max-w-4xl px-4">
        <section className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>What are cookies?</CardTitle>
              <CardDescription>Basic explanation</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Cookies are small text files placed on your device to store information that helps provide a better
                experience. They can be session-based (deleted when you close your browser) or persistent.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How we use cookies</CardTitle>
              <CardDescription>Purposes for cookies</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li>Essential cookies to enable site functionality and security.</li>
                <li>Performance cookies to analyze site usage and improve the product.</li>
                <li>Functional cookies to remember your preferences.</li>
                <li>Advertising cookies to deliver relevant ads (where applicable).</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Third-party cookies</CardTitle>
              <CardDescription>Third parties we use</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We may allow third-party services (analytics, advertising, embeds) to place cookies on your device.
                These parties have their own cookie policies and controls.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Managing cookies</CardTitle>
              <CardDescription>How to opt-out or remove cookies</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                You can control cookies via your browser settings (often under Privacy or Security). Note that blocking
                certain cookies may affect site functionality.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                For analytics and advertising cookies, you may opt out through the third-party providers' preference
                centers.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact</CardTitle>
              <CardDescription>Questions about cookies</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                If you have questions about this Cookie Policy, contact us at <Link href="mailto:privacy@mailmind.ai" className="text-primary underline">privacy@mailmind.ai</Link>.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}

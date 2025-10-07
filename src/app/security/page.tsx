import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Security - MailMind AI",
  description: "Data security practices, audits, and compliance at MailMind AI.",
};

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 max-w-[800px] mx-auto">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Security & Data Protection
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {" "}MailMind AI
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Protecting your data is a top priority. Learn about our security practices and compliance commitments.
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto my-12 w-full max-w-4xl px-4">
        <section className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Encryption</CardTitle>
              <CardDescription>Encryption in transit and at rest</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We encrypt data in transit using TLS and at rest using industry-standard encryption. Encryption keys are
                managed with strict access controls.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Access Controls</CardTitle>
              <CardDescription>Least privilege and internal controls</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Access to production systems and customer data is limited to authorized personnel and logged for audit
                purposes. We use role-based access controls (RBAC) and multifactor authentication for privileged access.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Audits & Testing</CardTitle>
              <CardDescription>Pen tests and third-party audits</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We perform regular penetration tests and engage third-party auditors to validate our security posture. We
                also run continuous monitoring and automated security scans.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Compliance</CardTitle>
              <CardDescription>GDPR, SOC 2, and more</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We strive to meet relevant industry standards and regulatory requirements. Where applicable, we maintain
                SOC 2 Type II controls and support GDPR data subject requests. Contact us for compliance inquiries.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Incident Response</CardTitle>
              <CardDescription>How we respond to security incidents</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We maintain an incident response plan that includes detection, containment, eradication, recovery, and
                post-incident review. If a breach affecting your data occurs, we will notify you in accordance with
                applicable laws.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact & Requests</CardTitle>
              <CardDescription>Security contact information</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                For security questions or to report a vulnerability, email <Link href="mailto:security@mailmind.ai" className="text-primary underline">security@mailmind.ai</Link>.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}

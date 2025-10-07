import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Mail, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Careers - MailMind AI",
  description: "Join our team. Current openings and hiring process at MailMind AI.",
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Hero Section - same band as About/Privacy */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 max-w-[800px] mx-auto">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Careers
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {" "}MailMind AI
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We're building a product that helps professionals reclaim their time. Come help us make email delightful.
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto my-12 w-full max-w-6xl px-4">
        <section className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <Card className="p-6">
              <CardContent>
                <h2 className="text-2xl font-bold mb-2">Open Positions</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  We're hiring for remote-first roles across engineering, product, and design. Below are some of the
                  positions we're actively hiring for - if you don't see the perfect match, please still reach out.
                </p>

                <div className="space-y-6">
                  <article className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">Senior Frontend Engineer</h3>
                        <p className="text-sm text-muted-foreground">Remote - Full-time</p>
                      </div>
                      <Link href="#" className="text-primary underline">View role</Link>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">Build delightful UIs with React and Tailwind. Experience with Next.js preferred.</p>
                  </article>

                  <article className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">ML Research Engineer</h3>
                        <p className="text-sm text-muted-foreground">Remote - Full-time</p>
                      </div>
                      <Link href="#" className="text-primary underline">View role</Link>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">Work on core models powering smart email features. Strong Python and ML background required.</p>
                  </article>

                  <article className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">Product Designer</h3>
                        <p className="text-sm text-muted-foreground">Remote - Full-time</p>
                      </div>
                      <Link href="#" className="text-primary underline">View role</Link>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">Design beautiful, usable experiences for power users and teams.</p>
                  </article>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <h2 className="text-2xl font-bold mb-3">How We Hire</h2>
                <ol className="list-decimal pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Intro call with Talent to learn about you and the role.</li>
                  <li>Technical or design exercise to show your craft.</li>
                  <li>Final interview with the team and leadership.</li>
                  <li>Offer & onboarding.</li>
                </ol>
                <p className="text-sm text-muted-foreground mt-4">We aim to move quickly and communicate clearly during the process.</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <h2 className="text-2xl font-bold mb-3">Benefits</h2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3"><CheckCircle className="h-4 w-4 text-primary mt-1" /> Competitive salary & equity</li>
                  <li className="flex items-start gap-3"><CheckCircle className="h-4 w-4 text-primary mt-1" /> Flexible, remote-first work</li>
                  <li className="flex items-start gap-3"><CheckCircle className="h-4 w-4 text-primary mt-1" /> Health stipend and learning budget</li>
                  <li className="flex items-start gap-3"><CheckCircle className="h-4 w-4 text-primary mt-1" /> Generous vacation policy</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <aside className="space-y-6">
            <Card className="p-6 sticky top-24">
              <CardContent>
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h4 className="font-semibold">Want to join the team?</h4>
                    <p className="text-sm text-muted-foreground">Send your resume to</p>
                    <Link href="mailto:jobs@mailmind.ai" className="text-primary underline text-sm">jobs@mailmind.ai</Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <h4 className="font-semibold">We're committed to inclusion</h4>
                <p className="text-sm text-muted-foreground">MailMind AI is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.</p>
              </CardContent>
            </Card>
          </aside>
        </section>

        {/* CTA */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <Card className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground border-0">
              <CardContent className="pt-8 pb-8 text-center space-y-4">
                <h3 className="text-2xl font-bold">Didn't find the right role?</h3>
                <p className="text-sm opacity-90 max-w-[600px] mx-auto">We're always looking for talented people - send an intro and your resume.</p>
                <Link href="mailto:jobs@mailmind.ai" className="inline-block rounded-md bg-background/5 px-6 py-2 text-sm font-medium text-primary underline">Introduce yourself</Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  Mail,
  TrendingUp,
  Lightbulb,
  Shield
} from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Email: AI-Powered Productivity",
    excerpt: "Explore how artificial intelligence is revolutionizing email management and helping professionals achieve inbox zero.",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "AI & Technology",
    image: "ai-email",
    featured: true
  },
  {
    id: 2,
    title: "10 Email Habits of Highly Productive People",
    excerpt: "Learn the strategies top performers use to manage their inbox efficiently and stay focused on high-impact work.",
    author: "John Davidson",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Productivity",
    image: "productivity"
  },
  {
    id: 3,
    title: "Email Security Best Practices for Remote Teams",
    excerpt: "Essential security measures to protect your communication and sensitive data in a distributed work environment.",
    author: "Michael Rodriguez",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Security",
    image: "security"
  },
  {
    id: 4,
    title: "How to Reduce Email Overload by 80%",
    excerpt: "Practical strategies and tools to dramatically cut down the time you spend managing email each day.",
    author: "Emily Watson",
    date: "2023-12-28",
    readTime: "8 min read",
    category: "Productivity",
    image: "overload"
  },
  {
    id: 5,
    title: "The Psychology of Email: Why We're Addicted to Checking",
    excerpt: "Understanding the behavioral science behind email addiction and how to break free for better focus.",
    author: "Sarah Chen",
    date: "2023-12-20",
    readTime: "6 min read",
    category: "Psychology",
    image: "psychology"
  },
  {
    id: 6,
    title: "Building a Zero-Inbox Culture in Your Team",
    excerpt: "How leaders can foster healthy email habits and improve team communication efficiency.",
    author: "John Davidson",
    date: "2023-12-15",
    readTime: "5 min read",
    category: "Leadership",
    image: "culture"
  },
  {
    id: 7,
    title: "Email Analytics: Using Data to Improve Communication",
    excerpt: "Leverage email metrics to understand your communication patterns and optimize your workflow.",
    author: "Michael Rodriguez",
    date: "2023-12-10",
    readTime: "7 min read",
    category: "Analytics",
    image: "analytics"
  },
  {
    id: 8,
    title: "The Environmental Impact of Email Storage",
    excerpt: "Surprising facts about email's carbon footprint and how smarter email management helps the planet.",
    author: "Emily Watson",
    date: "2023-12-05",
    readTime: "4 min read",
    category: "Sustainability",
    image: "environment"
  }
];

const categories = [
  { name: "All", count: 8 },
  { name: "AI & Technology", count: 1 },
  { name: "Productivity", count: 2 },
  { name: "Security", count: 1 },
  { name: "Psychology", count: 1 },
  { name: "Leadership", count: 1 },
  { name: "Analytics", count: 1 },
  { name: "Sustainability", count: 1 }
];
export const metadata = {
    title: "Blog - MailMind AI",
    description: "Read expert articles, tips, and insights on email productivity, AI technology, security, and more from the MailMind AI team.",
};

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 max-w-[800px] mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                The MailMind
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  {" "}Blog
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Insights, tips, and strategies for mastering email productivity and reclaiming your time.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-12">
            <div className="container px-4 md:px-6">
              <Card className="overflow-hidden border-2">
                <div className="grid lg:grid-cols-2">
                  <div className="p-8 lg:p-12 space-y-4">
                    <div className="flex items-center space-x-2">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter">
                      {featuredPost.title}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <Button size="lg" asChild>
                      <Link href={'/blog/' + featuredPost.id}>
                        Read Article
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                  <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-8 lg:p-12 flex items-center justify-center">
                    <Mail className="h-32 w-32 text-primary/30" />
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Categories */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant={category.name === "All" ? "default" : "outline"}
                  size="sm"
                >
                  {category.name}
                  <span className="ml-2 text-xs opacity-70">({category.count})</span>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {regularPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    {post.image === "productivity" && <TrendingUp className="h-16 w-16 text-primary/30" />}
                    {post.image === "security" && <Shield className="h-16 w-16 text-primary/30" />}
                    {post.image === "overload" && <Mail className="h-16 w-16 text-primary/30" />}
                    {post.image === "psychology" && <Lightbulb className="h-16 w-16 text-primary/30" />}
                    {post.image === "culture" && <User className="h-16 w-16 text-primary/30" />}
                    {post.image === "analytics" && <TrendingUp className="h-16 w-16 text-primary/30" />}
                    {post.image === "environment" && <Mail className="h-16 w-16 text-primary/30" />}
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-xl line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={'/blog/' + post.id}>
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <Card className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground border-0">
              <CardContent className="pt-12 pb-12 text-center space-y-6">
                <Mail className="h-16 w-16 mx-auto opacity-80" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Stay in the Loop
                </h2>
                <p className="text-xl opacity-90 max-w-[600px] mx-auto">
                  Get our latest articles, productivity tips, and exclusive insights delivered straight to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button size="lg" variant="secondary" className="text-base px-8">
                    Subscribe
                  </Button>
                </div>
                <p className="text-sm opacity-75">
                  No spam. Unsubscribe anytime.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Transform Your Email Experience?
              </h2>
              <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
                Join thousands of professionals who've already discovered the power of AI-driven email management.
              </p>
              <Button size="lg" asChild>
                <Link href="/signup">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
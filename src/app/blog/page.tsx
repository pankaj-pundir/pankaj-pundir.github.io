
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { blogPosts } from "@/lib/data";
import type { BlogPost } from "@/lib/types";

function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {post.imageUrl && (
        <div className="relative w-full h-48">
          <Image
            src={post.imageUrl}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            data-ai-hint="abstract technology"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl hover:text-primary transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </CardTitle>
        <div className="flex items-center text-xs text-muted-foreground mt-1">
          <CalendarDays className="h-3 w-3 mr-1.5" />
          {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3">{post.summary}</p>
      </CardContent>
      <CardFooter>
        <Button variant="link" asChild className="px-0">
          <Link href={`/blog/${post.slug}`}>
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-bold text-primary">Blog</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Thoughts, tutorials, and insights on technology, development, and more.
        </p>
      </header>
      
      {blogPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground py-8">No blog posts yet. Stay tuned!</p>
      )}
      {/* Note: Individual blog post pages (/blog/[slug]) are not implemented in this scaffold. */}
    </div>
  );
}


import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { userInfo, projects, workHistory, blogPosts } from '@/lib/data';
import { ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-12 bg-card rounded-xl shadow-xl glass-backdrop">
        <div className="relative h-48 w-48 md:h-64 md:w-64 rounded-full overflow-hidden shadow-md shrink-0">
          <Image
            src={userInfo.profileImage}
            alt={userInfo.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint="person student"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">{userInfo.name}</h1>
          <p className="mt-2 text-lg md:text-xl text-muted-foreground">{userInfo.title}</p>
          <p className="mt-4 text-md md:text-lg max-w-2xl">{userInfo.bio}</p>
          <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
            {userInfo.skills.slice(0, 7).map((skill) => (
              <span key={skill} className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full shadow-sm">
                {skill}
              </span>
            ))}
            {userInfo.skills.length > 7 && (
               <span className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full shadow-sm">
                +{userInfo.skills.length - 7} more
              </span>
            )}
          </div>
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <Button asChild size="lg">
              <Link href="/projects">
                View Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={`mailto:${userInfo.socials.email || 'example@example.com'}`}> {/* Updated to use email from data.ts if available */}
                Contact Me <Mail className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Overview Sections (Optional - Can be expanded or removed) */}
      <section className="grid md:grid-cols-3 gap-8">
        <Card className="shadow-md hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle>Recent Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {projects.slice(0, 2).map(p => (
                <li key={p.id} className="text-sm text-muted-foreground hover:text-primary">
                  <Link href="/projects">{p.title}</Link>
                </li>
              ))}
            </ul>
             <Button variant="link" asChild className="mt-2 px-0">
              <Link href="/projects">View All Projects <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="shadow-md hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle>Current Work</CardTitle>
          </CardHeader>
          <CardContent>
             <p className="text-sm text-muted-foreground">{workHistory.find(w => w.status === 'current')?.company || 'Focusing on personal projects and learning.'}</p>
             <Button variant="link" asChild className="mt-2 px-0">
              <Link href="/work">More About My Work <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="shadow-md hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle>Latest Blog Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {blogPosts.slice(0, 2).map(b => (
                <li key={b.id} className="text-sm text-muted-foreground hover:text-primary">
                  <Link href="/blog">{b.title}</Link>
                </li>
              ))}
               {blogPosts.length === 0 && <p className="text-sm text-muted-foreground">No blog posts yet.</p>}
            </ul>
            {blogPosts.length > 0 && (
             <Button variant="link" asChild className="mt-2 px-0">
                <Link href="/blog">Read All Posts <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            )}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

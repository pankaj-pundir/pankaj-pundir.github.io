'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { categorizeWebsite } from '@/ai/flows/website-categorizer';
import type { LinkItem, LinkCategory } from '@/lib/types';
import { ExternalLink, Link2 as LinkIcon, Loader2, Tag } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from 'next/link';

const addLinkFormSchema = z.object({
  url: z.string().url({ message: "Please enter a valid URL." }),
  title: z.string().min(1, { message: "Title is required."}).max(100),
  description: z.string().max(200).optional(),
});

type AddLinkFormData = z.infer<typeof addLinkFormSchema>;

const initialLinks: LinkItem[] = [
    { id: '1', url: 'https://dev.to', title: 'DEV Community', description: 'A community of software developers.', category: 'vibeCoding' },
    { id: '2', url: 'https://css-tricks.com', title: 'CSS-Tricks', description: 'Daily articles about CSS, HTML, JavaScript, and all things related to web design and development.', category: 'blog' },
    { id: '3', url: 'https://github.com/pankaj-pundir', title: 'Pankaj Pundir - GitHub', description: 'My GitHub profile.', category: 'portfolio' },
];

const categoryDisplayNames: Record<LinkCategory, string> = {
  vibeCoding: "Vibe Coding",
  portfolio: "Portfolios",
  blog: "Blogs",
  project: "Projects",
  other: "Other Resources"
};

export default function LinksPage() {
  const [links, setLinks] = useState<LinkItem[]>(initialLinks);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<AddLinkFormData>({
    resolver: zodResolver(addLinkFormSchema),
    defaultValues: { url: '', title: '', description: '' },
  });

  const onSubmit: SubmitHandler<AddLinkFormData> = async (data) => {
    setIsLoading(true);
    try {
      const { category } = await categorizeWebsite({ url: data.url });
      const newLink: LinkItem = {
        id: Date.now().toString(), // simple unique id
        ...data,
        category,
      };
      setLinks(prevLinks => [newLink, ...prevLinks]);
      form.reset();
      toast({
        title: "Link Added!",
        description: `"${data.title}" added to ${categoryDisplayNames[category]}.`,
      });
    } catch (error) {
      console.error('Error adding link:', error);
       toast({
        title: "Error Adding Link",
        description: "Could not categorize or add the link. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const allCategories = Object.keys(categoryDisplayNames) as LinkCategory[];

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-bold text-primary">Curated Links</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A collection of useful websites, tools, and resources, categorized for easy browsing.
        </p>
      </header>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Add a New Link</CardTitle>
          <CardDescription>Submit a URL, and our AI will help categorize it.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="url">URL</Label>
              <Input id="url" {...form.register('url')} placeholder="https://example.com" />
              {form.formState.errors.url && <p className="text-sm text-destructive mt-1">{form.formState.errors.url.message}</p>}
            </div>
            <div>
              <Label htmlFor="title">Title</Label>
              <Input id="title" {...form.register('title')} placeholder="Example Website" />
              {form.formState.errors.title && <p className="text-sm text-destructive mt-1">{form.formState.errors.title.message}</p>}
            </div>
             <div>
              <Label htmlFor="description">Description (Optional)</Label>
              <Input id="description" {...form.register('description')} placeholder="A brief description of the website." />
              {form.formState.errors.description && <p className="text-sm text-destructive mt-1">{form.formState.errors.description.message}</p>}
            </div>
            <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <LinkIcon className="mr-2 h-4 w-4" />}
              Add Link
            </Button>
          </form>
        </CardContent>
      </Card>
      
      <Tabs defaultValue={allCategories[0]} className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {allCategories.map(category => (
            <TabsTrigger key={category} value={category}>{categoryDisplayNames[category]}</TabsTrigger>
          ))}
        </TabsList>
        {allCategories.map(category => {
          const filteredLinks = links.filter(link => link.category === category);
          return (
            <TabsContent key={category} value={category}>
              {filteredLinks.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                  {filteredLinks.map(link => (
                    <Card key={link.id} className="shadow-md hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center justify-between">
                          {link.title}
                          <Button variant="ghost" size="icon" asChild className="ml-2 shrink-0">
                            <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${link.title}`}>
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </CardTitle>
                         <div className="text-xs text-muted-foreground break-all">
                            <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{link.url}</a>
                        </div>
                      </CardHeader>
                      {link.description && (
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{link.description}</p>
                        </CardContent>
                      )}
                      <CardFooter>
                        <div className="text-xs text-accent flex items-center">
                          <Tag className="h-3 w-3 mr-1.5" /> {categoryDisplayNames[link.category]}
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <p className="text-center text-muted-foreground py-8 mt-4">No links in the &quot;{categoryDisplayNames[category]}&quot; category yet.</p>
              )}
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}

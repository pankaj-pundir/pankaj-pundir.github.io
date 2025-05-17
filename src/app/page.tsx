
'use client'; 

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Video, Search as SearchIcon } from "lucide-react";
import { projects, userInfo } from "@/lib/data";
import type { Project } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Simple client-side filter
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (!mounted) {
    // To avoid hydration mismatch for search input or initial project list
    return (
      <div className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold text-primary">Explore Projects</h1>
          <p className="text-lg text-muted-foreground">
            Discover a collection of my work. Use the search below to filter by title, description, or tags.
          </p>
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-3 rounded-lg shadow-md bg-card/80 border-border"
              value={searchTerm} 
              disabled
            />
          </div>
        </header>
        <div className="text-center text-muted-foreground py-8">Loading projects...</div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold text-primary">Explore Projects</h1>
        <p className="text-lg text-muted-foreground">
          Discover a collection of my work. Use the search below to filter by title, description, or tags.
        </p>
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search projects..."
            className="w-full pl-10 pr-4 py-3 rounded-lg shadow-md bg-card/80 border-border"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>
      
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground py-8">
          {searchTerm ? `No projects found for "${searchTerm}".` : "No projects to display yet. Check back soon!"}
        </p>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  let imageHint = "project abstract";
  if (project.imageUrl?.includes('colorTuner')) imageHint = "software color palette";
  else if (project.imageUrl?.includes('graphReader')) imageHint = "data graph chart";
  else if (project.imageUrl?.includes('dexterous')) imageHint = "3d tracking sensor";
  else if (project.imageUrl?.includes('attendance')) imageHint = "security code mobile";
  else if (project.videoUrl) imageHint = "youtube video play";
  
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {project.imageUrl && !project.videoUrl && (
        <div className="relative w-full h-48 md:h-56">
          <Image
            src={project.imageUrl}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            data-ai-hint={imageHint}
          />
        </div>
      )}
      {project.videoUrl && (
        <div className="relative w-full h-48 md:h-56 bg-black flex items-center justify-center">
          {project.videoUrl.includes("youtube.com") || project.videoUrl.includes("youtu.be") ? (
            <iframe
              width="100%"
              height="100%"
              src={project.videoUrl.replace("watch?v=", "embed/").replace("youtu.be/", "youtube.com/embed/")}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="border-0"
            ></iframe>
          ) : (
            <>
              {project.imageUrl && ( 
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={imageHint}
                />
              )}
              <Video className="absolute w-12 h-12 text-white/70" />
              <p className="absolute bottom-2 left-2 text-xs text-white bg-black/50 px-1 py-0.5 rounded">Video Preview</p>
            </>
          )}
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription className="text-sm h-20 overflow-y-auto">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 items-center">
          {project.tags.map((tag) => (
            <span key={tag} className="flex items-center px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md">
              <Image
                src={`https://placehold.co/16x16.png`} // Placeholder for tag logo
                alt={`${tag} logo`}
                width={12}
                height={12}
                className="mr-1 rounded-sm"
                data-logo-for={tag.toLowerCase().replace(/ /g, '-')}
                data-ai-hint={`${tag.toLowerCase()} icon`}
              />
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 justify-end">
        {project.sourceLink && project.sourceLink !== '#' && (
          <Button variant="outline" size="sm" asChild>
            <Link href={project.sourceLink} target="_blank">
              <Github className="mr-2 h-4 w-4" /> Source
            </Link>
          </Button>
        )}
        {project.liveLink && project.liveLink !== '#' && (
          <Button size="sm" asChild>
            <Link href={project.liveLink} target="_blank">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

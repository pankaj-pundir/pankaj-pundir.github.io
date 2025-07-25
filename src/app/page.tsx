
'use client'; 

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Video, Search as SearchIcon, FileText } from "lucide-react";
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

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (project.subheading && project.subheading.toLowerCase().includes(searchTerm.toLowerCase())) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (!mounted) {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
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
  let displayImageUrl: string | undefined = project.imageUrl;
  if (project.imageUrls && project.imageUrls.length > 0) {
    displayImageUrl = project.imageUrls[0];
  }
  
  let imageHint = "project abstract";
  if (project.title.toLowerCase().includes('cortex-bot')) imageHint = "stock market trading graph";
  else if (project.title.toLowerCase().includes('online tools hub')) imageHint = "website screenshot tools";
  else if (project.title.toLowerCase().includes('poconet')) imageHint = "road pothole detection";
  else if (displayImageUrl?.includes('colorTuner')) imageHint = "software color palette";
  else if (displayImageUrl?.includes('graphReader')) imageHint = "data graph chart";
  else if (displayImageUrl?.includes('dexterous')) imageHint = "3d tracking sensor";
  else if (displayImageUrl?.includes('attendance')) imageHint = "security code mobile";
  else if (project.videoUrl) imageHint = "youtube video play";
  
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-48 md:h-56 bg-black flex items-center justify-center">
        {project.embedUrl ? (
          <iframe
            src={project.embedUrl}
            title={`${project.title} - Live Preview`}
            className="w-full h-full"
            style={{ border: 0 }}
            sandbox="allow-scripts allow-same-origin"
            loading="lazy"
          />
        ) : project.videoUrl ? (
          project.videoUrl.includes("youtube.com") || project.videoUrl.includes("youtu.be") ? (
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
              {displayImageUrl && ( 
                <img
                  src={displayImageUrl}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
                  data-ai-hint={imageHint}
                />
              )}
              <Video className="absolute w-12 h-12 text-white/70" />
              <p className="absolute bottom-2 left-2 text-xs text-white bg-black/50 px-1 py-0.5 rounded">Video Preview</p>
            </>
          )
        ) : displayImageUrl ? (
          <img
            src={displayImageUrl}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            data-ai-hint={imageHint}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted">
            <ExternalLink className="w-12 h-12 text-muted-foreground" />
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        {project.subheading && <p className="text-sm font-medium text-muted-foreground -mt-1">{project.subheading}</p>}
        <CardDescription className="text-sm h-20 overflow-y-auto">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 items-center">
          {project.tags.map((tag) => (
            <span key={tag} className="flex items-center px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md">
              <Image
                src={'https://placehold.co/16x16.png'}
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
      <CardFooter className="flex gap-2 justify-end flex-wrap">
        {project.researchPaperLink && (
          <Button variant="outline" size="sm" asChild>
            <Link href={project.researchPaperLink} target="_blank">
              <FileText className="mr-2 h-4 w-4" /> Paper
            </Link>
          </Button>
        )}
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

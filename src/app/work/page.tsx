
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { workHistory } from "@/lib/data";
import type { WorkItem } from "@/lib/types";
import { Briefcase, CalendarDays } from "lucide-react";

function WorkItemCard({ item }: { item: WorkItem }) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl text-primary">{item.role}</CardTitle>
            <CardDescription className="text-md font-semibold">{item.company}</CardDescription>
          </div>
          {item.status === 'current' && <Badge variant="default">Current</Badge>}
        </div>
        <div className="flex items-center text-xs text-muted-foreground mt-1">
          <CalendarDays className="h-3 w-3 mr-1.5" />
          {item.duration}
        </div>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
          {item.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}

export default function WorkPage() {
  const currentWork = workHistory.filter(item => item.status === 'current');
  const pastWork = workHistory.filter(item => item.status !== 'current');

  return (
    <div className="space-y-12">
      <header>
        <h1 className="text-4xl font-bold text-primary">Work Experience</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          My professional journey and key contributions in various roles.
        </p>
      </header>

      {currentWork.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Briefcase className="mr-3 h-6 w-6 text-accent" /> Currently Working On
          </h2>
          <div className="space-y-6">
            {currentWork.map((item) => (
              <WorkItemCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      )}

      {pastWork.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Briefcase className="mr-3 h-6 w-6 text-accent" /> Past Experience
          </h2>
          <div className="space-y-6">
            {pastWork.map((item) => (
              <WorkItemCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      )}

      {workHistory.length === 0 && (
         <p className="text-center text-muted-foreground py-8">No work experience to display yet.</p>
      )}
    </div>
  );
}

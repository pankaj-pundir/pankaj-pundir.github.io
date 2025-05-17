'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { generateTheme, type ThemeGeneratorInput, type ThemeGeneratorOutput } from '@/ai/flows/theme-generator';
import { Loader2, Palette } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  portfolioDescription: z.string().min(10, { message: 'Description must be at least 10 characters.' }).max(500, { message: 'Description must be at most 500 characters.' }),
  portfolioExamples: z.string().optional().transform(value => value ? value.split(',').map(url => url.trim()).filter(url => url) : []),
});

type FormData = z.infer<typeof formSchema>;

export default function ThemeGeneratorForm() {
  const [generatedTheme, setGeneratedTheme] = useState<ThemeGeneratorOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      portfolioDescription: '',
      portfolioExamples: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setGeneratedTheme(null);
    try {
      const themeInput: ThemeGeneratorInput = {
        portfolioDescription: data.portfolioDescription,
        portfolioExamples: data.portfolioExamples as string[] | undefined, // zod transform handles this
      };
      const theme = await generateTheme(themeInput);
      setGeneratedTheme(theme);
      toast({
        title: "Theme Generated!",
        description: "AI has crafted a new theme for you.",
      });
    } catch (error) {
      console.error('Error generating theme:', error);
      toast({
        title: "Error Generating Theme",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="portfolioDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Portfolio Description & Aesthetic</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., A minimalist portfolio for a product designer focusing on clean lines and modern typography. I like dark themes with a pop of vibrant color."
                    {...field}
                    rows={4}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="portfolioExamples"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Example Portfolio URLs (Optional, comma-separated)</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., https://example.com/portfolio1, https://another.com/portfolio2" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Palette className="mr-2 h-4 w-4" />
                Generate Theme
              </>
            )}
          </Button>
        </form>
      </Form>

      {generatedTheme && (
        <Card className="mt-8 shadow-md">
          <CardHeader>
            <CardTitle>Generated Theme</CardTitle>
            <CardDescription>Here&apos;s the theme AI crafted for you. You can use these values to update your site&apos;s CSS variables.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Label>Primary Color:</Label>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full border" style={{ backgroundColor: generatedTheme.primaryColor }} />
                <span>{generatedTheme.primaryColor}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Label>Background Color:</Label>
               <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full border" style={{ backgroundColor: generatedTheme.backgroundColor }} />
                <span>{generatedTheme.backgroundColor}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Label>Accent Color:</Label>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full border" style={{ backgroundColor: generatedTheme.accentColor }} />
                <span>{generatedTheme.accentColor}</span>
              </div>
            </div>
             <div>
              <Label>Font Family:</Label>
              <p className="text-sm">{generatedTheme.fontFamily}</p>
            </div>
            <div>
              <Label>Icon Style:</Label>
              <p className="text-sm">{generatedTheme.iconStyle}</p>
            </div>
          </CardContent>
           <CardFooter>
            <p className="text-xs text-muted-foreground">Note: Applying this theme dynamically is an advanced feature. For now, use these values manually.</p>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}

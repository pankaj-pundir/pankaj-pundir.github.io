'use server';

/**
 * @fileOverview An AI theme generator for the portfolio website.
 *
 * - generateTheme - A function that generates a color theme based on portfolio content and aesthetic preferences.
 * - ThemeGeneratorInput - The input type for the generateTheme function.
 * - ThemeGeneratorOutput - The return type for the generateTheme function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ThemeGeneratorInputSchema = z.object({
  portfolioDescription: z
    .string()
    .describe('A description of the portfolio content and aesthetic preferences.'),
  portfolioExamples: z
    .array(z.string().url())
    .optional()
    .describe('URLs of example portfolios with desired aesthetic.'),
});
export type ThemeGeneratorInput = z.infer<typeof ThemeGeneratorInputSchema>;

const ThemeGeneratorOutputSchema = z.object({
  primaryColor: z
    .string()
    .describe('The primary color for the theme in hex format (e.g., #3F51B5).'),
  backgroundColor: z
    .string()
    .describe('The background color for the theme in hex format (e.g., #F0F2F5).'),
  accentColor: z
    .string()
    .describe('The accent color for interactive elements in hex format (e.g., #009688).'),
  fontFamily: z
    .string()
    .describe('The font family for the theme (e.g., Roboto, sans-serif).'),
  iconStyle: z.string().describe('The icon style for the theme (e.g., minimalist, flat).'),
});
export type ThemeGeneratorOutput = z.infer<typeof ThemeGeneratorOutputSchema>;

export async function generateTheme(input: ThemeGeneratorInput): Promise<ThemeGeneratorOutput> {
  return themeGeneratorFlow(input);
}

const themeGeneratorPrompt = ai.definePrompt({
  name: 'themeGeneratorPrompt',
  input: {schema: ThemeGeneratorInputSchema},
  output: {schema: ThemeGeneratorOutputSchema},
  prompt: `You are an AI theme generator that creates color themes for portfolio websites.

  Based on the portfolio description and example portfolios, generate a color theme with a primary color, background color, and accent color in hex format. Also, suggest a font family and icon style that would fit the theme.

  Portfolio Description: {{{portfolioDescription}}}

  {{#if portfolioExamples}}
  Example Portfolios:
  {{#each portfolioExamples}}
  - {{{this}}}
  {{/each}}
  {{/if}}

  Ensure the theme is visually appealing and consistent with the portfolio's content and aesthetic preferences.
  Return the theme details in the specified JSON format.
  `, // Ensure valid JSON is returned
});

const themeGeneratorFlow = ai.defineFlow(
  {
    name: 'themeGeneratorFlow',
    inputSchema: ThemeGeneratorInputSchema,
    outputSchema: ThemeGeneratorOutputSchema,
  },
  async input => {
    const {output} = await themeGeneratorPrompt(input);
    return output!;
  }
);

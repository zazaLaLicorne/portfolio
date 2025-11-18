import { defineCollection, z, type ImageFunction } from "astro:content";

const baseProjectCardSchema = ({ image }: { image: ImageFunction }) =>
        z.object({
            title: z.string().min(1, "Le titre est obligatoire."),
            description: z.string().min(10, "Une courte description du service est requise."),
            badgeLabel: z.string().default("Service"),
            badgeColor: z.string().default("var(--accent)"),
            buttonLabel: z.string().default("En savoir plus"),
            link: z.string(),
            image: image(),
            alt: z.string(),
        });
        
const projetsCollection = defineCollection({type: "content",schema: baseProjectCardSchema,});

export const collections = { projets: projetsCollection, };
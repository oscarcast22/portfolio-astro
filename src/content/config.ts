import { defineCollection, z } from "astro:content";

export const collections = {
    projects: defineCollection({
        type: 'content',
        schema: z.object({
            title: z.string(),
            date: z.coerce.date(),
            img: z.string(),
			img_alt: z.string().optional(),
            description: z.string(),
            rol: z.string().optional(),
            tech: z.array(z.string()),
            images: z.array(
        		z.object({
        		  src: z.string(),
        		  img_alt: z.string().optional(),
        		})
      		),
        })
    })
}
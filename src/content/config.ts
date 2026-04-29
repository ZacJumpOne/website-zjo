import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        author: z.string(),
        academicDegree: z.string().optional(),
        date: z.date(),
        image: z.string().optional(),
        excerpt: z.string().optional(),
        tags: z.array(z.string()).optional()
    })
});

export const collections = {
    'blog': blogCollection
};
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(80),
  email: z.string().trim().email("Please enter a valid email."),
  company: z.string().trim().max(120).optional(),
  message: z
    .string()
    .trim()
    .min(20, "Tell us a little more (at least 20 characters).")
    .max(4000),
  website: z.string().max(0, "Spam detected.").optional(), // honeypot
});

export type ContactInput = z.infer<typeof contactSchema>;

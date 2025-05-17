"use server";

import { z } from "zod";

const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = ContactFormSchema.safeParse(formData);

  if (!parsed.success) {
    const issues = parsed.error.issues.map((issue) => issue.message);
    return {
      message: "Invalid form data. Please check the fields below.",
      fields: formData as Record<string, string>,
      issues,
      success: false,
    };
  }

  // In a real application, you would process this data, e.g., send an email or save to a database.
  console.log("Contact Form Submission Received:");
  console.log("Name:", parsed.data.name);
  console.log("Email:", parsed.data.email);
  console.log("Message:", parsed.data.message);

  // Simulate successful submission
  return {
    message: `Thank you, ${parsed.data.name}! Your message has been sent successfully. We'll get back to you soon.`,
    success: true,
  };
}

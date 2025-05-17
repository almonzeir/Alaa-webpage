"use server";

import { z } from "zod";

const BookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
  contactPerson: z.string(),
});

export type BookingFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
};

export async function submitBookingRequest(
  prevState: BookingFormState,
  data: FormData
): Promise<BookingFormState> {
  const formData = Object.fromEntries(data);
  const parsed = BookingSchema.safeParse(formData);

  if (!parsed.success) {
    const issues = parsed.error.issues.map((issue) => issue.message);
    return {
      message: "Invalid form data.",
      fields: formData as Record<string, string>,
      issues,
      success: false,
    };
  }

  // In a real application, you would process the booking here:
  // e.g., send an email, save to database, etc.
  console.log("Booking Request Received:");
  console.log("Name:", parsed.data.name);
  console.log("Email:", parsed.data.email);
  console.log("Message:", parsed.data.message);
  console.log("Contacting:", parsed.data.contactPerson);

  return {
    message: `Thank you, ${parsed.data.name}! Your request to connect with ${parsed.data.contactPerson} has been sent. We'll be in touch soon.`,
    success: true,
  };
}

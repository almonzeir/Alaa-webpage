"use client";

import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, CheckCircle2 } from "lucide-react";
import type { Professor, TeamMember } from "@/lib/types";
import { submitBookingRequest, type BookingFormState } from "@/actions/bookingActions";

const BookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type BookingFormValues = z.infer<typeof BookingSchema>;

interface BookingFormModalProps {
  person: Professor | TeamMember | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? "Sending..." : "Send Request"}
    </Button>
  );
}

export function BookingFormModal({ person, isOpen, onOpenChange }: BookingFormModalProps) {
  const initialState: BookingFormState = { message: "", success: false };
  const [formState, formAction] = useFormState(submitBookingRequest, initialState);
  
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(BookingSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (formState.success) {
      form.reset(); // Reset form on successful submission
      // Optionally close modal after a delay or keep it open to show success message
      // setTimeout(() => onOpenChange(false), 3000);
    }
    if (!formState.success && formState.issues) {
       // Set form errors based on server response
      formState.issues.forEach(issue => {
        // This is a simplified error mapping. A more robust solution would map specific fields.
        // For now, we primarily rely on the Alert component to show general errors.
        if (issue.toLowerCase().includes('name')) form.setError('name', { message: issue });
        else if (issue.toLowerCase().includes('email')) form.setError('email', { message: issue });
        else if (issue.toLowerCase().includes('message')) form.setError('message', { message: issue });
      });
    }
  }, [formState, form, onOpenChange]);


  if (!person) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle>Connect with {person.name}</DialogTitle>
          <DialogDescription>
            Fill out the form below to send a connection request. We'll get back to you shortly.
          </DialogDescription>
        </DialogHeader>
        
        {formState.message && !formState.success && (
          <Alert variant="destructive" className="mb-4">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              {formState.message}
              {formState.issues && (
                <ul className="list-disc list-inside mt-1">
                  {formState.issues.map((issue, i) => <li key={i} className="text-xs">{issue}</li>)}
                </ul>
              )}
            </AlertDescription>
          </Alert>
        )}
        {formState.message && formState.success && (
          <Alert variant="default" className="mb-4 bg-accent/10 border-accent text-accent-foreground">
             <CheckCircle2 className="h-4 w-4 text-accent" />
            <AlertTitle className="text-accent">Success!</AlertTitle>
            <AlertDescription className="text-accent/90">
              {formState.message}
            </AlertDescription>
          </Alert>
        )}

        {!formState.success && (
          <form action={formAction} className="space-y-4">
            <input type="hidden" name="contactPerson" value={person.name} />
            <div>
              <Label htmlFor="name" className="text-sm font-medium">Your Name</Label>
              <Input 
                id="name" 
                name="name" 
                placeholder="John Doe" 
                {...form.register("name")}
                aria-invalid={form.formState.errors.name ? "true" : "false"}
              />
              {form.formState.errors.name && <p className="text-xs text-destructive mt-1">{form.formState.errors.name.message}</p>}
            </div>
            <div>
              <Label htmlFor="email" className="text-sm font-medium">Your Email</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="john.doe@example.com" 
                {...form.register("email")}
                aria-invalid={form.formState.errors.email ? "true" : "false"}
              />
              {form.formState.errors.email && <p className="text-xs text-destructive mt-1">{form.formState.errors.email.message}</p>}
            </div>
            <div>
              <Label htmlFor="message" className="text-sm font-medium">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder={`Hi ${person.name}, I'd like to connect regarding...`}
                rows={4}
                {...form.register("message")}
                aria-invalid={form.formState.errors.message ? "true" : "false"}
              />
              {form.formState.errors.message && <p className="text-xs text-destructive mt-1">{form.formState.errors.message.message}</p>}
            </div>
            <DialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2 pt-2">
              <DialogClose asChild>
                <Button type="button" variant="outline" className="w-full sm:w-auto">
                  Cancel
                </Button>
              </DialogClose>
              <SubmitButton />
            </DialogFooter>
          </form>
        )}
        {formState.success && (
           <DialogFooter className="pt-2">
             <DialogClose asChild>
                <Button type="button" variant="outline" className="w-full">
                  Close
                </Button>
              </DialogClose>
           </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}

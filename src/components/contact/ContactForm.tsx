"use client";

import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, CheckCircle2, Send } from "lucide-react";
import { submitContactForm, type ContactFormState } from "@/actions/contactActions";

const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof ContactFormSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? "Sending..." : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
    </Button>
  );
}

export function ContactForm() {
  const initialState: ContactFormState = { message: "", success: false };
  const [formState, formAction] = useFormState(submitContactForm, initialState);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (formState.success) {
      form.reset();
    }
    if (!formState.success && formState.fields) {
      // Restore field values if validation failed
      form.reset(formState.fields as ContactFormValues);
    }
     if (!formState.success && formState.issues) {
      formState.issues.forEach(issue => {
        if (issue.toLowerCase().includes('name')) form.setError('name', { message: issue });
        else if (issue.toLowerCase().includes('email')) form.setError('email', { message: issue });
        else if (issue.toLowerCase().includes('message')) form.setError('message', { message: issue });
      });
    }
  }, [formState, form]);

  return (
    <form action={formAction} className="space-y-6">
      {formState.message && (
        <Alert variant={formState.success ? "default" : "destructive"} className={`mb-4 ${formState.success ? 'bg-green-500/10 border-green-500 text-green-700' : ''}`}>
          {formState.success ? <CheckCircle2 className="h-4 w-4" /> : <Terminal className="h-4 w-4" />}
          <AlertTitle>{formState.success ? "Success!" : "Error"}</AlertTitle>
          <AlertDescription>
            {formState.message}
            {!formState.success && formState.issues && (
              <ul className="list-disc list-inside mt-1 text-xs">
                {formState.issues.map((issue, i) => <li key={i}>{issue}</li>)}
              </ul>
            )}
          </AlertDescription>
        </Alert>
      )}

      {!formState.success && (
        <>
          <div>
            <Label htmlFor="name" className="text-sm font-medium">Your Name</Label>
            <Input 
              id="name" 
              name="name" 
              placeholder="John Doe" 
              {...form.register("name")}
              aria-invalid={form.formState.errors.name ? "true" : "false"}
              className="mt-1"
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
              className="mt-1"
            />
            {form.formState.errors.email && <p className="text-xs text-destructive mt-1">{form.formState.errors.email.message}</p>}
          </div>
          <div>
            <Label htmlFor="message" className="text-sm font-medium">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message..."
              rows={5}
              {...form.register("message")}
              aria-invalid={form.formState.errors.message ? "true" : "false"}
              className="mt-1"
            />
            {form.formState.errors.message && <p className="text-xs text-destructive mt-1">{form.formState.errors.message.message}</p>}
          </div>
          <SubmitButton />
        </>
      )}
    </form>
  );
}

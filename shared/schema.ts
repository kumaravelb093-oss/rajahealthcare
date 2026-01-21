import { z } from "zod";

// User Schema
export const userSchema = z.object({
  id: z.string(),
  username: z.string(),
  password: z.string(),
});

export type User = z.infer<typeof userSchema>;
export type InsertUser = Omit<User, "id">;


// Appointment Booking Schema
export const appointmentSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  preferredDate: z.string().min(1, "Please select a date"),
  preferredTime: z.enum(["morning", "afternoon", "evening"], {
    required_error: "Please select a preferred time",
  }),
  service: z.string().min(1, "Please select a service"),
  reason: z.string().optional(),
});

export type Appointment = z.infer<typeof appointmentSchema>;

// Contact Form Schema
export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type Contact = z.infer<typeof contactSchema>;

// Services data
export const servicesData = [
  {
    id: "sports-physiotherapy",
    title: "Sports Physiotherapy",
    description: "Achieve peak performance with our tailored injury prevention and recovery programs. We provide the elite care you need to stay active and reach your fitness goals.",
    icon: "move",
  },
  {
    id: "geriatric-rehabilitation",
    title: "Geriatric Rehabilitation",
    description: "Enhance your mobility and independence through our specialized osteoporosis and balance programs. We focus on proven techniques that ensure your safety and confidence in every step.",
    icon: "shield",
  },
  {
    id: "pain-management",
    title: "Pain Management",
    description: "Find sustainable relief from chronic and acute pain through our personalized treatment strategies. We prioritize your comfort by restoring function and improving your daily quality of life.",
    icon: "activity",
  },
  {
    id: "pediatric-physiotherapy",
    title: "Pediatric Physiotherapy",
    description: "Supporting children with developmental milestones through compassionate and play-based therapeutic care. Our specialized approach helps every child thrive by reaching their full physical potential.",
    icon: "baby",
  },
] as const;

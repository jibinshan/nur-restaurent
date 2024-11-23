import { z } from "zod";

export const TableBookingValidation = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    phone: z
        .string()
        .min(10, { message: "Phone number must be at least 10 digits." }),
    guests: z.string().min(1, { message: "Please select number of guests." }),
    date: z.date({ required_error: "Please select a date." }),
    time: z.string().min(1, { message: "Please select a time." }),
    request: z.string().optional(),
});

export type TableFormValues = z.infer<typeof TableBookingValidation>;
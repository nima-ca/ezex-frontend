import { z } from "zod";

export const passwordFormSchema = z
    .object({
        imageId: z.number({
            required_error: "Please select a security image.",
            invalid_type_error: "Please select a security image.",
        }),
        password: z
            .string({
                required_error: "Please enter password",
                invalid_type_error: "Please enter password",
            })
            .min(8, { message: "Password must be at least 8 characters long." })
            .regex(/[A-Z]/, {
                message: "Password must contain at least one uppercase letter.",
            })
            .regex(/[a-z]/, {
                message: "Password must contain at least one lowercase letter.",
            })
            .regex(/[0-9]/, {
                message: "Password must contain at least one number.",
            })
            .regex(/[!@#$%^&*]/, {
                message:
                    "Password must contain at least one special character: !@#$%^&*",
            }),
        confirmPassword: z.string({
            required_error: "Please enter confirm password",
            invalid_type_error: "Please enter confirm password",
        }),
    })
    .refine(
        data => {
            return data.password === data.confirmPassword;
        },
        {
            message: "Passwords must match.",
            path: ["confirmPassword"],
        },
    );

export type PasswordFormValues = z.infer<typeof passwordFormSchema>;

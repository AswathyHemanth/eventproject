import { z } from 'zod';

export const userFormSchema = z.object({
	name: z.string().min(3, 'Name is required'),
	email: z.string().email('Invalid email address'),
	mobile: z.string().regex(/^\+?[0-9]{8,14}$/, 'Invalid mobile number'),
	password: z.string().min(3, 'Password is required'),
	confirmpassword: z.string().min(3, 'Required'),
	
});
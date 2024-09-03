import { z } from 'zod';

export const loginSchema = z.object({
	
	email: z.string().email('Invalid email address'),
	password: z.string().min(3, 'password is required'),
	
	
});
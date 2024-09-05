import { redirect } from '@sveltejs/kit';
import { eq, and, sql } from 'drizzle-orm';
import { db } from "$lib/server/db/connect.server";
import { userDataTable } from '$lib/server/db/schema';
import type { Actions } from './$types';
import {z} from "zod";
import {superValidate} from "sveltekit-superforms/server";
import { zod } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';
import{loginSchema} from "$lib/forms/schema/login-schema";
console.log(loginSchema,"SAVE THE FILE");

export const load = async () => {
    const userForm = await superValidate(zod(loginSchema));
    return { userForm };
};


export const actions = {
	login: async ({request,cookies}) => {
        console.log(request);
        const form = await superValidate(request, zod(loginSchema));
        console.log("form data",form);
        if (!form.valid) {
            console.log(form)
            return fail(400, { form });
        }   
        else if(form.valid){


            const result =   await db.select().from(userDataTable).where(sql`email = ${form.data.email} and password = ${form.data.password}`);   
            console.log("RESULT",result[0]);


            if(result.length>0){

                const token = btoa(JSON.stringify(result[0]));
                cookies.set('userdata', token, { path: '/' });
                throw redirect(302, '/dashboard');
            }
            else{
                return {status:"success", message:"No username or password"}

            }
        }      
		
	}
}




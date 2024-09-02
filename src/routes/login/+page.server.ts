
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
	login: async ({request}) => {
        console.log(request);
        const form = await superValidate(request, zod(loginSchema));
        console.log("form data",form);
        if (!form.valid) {
            console.log(form)
            return fail(400, { form });
        }   
        else if(form.valid){
           /*await db.find(userDataTable).values({
               username:form.data.username,
               password:form.data.password
                ...form.data,        
            });*/
            return {status:"success", message:"Form Submission successfull"}
            console.log(form);
        }      
		
	}
}




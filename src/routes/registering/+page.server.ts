
import { db } from "$lib/server/db/connect.server";
import { userDataTable } from '$lib/server/db/schema';
import type { Actions } from './$types';
import {z} from "zod";
import {superValidate} from "sveltekit-superforms/server";
import { zod } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';
import{userFormSchema} from "$lib/forms/schema/user-schema.js";
console.log(userFormSchema,"SAVE THE FILE");

export const load = async () => {
    const userForm = await superValidate(zod(userFormSchema));
    return { userForm };
};


export const actions = {
	create: async ({request}) => {
        console.log(request);
        const form = await superValidate(request, zod(userFormSchema));
        console.log("form data",form);
        if (!form.valid) {
            console.log(form)
            return fail(400, { form });
        }   
        else if(form.valid){
           await db.insert(userDataTable).values({
                ...form.data,        
            });
            return {status:"success", message:"Form Submission successfull"}
            console.log(form);
        }      
		
	}
}




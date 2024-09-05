import { eq, and, sql } from 'drizzle-orm';
import { db } from "$lib/server/db/connect.server";
import { eventTable } from '$lib/server/db/schema';
import { redirect } from '@sveltejs/kit';

export async function load({cookies}) {

    
    let userData;
    if(cookies.get("userdata") !== undefined){

        userData= JSON.parse(atob(cookies.get("userdata")));
        let userid = userData.id;
        const result =   await db.select().from(eventTable).where(sql`userid = ${userid}`);
       console.log(result);
        return {userData,bookedEvents:result}
    }

    else{
        throw redirect(303, '/login');
    }
  
    
}
export const actions = {
	signOut : async ({request,cookies}) => {
        cookies.delete("userdata",{"path":"/"});

throw redirect(302, '/login');

    }}
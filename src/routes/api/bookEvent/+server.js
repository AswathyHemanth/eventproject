import { db } from "$lib/server/db/connect.server";
import { eventTable } from '$lib/server/db/schema';


    export async function POST({ request }) {
        const data = await request.json();  
        var payload =  data;     
        
        
        
        console.log(payload);
        await db.insert(eventTable).values({
            ...payload       
        });
       return new Response(JSON.stringify(payload) ) 
      }
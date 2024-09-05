import { redirect } from '@sveltejs/kit';
    
export async function POST({ request,cookies }) {
       
cookies.delete("userdata",{"path":"/"});

throw redirect(302, '/login');


      }
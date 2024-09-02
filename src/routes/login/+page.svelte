<script lang="ts">
    export let data;
    export let form;
    import { zod } from 'sveltekit-superforms/adapters';
    import{loginSchema} from "$lib/forms/schema/login-schema.js";
    import {superForm} from "sveltekit-superforms/client";
    import  SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte";
    
    const {form:loginForm, errors, enhance } = superForm(data.userForm,
    
    {
        validators: zod(loginSchema)
    }
    
    
    );
    </script>
<form method="post" action="?/login" >
    <label>
      Email:
      <input type="email" name="email" bind:value={$loginForm.email} required />
    </label>
    <br />
    <label>
      Password:
      <input type="password" name= "password" bind:value={$loginForm.password} required />
    </label>
    <br />
    <button>Login</button>

    </form>
<script lang="ts">
export let data;
export let form;
import { zod } from 'sveltekit-superforms/adapters';
import{userFormSchema} from "$lib/forms/schema/user-schema.js";
import {superForm} from "sveltekit-superforms/client";
import  SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte";

const {form:registrationForm, errors, enhance } = superForm(data.userForm,

{
    validators: zod(userFormSchema)
}


);
</script>
<SuperDebug data={$registrationForm}></SuperDebug>
    <form class="page-container-bottom" action="?/create" method="POST">
        <!--<SuperDebug data={$registrationForm}></SuperDebug>-->
        <div class="required-block">
            
            <div><span class="require">*</span> Required</div>
        </div>

        <div class="text-field-block">
            <div class="label">Your Full name</div>
            <div class="text-field"> <input 
                name="name" type="text" placeholder="Enter Your Full Name" bind:value={$registrationForm.name}></div>


        </div>

        <div class="text-field-block">
            <div class="label">Email</div>
           
            <div class="text-field"> <input name="email" type="text" placeholder="Enter email" bind:value={$registrationForm.email} ></div>

        </div>

        <div class="text-field-block">
            <div class="label">Mobile</div>
            <div class="text-field"> <input name="mobile" type="text" placeholder="Enter Your Full Name" bind:value={$registrationForm.mobile}></div>

            </div>
            <div class="text-field-block">
                <div class="label">Password</div>
                <div class="text-field"> <input name="password" type="text" placeholder="Enter Your Full Name" bind:value={$registrationForm.password}></div>
    
                </div>
                <div class="text-field-block">
                    <div class="label">ConfirmPassword</div>
                    <div class="text-field"> <input name="confirmpassword" type="text" placeholder="Enter Your Full Name" bind:value={$registrationForm.confirmpassword}></div>
        
                    </div>


        <div class= "btn_container_block">
            <button class="register-button" >Register
            </button>

        </div>
    </form>
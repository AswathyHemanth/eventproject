<script>

let formData = {
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirm_password:'',

};


function handleSubmit(event) {
    event.preventDefault();

    formData = {
        name: '',
        email: '',
        password: ''
    };
}
</script>      
<div class = "reg">
<form method="POST" action="//create" on:submit={handleSubmit}>
<label>
    Name:
    <input type="text" bind:value={formData.name} required />
</label>
<br />
<label>
    Email:
    <input type="email" bind:value={formData.email} required />
</label>
<br /><label>
    Mobile:
    <input type="mobile" bind:value={formData.mobile} required />
</label>
<br />
<label>
    Password:
    <input type="password" bind:value={formData.password} required />
</label>
<br />
<label>
    Confirm Password:
    <input type="confirm_password" bind:value={formData.confirm_password} required />
</label>
<br />
<button type="submit">Register</button>
</form>
</div>
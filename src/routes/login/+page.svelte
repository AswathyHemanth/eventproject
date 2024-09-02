<h1>Login Page</h1>
<script>
  let login = [];
   
  
  let formData = {
    email: '',
    password: ''
  };

  
  
  
</script>


<form >
  <label>
    Email:
    <input type="email" bind:value={formData.email} required />
  </label>
  <br />
  <label>
    Password:
    <input type="password" bind:value={formData.password} required />
  </label>
  <br />
  <button >Login</button>


</form>

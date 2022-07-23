<script>
// @ts-nocheck

import { onMount } from "svelte";
    const select = (selector) => document.querySelector(selector)
    let email;
    let password;
    onMount(()=> {
        const submit = select('#submit')
        

        submit.addEventListener('click', async(e) =>{
            e.preventDefault()
            let options = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: `{"email":"${email}","password":"${password}"}`
            };

            const data = await fetch('http://localhost/login', options).then(res => res.json())
            return data
        })

// fetch('http://localhost/login', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
    })
</script>
<h1>Login</h1>
<form >
    <label>
        <p>Correo</p>
        <input type="email" id="email" bind:value={email}>
    </label>
    <label>
        <p>Contraseña</p>
        <input type="password" id="password" bind:value={password}>
    </label>
    <input type="submit" id="submit" value="Entrar">
</form>
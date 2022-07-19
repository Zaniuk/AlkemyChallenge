<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<script>
const options = {method: 'GET', headers: {user: '62d34380b3954d8270d05ea2'}};

fetch('http://localhost/operations', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
</script>
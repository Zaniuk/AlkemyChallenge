<script>
    async function getBalance(){
    const options = {method: 'GET', headers: {user: '62d34380b3954d8270d05ea2'}};        
    const data = await fetch('http://localhost/operations', options).then(response => response.json())
    
    let balance = 0
    data.forEach(el => {
        balance += el.amount
    });
    return balance
}
</script>
<h1>Hola Geronimo</h1>
{#await getBalance()}
{:then balance} 
<h1>Tu balance es: ${balance}</h1>
    
{/await}

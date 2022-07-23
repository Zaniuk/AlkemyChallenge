<script>
import TableItem from "./TableItem.svelte";
    const options = {method: 'GET', headers: {user: '62d34380b3954d8270d05ea2'}};
    async function getData(){
    const data = await fetch('http://localhost/operations', options).then(response => response.json())
    return data
}
</script>

{#await getData()}
{:then data} 
<table>
  <tr>
    <th>Fecha</th>
    <th>Tipo</th>
    <th>Concepto</th>
    <th>Monto</th>
  </tr>
  {#each data as  operation }
    <TableItem id={operation._id} date={ new Date(operation.date)} type={operation.type} concept={operation.concept}  amount={operation.amount}/>
  {/each}
</table>
{/await}
<style>
  table{
    width: 100%;
  }
  th{
    text-align: start;
  }
</style>
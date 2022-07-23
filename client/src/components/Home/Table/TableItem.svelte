<script>
    import { goto } from '$app/navigation';
// @ts-nocheck  
    export let concept, amount, date, type, id;
    const edit = () => {
        goto(`/edit/${id}`)
    }
</script>

<tr>
    <td>{`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`}</td>
    <td>{type}</td>
    <td>{concept}</td>  
    <td>{amount}</td>
    <td><button on:click={edit}>Editar</button><button>Eliminar</button></td>
    
</tr>
<style>

</style>
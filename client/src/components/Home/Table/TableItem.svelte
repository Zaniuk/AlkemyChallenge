<script>
    export let concept, amount, date, type, id;
    import { goto } from '$app/navigation';
    import {removeOne} from '../../../hooks/dataHandling/removeOne'
// @ts-nocheck  
    const removeItem = async() => {
        if(confirm('Estas seguro de querer borrar esta operacion?')){
            removeOne(id)
            location.reload()
        }
    }
    
    const edit = () => {
        goto(`/edit/${id}`)
    }
</script>

<tr>
    <td>{`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`}</td>
    <td>{type}</td>
    <td>{concept}</td>  
    <td>{amount}</td>
    <td><button on:click={edit}>Editar</button><button on:click={removeItem}>Eliminar</button></td>
    
</tr>
<style>

</style>
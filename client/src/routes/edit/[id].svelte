<script>
    import { page } from '$app/stores';
    import {setItem} from '../../hooks/store'
    import {getOne} from '../../hooks/dataHandling/getOne'
    import {convertDate} from '../../hooks/dataHandling/edit'

    const operation = async() =>{
        //console.log(await getOne($page.params.id))
        const operationData = await getOne($page.params.id)
        if(operationData.name == 'CastError'){
            return {'Error': 'Cannot find that operation'}
        }else{
            //console.log(operationData)
            operationData.parsedDate = convertDate(new Date(operationData.date))
            console.log(operationData)
            return operationData
        }
    }
    setItem($page.params.id)
</script>


{#await operation()}
{:then operationData} 

<form>
    <label>
        <input type="date" value={operationData.parsedDate}>
    </label>
    <label>
        <select name="" id="select">
            <option value="none" selected disabled hidden>
                Select concept of operation
            </option>
            <option value="Food">Food</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Taxes">Taxes</option>
            <option value="Games">Games</option>
        </select>
    </label>
    <label>
        <input type="text" value={operationData.amount}>
    </label>
    <input type="submit" value="Modificar">
</form>
{/await}

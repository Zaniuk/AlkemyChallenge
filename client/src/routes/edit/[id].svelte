<script>
    import { page } from '$app/stores';
    import {setItem} from '../../hooks/store'
    import {getOne} from '../../hooks/dataHandling/getOne'
    import {convertDate, editOperation} from '../../hooks/dataHandling/edit'
    import { goto } from '$app/navigation';
    
    const id = $page.params.id
    const operation = async() =>{
        //console.log(await getOne($page.params.id))
        const operationData = await getOne($page.params.id)
        if(operationData.name == 'CastError'){
            return {'Error': 'Cannot find that operation'}
        }else{
            //console.log(operationData)
            operationData.parsedDate = convertDate(new Date(operationData.date))
            return operationData
        }
    }
    setItem($page.params.id)

    const test = async(e) => {
        e.preventDefault()
        const date = new Date(document.getElementById('date').value)
        const concept = document.getElementById('select').value
        const amount = document.getElementById('amount').value        
        if(!date || !concept || !amount){
            console.log('error')
        }else{
            const response = await editOperation({id, date, concept, amount})
            if(response.acknowledged === true){
                goto('/')
            }
        }
    }
</script>


{#await operation()}
{:then operationData} 

<form>
    <label>
        <input type="date" id="date">
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
        <input type="text" id="amount" value={operationData.amount}>
    </label>
    <input on:click={test} type="submit" id="submit" value="Modificar">
</form>
{/await}



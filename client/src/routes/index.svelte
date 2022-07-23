<script>
// @ts-nocheck
import Table from '../components/Home/Table/Table.svelte';
import Welcome from '../components/Home/Welcome/Welcome.svelte';
import { goto } from '$app/navigation';

import { onMount } from 'svelte';

onMount(async()=>{


  //DONT forget the negation, this is only for test and mocking purposes
  if(sessionStorage.getItem('user-token')){
    goto('/login')
  }else{
    // console.log( await getData())  
  }
})

</script>

<Welcome/>
<Table/>
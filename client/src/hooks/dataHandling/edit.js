export const convertDate = (date) => {
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
}

export const editOperation = async({id, date, concept, amount}) => {
    const rawData = {date, concept, amount}
    const data = JSON.stringify(rawData)
    const options = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: `{"id":"${id}","data":${data}}`
      };
      
      const response = await fetch('http://localhost/operations', options).then(response => response.json())
      return response
}
export const convertDate = (date) => {
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
}

export const editOperation = ({id, date, concept, amout}) => {
    const data = {id, date, concept, amout}
    const bodyData = Object.keys(data).forEach(key => data[key] === undefined && delete data[key])
    const options = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: `{"id":"${id}","data":${bodyData}}`
      };
      
      fetch('http://localhost/operations', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}
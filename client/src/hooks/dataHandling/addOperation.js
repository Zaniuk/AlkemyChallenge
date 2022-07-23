export const addOperation = ({concept, type, amount, user}) => {
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: `{"concept":"${concept}","amount": ${new Number(amount)},"type":"${type}","user":"${user}"}`
      };
      
      fetch('http://localhost/operations', options)
        .then(response => response.json())
        .then(response =>  {return response})
        .catch(err => console.error(err));
}
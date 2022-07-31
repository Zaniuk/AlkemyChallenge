export const convertDateToStriing = (d) => {
    const date = new Date(d)
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
}
export const getAll = async(user) => {
    const options = {method: 'GET', headers: {user: user}};
    const data = await fetch('http://localhost/operations', options).then(response => response.json())
    return data
}
export const getOne = async (id) => {
    const data = await fetch(`http://localhost/operations/${id}`).then(response => response.json())
    return data
}
export const updateOne = async({id, date, concept, amount}) => {
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
export const createOpr = async({concept, amount, type}) =>{
    const user = '62d34380b3954d8270d05ea2'
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: `{"concept":"${concept}","amount":${amount},"type":"${type}","user":"${user}"}`
      };
      
      const res = fetch('http://localhost/operations', options).then(response => response.json())
      return res

}
const sortOperations = (operations) => {
    const data = operations.sort((a,b) => {
        if(a.date < b.date) return 1
        if(a.date > b.date) return -1
        return 0
    })
    return data
}
export const getLatest = async(user)  => {
    const data = await getAll(user)
    const sortedData = sortOperations(data)
    return sortedData.slice(0, 10)
}

export async function getBalance(user){
    const data = await getAll(user)
    
    let balance = 0
    data.forEach(el => {
        if(el.type === 'income'){
            balance += el.amount
        }else{
            balance -= el.amount
        }
    });
    return balance
}
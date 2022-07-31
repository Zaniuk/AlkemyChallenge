export const convertDateToStriing = (d) => {
    const date = new Date(d)
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
}
export const getAll = async(user) => {
    const options = {method: 'GET', headers: {user: user}};
    const data = await fetch('http://localhost/operations', options).then(response => response.json())
    return data
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
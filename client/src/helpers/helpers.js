export const convertDateToStriing = (d) => {
    const date = new Date(d)
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}
export const getAll = async (token) => {
    const options = {method: 'GET', headers: {token: token}};
    const data = await fetch('http://localhost/operations', options).then(response => response.json())
    return data
}
export const getOne = async (id) => {
    const data = await fetch(`http://localhost/operations/${id}`).then(response => response.json())
    return data
}
export const updateOne = async ({ id, date, concept, amount }) => {
    const rawData = { date, concept, amount }
    const data = JSON.stringify(rawData)
    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: `{"id":"${id}","data":${data}}`
    };

    const response = await fetch('http://localhost/operations', options).then(response => response.json())
    return response
}

export const deleteOperation = async (id) => {
    const options = { method: 'DELETE' };

    const res = await fetch(`http://localhost/operations/${id}`, options).then(response => response.json())
    return res
}

export const createOpr = async ({ concept, amount, type, token }) => {
    const user = '8b342aa0-4515-4aff-bcfc-e05deeb67509'
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: `{"concept":"${concept}","amount":${amount},"type":"${type}","token":"${user}"}`
    };

    const res = fetch('http://localhost/operations', options).then(response => response.json())
    return res

}
const sortOperations = (operations) => {
    const data = operations.sort((a, b) => {
        if (a.date < b.date) return 1
        if (a.date > b.date) return -1
        return 0
    })
    return data
}
export const getLatest = async (token) => {
    const data = await getAll(token)
    const sortedData = sortOperations(data)
    return sortedData
    
}

export async function getBalance(user) {
    const data = await getAll(user)

    let balance = 0
    data.forEach(el => {
        if (el.type === 'income') {
            balance += el.amount
        } else {
            balance -= el.amount
        }
    });
    return balance
}

export const login = ({ email, password }) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: `{"email":"${email}","password":"${password}"}`
    };

    fetch('http://localhost/users/login', options)
        .then(res => res.json())
        .then(res => {
            sessionStorage.setItem(token, res.token)
        })
        .catch(err => console.error(err))
}
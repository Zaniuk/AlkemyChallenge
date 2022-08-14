export {
    convertDateToStriing,
    getAll,
    getOne,
    updateOne,
    deleteOperation,
    createOpr,
    sortOperations,
    getLatest,
    getBalance, 
    login    
}
const convertDateToStriing = (d) => {
    const date = new Date(d)
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}
 const getAll = async (token) => {
    const options = { method: 'GET', headers: { token: token } };
    const data = await fetch('http://localhost/operations', options).then(response => response.json())
    
    return data
}
 const getOne = async (id) => {
    const data = await fetch(`http://localhost/operations/${id}`).then(response => response.json())
    return data
}
 const updateOne = async ({ id, date, concept, amount }) => {
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

 const deleteOperation = async (id, token) => {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            token: `${token}`
        },
        body: `{"id":"${id}"}`
    };

    const res = await fetch(`http://localhost/operations/`, options).then(response => response.json())
    return res
}

 const createOpr = async ({ concept, amount, type, token }) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            token: token
        },
        body: `{"concept":"${concept}","amount":${amount},"type":"${type}"}`
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
 const getLatest = async (token) => {
    const data = await getAll(token)
    const sortedData = sortOperations(data)
    return sortedData.slice(0, 10)

}

 async function getBalance(user) {
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

 const login = async ({ email, password }) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: `{"email":"${email}","password":"${password}"}`
    };

    const user = await fetch('http://localhost/users/login', options)
        .then(res => res.json())
        .then(res => sessionStorage.setItem('token', res.token))
        .then(() => {
            return sessionStorage.getItem('token')
        })
        return user
}
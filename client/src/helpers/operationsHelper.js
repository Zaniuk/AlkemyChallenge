export {
    getAll,
    getOne,
    updateOne,
    deleteOperation,
    createOpr,
    sortOperations,
    getLatest,
    getBalance
}
const apiManager = async (options) => {
    return await fetch('http://localhost/operations', options).then(response => response.json())
}
const getAll = async (token) => {
    const options = { method: 'GET', headers: { token: token } };
    return await apiManager(options)
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

    return await apiManager(options)
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

    return await apiManager(options)
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


    return await apiManager(options)
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
        el.type === 'income' ? balance += el.amount : balance -= el.amount
    });
    return balance
}
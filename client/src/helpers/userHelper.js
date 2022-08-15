export {
    login
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
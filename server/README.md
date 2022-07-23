# GETTING OPERATIONS
For getting operations for a given user, you need to pass the _id of the document of the user what are you asking for:
```js
 
const options = {
  method: 'GET',
  headers: {'Content-Type': 'application/json'},
  body: '{"user":<user _id>}'
};

fetch('http://localhost/operations', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

//It returns: 
[
    {
        "_id": "...",
		"concept": "...",
		"amount": ...,
		"date": "2022-07-18T17:05:47.211Z",
		"type": "income",
		"user": "...",
		"__v": 0
    }
] 

```
# Getting the user-token:

For getting the user token you need to pass and object with the email and password properties

```js
const options = {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: '{"email":"...","password":"..."}'
};

fetch('http://localhost/login', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

  //it returns the user token in response header
```
# Register a new user: 

For register a new user you need to pass a object with username, email and password properties

```js
const options = {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: '{"username":"geronimomw2","email":"geroza49@gmail.com","password":"callofdutymw3"}'
};

fetch('http://localhost/register', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

  
  //It returns a object if sucessfully:

    {
	    "message": "User created sucessfully"
    }
//Or a message like this if the user with username or email is already used:

{
	"message": "username already exists"
}
```

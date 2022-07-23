export const removeOne = async(id) => {
    const options = {method: 'DELETE', headers: {'Content-Type': 'application/json'}, body: 'false'};

    const response = await fetch(`http://localhost/operations/${id}`, options).then(response => response.json())
    return response
}
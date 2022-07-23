export const removeOne = async(id) => {
    const options = {method: 'DELETE'};
    const response = await fetch(`http://localhost/operations/${id}`, options)
    return response
}

export const getOne = async(id) => {
    const data = await fetch(`http://localhost/operations/${id}`).then(response => response.json())
    return data
}
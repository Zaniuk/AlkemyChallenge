export const dateToISO = (date: string) => {
    const parsedDate = new Date(date).toISOString().split('T')[0];
    
    return parsedDate.split('-').reverse().join('-');
}
const diggers = localStorage.getItem('diggers')

export default diggers || []

export const setDiggersToStorage = diggers => localStorage.setItem('diggers', JSON.stringify(diggers))
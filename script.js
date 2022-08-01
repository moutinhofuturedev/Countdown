const getDate = document.getElementById('date')
// const date = new Date()
// getDate.textContent = date.toLocaleDateString('pt-BR').padStart(2, ' • ')

function currentDate() {
    const setDate = new Date()

    const day = formatDate(setDate.getDate())
    const mounth = formatDate(setDate.getMonth() + 1) 
    const year = formatDate(setDate.getFullYear())

    function formatDate(d) {
        return String(d).padStart(2, '0')
    }

    return `${day} • ${mounth} • ${year}` 
}
getDate.textContent = currentDate()
console.log(currentDate())

const showingTime = document.querySelector('strong')

function currentTime() {
    const setTime = new Date()

    const H = formatTime(setTime.getHours())
    const M = formatTime(setTime.getMinutes())
    const S = formatTime(setTime.getSeconds())

    function formatTime(f) {
        return String(f).padStart(2, '0')
    }

    return `${H}:${M}:${S}`
}

function connectedCallback() {
    setInterval(() => {
        showingTime.textContent = currentTime()
        console.log('Callback funcionou')
    }, 1000)
}
connectedCallback()

showingTime.textContent = currentTime()

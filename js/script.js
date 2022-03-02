let counter = document.querySelectorAll('.counter')
let counterArr = Array.from(counter)

counterArr.map((item) => {
    let count = 0
    let counterup = () => {
        item.innerHTML = count++
        if (count > item.dataset.number) {
            clearInterval(stop)
        }
    }

    let stop = setInterval(() => {
        counterup()
    }, 100)
})
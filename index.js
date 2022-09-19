const addButton = document.getElementById('addButton');
const main = document.getElementById("main");

addButton.addEventListener('click', () => {
    main.innerHTML += `<button type="button">New button (${new Date().getTime()})</button>`
})

main.addEventListener('click', (event) => {
    if (event.target.tagName.toLowerCase() === 'button') {
        alert('clicked on button');
    }
})
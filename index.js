const guestList = ['Bola', 'Daniel', 'Hope', 'John', 'Liz', 'Grace', 'Seun', 'Glory', 'Peace', 'Ogo']

const guestsHtml = guestList.map(function(guest){
    return `<div class="box">${guest}</div>`
}).join("")

document.getElementById('list').innerHTML = guestsHtml
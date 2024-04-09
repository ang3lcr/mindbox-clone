const cardCursando = document.getElementById("card")
const cardHorario = document.getElementById("card2")
const button1 = document.getElementById("cursando");
const button2 = document.getElementById("horario");
cardHorario.classList.add("hidden")


button1.onclick = () => {
    cardCursando.classList.remove('hidden');
    cardHorario.classList.add('hidden');
}

button2.onclick = () => {
    cardCursando.classList.add("hidden")
    cardHorario.classList.remove("hidden")
}



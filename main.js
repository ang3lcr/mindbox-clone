const cardCursando = document.getElementById("card")
const cardHorario = document.getElementById("card2")
const button1 = document.getElementById("cursando");
const button2 = document.getElementById("horario");
cardHorario.classList.add("hidden")
button1.classList.add("bg-violet-600")
button1.classList.add("text-white")


button1.onclick = () => {
    cardCursando.classList.remove('hidden');
    cardHorario.classList.add('hidden');
    button1.classList.add("bg-violet-600")
    button1.classList.add("text-white")
    button2.classList.remove("bg-violet-600")
    button2.classList.remove("text-white")
}

button2.onclick = () => {
    cardCursando.classList.add("hidden")
    cardHorario.classList.remove("hidden")
    button2.classList.add("bg-violet-600")
    button2.classList.add("text-white")
    button1.classList.remove("bg-violet-600")
    button1.classList.remove("text-white")
}



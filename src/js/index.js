import Profile from './Profile.js';
import Conversation from './Conversation.js';

let av1 = "assets/images/av1.jpeg";
let av2 = "assets/images/av2.jpeg";
let av3 = "assets/images/av3.jpeg"

const saraProfile = new Profile("Sara", av1, {
    lang: "es",
    rate: 2.0,
    pitch: 1.0,
    color: "#ff0000",
    volume: 1
});

const wizardProfile = new Profile("Wizard", av2, {
    lang: "es",
    rate: 1.0,
    pitch: 0.5,
    color: "#f8ff13",
    volume: 1
});

const linkProfile = new Profile("Link", av3, {
    lang: "es",
    rate: 1.0,
    pitch: 0.5,
    color: "#e800ff",
    volume: 1
});

    //Cremos un objeto conversation cuando coga el identificador del chat
    const conversation = new Conversation(document.querySelector('#playchat'));
    //Cuando hagamos click en el boton
    //$(document.querySelector("button")).on('touchstart click', function () { /* do something... */
    const button = document.querySelector("button");
    button.addEventListener("click", () => {
        //document.querySelector("button").onclick = () => {
        //El chat se vuelve visible una vez le damos al boton del play *********************
        document.querySelector('#playchat').style.visibility = 'visible';
        //Añadimos al objeto conversation los mensajes
        conversation.addMessage([
            { author: saraProfile, text: "¡Hola a todos! ¿Qué tal están?" },
            { author: linkProfile, text: "Muy bien, ¡gracias!" },
            { author: wizardProfile, text: "Yo también muy bien" },
            { author: saraProfile, text: "El robot habla con un acento un tanto raro..." },
            { author: wizardProfile, text: "Es que soy del norte" },
        ]);
    });

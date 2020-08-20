import Profile from './Profile.js';
import Conversation from './Conversation.js';

// Intentando añadir avatares mediante JS
// var av1 = new Image(150,150);
// av1.src = "../assets/images/av1";
// No funciona
// var av1 = "../assets/images/av1";

var av1 = "https://i.pinimg.com/564x/d5/f7/ef/d5f7efb5c1babc9bb53c093e25f0a2fb.jpg";
var av2 = "https://i.pinimg.com/564x/45/b3/cd/45b3cda81e634e060195c49e20870c15.jpg";
var av3 = "https://i.pinimg.com/564x/5b/0f/70/5b0f707b6e50dd229e60c21412b128fb.jpg";

const saraProfile = new Profile("Sara", av1, {
    lang: "es",
    rate: 1.7,
    pitch: 1.6,
    color: "#ff0000",
    volume: 1
});

const wizardProfile = new Profile("Wizard", av2, {
    lang: "es",
    rate: 0.5,
    pitch: 0.2,
    color: "#f8ff13",
    volume: 1
});

const linkProfile = new Profile("Link", av3, {
    lang: "es",
    rate: 1.5,
    pitch: 0.3,
    color: "#e800ff",
    volume: 1
});

const conversation = new Conversation(document.querySelector('#playchat'));

const button = document.querySelector("button");
button.addEventListener("click", () => {
    document.querySelector('#playchat').style.visibility = 'visible';
    conversation.addMessage([
        { author: saraProfile, text: "¡Hola a todos! ¿Qué tal están?" },
        { author: linkProfile, text: "Muy bien, ¡gracias!" },
        { author: wizardProfile, text: "Yo también muy bien" },
        { author: saraProfile, text: "El robot habla con un acento un tanto raro..." },
        { author: wizardProfile, text: "Es que soy del norte" },
    ]);
});

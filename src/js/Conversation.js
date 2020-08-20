export default class Conversation { 
    // Trabajar y controlar las conversaciones de los personajes
    constructor(playchat) { 
        this.playchat = playchat;
    }
    addMessage(conversation) {
        conversation.map((type) => { 
            const msg = new SpeechSynthesisUtterance();
            msg.name = type.author.name;
            msg.avatar = type.author.avatar;
            msg.lang = type.author.lang;
            msg.color = type.author.color;
            msg.rate = type.author.rate;
            msg.pitch = type.author.pitch;
            msg.volume = type.author.volume;
            msg.text = type.text;
            //console.log(msg.avatar);
         
            msg.onstart = () => {
                this.playchat.innerHTML += `<div class="" style="color: ${type.author.color}; display: flex; align-items: center">
                <img src="${msg.avatar}" width=\"150px\" height=\"150px\"> &nbsp;
                ${type.author.name} dice: ${type.text}</div>`;
            }
            speechSynthesis.speak(msg);                  
        });
    }
}
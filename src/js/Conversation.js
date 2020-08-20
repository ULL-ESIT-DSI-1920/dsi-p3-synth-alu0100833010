export default class Conversation { 
    // Trabajar y controlar las conversaciones de los personajes
    constructor(box) { 
        this.box = box;
    }
    addMessage(chat) {
        chat.map((cvt) => { 
            const msg = new SpeechSynthesisUtterance();
            msg.name = cvt.author.name;
            msg.avatar = cvt.author.avatar;
            msg.lang = cvt.author.lang;
            msg.color = cvt.author.color;
            msg.rate = cvt.author.rate;
            msg.pitch = cvt.author.pitch;
            msg.volume = cvt.author.volume;
            msg.text = cvt.text;
         
            msg.onstart = () => {
                this.box.innerHTML += `<div class="cvt" style="color: ${cvt.author.color}">${cvt.author.name}: ${cvt.text}</div>`;
            }
            speechSynthesis.speak(msg);                  
        });
    }
}
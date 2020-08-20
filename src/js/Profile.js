export default class Profile {
    // características del personaje
    constructor(name, features) {
        this.name = name;               // Nombre del personaje
        this.color = features.color;    // Color del texto
        this.lang = features.lang;      // Idioma del texto
        this.rate = features.rate;      // Velocidad del texto
        this.pitch = features.pitch;    // Tono del texto
        this.volume = features.volume;  // Volumen del texto
    }
}
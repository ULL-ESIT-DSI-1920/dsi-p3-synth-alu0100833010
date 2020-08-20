export default class Profile {
    // características del personaje
    constructor(name, avatar, features) {
        this.name = name;               // Nombre del personaje
        this.avatar = avatar;           // Avatar del personaje
        this.lang = features.lang;      // Idioma del texto
        this.rate = features.rate;      // Velocidad del texto
        this.pitch = features.pitch;    // Tono del texto
        this.color = features.color;    // Color del texto
        this.volume = features.volume;  // Volumen del texto
    }
}
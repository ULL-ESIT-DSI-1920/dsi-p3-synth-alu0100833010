# dsi-p3-synth-alu0100833010

_Práctica 3.  Javascript + SpeechSynth._

## Descripción de la Práctica  dsi-p3-synth.

Vamos a utilizar la API de síntesis de voz del navegador para construir un sistema simple de diálogos para un juego.

El objetivo es crear varios perfiles de personajes, cada uno con sus propias características particulares. 

## Comenzando

### 1. Crea un proyecto en _Parcel_.

Para comenzar la práctica  crearemos un proyecto con Parcel para poder trabajar y realizar la práctica. Para ello comenzamos
creando la estructura del proyecto .

#### Pasos para crear el proyecto.

* **Scaffolding** 

  Creamos las carpetas:
  ```
  mkdir -p nombre-repo/src/{css,js,assets}
  ```
  Nos situamos en el repo:
  ```
  cd nombre-repo
  ```
* **Git**

  Inicializamos el repo con git:
  ```
  git init
  git remote add origin...
  touch .gitignore
  touch README.md
  ```
* **NPM**

  Inicializamos el repo con npm:
  ```
  npm init -y
  ```
* **Instalación de ParcelJS**
  ```
  // Instalamos parcel en nuestro proyecto.
  npm install -D parcel-bundler
  
  // Punto de entrada para parcel.
  npx parcel src/index.html
  ```
* **Linters**
  ```
  npm install -D eslint
  ```
* **Formateador de código: Prettier**
  ```
  // Configurar nuestro proyecto para Prettier
  npm install -D prettier
  
  // Plugins para evitar conflictos entre Prettier y ESLint.
  npm install -D eslint-config.prettier eslint-plugin-prettier
  ```
  
  Tras esto, la estructura final del proyecto quedaría:
  
  ![Captura1](src/assets/captures/cap1.png)
  
### 2. Carpeta _Assets_.

Busca varias canciones en formato MP3 y guárdalas en la carpeta assets. Haz lo mismo con varias imágenes para las carátulas de los
vinilos.

 ![Captura2](src/assets/captures/cap2.png)
 
Para añadir las imágenes se ha usado la propiedad `background-image` desde CSS:

 ![Captura3](src/assets/captures/cap3.png)
 

 
### 5. Publicación en _gh-pages_.
 
Para publicar nuestro proyecto en **gh-pages**, ejecutamos los siguientes comandos:
```
$ npx parcel build src/index.html --no-minify
$ npx parcel build src/index.html --no-source-maps --detailed-report
$ npx parcel build src/index.html --public-url /dsi-p2-jspotify-alu0100833010/ -d build
$ npx gh-pages -d build
```
![Captura9](src/assets/captures/cap9.png)

Enlace:  https://ull-esit-dsi-1920.github.io/dsi-p2-jspotify-alu0100833010/

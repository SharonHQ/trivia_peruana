
#TRIVIA PERUANA
___
_Consiste en 2 categorías DEPORTES Y GASTRONOMÍAS cada una con 3 preguntas, y por ultimo nos muestra el resultado._
___
##REQUERIMIENTOS
___
_Los requerimientos que tuvimos para hacer el proyecto_
1. Mostrar una pantalla de bienvenida, pida tu nombre para comenzar a jugar.
2. Mostrar un mensaje de Hola [tu nombre] y dos botones para comenzar a jugar.
3. Jugar con preguntas de tipo A (Por ejemplo: sobre comida)
4. Jugar con preguntas de tipo B (Por ejemplo: sobre cervezas)
5. Lanzar la pregunta 1 con alternativas, el usuario responde, luego se muestra la pregunta 2 y luego la 3.
6. Mostrar una pantalla de resultados (respuestas correctas) y dos botones de
7. volver a jugar:
    - Jugar con preguntas de tipo A (Por ejemplo: sobre comida)
    - Jugar con preguntas de tipo B (Por ejemplo: sobre cervezas)
____
##DISEÑO
- Para el diseño, nos basamos mucho en la temática, e intentamos hacerlo lo más claro posible.
- Utilizamos la plataforma online Scketch.io para hacer un diseño más completo de las pantallas posibles.
- Se pueden visualizar todas las pantallas en la carpeta Scketch, en la raíz del proyecto.
____
##PROCESO
____
### ESTRUCTURA HTML
___
_Creamos un archivo HTML por cada vista y son las siguientes:_
1. index.HTML: es la pantalla de bienvenidadonde pedimos el nombre al usuario.
2. category.HTML: es la pantalla donde saludamos al usuario y le damos a elegir entre dos categorías.
3. sport.html: mostramos las preguntas en orden secuencial, cada una con tres opciones, donde al elegir una, automáticamente te muestra la siguiente.
4. gastronomy.html: mostramos las preguntas en orden secuencial, cada una con tres opciones, donde al elegir una, automáticamente te muestra la siguiente.
### FUNCIONALIDADES JS
___
#####Archivos y Funciones
1. app.js: creamos la función saveName para guardar en local el nombre ingresado y mostrar categorías, en caso no se ingrese ningún dato no redirecciona.
2. test.js: creamos tres funciones:
  -question2: nos muestra la pregunta 2 y contabiliza puntos.
  -question3: nos muestra la pregunta 3 y contabiliza puntos.
  -seeResult: muestra los resultados, un mensaje de aliento y un botón que redirecciona a category.
#####Js en el HTML
- Llamamos en el archivo category.html dentro de la etiqueta script la función saveName para mostrar el dato guardado en pantalla.
- Para las preguntas:
  -Dentro de cada opción de la primera pregunta con onclick llamamos a la función question2 y le pasamos el parámetro right o vacío según corresponda.
  -Dentro de cada opción de la segunda pregunta con onclick llamamos a la función question3 y le pasamos el parámetro right o vacío según corresponda.
  -Dentro de cada opción de la tercera pregunta con onclick llamamos a la función seeResult y le pasamos el parámetro right o vacío según corresponda.
____
### ESTILOS EN CSS
_Creamos dos archivos CSS para toda la aplicación, según el prototipo diseñado_
1. main.css: define los estilos genéricos de la aplicación y le da los estilos necesarios a index.html y category.html.
2. test.css: define los estilos más específicos para sport.html y gastronomy.html
____
##AUTORES
* Lorenna
* Margarita
* Sharon

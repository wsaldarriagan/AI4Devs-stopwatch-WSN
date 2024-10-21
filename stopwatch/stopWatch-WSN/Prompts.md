#prompts para la generación del Cronómetro
## Resumen
### Prompt inicial

    **Actúa como un desarrollador frontend experimentado en HTML, CSS y JavaScript.**

    Necesito que crees una aplicación web en local que incluya tanto un **cronómetro** como una **cuenta regresiva**, con las siguientes características funcionales y de diseño:

    ### 1. Opciones de la aplicación:
    - Debe existir una sección en la aplicación que le permita al usuario seleccionar la opcion que quiera operar, sea **cronómetro** o **cuenta regresiva**.
    - La opción por default sera **cronómetro**.
    - Al cambiar de opciones los valores de ambas funcionalidades deben reiniciarse.


    ### 2. Cronómetro:
    - Debe tener dos botones: **Iniciar/Pausar** (verde) y **Reiniciar** (rojo).
    - El tiempo debe mostrarse en formato **MM:SS:MS** (minutos, segundos, milisegundos).
    - La lógica del cronómetro debe estar implementada en **JavaScript**, permitiendo iniciar, pausar y reiniciar el cronómetro cuando sea necesario.
    - Al pulsar "Iniciar", el botón debe cambiar automáticamente a "Pausar", y viceversa.
    - El botón "Reiniciar" debe detener y resetear el cronómetro.



    ### 3. Cuenta regresiva:
    - El usuario debe poder ingresar un tiempo objetivo en **minutos y segundos**.
    - Los valores por default de los campos deben estar en cero.
    - Los campos no deben permitir valores en negativo.
    - La cuenta regresiva debe comenzar al pulsar **Iniciar/Pausar**, y debe detenerse automáticamente al llegar a cero.
    - Al igual que con el cronómetro, el botón de "Iniciar" debe cambiar a "Pausar" una vez iniciado.
    - Debe haber un botón de **Reiniciar** que permita restablecer la cuenta regresiva en cualquier momento.
    - Si no se ha ingresado un tiempo en la cuenta regresiva, o este es igual a cero, debe aparecer un mensaje de alerta que diga: "**Introduce los valores necesarios**".



    ### 4. Diseño:
    - Los botones deben tener un tamaño fijo para mantener la **simetría** en la interfaz.
    - Las etiquetas de los botones deben estar en **español**: "Iniciar/Pausar" y "Reiniciar".
    - El diseño debe asegurar que los tamaños de los botones no cambien al ser interactuados.
    - Los estilos requeridos para la aplicación deben manejarse en un archivo CSS.


    ### 5. Consideraciones técnicas:
    - Todos los archivos deben estar organizados en un solo proyecto con **index.html**, **script.js** y **styles.css** correctamente vinculados.
    - Utiliza buenas prácticas de código en **JavaScript** para manejar los eventos del cronómetro y la cuenta regresiva.


    ### 6. Extras:
    - Asegúrate de que ambos componentes (cronómetro y cuenta regresiva) funcionen de manera independiente, pero con la misma lógica de botones.
    - Si el cronómetro o la cuenta regresiva se pausan, el botón debe cambiar a "Iniciar" para que el usuario pueda reanudar la función.

    ### 7. Entendimiento:
    - Hazme las preguntas que concideres necesarias para entender el requerimiento antes de iniciar con le ejecución.

### Promp 2 - Ajuste funcionalidad
    Revisando la funcionalidad me encontre los siguientes ajustes:
    1. En el momento de cargar la pagina la primera funcionalidad que debe estar cargada es la del **cronómetro** y el boton debe estar en verde.
    2. Al seleccionar un boton sea **cronómetro** o **cuenta regresiva**, este debe cambiar a color verde y el otro a color gris, debe funcionar asi para ambos.


    Entregame el codigo completo de los archivos que modifiques

### Promp 3 - Ajuste funcionalidad - cuenta regresiva
    Requiero dos ajustes en la funcionalidad de cuenta regresiva:


    1. Amplia el tamaño de los campos de minutos y segundos para que se alcance a leer el texto que esta allí escrito por defecto. 
    2. en el momento que el usuario seleccione un valor en uno de los dos campos "Minutos" o "segundos", requiero que automáticamente el otro valor se le asigne un cero, lo anterior con el fin que si el usuario requiere por ejemplo 1 minuto, no tenga la necesidad de digitar los segundos. 


    Entrégame el código completo de los archivos que modifiques


### Promp 4 - Ajuste funcionalidad - boton de Reiniciar
    Requiero que el valor que tengan los campos de minutos y segundos sea cero, sea porque el usuario selecciono el valor de cuenta regresiva, o porque selecciono la opción de reiniciar.

    Entrégame el código completo de los archivos que modifiques

### Promp 5 - Ajuste funcionalidad - sonido al terminar la cuenta regresiva
    No se escucha el sonido al terminar el conteo regresivo.
    Si requieres modificar algo entrégame el código completo de los archivos que modifiques

### Promp 6 - Eliminar funcionalidad - sonido al terminar la cuenta regresiva    
    Eliminemos la funcionalidad del sonido.
    Si requieres modificar algo entrégame el código completo de los archivos que modifiques

### Promp 6 - Solucionar error
    sale este error, corrigelo por favor 
    "GET file:///C:/Users/Usuario/Drive_William/Personal/Bootcamp%20IA/LIDR/Repositorios/AI4Devs-stopwatch-WSN/stopwatch/stopWatch-WSN/alarm.mp3 net::ERR_FILE_NOT_FOUND"

### Promp 7 - Solucionar error
    segun veo el error es en el html, ajustalo por favor.
    Si requieres modificar algo entrégame el código completo de los archivos que modifiques


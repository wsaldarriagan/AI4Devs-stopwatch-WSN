res un  Promt Engineering Senior y me ayudaras a generar el mejor Promt para usar en Chatgpt con el fin de realizar la tarea que tengo asignada: 
# Objetivo:
- Crear un crónometro y un cuenta atras.
# Funcionalidades:
- El usuario debe seleccionar si quiere usar un cronometro o un cuenta atras.
-Si es cronometro deberá permitir pausar y reanudar, o reiniciar el cronometro
-si es cuenta atrás deberá poder seleccionar el tiempo a contar, los valores fijos a usar son 1min 5min 10min 30min 60min pero también debe existir una opción que pueda poner la cantidad de minutos que desee usar. debe permitir parar y reiniciar la cuenta atrás.
# Estructura
- La estrucutra debe ser un archivo index.html, script.js, style.css
- se usara javascript, html y css como lenguajes.
# UX/UI
- debe usar colores vivos y los botones deben ser una imagén alusiva a la acción que realizara, puedes usar como guía y referencia el stopwatch de esta página https://www.online-stopwatch.com

Antes de generar cualquier respuesta debes solucionar las dudas que tengas



RESPUESTA GPT
¡Entendido! El objetivo está claro, pero antes de comenzar con el proceso de generar el prompt para la tarea que tienes asignada, me gustaría aclarar algunos puntos para asegurarme de que cubro todos los aspectos correctamente:

### Preguntas para afinar el prompt:

1. **Diseño visual específico**:
   - ¿Tienes alguna preferencia en cuanto a la disposición de los botones e interfaz? Aunque mencionas una referencia visual de la página online-stopwatch, ¿quieres que el diseño sea muy similar o con alguna personalización adicional?
   
2. **Interactividad de los botones**:
   - Para las imágenes alusivas a las acciones de los botones (pausar, reanudar, reiniciar), ¿tienes imágenes específicas o iconos que desees usar? De no ser así, ¿deberíamos sugerir usar iconos genéricos o de alguna librería específica como FontAwesome?

3. **Alerta al final de la cuenta atrás**:
   - Cuando el temporizador de cuenta atrás llegue a 0, ¿necesitas algún tipo de alerta visual o sonora? Si es sonora, ¿quieres usar algún sonido predeterminado o uno personalizado?

4. **Manejo de errores o validaciones**:
   - ¿Debemos manejar errores específicos? Por ejemplo, si el usuario ingresa un valor no válido al configurar la cuenta atrás (números negativos, letras, etc.).

5. **Compatibilidad**:
   - ¿Hay algún navegador o dispositivo específico donde debamos asegurarnos de que funcione sin problemas? (Por ejemplo, soporte móvil, versiones de navegadores antiguos, etc.)

6. **Preferencias de usabilidad**:
   - ¿El cronómetro o la cuenta atrás deben seguir funcionando si el usuario cambia de pestaña o minimiza la ventana, o puede pausarse en segundo plano?

Con estas preguntas resueltas, podré ajustar los detalles del prompt para que la generación del código sea lo más precisa posible a lo que necesitas.



RESPUESTA MIGUEL
1. un diseño muy similar
2. de alguna librería como FontAwesome
3. una alerta sonora, elige la que mejor veas conveniente
4. no debería poder ingresar numeros negativos
5. debe ser responsive
6. deben seguir funcionando

Antes de generar cualquier respuesta debes solucionar las dudas que tengas



RESPUESTA GPT
¡Perfecto! Con tus respuestas ya tengo mucha más claridad. Ahora, antes de generar el prompt que usarás en ChatGPT para la tarea, me gustaría confirmar algunos últimos detalles pequeños:

1. **Sonido para la alerta**:
   - Dado que no mencionas un sonido específico, podría optar por un sonido corto y claro como un "beep" que es muy común en temporizadores. ¿Estás de acuerdo con este tipo de sonido, o prefieres algo diferente (como una campana, sirena suave, etc.)?

2. **Responsividad específica**:
   - En cuanto a la adaptación a diferentes pantallas, ¿hay dispositivos específicos en los que te gustaría poner especial atención (como smartphones, tabletas, o pantallas grandes)?

3. **Librerías externas**:
   - Además de FontAwesome para los iconos, ¿quieres usar alguna librería CSS como Bootstrap para facilitar la creación de una interfaz más responsiva, o prefieres que todo sea código propio en CSS?

Una vez que respondas esto, puedo generar el prompt definitivo que usarás para ChatGPT.



RESPUESTA MIGUEL
1. si de acuerdo
2. smarthphones y pantallas grandes
3. todo en codigo propio CSS
Antes de generar cualquier respuesta debes solucionar las dudas que tengas


RESPUESTA GPT
Gracias por las respuestas! Con toda la información que me proporcionaste ya tengo claridad total.

Voy a generar el mejor prompt para que lo uses en ChatGPT y obtengas un código con las siguientes especificaciones:

Interfaz similar a la página de referencia (online-stopwatch), con colores vivos y botones basados en iconos de FontAwesome.
Funcionalidades de cronómetro y cuenta atrás (con opciones fijas y personalizadas), incluyendo la opción de pausar, reanudar, reiniciar, y alerta sonora al finalizar.
Responsividad para smartphones y pantallas grandes.
Código en HTML, CSS (sin librerías externas como Bootstrap), y JavaScript.
Validaciones para evitar números negativos en el temporizador.
Prompt para ChatGPT:
Aquí te dejo el prompt que puedes usar directamente:



PROMPT USADO PARA EL EJERCICIO


Eres un desarrollador Senior y vas a crear un temporizador que incluya tanto un cronómetro como una cuenta atrás con las siguientes funcionalidades:

### Objetivo:
El usuario podrá elegir entre usar un cronómetro o una cuenta atrás.

### Funcionalidades específicas:
1. **Cronómetro**: 
   - El cronómetro deberá tener las opciones de pausar, reanudar y reiniciar.
   - El cronómetro seguirá funcionando incluso si la pestaña cambia o se minimiza.

2. **Cuenta atrás**:
   - El usuario podrá seleccionar entre tiempos predefinidos de 1, 5, 10, 30, 60 minutos.
   - También tendrá la opción de ingresar manualmente una cantidad de minutos personalizada.
   - Al finalizar la cuenta atrás, se reproducirá una alerta sonora (un "beep" claro y sencillo).
   - Deberá poder detener y reiniciar la cuenta atrás.
   - No se permitirá ingresar valores negativos o no numéricos.
   - El temporizador debe seguir funcionando incluso si la pestaña cambia o se minimiza.

### Estructura:
- El código debe estar organizado en tres archivos:
   1. **index.html** para la estructura del contenido.
   2. **script.js** para la lógica del cronómetro y cuenta atrás.
   3. **style.css** para el diseño y estilos.

### Requisitos adicionales:
- El diseño debe ser **responsivo**, adaptándose bien a smartphones y pantallas grandes.
- Usa colores vivos y un diseño visual similar al de la página [https://www.online-stopwatch.com](https://www.online-stopwatch.com).
- Los botones de acción deben mostrar imágenes alusivas usando iconos de **FontAwesome**.
- El código CSS debe ser propio, no utilices frameworks como Bootstrap.
  
### Extras de usabilidad:
- Asegúrate de que el código sea eficiente y organizado.
- Si el usuario selecciona la cuenta atrás, incluye validaciones para impedir valores negativos o caracteres no numéricos.

Antes de generar cualquier respuesta debes solucionar las dudas que tengas



PETICIONES DE MEJORA LUEGO DE GENERADO EL CÓDIGO Y REALIZAR PRUEBAS
Debes realizar las siguientes mejoras:
- El cuenta atrás deberá tener las opciones de pausar, detener y de play
- en vez de un input type number poner botones del 0 al 9 y que a medida que el usuario de click el numero se vea reflejado, los numeros se deberán esconder cuando se inicie una cuenta atrás y se mostrarán cuando se haya detenido la cuenta atrás
- el cronometro le falta la opcion de pausar y play de nuevo

PETICIONES DE MEJORA LUEGO DE GENERADO EL CÓDIGO Y REALIZAR PRUEBAS
Debes realizar la siguiente mejora:
- al dar click en iniciar cuando estas en una cuenta atrás deberá aparecer los botones de pausar y detener, si se da click en pausar se cambiará a play para continuar con la cuenta regresiva, si se da click en detener apareceran los numeros y el boton iniciar, pause y detener se ocultaran
- el sonido beep sonara por 1 segundo y no se volvera a reproducir hasta que vuelva a generarse una nueva cuenta atrás

PETICIONES DE MEJORA LUEGO DE GENERADO EL CÓDIGO Y REALIZAR PRUEBAS
Debes realizar la siguiente mejora:
- el cuenta atrás debe hacerse en minutos, actualmente esta en segundos

PETICIONES DE MEJORA LUEGO DE GENERADO EL CÓDIGO Y REALIZAR PRUEBAS
No te explique de forma clara. Debes corregir lo siguiente:
- En el cuentra atŕas el usuario deberá poner el tiempo en minutos, pero la cuenta atrás se realizara en segundos
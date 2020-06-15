# Web Workers

En esta oportunidad quiero validar que comportamiento adopta nuestra UI cuando ejecutamos una funcion o evento muy pesado a nivel
de javascript y como este puede afectar nuesta UI y dar una mala impresion a nuestros usuarios.

##Escenarios

En este ejercicio lo que hacemos es ejecutar la Sucesión de Fibonacci donde el usuario puede interactuar y agregar hasta que siclo quiere
que se ejecute esta funcion

### Con Worker

Al ejecutar la funcion con workers enviamos el numero **5000** para que nuestra funcion fibonacci ejecutara, 
evidenciamos que la UI no se altera pero mostramos un spinner para dar entender al usuario que algo esta pasando.

<img src="test/worker.gif">

Nota: Esta herramienta sigue en desarollo y por el momento solo puede interactuar con un ambiente de demostración volatil.

# Nueva funcionalidad en Moodle: CONCEPTOS

    Bajo la idea de que algunas tareas podrían beneficiarse de utilizar un método mejor acoplado a la plataforma Moodle, he desarrollado la definición de tareas "CONCEPTOS".

    CONCEPTOS busca resolver la situación en la que un profesor le gustaría asignar una tarea cuyo objetivo es el de verificar que entendieron los estudiantes de los conceptos explicados en un módulo y por falta de un sistema acoplado a Moodle que no se asocie a un examen de tiempo limitado. Los profesores obtan por solicitar dicha tarea en formatos de procesadores de texto como .doc, .docx, .txt, entre otros. Lo cual puede generar deficiencias de entrega por el tiempo adicional de configuración inicial para redactarse.

    ## CONCEPTOS Busca que el estudiante pueda dar sus propias palabras de manera más calmada.

    La diferencia principal entre CONCEPTOS y el sistema de examen en linea puesto actualmente en Moodle es su estadía por sesión.

    ### Metodología

    La metodología del profesor debería ser de colocar todos los conceptos a la espera del análisis de cada estudiante, generando cada uno su caja de texto individual en el proceso, y mencionarle a sus alumnos una fecha límite. Los estudiantes pueden entrar en sus propios módulos y contestar cada concepto en las cajas de texto para luego guardarlos en la base de datos personal con el botón de "Guardar".

    El boton de guardar se programará para llevar cuenta de su concepto adjunto individual de tal manera que si el estudiante decide salir de la plataforma por restricciones de algún tipo, los resultados escritos por el o ella aparecerán en su pantalla nuevamente cuando ingrese en otra ocasión.

    Una vez el tiempo límite ha pasado, el profesor podrá cerrar la asignación de nuevas ediciones de conceptos con un botón (no implementado todavía) y evaluar los conceptos de cada estudiante según su identificación en Moodle.

    ### Beneficios contra el sistema viejo.

    -   Implementación directa con Moodle para la edición, no hará falta un programa externo de procesamiento de texto como MS Word, LibreOffice, Notepad.exe, Google Writter, entre otros.

    -   Calificación directa por parte del profesor. Al estar cada lista de conceptos resueltos por estudiantes, el profesor puede encontrar mayor facilidad y rápidez la colocación de notas.

    -   *En pruba* La implementación en Moodle directamente significa el uso de un navegador web únicamente, convirtiendose así en una forma facil de hacer una tarea desde un teléfono opuesto a una computadora de mesa o laptop.

    -   Sencillez de implementación, con solo indicar el título de un concepto requerido y presionar un botón, el profesor será capaz de aplicar un cambio que todos los estudiantes puedan ver en un instante.

    -   Es escalable, los nuevos conceptos pueden agregarse tanto como permita la base de datos. Con evaluación se podría agregar un mecanismo de paginación para dividir listas de conceptos en semi páginas dentro del contenedor de la tarea si es necesario.


    ### Desventajas

    El proyecto sigue en un estado muy prematuro sin pruebas en la vida real por lo que es ideal hacer mini tests, se de su aprobación, para detectar inconvenientes y resolverlos con rapidez 

    -   Implementación nueva. Por ser un sistema nuevo, requerirá que a cada profesor se le enseñe a utilizarlo. Asunto que no debería provocar tantas complicaciones ya que CONCEPTO está ideado para la facilidad de uso.


    ###### CONCEPTOS.  escrito y en desarrollo por Miguel Rosa - ShockedRose @ Github 2019



const questions = [
  {
    title:"¿Diferencia entre span y div?",
    options:[
      {textResponse:"div => es un elemento de linea y span => es un elemento de bloque", isCorrect: false},
      {textResponse:"div => es un elemento de linea  y span => es un elemento de etiqueta", isCorrect: false},
      {textResponse:"span => es un elemento de bloque y div => es un elemento de etiqueta", isCorrect: false},
      {textResponse:"span => es un elemento de linea y div => es un elemento de bloque", isCorrect: true},

    ],
  },
  {
    title:"¿Como se puede resaltar el texto en HTML?",
    options:[
      {textResponse:"Solo a través de Css", isCorrect: false},
      {textResponse:"En html5 se puede usar la etiqueta <mark></mark> y en html configuramos a travez de los estilos", isCorrect: true},
      {textResponse:"Añadiendo estilos en el html5 e incorporando el archivo de css en el encabezado de html", isCorrect: false},
    ],
  },
  {
    title:"¿Qué es un iframe y cómo funciona?",
    options:[
      {textResponse:"Un iframe es un documento HTML que se puede incrustar dentro de otra página HTML.", isCorrect: true},
      {textResponse:"Un iframe es un documento HTML que se puede incrustar dentro de un css", isCorrect: false},
      {textResponse:"Un iframe es una etiqueta que sirve para incorporar archivos de tipo media", isCorrect: false},
    ],
  },
  {
    title:"Explicar las etiquetas meta en HTML",
    options:[
      {textResponse:"Las etiquetas meta siempre van dentro del footer de la página HTML contener información sobre la descripcion del archivo, caracteres, manteniendo las reglas de SEO", isCorrect: false},
      {textResponse:"Las metaetiquetas pueden contener información sobre la codificación de caracteres , la descripción , el título del documento, etc.", isCorrect: true},
      {textResponse:"las metaetiquetas siempre va e el body del html", isCorrect: false},
    ],
  },
  {
    title:"¿Cuál es el propósito del atributo alt en las imágenes?",
    options:[
      {textResponse:"Entrega informacion para posicionar en el SEO", isCorrect: false},
      {textResponse:"proporciona informacion para describir el sitio web", isCorrect: false},
      {textResponse:"proporciona información alternativa para una imagen si un usuario no puede verla.", isCorrect: true},

    ],
  },
  {
    title:"¿Cuáles fueron algunos de los objetivos y motivaciones clave para la especificación HTML5?",
    options:[
      {textResponse:"Proporciona solo soporte que se ejecute en una PC o tableta", isCorrect: false},
      {textResponse:"Proporcione un mejor soporte semántico para la estructura de la página web a través de nuevas etiquetas de elementos estructurales.", isCorrect: true},
    ],
  },
  {
    title:"¿Qué es la codificación de caracteres?",
    options:[
      {textResponse:"se utiliza para formatear un texto en js", isCorrect: false},
      {textResponse:"Sirve para mostrar una página HTML correctamente", isCorrect: true},
      {textResponse:"son expresiones regulares", isCorrect: false},
    ],
  },
  {
    title:"¿Qué es una etiqueta de cierre automático?",
    options:[
      {textResponse:" Las etiquetas que no requieren tener etiquetas de cierre específicas se denominan etiquetas de cierre automático. <img/>", isCorrect: true},
      {textResponse:" Las etiquetas que requieren tener etiquetas de cierre específica se denominan etiquetas de cierre automático. <h1></h1>", isCorrect: false},
    ],
  },
  {
    title:"¿Qué es Git?",
    options:[
      {textResponse:"Git es un sistema de estilos en cascada.", isCorrect: false},
      {textResponse:"Git es un sistema de control de versiones distribuido (DVCS) .", isCorrect: true},
      {textResponse:"Git es un archivo de media", isCorrect: false},
    ],
  },
  {
    title:"¿Cuál es el comando para escribir un mensaje de confirmación en Git?",
    options:[
      {textResponse:"git commit -a", isCorrect: true},
      {textResponse:"git init", isCorrect: false},
      {textResponse:"git push -u origin master", isCorrect: false},
    ],
  },
  {
    title:"¿Cuál es la diferencia entre Git y SVN?",
    options:[
      {textResponse:"Git es un sistema de control de versiones centralizado (DVCS), mientras que SVN es un sistema de control de versiones distribuido.", isCorrect: false},
      {textResponse:"Git es un sistema de control de versiones distribuido (DVCS), mientras que SVN es un sistema de control de versiones centralizado.", isCorrect: true},
    ],
  },
  {
    title:" ¿Cuál es la diferencia entre pull request y branch? ",
    options:[
      {textResponse:"pull request es una rama y es solo una versión separada del código y branch es una solicitud de extracción es cuando alguien toma el repositorio, crea su propia rama, hace algunos cambios y luego intenta fusionar esa rama (poner sus cambios en el repositorio de código de la otra persona)", isCorrect: false},
      {textResponse:"pullrequest y branch se diferencian en que branch se utiliza para resubir codigo actualizado, y pullrequest para saber que archivos aun no han sido subido, el estado en que se encuentra la subida de archivos a la web", isCorrect: false},
      {textResponse:"branch es una rama y es solo una versión separada del código y pull request es una solicitud de extracción es cuando alguien toma el repositorio, crea su propia rama, hace algunos cambios y luego intenta fusionar esa rama (poner sus cambios en el repositorio de código de la otra persona)", isCorrect: true},

    ],
  },
  {
    title:"¿Cómo funciona el flujo de trabajo centralizado?",
    options:[
      {textResponse:"El flujo de trabajo centralizado utiliza un repositorio central que sirve como único punto de entrada para todos los cambios en el proyecto. La rama de desarrollo predeterminada se llama master y todos los cambios se confirman en esta rama.", isCorrect: true},
      {textResponse:"El flujo de trabajo centralizado utiliza un repositorio central que sirve como único punto de entrada para todos los cambios en el proyecto. La rama de desarrollo predeterminada se llama main y todos los cambios se confirman en esta rama.", isCorrect: false},
    ],
  },
  {
    title:" Explicar las tres formas principales de aplicar estilos CSS a una página web",
    options:[
      {textResponse:"Usando el atributo de estilo en línea en un elemento,utilizando un bloque en la sección de tu HTML<style><head>,Cargando un archivo CSS externo usando la etiqueta<link>", isCorrect: true},
      {textResponse:"Añadiendo el link en el body,con un script en el footer, anclando un css ", isCorrect: false},
    ],
  },
  {
    title:"¿Qué es CSS ?",
    options:[
      {textResponse:"CSS significa hojas de estilo en linea", isCorrect: false},
      {textResponse:"CSS significa hojas de estilo en cascada ", isCorrect: true},
      {textResponse:"CSS significa arbol de estilo en cascada ", isCorrect: false},
    ],
  },
  {
    title:"¿Cómo usar variables en Sass?",
    options:[
      {textResponse:"Las variables son una forma de almacenar información que desea reutilizar en su hoja de estilo a traves de $ antes del nombre de la variable($colorlinea)", isCorrect: true},
      {textResponse:"Las variables son una forma de almacenar información que desea reutilizar en su hoja de estilo a traves de # antes del nombre de la variable(#colorlinea)", isCorrect: false},
    ],
  },
  {
    title:"¿Cuales son los componentes de diseño que componen al box model?",
    options:[
      {textResponse:"content, background, border, margin", isCorrect: false},
      {textResponse:"content, padding, width, margin", isCorrect: false},
      {textResponse:"content, padding, border, margin", isCorrect: true},
    ],
  },
  {
    title:"¿Cual es la diferencia entre class e id?",
    options:[
      {textResponse:"Un class se usa para identificar un elemento cuando se vincula usando un identificador de fragmento, id se puede reutilizar en varios elementos dentro del documento", isCorrect: false},
      {textResponse:"Un id se usa para identificar un elemento cuando se vincula usando un identificador de fragmento, class se puede reutilizar en varios elementos dentro del documento", isCorrect: true},
      {textResponse:"id es una etiqueta, y class es un estilo para clasificar una imagen por tamaño", isCorrect: false},
    ],
  },
  {
    title:"Qué es Sass",
    options:[
      {textResponse:"Syntactically Awesome StyleSheets es un preprocesador de CSS que agrega poder y elegancia al lenguaje básico", isCorrect: true},
      {textResponse:"Syntactically Awesome StyleSheets es un framework de CSS que se utiliza para estilar css", isCorrect: false},
    ],
  },
  {
    title:"¿Qué es DOM (Document Object Model) y cómo se vincula con CSS?  ",
    options:[
      {textResponse:"El modelo de objeto de documento (DOM) es el software que se muestra en pantalla para el usuario", isCorrect: false},
      {textResponse:"El modelo de objeto de documento (DOM) es una interfaz de programación de aplicaciones multiplataforma e independiente del lenguaje que trata un documento HTML, XHTML o XML como una estructura de árbol en la que cada nodo es un objeto que representa una parte del documento.", isCorrect: true},
      {textResponse:"El DOM es una interfaz de plataforma utilizada para mostrar en consola al programador todo aquello que no debe ver el usuario, proporciona solo soporte para que se ejecute en una PC o tableta", isCorrect: false},
    ],
  },
  {
    title:"¿ Qué es operador typeof?",
    options:[
      {textResponse:"JavaScript proporciona una typeof operador que puede examinar un tipo de variable y tranformarlo a string", isCorrect: false},
      {textResponse:"JavaScript proporciona una typeof operador que puede examinar un valor y puede convertirlo al tipo que requiera que sea", isCorrect: false},
      {textResponse:"JavaScript proporciona una typeof operador que puede examinar un valor y decirle de qué tipo es", isCorrect: true},
    ],
  },
  {
    title:"¿Que es la recursividad?",
    options:[
      {textResponse:"La recursividad es un concepto que se indica cuando un método se llama a si mismo", isCorrect: true},
      {textResponse:"La recursividad es un concepto que se utiliza para devolver una funcion", isCorrect: false},
    ],
  },
  {
    title:"¿Cuál es el tipo object?",
    options:[
      {textResponse:"utliza []corchetes para definir un objeto y se utliza para crear arreglos, y añadirlos a un valor compuesto en el que puede establecer propiedades", isCorrect: false},
      {textResponse:"ultiliza {} llaves y se refiere a un valor compuesto en el que puede establecer propiedades (ubicaciones con nombre) en las que cada una tiene sus propios valores de cualquier tipo", isCorrect: true},
    ],
  },
  {
    title:"¿Que es el scope?",
    options:[
      {textResponse:"El alcance o scope es un concepto que se indica cuando un método se llama a si mismo", isCorrect: false},
      {textResponse:" El alcance es básicamente una colección de variables, así como las reglas sobre cómo se accede a esas variables por nombre. Solo el código dentro de esa función puede acceder a las variables de ámbito de esa función", isCorrect: true},
      {textResponse:"El alcance o mas conocido como scope es un operador que puede examinar un valor y decirle de qué tipo es", isCorrect: false},
    ],
  },

  {
    title:"Explicar arreglos en JavaScript",
    options:[
      {textResponse:" utiliza [] y es un objeto que contiene valores (de cualquier tipo) no particularmente en propiedades/claves con nombre, sino en posiciones indexadas numéricamente", isCorrect: true},
      {textResponse:"ultiliza {} llaves y se refiere a un valor compuesto en el que puede establecer propiedades (ubicaciones con nombre) en las que cada una tiene sus propios valores de cualquier tipo", isCorrect: false},
    ],
  },
  {
    title:"Diferencia entre == y ===",
    options:[
      {textResponse:"== comparacion estricta que comprueba la igualdad de valores con la coerción permitida, === comparacion abstracta verifica la igualdad de valores sin permitir la coerción", isCorrect: false},
      {textResponse:"=== comparación estricta que comprueba la igualdad de valores con la coerción permitida, == comparacion abstracta que verifica la igualdad de valores sin permitir la coerción", isCorrect: false},
      {textResponse:"=== comparación estricta que verifica la igualdad de valores sin permitir la coerción, y == comparación abstracta que comprueba la igualdad de valores con la coerción permitida", isCorrect: true},

    ],
  },
  {
    title:"Explicar la diferencia entre null y undefined",
    options:[
      {textResponse:"undefined es algo no ha sido inicializado y null algo  que no está disponible actualmente", isCorrect: true},
      {textResponse:"null es algo no ha sido inicializado y undefined algo  que no está disponible actualmente", isCorrect: false},
    ],
  },
  {
    title:"¿Que es una función de devolución de llamada(callBack)?",
    options:[
      {textResponse:"Callback es un concepto que se utiliza para devolver una funcion", isCorrect: false},
      {textResponse:"Es una interfaz de programación de aplicaciones multiplataforma e independiente del lenguaje que trata un documento HTML, XHTML o XML como una estructura de árbol en la que cada nodo es un objeto que representa una parte del documento.", isCorrect: false},
      {textResponse:"Es una función que se pasa a otra función como argumento y se ejecuta después de que se haya completado alguna operación", isCorrect: true},
    ],
  },
  {
    title:"¿Que es React?",
    options:[
      {textResponse:"Proporciona solo soporte para que se ejecute en una PC o tableta", isCorrect: false},
      {textResponse:"Es una biblioteca JavaScript de código abierto creada por Facebook para crear interfaces de usuario complejas e interactivas en aplicaciones web y móviles", isCorrect: true},
      {textResponse:"Es una biblioteca JavaScript que se utiliza para preprocesar un archivo ", isCorrect: false},
    ],
  },
  {
    title:"¿Que son las props?",
    options:[
      {textResponse:"Son datos transmitidos de un componente principal a un componente secundario", isCorrect: true},
      {textResponse:"es un objeto que contiene valores (de cualquier tipo) no particularmente en propiedades/claves con nombre, sino en posiciones indexadas numéricamente", isCorrect: false},
      {textResponse:"es básicamente una colección de variables, así como las reglas sobre cómo se accede a esas variables por nombre. Solo el código dentro de esa función puede acceder a las variables de ámbito de esa función", isCorrect: false},
    ],
  },
  {
    title:"Que son los hooks en React",
    options:[
      {textResponse:"Pueden contener información sobre la codificación de caracteres , la descripción , el título del documento, etc.", isCorrect: false},
      {textResponse:"Puede extraer lógica con estado de un componente para que pueda probarse de forma independiente y reutilizarse.", isCorrect: true},
      {textResponse:"Son datos transmitidos de un componente principal a un componente secundario", isCorrect: false},
    ],
  },
  {
    title:"¿Que es key y cual es su proposito?",
    options:[
      {textResponse:"pueden contener información sobre la codificación de caracteres , la descripción , el título del documento, etc.", isCorrect: false},
      {textResponse:"Las keys se deben dar a los elementos dentro de la matriz para dar a los elementos una identidad estable", isCorrect: true},
      {textResponse:"las keys son una etiqueta que sirve para incorporar archivos de tipo media", isCorrect: false},
    ],
  },
  {
    title:" ¿Qué significa que un componente se monte en React?",
    options:[
      {textResponse:"que pueden contener información sobre la codificación de caracteres", isCorrect: false},
      {textResponse:"Tiene un elemento correspondiente creado en el DOM y está conectado a eso.", isCorrect: true},
      {textResponse:"se usa para identificar un elemento cuando se vincula usando un identificador de fragmento", isCorrect: false},
    ],
  },
  {
    title:"¿Qué sucede durante el ciclo de vida de un componente de React?",
    options:[
      {textResponse:"inicializacion=>Cuando se crea una instancia de un componente y se inserta en el DOM;Montaje=>Cuando sufre algún cambio las propiedades ( props ) o el estado ( state ) del componente;Destructuracion=>Cuando el componente se elimina del DOM .", isCorrect: false},
      {textResponse:"inicializacion=>Cuando se crea una instancia de un componente y se inserta en el DOM;montaje=>Cuando sufre algún cambio las propiedades ( props ) o el estado ( state ) del componente;Desmontaje=>Cuando el componente se elimina del DOM .", isCorrect: false},
      {textResponse:"Montaje=>Cuando se crea una instancia de un componente y se inserta en el DOM;Actualización=>Cuando sufre algún cambio las propiedades ( props ) o el estado ( state ) del componente;Desmontaje=>Cuando el componente se elimina del DOM .", isCorrect: true},
    ],
  },
  {
    title:"¿ Cuál es la diferencia entre  state y props?",
    options:[
      {textResponse:"El state es un accesorio que se pasa al componente de forma similar a los parámetros de función; y las props se gestionan dentro del componente de forma similar a las variables declaradas dentro de una función", isCorrect: false},
      {textResponse:"Las props son accesorios se pasan al componente de forma similar a los parámetros de función; y el State se gestiona dentro del componente de forma similar a las variables declaradas dentro de una función", isCorrect: true},
      {textResponse:"las props y el state se diferencia en el lugar de la funcion donde se inicializa", isCorrect: false},
    ],
  },
  {
    title:"¿Qué son los componentes de orden superior (HOC) en React?",
    options:[
      {textResponse:"Un componente de orden superior (HOC) es una función que toma un componente y devuelve un nuevo componente", isCorrect: true},
      {textResponse:"Un componente de orden superior (HOC) es una función que toma una variable y la incluye en un componente", isCorrect: false},
    ],
  },
  {
    title:"¿ Qué es JSX ?",
    options:[
      {textResponse:" JSX es una interfaz de programación de aplicaciones multiplataforma e independiente del lenguaje que trata un documento HTML, XHTML o XML como una estructura de árbol en la que cada nodo es un objeto que representa una parte del documento.", isCorrect: false},
      {textResponse:" JSX es básicamente una colección de variables, así como las reglas sobre cómo se accede a esas variables por nombre. Solo el código dentro de esa función puede acceder a las variables de ámbito de esa función", isCorrect: false},
      {textResponse:"Proporciona expresividad de JavaScript junto con HTML como sintaxis de plantilla.", isCorrect: true},

    ],
  },
  {
    title:"¿Cuáles son las ventajas de usar React Hooks?",
    options:[
      {textResponse:"los ganchos en general permiten la extracción y reutilización de lógica con estado que es común a varios componentes sin la carga de componentes de orden superior o accesorios de representación.", isCorrect: true},
      {textResponse:"los ganchos en general permiten la extracción y proporcionan expresividad a la funcion así como las reglas sobre cómo se accede a esos ganchos por su nombre", isCorrect: false},
    ],
  },
  {
    title:"¿ Cómo llamar a la función de carga de useEffect con React solo una vez?",
    options:[
      {textResponse:" la función dada después del renderizado inicial , puede darle un objeto{} vacío como segundo argumento ", isCorrect: false},
      {textResponse:" la función dada después del renderizado inicial , puede darle una matriz[] vacía como segundo argumento", isCorrect: true},
    ],
  },
  {
    title:"¿Que es la desestructuracion?",
    options:[
      {textResponse:"se pueden extraer datos de arreglos y objectos y asignarlos a variables.", isCorrect: true},
      {textResponse:"Permiten la extracción y reutilización de lógica con estado que es común a varios componentes sin la carga de componentes de orden superior o accesorios de representación.", isCorrect: false},
      {textResponse:"se usa para identificar un elemento cuando se vincula usando un identificador de fragmento, class se puede reutilizar en varios elementos dentro del documento", isCorrect: false},
    ],
  },
  {
    title:"¿Que es una variable de entorno?",
    options:[
      {textResponse:"Son accesorios se pasan al componente de forma similar a los parámetros de función", isCorrect: false},
      {textResponse:" son variables externas a nuestra aplicación que residen en el sistema operativo o en el contenedor de la aplicación que se está ejecutando", isCorrect: true},
      {textResponse:" son aquellas variables que una vez que termina la ejecución de una función, devuelve el control a la función de llamada. ", isCorrect: false},
    ],
  },
  {
    title:"¿Qué es un Callback ?",
    options:[
      {textResponse:"Son datos transmitidos de un componente principal a un componente secundario con variables que una vez que termina la ejecución de una función retorna esta misma", isCorrect: false},
      {textResponse:" Es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción", isCorrect: true},
    ],
  },
  {
    title:"¿En que hooks se usan los Callbacks?",
    options:[
      {textResponse:"En useState", isCorrect: false},
      {textResponse:"En useEffect", isCorrect: true},
      {textResponse:"En useRef", isCorrect: false},
    ],
  },
  {
    title:"¿En que hooks utilizamos la desestructuracion?",
    options:[
      {textResponse:"En useEffect", isCorrect: false},
      {textResponse:"En useState", isCorrect: true},
      {textResponse:"En useRef", isCorrect: false},
    ],
  },

]
export default questions;
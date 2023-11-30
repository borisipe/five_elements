Como crear un proyecto React + vite + bootstrap en windows

proyecto vite 


Instalar node.js lts

https://nodejs.org/en

Abrir cmd

Presiona la combinación de teclas Windows+ R, en la parte inferior izquierda se abrirá una ventana llamada ejecutar, escribe cmd y presiona enter. Se abrirá una consola.

Posicionarse en el directorio deseado.

Por la consola muévete a la carpeta donde quieras guardar el proyecto, si no sabe navegar por los archivos en la consola de windows consulte el punto 2 de este documento.

Crear proyecto react vite:

Ingrese el siguiente comando en la consola y presione enter.

npm create vite@latest


Ingrese el nombre del proyecto, debe estar en minúsculas y sin espacios, use formato de escritura snake_case. Después seleccione la opción React y posteriormente la opción Javascript + swc (es la última opción). Espere un momento a que se cree el proyecto.

una vez creado el proyecto ingrese los siguientes comandos presionando Enter entre cada uno de estos:


cd nombre_del_proyecto
npm install
npm install bootstrap


Correr programa

para correr el programa, en la misma carpeta del proyecto ingrese el siguiente comando:


npm run dev


copie el link e ingreselo en el navegador de su preferencia o presione h + Enter y despues o + Enter.


Navegar por consola

Cuando usted abre la consola, esta siempre estará en la carpeta raíz, que es la primera carpeta donde se guardan todas las carpetas del sistema. 

ejemplo:

C:\Users\Tomas> 

eso significa que usted esta posicionado en la carpeta raiz, ingrese el siguiente comando para listar todas las carpetas que se encuentran dentro de la carpeta en la que usted este posicionado:


dir /AD



este comando le imprimirá en pantalla todas las carpetas que estan dentro de la carpeta raíz, para moverse a una de las carpetas ingrese el siguiente comando:


cd nombre_de_la_carpeta


(usted puede usar el auto completado presionando la tecla tab del teclado, ej: increse cd Doc… y presione la tecla tab (sin los puntos suspensivos) y vera que la consola autocompleta la palabra Documentos. Presione Enter y cree una carpeta nueva con el siguiente comando


mkdir nombre_carpeta


Para moverse dentro de la carpeta recién creada, use cd nombre_carpeta, una vez dentro pude crear su proyecto vite.

para devolverse al directorio anterior ingrese el comando:


cd



Resumen 


Entrar en carpeta
cd nombre_carpeta
Salir de carpeta
cd
Crear carpeta
mkdir nombre_carpeta
listar carpetas
dir /AD



snippets

las snippets son atajos para crear estructuras de progamacion, evitan que el desarrollador pierda tiempo escribiendo estructura monotonas. 

ingrese a VsCode y vaya a la parte de extensiones. ingrese el siguiente nombre y agregue la extensión


ES7+ React/Redux/React-Native snippets


y también:


Simple React Snippets

 


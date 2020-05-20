# mevn-stack

Aplicacion que administra y gestiona tareas utilizando MEVN Stack (MongoDB, Express, VueJs, NodeJS).

pasos para desarrollar:
- npm init --yes (crea un package.json inicial)
- todo el codigo en una carpeta src
- crear archivo .babelrc (configura babel, que es un transpilador de codigo (transforma codigo de js moderno a codigo de navegador (interprete))
- crear archivo webpack.config.js (permite configurar webpack (vue-cli))

- estructura proyecto:
    - src:
        -index.js (archivo config del servidor que permite arrancar toda la aplicacion)
        -routes (carpeta pa crear las rutas del servidor)
        -models (carpeta para poner los modelos de la db)
        -public (carpeta que mediante express se envia al nav con el codigo de vuejs transformado)
        -app (carpeta codigo del cliente, frontend en sí. después se convierte y va a public)

- instalar: 
    - back:
        -node
        -mongo
        -express
        -nodemon (refrezca el servidor cada vez que hay un cambio)
        -morgan (muestra por consola las peticiones con mas detalle)
        -mongoose (permite la conexion a mongodb y crear schemas) 
            -> previamente de correr el sistema: mongod (windows), sudo service mongod start (linux)
    
    - front:
        -webpack: para convertir codigo vuejs a javascript para poder ser interpretado por el navegador (requiere de la configuracion del archivo webpack.config.js)
        -webpack-cli
        -babel: transpila (traduce) codigo
        -babel-loader
        -babel-preset-env
        -vue-loader
        -vue-template-compiler
        -@babel/core
        -vue
        -bootstrap (CDN)

*middlewares son funciones que se ejecutan antes de que se entre a las rutas

*Antes de correr la aplicación, verificar tener instalado y corriendo mongoDb. Windows (mongod), linux (sudo systemctl start mongod)

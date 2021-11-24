# Angular-Cod3rCursos

Aula 1 

https://www.youtube.com/watch?v=NCrWXZtlc7Q&list=PLdPPE0hUkt0rPyAkdhHIIquKbwrGUkvw3
## Comando para criar o arquivo package.json
npm init -y

## comando para iniciar o download das dependencias do node e criar o arquivo package-lock
npm i json-server 

# criar um db.json onde conterá todos o end-point da API
nele conterá um array com todos os produtos que será listados 

# no package.json  dentro de scripts definir para onde será apontado a inicialização do serviço do db.json

# esse comando criará um servidor na porta 3001 e que ficará monitorando um arquivo chamado db.json 
json-server --watch db.json --port 3001


# Angular é um framework js desenvolvido pela google para desenvolver aplicações web SPA baseado em componentes 

# Conceitos essenciais 

# main.ts ->chama o AppModule -> contém um atributo bootstrap, no qual aponta para o App component, onde toda a árvore de componente é chamada 

# aplicação angular é modularizada ou seja coloca componentes dentro de um modulo  

# oque é um componente 
# um "pedaço" ou um trecho de código que define uma parte de uma tela
# HTML CSS TS= TYPE SCRIPT 
# por via de regra um modulo terá 
# Home.component.css
# home.component.html
# home.component.ts 


# install angular npm i -g @angular/cli vamos instalar o angular com esse comandoi
# create project ng new nomedoprojeto --minimal serve para instalar minimamente 
# ng serve start server angular 
# npm start start backend

# aula 3

# quando definidos como true ele ativa o css e html fica todo contido no arquivo componente.ts
"inlineTemplate": false,
"inlineStyle": false,

# no main.ts é carregado co appModule e dentro dele temos o bootstrap onde aponta o appcomonent.ts

# para colocar imagens é definido na pasta assets e na environmentes é colocado as variaveis de ambientes


# para criar um service ng g s services/product 

# injectable -> será detectada pelo angular e será possivel ser injetada em outras classes

# providIn: "root" -> é o injetor raiz da aplicação e será provido do root da aplicação 

# injeção de dependencias -> quando a classe A precisa da classe B, a classe A recebe a classe B externamente de outro componente 

Filip Arnhold Outa - RM559294
Matheus Ricardo Parreira da Silva - RM560099
Davi Paiao Correa - RM560438
Marcos Azuma - RM559883

Instruções de uso:

O código consiste em um gerador de nome de super vilão. A função pode ser acessada através do nome namegen, onde o argumento deverá ser uma string contendo o nome do usuário.
A função retornará, através da utilização de um módulo predefinido de nomes de super vilões, o nome inserido, concatenado ao nome de super vilão adquirido aleatoriamente.

Para utilizá-lo, o usuário deverá, inicialmente, executar no terminal o código "npm init -y" e adicionar uma linha ao arquivo package.json dada por "type": "module"; em seguida, 
o usuário deverá instalar o pacote através do código "npm install @redmageii/villainnamegen".

Após instalar o pacote, cria-se e executa-se um arquivo de javascript com o seguinte trecho:

import namegen from "@redmageii/villainnamegen"
console.log(namegen("Nome"))

onde o argumento da função namegen corresponderá ao nome dado pelo usuário.

A execução poderá ser verificada através do código "node ./teste.js" no terminal.




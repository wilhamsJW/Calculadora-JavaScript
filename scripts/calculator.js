//alert("Está funcionando");

/**DEFINIÇÃO SOBRE MVC?
 * 
 * Aprenda MVC - usado mundialmente por todos os programadores
 * MVC é uma organização entre dados, interface ou que o usuário ver e as regras de negócios
 * que é o que pode ou não acontecer  
 * 
 * M -> model      -> O que faz? Manipula os dados, ele que vai até o banco de dados
 * V -> view       -> O que faz? Interface que o usuário interage 
 * C -> controller -> O que faz? Determina o que vai acontecer enquanto o usuário executa um ação
 * 
 */

 window.calculator = new CalcController;
 //esse código representa o seguinte: a variável window.calculator é igual á uma nova instãncia ou um nova cópia da 
 //class CalcController
 //Porém notamos que estamos em arquivos separados entre caculadora e CalcController. Como unir esses arquivos?
 //vá no html e associe eles pelos links, dessa forma: 
 //               <script src="scripts/controller/calcController.js"></script>

 //no link abaixo chame o arquivo calculadora, dessa forma:
 //              <script src="scripts/calculadora.js"></script>

//Quando os script ler os links ele primeiro vai ler o primeiro link e vai saber quem é CalcController
//quando lê o segundo link ele vai ver que calculadora é igual á CalcController e vai saber do que se trata
//dessa forma o código entenderá que calculadora instacia CalcController pq ele já leu antes quem era
//se coloco o primiero link abaixo o código não entenderá do que se trata e te dará um erro
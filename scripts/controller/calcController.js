/**
 * Definição sobre class:
 * 
 * A primeira letra de uma classe tem que ser maiúscula, e o segundo nome tbm 
 * ex.: class CalController{}
 * 
 * O que se coloca dentro de uma class, colocamos variáveis e funções, variáveis são recurso que armazenam valores 
 * na memória
 * funçoes são recursos que retornam e executam valores
 * 
 * Só que elas estão dentro de uma classe e aí não querem ser chamadas de funções e variáveis
 * aí passam a ser chamadas de atributos e métodos
 * 
 * Atributos =>   são variáveis dentro de uma classe, porém com mais recursoso, com um atributo vc só faz duas coisas
 * ou armazena informação ou recupera informação. Atributos também podem possuir encapsulamento ou seja eu posso
 * controlar quem pode ou não converssar com ele
 * 
 * Métodos   =>   são funções dentro de uma classe, porém com mais recursos
 * 
 * Então o que é uma class? è um conjunto de atributos e métodos
 * 
 * Porém precisamos de alguém ou algo pra representar uma class, aqui quem representa uma class são os obejtos
 * Imagina uma sala de aula e alguém quer falar com a sala, o professor reprensenta a sala então o professor é
 * um objeto. 
 * Então toda vez que eu precisar falar com uma class eu vou ter um objeto que representa essa class
 * Chamamos isso de INSTÃNCIA
 * 
 * O comando interno this referencia a atributos e métodos.
 * 
 *  O JavaScript não é orientado a objetos mas adota-se algumas peculiaridades dessa forma de programar
 *  Uma delas é o ENCAPSULAMENTO ele controla o acesso a um atributo ou método
 *  Os tipos mais comuns de encapsulamento são :   
 *     *public, protected, private
 *     *public    => todo mundo acessa
 *     *protected => atributos e métodos da mesma classe pai
 *     *private   => somente atributos e métodos da própria class
 *      porém isso no JavaCsript não funciona ao pé da letra, em outras linguagens isso é bem levado a sério,
 *      se um método é privado, niguém tem acesso já no javascript vc consegue acessar mesmo sendo privado 
 *      
 * 
 * Métodos getters e setters -> permitem definir como acessar os valores
 * 
 * Método Contructor chama automoticamente os métodos criados, se vc não colocar o método dentro do
 * constructor o método não funcionará
 */


class CalcController{
    constructor() {

        this._operation = [];
        this._locale = 'pt-BR';//atributo criado do idioma
        this._displayCalcEl = document.querySelector("#display");//este El no final é apenas uma conveção pra mostrar q é um elemento html
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        //this._displayCalc = "0"; //this funciona como uma variável porém não é uma var, é um atributo 
        //displayCalc vai ser o display dos números onde o usuário digita, é id do html
        this._currentDate;
        //este _ (underline) nos atributos quer dizer que ele é privado.(leia a nota acima explicando sobre private)
        this.initialize(); //todos os métodos devem estar dentro do constructos pq o constructor chama eles automaticamente
        this.initButtonsEvents();
    }

    initialize(){

        this.setDisplayDateTime();//colocando a função aqui antes  de chamar o setInterval faz com que o display seja
        //mostrado no mesmo segundo para o usuário, sem essa função aqui o código demora um pouquinho pra mostrar o display

        setInterval(()=>{
          this.setDisplayDateTime();
        }, 1000);
    }


    addEventListenerAll(element, events, fn) {      //esse método ou função está interligado com o código abaixo, nele passamos 3 parãmetros que conrreposndem
                                                   //aos valores dentro do método abaixo, este método foi criado com a função de permitir que se coloque mais de
        events.split(' ').forEach(event => {      //de um evento no mesmo botão, poderia fazer isso criando vários códigos pequenos pra isso, mas se for um projeto   
                                                 //grande ficaria muito confuso, para isso, usamos métodos pra nos ajudar, é uma forma de manter o código organizado   
            element.addEventListener(event, fn, false)  //SPLIT = foi criado para fazer dos eventos abaixo uma array pois os eventos até então são uma string e não posso usar
                                                       //foreach para string, foreach apenas para array, transformados em uma array com a ajuda do split, determinei que  
        })                                        //element que está represantando btn recebesse event, fn de function, e o valor false, dessa forma conseguir add vários eventos pra btn   
    }                                            //o split vai dividir um evento do outro, vai fazer com que aconteça um evento click depois o evento drag ou o mouseover, permitindo vários eventos   
/**Pq false acima? pq temos duas class com o mesmo botão no html, uma é pra o texto ou número do botão e outra 
 * é para o corpo do botão, quem fez assim o código lançado do ilustrator q fez a calculadora dessa forma, o false
 * é pra evitar que seja adiconado duas vezes o mesmo botão sem que o usuário tenha realmente clickado
 */    








    clearAll() {                    //clearAll = limpar tudo, foi colocado um array vazio
        this._operation = [];      //pq é isso q ele faz, limpa tudo ou deixa tudo vazio 
    }

    clearEntry() {                  //clearEntry = limpar entrada, é aquele CE da calculadora
        this._operation.pop();     //.pop = esse método limpa a última entrada 
    }

    getLastOperation() {
        return this._operation[this._operation.length-1];   //irá me retornar o último número da array menos um
                                                           //este método está sendo usado no addOperation 
    }







    isOperator(value) {

       return (['+',  '-',  '*',  '%',  '/'].indexOf(value) > -1);          //indexOf compara o valor recebido pelo value com os da array, e te traz essa informação, se o que o usuário digitou, ele não achou ele reornará -1
                                                                           //ele faz isso com estrita perícia, com o o triplo-comparador de igualdade ou este carinha -> ===  :D        
                                                                          //pq colocou - 1? o -1 é o valor padrão que indexof retorna caso ele não encontre o que tem dentro da array, se ele encontrar 
                                                                         //ele retorna true, pq ele passa a ser maior q -1, pq todos esses sinais são maiores que -1, se ele não achar nada ele vai ser igual á -1  e retornará false 
    }                                                                   //apenas um retrun pra me retornar um valor booleano true ou false




    addOperation(value) {               //método criado para add operações, o método push ele add 
    console.log('A', isNaN(this.getLastOperation())); //uma informação dentro da array gerada, se a array tem 3 itens 
                                      //ele add mais um item pra ficar com 4 
                                     //isNaN = é como q fosse uma pergunta negativa, tipo: NÂO é um número? se não for um número ele retorna verdadeiro 
                                    //ex.: a lera Z,  NÂO é um número? resposta = verdadeiro ou true, pq Z não é um número
                                   //se for um número retorna falso, pq é um número

        if (isNaN(this.getLastOperation())) {          //o parãmetro de if vai receber o penúltimo número e ver do q se trata,
                                                      //se for um número vai cair no else  

          if(this.isOperator(value)) {

            this._operation[this._operation.length-1] = value;  //com este cógigo consigo substituir o último valor pego, pq ele está sendo igual a value e value tem o ultimo valor digitado pelo usuário, ou seja ele irá apenas trocar 
                                                               //os valores quando o usuário digitar outra coisa                     
          } else {
            console.log(value);
          }               
                                                      
        } else {

           let newValue = this.getLastOperation().toString() + value.toString();        //toString é pra transformar o número em uma string, para que a calculadora         
           this._operation.push(newValue); //explicaçoes do push um pouquinho acima    //posso concatenar um com outro. ex.: o usuário digita 2 e depois 5, a calculdora terá q formar   
        }                                                                             //25 e não somar 2 + 5, pra isso acontecer os números tem que ser strings ou textos   
                                                                                     //note que no parãmetro do addOperation existe um value e esse mesmo value vai ser concatenado com o  let newValue = this.getLastOperation().toString()    
    }





    setError() {
        this.displayCalc = "Error";
    }
    
    execBtn(value) {
        switch(value) {
                case 'ac':
                this.clearAll();
                break;

                case 'ce':
                this.clearEntry();
                break;

                case 'soma':
                    this.addOperation('+');  //chamando o método ou funçaõ para que os botões funcione.
                break;

                case 'subtracao':
                    this.addOperation('-');
                break;

                case 'divisao':
                    this.addOperation('/')
                break;

                case 'multiplicacao':
                    this.addOperation('*');
                break;

                case 'porcento':
                    this.addOperation('%');
                break;

                case 'igual':
                 
                break;

                case 'ponto':
                    this.addOperation('.')
                break;

                case '0':
                case '1':
                case '2':            
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    this.addOperation(parseInt(value));  //o parseInt vai transformar meu texto em números, os números estão entre aspas, se estão entre
                    break;                              //entre aspas, eles são textos... parseint converte ou o texto pra número ou número pra texto. mais especificações no site mozila 

                default:
                    this.setError();               
                    break;

        }
    }


    initButtonsEvents() {
       let buttons = document.querySelectorAll("#buttons > g, #parts > g") //buttons > g = pegue todos os elementos filhos de button
        
       buttons.forEach( (btn, index) => {

            this.addEventListenerAll(btn, "click drag", e => {

             let textbtn =   btn.className.baseVal.replace('btn-', '');

             console.log(textbtn);

               });
               this.addEventListenerAll(btn, "mouseover mouseup mousedow", e => {
                btn.style.cursor = "pointer";
               });
        });
    }
//para que o evento funcione com todos os botões é necessário fazer um foreach p/ q o evento percorra todos os botoes
//o parãmetro btn acima é só um parãmetro, poderia ser qq nome, só serve para add o evento
//lembre se que usamos uma array function acima, na array function se vc tiver um parãmetro não precisa de ()
//se tiver mais que um parãmetro é obrigatório o uso dos ().
//btn.className.baseVal.replace('btn-', ''  ->  btn.className me trás o nome da class e baseval é pq é svg, no final
//pedi pra substituir os nomes class por nada, aí só aparece o número, só pra melhor visualização no console

    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
            day:"2-digit",    //irá mostrar o dia com 2 digitos
            month: "long",   //irá mostrar o mês escrito por extenso, sequiser curto coloca short
            year: "numeric" //numeric mostra os 4 númeroos do ano
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        return this._timeEl.innerHTML = value;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(value){
        return this._dateEl.innerHTML = value;
    }



    get displayCalc() {
        return this._displayCalclEl.innerHTML;
    } 

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate() {
        return new Date();
    }

    set currentDate(value){
        this.currentDate = value;
    }
}
/**
 * Definição sobre class:
 * 
 * A primeira letra de uma classe tem que ser maiúscula, e o segundo nome tbm 
 * ex.: class CalController{}
 * 
 * O que se coloca dentro de uma class, colocamos variáveis e funções, variáveis são recurso que armazenam valores 
 * na memória
 * funçoes são recursos ue retornam e exceutam valores
 * 
 * Só que elas estão dentro de uma classe e aí não querem ser chamadas de funções e variáveis
 * aí passam a ser chamadas de atributos e métodos
 * 
 * Atributos =>   são variáveis dentro de uma classe, porém com mais recursoso, com um atributo vc só faz duas coisas
 * ou armazena informação ou recupera informação. Atributos também podem possuir encapsulamento ou seja eu posso
 * controlar quem pode ou não converssaar com ele
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
 *  O JavaScript não é orientado a objetos mas adota-se algumas peculiaridades dessa forma de progamar
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
 * Método Contructor é chamado automaticamente quando existe uma instãcia de uma class
 */


class CalcController{
    constructor() {

        this._locale = 'pt-BR';//atributo criado do idioma
        this._displayCacEl = document.querySelector("#display");//este El no final é apenas uma conveção pra mostrar q é um elemento html
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        //this._displayCalc = "0"; //this funciona como uma variável porém não é uma var, é um atributo 
        //displayCalc vai ser o display dos números onde o usuário digita, é id do html
        this._currentDate;
        //este _ (underline) nos atributos quer dizer que ele é privado.(leia a nota acima explicando sobre private)
        this.initialize(); //todos os métodos devem estar dentro do constructos pq o constructor chama eles automaticamente

    }

    initialize(){

        this.setDisplayDateTime();//colocando a função aqui antes  de chamar o setInterval faz com que o display seja
        //mostrado no mesmo segundo para o usuário, sem essa função aqui o código demora um pouquinho pra mostrar o display

        setInterval(()=>{
          this.setDisplayDateTime();
        }, 1000);
    }


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
        return this._displayCaclEl.innerHTML;
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
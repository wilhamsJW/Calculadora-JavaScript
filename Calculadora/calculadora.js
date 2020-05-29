var valor1 = 0;
var valor2 = 0;
var func= 0;
function digitar(num)                                          //todos os números da calculadora entram por aqui
{
  var num;
  document.getElementById("boxdecalc").value += num;         // value += num; faz com que meu número concatene sem somar, para aparecer ao usuário quando ele digitar numeros repetidos sem 
                                                            //fazer soma alguma, ele concatena pq é uma string, lá em baixo eu mudei pra parsInt aí sim vai fazer as operções matemáticas
  var final = document.getElementById("boxdecalc").value;
}
function clean()
{
    document.getElementById("boxdecalc").value = null;
	var valor1 = 0;
	var valor2 = 0;
}

function conta(tipo)                                       //os operadores (+, -, *, /, %) entram aqui
{
  valor1 = document.getElementById("boxdecalc").value;
  document.getElementById("boxdecalc").value = null;     //limpando a tela e para calcular com outro número, não aparecerá ao usuário dessa forma: 20 + 20 = 40; vai aparecer 20 e limpar depois 20 e limpar e depois 40
	func = tipo;                                        //tipo é o parâmetro enviado html, são os operadores (+, -, *, /, %)
}
// 1 - Soma //2 - Subtração //3 - divisão //4 - multiplicação// 5 - Porcentagem // 6 - Raiz quadrada
function result()                                                 
{
	valor2 = document.getElementById("boxdecalc").value;
	if (func == 1)
	{
		var resultado = parseInt(valor1)+parseInt(valor2);
	}
	if (func == 2)
	{
		var resultado = parseInt(valor1) - parseInt(valor2);
	}
	if (func == 3)
	{
		var resultado = parseInt(valor1) / parseInt(valor2);
	}
	if (func == 4)
	{
		var resultado = parseInt(valor1) * parseInt(valor2);
	}
	if (func == 5)
	{
		var resultado = (parseInt(valor1)/100) * parseInt(valor2);
	}
	if (func == 6)
	{
		var resultado = Math.sqrt(parseInt(valor1));
	}

	document.getElementById("boxdecalc").value = resultado;	
}

/**
 * Se o usuário digitar um número, vamos supor que o número digitado seja 10, ele entrará na function digitar e 
 * será concatenado se não houver um operador, se houver um operador será chamado a function conta,
 * a function conta armazena o primeiro valor digitado pelo usuário e limpa a tela como explicado acima, suponhamos 
 * que o usuário digitou o operador de soma +, então teremos  20 +, ok? suponhamos que o usuário digite 20 de novo
 * então teremos 20 + 20, ok? agora o usuário digitou o sinal de igualdade esse sinal invocará a função result (todas as funçoes estão invocadas no html)
 * Note que ao entramos na função result nos deparamos com a variável valor2 essa var está armazenando o último valor 
 * digitado pelo usuário que também é 20, e a variável valor1 armazena o valor digitado antes do operador + que
 * também é 20, esses números não se misturaram pq na function conta ela limpa o visor da tela e das variáveis
 *  
 * Então temos a conta montada 20 + 20 = ? como se dará essa resposta?
 * 
 *  este cálculo entrará no primeiro if -> if (func == 1) , esse 1 representa a soma (dados vindo do html, olhe o html e entenda)
 *  o if perguntará assim, se func for == 1 então faça isso: var resultado = parseInt(valor1)+parseInt(valor2);
 * estou somando valor1 + valor2, parsInt converte strings em números inteiros, esse resultado está guradado na
 * variavel rsultado.
 * Lembrando que func é o operador declarado na function conta, e este representa o operador +.
 * então teremos esse resultado -> 20 + 20 = 40
 */
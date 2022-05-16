let input1, input2, resultado, qntContas = 0;

function get()
{
    input1 = document.getElementById("primario");
    input2 = document.getElementById("secundario");
}

function add(valor)
{
    get();
    if (valor == "." && input1.value.includes(".")) return;
    if (input2.value.includes("="))
    {
        input2.value = resultado;
        resultado = 0;
        input1.value = "";
    }

    if (qntContas > 0 && !(input2.value.includes("=")) && isNaN(valor))
    {
        input1.value = "";
        input2.value = "";
        qntContas = 0;
    }
    input1.value += valor
}

function C()
{
    get();
    if (input1.value == "")
    {
        input2.value = "";
    }
    else
    {
        input1.value = "";
    }
}

function operacao(operador)
{
    get();
    if (input1.value == "") return;
    if (input2.value.includes("=")) input2.value = "";
    input2.value += `${input1.value} ${operador}`;
    input1.value = "";

}

function apagar()
{
    get();
    if (input1.value == "" || input2.value.includes("=")) return;
    input1.value = input1.value.slice(0, -1);
}

function conta()
{
    get();
    let conta
    conta = `${input2.value} ${input1.value}`;
    resultado = eval(conta);
    input2.value = `${conta} =`;
    input1.value = resultado;
    qntContas++;
    conta = "";
}

function quadrado()
{
    get();
    input1.value *= input1.value;
    if (input2.value.includes("="))
    {
        input2.value = "";
    }
}

function raiz()
{
    get();
    input1.value = Math.sqrt(input1.value);
    if (input2.value.includes("="))
    {
        input2.value = "";
    }
}
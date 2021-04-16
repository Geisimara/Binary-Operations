
function TransformBinario(n){

    if(n >= 0) {
        return n.toString(2);
    }
    else {       
        return (n).toString(2);
    }
}

function TransformDecimal(n)
{
   var decimal = parseInt(n, 2);
 
    return decimal 
}

// OPERAÇÕES

var total = 0;

// SOMA

function Soma2Valores(n1, n2){

    return total = n1 + n2;
}

function Soma3Valores(n1, n2, n3){

    return total = n1 + n2 + n3;
}

// SUBTRAÇÃO

function Sub2Valores(n1, n2){

    return total = n1 - n2;
}

function Sub3Valores(n1, n2, n3){

    return total = n1 - n2 - n3;
}


// MULTIPLICAÇÃO

function Mult2Valores(n1, n2){

    return total = n1 * n2;
}

function Mult3Valores(n1, n2, n3){

    return total = ((n1 * n2 )* n3);
}


// DIVISAO

function Div2Valores(n1, n2){

    return total = n1 / n2;
}


function Operacoes(){

    var resposta = document.getElementById('resp');

    var radio1 = document.getElementById('input2');
    var radio2 = document.getElementById('input3');

    var soma = document.getElementById('adicao');
    var sub = document.getElementById('subtracao');
    var mult = document.getElementById('multiplicacao');
    var div = document.getElementById('divisao');

    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    var num3 = document.getElementById('num3');
    var numero1 = Number(num1.value);
    var numero2 = Number(num2.value);
    var numero3 = Number(num2.value);

    var a;
    var b;
    var c;
    var result;

    //SOMA

    if(radio1.checked == true && soma.checked == true){
        

        a = TransformDecimal(numero1)
        b = TransformDecimal(numero2)
        result = Soma2Valores(a, b)      

        resposta.innerHTML = TransformBinario(result) 
        
        num1.value = '';
        num2.value = '';
    }
    if(radio2.checked == true && soma.checked == true){
       

        a = TransformDecimal(numero1)
        b = TransformDecimal(numero2)
        c = TransformDecimal(numero3)
        result = Soma3Valores(a, b, c)      

        resposta.innerHTML = TransformBinario(result)

        num1.value = '';
        num2.value = '';
        num3.value = '';
    }


     //SUBTRAÇÃO

     if(radio1.checked == true && sub.checked == true){
        

        a = TransformDecimal(numero1)
        b = TransformDecimal(numero2)
        result = Sub2Valores(a, b)      

        resposta.innerHTML = TransformBinario(result)

        num1.value = '';
        num2.value = '';
        
    }
    if(radio2.checked == true && sub.checked == true){
       

        a = TransformDecimal(numero1)
        b = TransformDecimal(numero2)
        c = TransformDecimal(numero3)
        result = Sub3Valores(a, b, c)      

        resposta.innerHTML = TransformBinario(result)

        num1.value = '';
        num2.value = '';
        num3.value = '';
    }

    //MULTIPLICAÇÃO

    if(radio1.checked == true && mult.checked == true){
        
        a = TransformDecimal(numero1)
        b = TransformDecimal(numero2)
        result = Mult2Valores(a, b)      

        resposta.innerHTML = TransformBinario(result)

        num1.value = '';
        num2.value = '';
        
    }
    if(radio2.checked == true && mult.checked == true){
        
        a = TransformDecimal(numero1)
        b = TransformDecimal(numero2)
        c = TransformDecimal(numero3)
        result = Mult3Valores(a, b, c)      

        resposta.innerHTML = TransformBinario(result)

        num1.value = '';
        num2.value = '';
        num3.value = '';
    }
    
     //DIVISAO

     if(radio1.checked == true && div.checked == true){
        
        a = TransformDecimal(numero1)
        b = TransformDecimal(numero2)
        result = Div2Valores(a, b)      

        resposta.innerHTML = TransformBinario(result)

        num1.value = '';
        num2.value = '';
        
    }   
        
}


var btn = document.getElementById('btn-validar');
btn.addEventListener('click', function(){

    Operacoes(); 
})
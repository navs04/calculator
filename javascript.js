function add(a,b){
    return a+b;
} 

function subtract(a,b){
    return a-b;
} 

function multiply(a,b){
    return a*b;
} 

function divide(a,b){
    return a/b;
}

let number1;
let number2;
let operator;

function operate(op,num1,num2){
    if(op=='+'){
        add(num1,num2);
    }
    else if(op=='-'){
        subtract(num1,num2);
    }
    else if(op=='*'){
        multiply(num1,num2);
    }
    else if(op='/'){
        divide(num1,num2);
    }
    else{
        return 'invalid operator';
    }
}

div= document.querySelector('#calc-display');

display=document.createElement('button');
display.classList.add('display');
display.textContent='1+4=5';
div.appendChild(display);

div1=document.createElement('div')
div1.classList.add('num1');
div2=document.createElement('div')
div2.classList.add('num2');
op1=document.createElement('div');
op1.classList.add('op');

for(let i=0;i<10;i++){
    if(i<5){
        let num=document.createElement('button');
        num.classList.add('num');
        num.textContent=i; 
        div1.appendChild(num);
    }
    else{
        let num=document.createElement('button');
        num.classList.add('num');
        num.textContent=i;
        div2.appendChild(num);
    }
}

div.appendChild(div1);
div.appendChild(div2);

for(let i=0;i<5;i++){
    let arr=['+','-','*','/','='];

    let op=document.createElement('button');
    op.classList.add('operator');
    op.textContent=arr[i];
    op1.appendChild(op);
}

div.appendChild(op1);

clearBtn=document.createElement('button');
clearBtn.classList.add('clear');
clearBtn.textContent='CE';
div.appendChild(clearBtn);

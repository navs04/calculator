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

let result;
function operate(opr,num1,num2){
    if(opr=='+'){
        result=add(num1,num2);
    }
    else if(opr=='-'){
        result=subtract(num1,num2);
    }
    else if(opr=='*'){
        result=multiply(num1,num2);
    }
    else if(opr='/'){
        result=divide(num1,num2);
    }
    else{
        result='invalid operator';
    }
}

div= document.querySelector('#calc-display');

display=document.createElement('button');
display.classList.add('display');
div.appendChild(display);

div1=document.createElement('div')
div1.classList.add('num1');
div2=document.createElement('div')
div2.classList.add('num2');
op1=document.createElement('div');
op1.classList.add('op');

let number1=[];
let number2=[];
let operator=[];
let operatorClicked=false;

for(let i=0;i<5;i++){
    let arr=['+','-','*','/','='];

    let op=document.createElement('button');
    op.classList.add('operator');
    op.textContent=arr[i];

    op.addEventListener('click',function(e){
        operatorClicked=true;
        operator.push(op.textContent);

        if(op.textContent=='='){
            operate(operator[0],number1.join(''),number2.join(''));
            display.textContent=result;
        }
        else{
            display.textContent=operator[0];
        }
    })

    op1.appendChild(op);
}

div.appendChild(op1);

for(let i=0;i<10;i++){
    if(i<5){
        let num=document.createElement('button');
        num.classList.add('num');
        num.textContent=i;
        div1.appendChild(num);

        num.addEventListener('click',function(){
            if(operatorClicked==true){
                number2.push(num.textContent);
                display.textContent=number2.join('');
            }
            else{
                number1.push(num.textContent);
                display.textContent=number1.join('');
            }
        })
    }
    else{
        let num=document.createElement('button');
        num.classList.add('num');
        num.textContent=i;
        div2.appendChild(num);

        num.addEventListener('click',function(){
            if(operatorClicked==true){
                number2.push(num.textContent);
                display.textContent=number2.join('');
            }
            else{
                number1.push(num.textContent);
                display.textContent=number1.join('');
            }
        }) 
    }
}

div.appendChild(div1);
div.appendChild(div2);

clearBtn=document.createElement('button');
clearBtn.classList.add('clear');
clearBtn.textContent='CE';

div.appendChild(clearBtn);

clearBtn.addEventListener('click',function(){
    display.innerHTML="";
    number1=[];
    number2=[];
    operator=[];
})


let arr = [0];
let str='0';
const container = document.querySelector('.container');
const display = document.querySelector('.display');
display.innerText = str;

const arrFull = new CustomEvent("arrFull");

container.addEventListener('arrFull', () => {
    if(arr[1]==='÷' && arr[2]==0){
        arr = [0];
        str = arr[0];
        display.innerText = str;
        alert('You are too smart to use a calculator :)');
    }
    else{
    let result;
    switch (arr[1]) {
        case '+':
            result =sum(arr[0], arr[2]);
            break;
        case '-':
            result =difference(arr[0], arr[2]);
            break;
        case 'x':
            result =product(arr[0], arr[2]);
            break;
        case '÷':
            result =division(arr[0], arr[2]);
            break;            
    }
    if(arr[3]!='='){
        arr = [result, arr[3]]; 
    }
    else{
        arr=[result];
        str=arr[0];
        display.innerText = str;
    }}
});


container.addEventListener('click', (event) => {
    if (event.target.nodeName === 'LI') {
        switch (event.target.innerText) {
            case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9':
                if (typeof arr[arr.length - 1] === 'number'){
                    if(arr[arr.length - 1] === 0 && typeof arr[arr.length -2]!='number')
                    {
                        arr[arr.length - 1] = Number(event.target.innerText);

                        if(str.length >1)
                            str = str.slice(0, str.length-1) + event.target.innerText;
                        else 
                            str = event.target.innerText;
                        display.innerText = str;
                    }
                    else{
                    arr[arr.length - 1] = Number(arr[arr.length - 1] + event.target.innerText);
                    str = str + event.target.innerText;
                                            display.innerText = str;
                    }
                }
                else
                {
                    arr.push(Number(event.target.innerText));
                                    str = str + event.target.innerText;
                                                            display.innerText = str;

                }

                break;
            case '=': case 'x': case '÷': case '+': case '-':
                if (typeof arr[arr.length - 1] != 'number')
                {
                    if(event.target.innerText!='='){
                        arr[arr.length-1]=event.target.innerText;
                        str = str.slice(0, str.length-1) + event.target.innerText;
                    }
                    else{
                        arr=[arr[0]];
                        str=arr[0];
                    }
                    display.innerText=str;

                }
                else{
                    if(event.target.innerText!='='){
                    arr.push(event.target.innerText);
                    str = str + event.target.innerText;
                    display.innerText=str;
                    }
                    else{
                        arr.push(event.target.innerText);
                    }
                }
                break;
            case 'CLEAR':
                arr = [0];
                str = '0';
                display.innerText = str;
                break;
            case '.': case '⌫':
                console.log('backspace or .', event.target.innerText)
        }
        if (arr.length === 4)
            container.dispatchEvent(arrFull);
        console.log(arr, 'updatedArr');
    }
});

function sum(firstOperand, secondOperand){
    return firstOperand + secondOperand;
}

function difference(firstOperand, secondOperand){
    return firstOperand - secondOperand;
}

function product(firstOperand, secondOperand){
    return firstOperand * secondOperand;
}

function division(firstOperand, secondOperand){
    return firstOperand / secondOperand;
}

// Refactor Code + Display function
// Extra Credit Implementations
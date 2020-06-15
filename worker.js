onmessage = (e) => {

    console.log('worker esta trabajando');
    const {
        number
    } = {
        ...e.data
    };

    postMessage(fibonacci(number));

    // switch (operator) {
    //     case '*':
    //         postMessage(multiplicar(number));
    //         break;
    //     case '/':
    //         postMessage(dividir(number));
    //         break;
    //     case '+':
    //         postMessage(sumar(number));
    //         break;
    //     case '-':
    //         postMessage(restar(number));
    //         break;

    //     default:
    //         postMessage(sumar(number));
    //         break;
    // }

}


const multiplicar = (number) => number * 10;

const dividir = (number) => number / 10;

const sumar = (number) => number + 10;

const restar = (number) => number - 10;

const fibonacci = (number) => {

    let values = [0,1];

    for (let i = 0; i < number; i++) {

        const numbers = Object.assign([], values);
        const value = numbers.reverse().slice(0, 2).reduce((a, b) => a + b);
        values.push(value);
    }

    return values;
}
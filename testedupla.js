const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function calcularMMC(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);

    let i = max;
    while (i % min !== 0) {
        i += max;
    }
    return i;
}

function calcularMDC(a, b) {
    while (b) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

rl.question('Digite o primeiro número : ', (num1) => {
    rl.question('Digite o segundo número: ', (num2) => {
        num1 = parseInt(num1);
        num2 = parseInt(num2);

        if (isNaN(num1) || isNaN(num2)) {
            console.log('Por favor, insira números válidos.');
        } else {
            const mmc = calcularMMC(num1, num2);
        }

        if (isNaN(num1) || isNaN(num2)) {
            console.log('Por favor, insira números válidos.');
        } else {
            const mmc = calcularMMC(num1, num2);
            const mdc = calcularMDC(num1, num2);
            console.log(`O MMC de ${num1} e ${num2} é ${mmc}.`);
            console.log(`O MDC de ${num1} e ${num2} é ${mdc}.`);
        }

        rl.close();
    });
});

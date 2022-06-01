const previousOperationText = document.querySelector("#operacaoAnterior")
const currentOperationText = document.querySelector("#operacaoAtual")
const buttons = document.querySelectorAll("#container button")

class Calculator {

    // classe construtora para instanciar valores iniciais ao codigo

    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText
        this.currentOperationText = currentOperationText
        this.currentOperation = ''
    }

    //coloca os digitos na tela da calculadora

    addDigit(digit) {
        // verificar se ja existe um ponto
        if (digit === "." && this.currentOperationText.innerText.includes(".")) {
            return
        }

        this.currentOperation = digit
        this.updateScreen() // chama função de atualizar a tela

    }


    // processa os calculos matemáticos

    processOperation(operation) {

        // verificar se o valor atual e vazio o valor anterior e diferente de vazio

        if (this.currentOperationText.innerHTML === "" && operation !== "C") {
            if (this.previousOperationText.innerHTML !== "") {

                // mudanca de operacao

                this.changeOperation(operation)
            }
            return
        }

        // pegar os valores atuais e antigos

        let operationValue
        const previous = +this.previousOperationText.innerText.split(" ")[0] // gambiarra para pegar somente o numero sem o operador
        const current = +this.currentOperationText.innerText

        // case para verificar as operacoes

        switch (operation) {

            case "+":
                operationValue = previous + current
                this.updateScreen(operationValue, operation, current, previous)
                break;
            case "-":
                operationValue = previous - current
                this.updateScreen(operationValue, operation, current, previous)
                break;
            case "/":
                operationValue = previous / current
                this.updateScreen(operationValue, operation, current, previous)
                break;
            case "*":
                operationValue = previous * current
                this.updateScreen(operationValue, operation, current, previous)
                break;
            case "DEL":
                this.processDelOperator()
                break;
            case "CE":
                this.processClearCurrentOperation()
                break;
            case "C":
                this.processClearOperation()
                break;
            case "=":
                this.processEqualOperation()
                break;
            default:
                return;

        }

    }



    // função de atualizar a tela

    updateScreen(
        operationValue = null,
        operation = null,
        current = null,
        previous = null
    ) {

        // verificar se o valor e vazio

        if (operationValue === null) {
            this.currentOperationText.innerText += this.currentOperation
        } else {

            // verifica se o valor e zero, adicionar no valor atual

            if (previous === 0) {
                operationValue = current
            }

            // adiciona o valor atual para o valor antigo
            this.previousOperationText.innerText = `${operationValue} ${operation}`
            this.currentOperationText.innerHTML = ""
        }
    }

    // mudando as operacoes matematicas

    changeOperation(operation) {

        // declarando as operaçoes matematicas

        const mathOperations = ["*", "/", "-", "+"];

        // verificando se o valor declarado pelo usuário e valido, se nao for ele para a logica com um return.

        if (!mathOperations.includes(operation)) {
            return
        }

        // modifica o visor, apagando a operacao antiga e colocando a nova sem prejudicar o calculo

        this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + operation




    }

    // Delete o ultimo digito

    processDelOperator() {
        this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1);

    }

    // limpa a operação atual

    processClearCurrentOperation() {
        this.currentOperationText.innerText = ""
    }

    // limpa todos os dados da tela da calculadora

    processClearOperation() {
        this.currentOperationText.innerText = ""
        this.previousOperationText.innerText = ""
    }

    // botao de igual

    processEqualOperation(){

        const operation = previousOperationText.innerText.split(" ")[1]
        this.processOperation(operation)
    }


}

//gerando novo construct para dar inicio a memoria das operações

const calc = new Calculator(previousOperationText, currentOperationText)

buttons.forEach((btn) => { // for para verificar cada valor clicado
    btn.addEventListener("click", (e) => { // função que adiciona envento ao clique de mouse
        const value = e.target.innerText

        // if e else para diferenciar valores de operações e jogar na tela da calculadora

        if (value >= 0 || value === '.') {
            calc.addDigit(value);
        } else {
            calc.processOperation(value)
        }

    });
});
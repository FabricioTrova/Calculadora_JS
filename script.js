function Calculadora() {
    this.display = document.querySelector('.display');

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.limpaDisplay();
            if (el.classList.contains('btn-del')) this.apagaNum();
            if (el.classList.contains('btn-eq')) this.realizaConta(el);
        })
    }

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
    }

    this.limpaDisplay = () => {
        this.display.value = '';
    }

    this.apagaNum = () => {
        this.display.value = this.display.value.slice(0, -1);
    }

    this.realizaConta = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta);

            if(!conta){
                alert('Conta Inválida!');
                return;
            }

            this.display.value = conta;
        }
        catch (e) {
            alert('Conta Inválida!');
            return;
        }
    }

    this.inicia = () => {
        this.capturaCliques();
    }
}

const calculadora = new Calculadora();
calculadora.inicia();
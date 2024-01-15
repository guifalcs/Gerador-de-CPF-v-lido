import { primeiroTeste, segundoTeste } from "./validadorDeCPF.mjs";

class GeraCPF {
    rand(min = 100000000, max = 999999999){
        return String(Math.floor(Math.random() * (max-min) + min))
    }

    geraNovoCpf(){
        const cpfsemDigito = this.rand()
        const digito1 = primeiroTeste(cpfsemDigito)
        const digito2 = segundoTeste(cpfsemDigito + digito1)
        const novoCPF = cpfsemDigito + '-' + digito1 + digito2

        return novoCPF
    }
}

const cpfNovo = new GeraCPF()

const p = document.querySelector('.cpfNovo');
const notification = document.createElement('div');
notification.classList.add('notification');

p.addEventListener('click', function () {
    // Cria um elemento de input para armazenar o texto
    const inputElement = document.createElement('input');
    inputElement.value = p.innerText;
    document.body.appendChild(inputElement);

    // Seleciona o conteúdo do input
    inputElement.select();
    inputElement.setSelectionRange(0, 99999); // Para dispositivos móveis

    // Copia o conteúdo para a área de transferência
    document.execCommand('copy');

    // Remove o input temporário
    document.body.removeChild(inputElement);

    // Exibe uma mensagem ou executa outra ação, se desejar
    notification.textContent = 'CPF copiado!';
    document.body.appendChild(notification);

    // Remove a mensagem após alguns segundos
    setTimeout(() => {
        document.body.removeChild(notification);
    }, 2000);
});

p.innerHTML = cpfNovo.geraNovoCpf()

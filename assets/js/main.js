function meuEscopo () {
    const form = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado');
    const dados = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();
        const peso = document.getElementById('peso').value.replaceAll(",", "").replaceAll(".", "").replaceAll("kg", "");
        const altura = document.getElementById('altura').value.replaceAll(",", "").replaceAll(".", "").replaceAll("m", "");

        dados.push({
            peso: peso,
            altura: altura
        });
        const calculoAltura = altura * altura;
        const calculoImc = ((peso / calculoAltura) * 10000).toFixed(1);
        console.log('kaiquebarreto.com');

        if (peso === '' === altura || calculoImc < 5){
            resultado.innerHTML = `<p style="color:#ff1919">Peso Inválido! Verifique se digitou tudo corretamente!</p>`;
        } else if (calculoImc < 18.5) {
            resultado.innerHTML = `<p>Seu IMC é de <b>${calculoImc}</b>! Você esta abaixo do peso!</p>`;
        } else if (calculoImc == 18.5 || calculoImc >= 24.9) {
            resultado.innerHTML = `<p>Seu IMC é de <b>${calculoImc}</b>! Você esta no peso normal!</p>`;
        } else if (calculoImc == 25 || calculoImc >= 29.9) {
            resultado.innerHTML = `<p>Seu IMC é de <b>${calculoImc}</b>! Você esta com sobrepeso!</p><p>Grau de Obesidade: 01</p>`;
        } else if (calculoImc == 30 || calculoImc >= 39.9) {
            resultado.innerHTML = `<p>Seu IMC é de <b>${calculoImc}</b>! Você esta com obesidade!</p><p>Grau de Obesidade: 02</p>`;
        } else if (calculoImc >= 40) {
            resultado.innerHTML = `<p>Seu IMC é de <b>${calculoImc}</b>! Você esta com obesidade grave!</p><p>Grau de Obesidade: 03</p>`;
        }
        
    }
    
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();

function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

const pessoas = [];

function recebeEventoForm (evento){
    
    evento.preventDefault();
    const nome = document.querySelector('.nome');
    const sobrenome = document.querySelector('.sobrenome');
    const peso = document.querySelector('.peso');
    const altura = document.querySelector('.altura');
    const altura1 = Number(altura.value);
    const peso1 = Number(peso.value)
    const imcTotal = peso1 / (altura1 * 2);
       
    if (imcTotal > 40){
        resulImc = "OBESIDADE GRAVE";

    }else if(imcTotal > 30){
         resulImc = "OBESIDADE";

    }else if(imcTotal > 25){
        resulImc = "SOBREPESO";
    }else if(imcTotal > 18){
            resulImc = "NORMAL";
    }else{
        resulImc = "ABAIXO DO PESO";
    }

    pessoas.push({

        nome : nome.value, 
        sobrenome : sobrenome.value,
        peso : peso.value,
        altura : altura.value,


    });
    
    resultado.innerHTML += `<div id="teste" ><p> ${nome.value} ${sobrenome.value}</br>` +
    ` Peso: ${peso.value}</br> Altura:  ${altura.value}</br>
    IMC: ${imcTotal.toFixed(2)}</p></br>
    Classificação de Peso: ${resulImc}</p></div>`;

}
    form.addEventListener('submit',recebeEventoForm);
}
meuEscopo();

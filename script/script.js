

let inputAdultos = document.getElementById("adultos");
let inputCrianca = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    let adultos = inputAdultos.value;
    let criancas = inputCrianca.value;
    let duracao = inputDuracao.value;


    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);

    let qdtTotalCerveja = cervejaPP(duracao) * adultos;

    let qdtTotalBebidas = bebidaPP(duracao) * adultos + (bebidaPP(duracao)/2 * criancas);

    resultado.innerHTML = `<p>${qdtTotalCarne/1000}Kg de Carne</p>`
    resultado.innerHTML += `<p>${qdtTotalCerveja/1000}L de Cerveja</p>`
    resultado.innerHTML += `<p>${qdtTotalBebidas/1000}L de Bebidas</p>`

    
}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }   
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }   
}

function bebidaPP(duracao){
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }   
}
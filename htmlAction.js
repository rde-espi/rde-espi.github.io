window.onload = getName;

var name = "";

function criaMensagemFinal(){
    if(name.substring(0,1) == "w" || name.substring(0,1) == "W"){
        document.getElementById("mensagemFinal").innerText = "Oi tio Tom, sou o Alexandre / a Clara";
    }
    if(name.substring(0,1) == "s" || name.substring(0,1) == "S"){
        document.getElementById("mensagemFinal").innerText = "Oi tia Sheila, sou o Alexandre / a Clara";
    }
    if(name.substring(0,1) == "i" || name.substring(0,1) == "I"){
        document.getElementById("mensagemFinal").innerText = "Oi tia Inês, sou o Alexandre / a Clara";
    }
    if(name.substring(0,1) == "l" && name.substring(1,2) == "a" || name.substring(0,1) == "L" && name.substring(1,2) == "a"){
        document.getElementById("mensagemFinal").innerText = "Oi prima Laura (Pipoca), sou o Alexandre / a Clara";
    }
    if(name.substring(0,1) == "l" && name.substring(1,2) == "e" || name.substring(0,1) == "L" && name.substring(1,2) == "e"){
        document.getElementById("mensagemFinal").innerText = "Oi prima Leticia (Piolha), sou o Alexandre / a Clara";
    }
}



function getName(){
    name = prompt("Qual o seu name?");

    if(name == null || name == ""){
        alert("Você não digitou o seu nome, É obrigatório!");
        getName();
    } else {
        document.getElementById("firstMessage").innerText = "OIII!!! " + name + " Faça Scroll até o jogo começar!";
        document.querySelector(".mosaico-container").style.display = "block";
        
        
        criaMensagemFinal();
    }
    insertBR();
}


function insertBR(){
   const div1 = document.getElementById("firstMessage");
   const div2 = document.getElementById("secondMessage");
   const div3 = document.getElementById("thirdMessage");
   const div4 = document.getElementById("fourthMessage");
   for(let i = 0; i < 500; i++){
        div1.after(document.createElement("br"));
   }
   
   document.getElementById("secondMessage").innerText = "Ta quase lá " + name + "!!!";

   for(let i = 0; i < 500; i++){
        div2.after(document.createElement("br"));
   }

   document.getElementById("thirdMessage").innerText = "Ta mesmo quase " + name + "!!!";
   for(let i = 0; i < 500; i++){
        div3.after(document.createElement("br"));
   }

   document.getElementById("fourthMessage").innerText = "Ta mesmo mesmo quase lá, falta pouco" + name + "!!!";
   for(let i = 0; i < 500; i++){
        div4.after(document.createElement("br"));
   }
}
// Adicione este código no final do seu ficheiro JavaScript

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY; 
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / maxScroll; // Dá um número entre 0 e 1

    // 1. Lógica do Fundo Dinâmico (que já tinha)
    const corInicial = 220; 
    const corFinal = 280;
    const tomAtual = corInicial + (corFinal - corInicial) * scrollPercent;
    document.body.style.backgroundColor = `hsl(${tomAtual}, 40%, 15%)`;

    // 2. Lógica da Barra de Progresso
    const progressBar = document.getElementById("progressBar");
    
    // Converte o valor de 0-1 para percentagem (ex: 0.5 vira 50%)
    const percentagem = scrollPercent * 100; 
    
    // Aplica a nova largura à barra de forma dinâmica
    progressBar.style.width = percentagem + "%";
});



{
    for(let i=0; i< players.length; i++){
        jogador=players[i];
        if (jogador.starting) {
           let lugarDeEscreverOJogadorTitular= document.getElementById("JogadorTitular");
           lugarDeEscreverOJogadorTitular.innerHTML+= jogador.name;


        } else{ }
    }
} 
jogadores();
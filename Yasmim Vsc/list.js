let startingPlayersDiv = document.getElementById("starters");
let reservePlayersDiv = docment.getElementById("reserve");

for( let i=0; i< reservePlayersDiv.length; i++)
{
    player = players[i];
    playerElement = `<p class= playerCard> <a>${player.number}</a> `
}
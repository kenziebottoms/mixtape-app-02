"use strict";

const token = "BQD0SKa9bgM-xMwh3lT9QBzOeuErEqvP1uBDKEl5bVkR1lr3wmBqi7Fzfb2WUSXSLOgR-0sc2a7LclIQPJZIH9H0cyucn7EzHo7TpwVFp2ngnhOTeQImGsTrMx0a3UzSTo8iqThxx7LT";

function searchSongs(term) {
    let request = new XMLHttpRequest();
    request.open("GET", `https://api.spotify.com/v1/search?q=${term}&type=track&offset=${token}`);
    request.setRequestHeader("Access-Control-Allow-Origin", "*");
    request.addEventListener("load", returnSongSearch);
    request.send();
}

function returnSongSearch() {
    let data = JSON.parse(event.target.responseText);
    console.log(data);
}

module.exports = {searchSongs};
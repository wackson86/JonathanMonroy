$(document).ready(function () {
    var root = 'https://swapi.co/api/films/';
    $.ajax({
        type: 'GET',
        url: root,
    }).then(function (data) {
        console.log(data);
        var tarjeta = '';
        for (var i = 0; i < data.results.length; i++) {
            tarjeta += '<div class="card">';
            if (data.results[i].episode_id == 4) {
                tarjeta += '<img class="card-img-top" src="img/newhope.jpg" alt="Card image cap">';
            }
            else if (data.results[i].episode_id == 2) {
                tarjeta += '<img class="card-img-top" src="img/atack.jpg" alt="Card image cap">';
            }
            else if (data.results[i].episode_id == 1) {
                tarjeta += '<img class="card-img-top" src="img/phantom.jpg" alt="Card image cap">';
            }
            else if (data.results[i].episode_id == 3) {
                tarjeta += '<img class="card-img-top" src="img/revenge.jpg" alt="Card image cap">';
            }
            else if (data.results[i].episode_id == 6) {
                tarjeta += '<img class="card-img-top" src="img/return.jpg" alt="Card image cap">';
            }
            else if (data.results[i].episode_id == 5) {
                tarjeta += '<img class="card-img-top" src="img/empire.jpg" alt="Card image cap">';
            }
            else if (data.results[i].episode_id == 7) {
                tarjeta += '<img class="card-img-top" src="img/force.jpg" alt="Card image cap">';
            }
            tarjeta += '<div class="card-body">';
            tarjeta += '<h2 class="card-title" style= color: red;>' + data.results[i].title + '</h2>';
            tarjeta += '<h3 class="card-title">Episode: ' + data.results[i].episode_id + '</h3>';
            tarjeta += '<h4 class= "card-title">Año: ' + data.results[i].release_date + '</h4>';
            tarjeta += '<h4 class= "card-title">Director: ' + data.results[i].director + '</h4>';
            tarjeta += '<h4 class= "card-title">Productores: ' + data.results[i].producer + '</h4>';
            tarjeta += '<p class="card-text">' + data.results[i].opening_crawl + '</p>';
            // tarjeta+= '<a class="btn btn-primary" data-toggle="collapse" href="#collapseExample'+[i]+'" aria-expanded="false" aria-controls="collapseExample">Personajes</a>';
            tarjeta += '<ul class="list-group list-group-flush" style="float: left;position: relative;left: 10%;">';
            for (var j = 0; j < data.results[i].characters.length; j++) {
                tarjeta += cargarPersonaesPeliculas(data.results[i].characters[j]);
            }
            tarjeta += '</ul>';
            tarjeta += '</div>';
            tarjeta += '</div>';
        }
        console.log(tarjeta);
        $("#peliculas").html(tarjeta);
    });
});

function cargarPersonaesPeliculas(url) {
    var nombrePersonaje = '';
    $.ajax({
        url: url,
        method: 'GET',
        async: false,
        success: function (data) {
            nombrePersonaje = '<li>' + data.name + '</li>';
        },

    });
    return nombrePersonaje;
}



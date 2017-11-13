$(document).ready(function () {
    var root = 'https://swapi.co/api/planets/';

    load_planets(root);

    function load_planets(url) {
        $.ajax({
            method: 'GET',
            url: url,
            success: function (data) {
                console.log(data);
                var planeta = '';
                for (i = 0; i < data.results.length; i++) {
                    planeta += '<div class="card" style="width: 20rem;">';
                    if (data.results[i].name == "Alderaan") {
                        planeta += '<img class="card-img-top" src="img/alderaan.jpg" alt="Card image cap">';
                    }
                    if (data.results[i].name == "Yavin IV") {
                        planeta += '<img class="card-img-top" src="img/yavin.png" alt="Card image cap">';
                    }
                    if (data.results[i].name == "Hoth") {
                        planeta += '<img class="card-img-top" src="img/hoth.png" alt="Card image cap">';
                    }
                    if (data.results[i].name == "Dagobah") {
                        planeta += '<img class="card-img-top" src="img/dagobah.jpg" alt="Card image cap">';
                    }
                    if (data.results[i].name == "Bespin") {
                        planeta += '<img class="card-img-top" src="img/bespin.jpg" alt="Card image cap">';
                    }
                    if (data.results[i].name == "Endor") {
                        planeta += '<img class="card-img-top" src="img/endor.png" alt="Card image cap">';
                    }
                    if (data.results[i].name == "Naboo") {
                        planeta += '<img class="card-img-top" src="img/naboo.jpg" alt="Card image cap">';
                    }
                    if (data.results[i].name == "Coruscant") {
                        planeta += '<img class="card-img-top" src="img/coruscant.jpg" alt="Card image cap">';
                    }
                    if (data.results[i].name == "Kamino") {
                        planeta += '<img class="card-img-top" src="img/kamino.jpg" alt="Card image cap">';
                    }
                    if (data.results[i].name == "Geonosis") {
                        planeta += '<img class="card-img-top" src="img/geonesis.jpg" alt="Card image cap">';
                    }
                    planeta += '<div class="card-block">';
                    planeta += '<h4 class="card-title">NOMBRE: ' + data.results[i].name + '</h4>';
                    planeta += '<p class="card-text">DIAMETRO: ' + data.results[i].diameter + '</p>';
                    planeta += '</div>';
                    planeta += '<ul class="list-group list-group-flush" style="color:#fc0202;">';
                    planeta += '<li class="list-group-item">CLIMA: ' + data.results[i].climate + '</li>';
                    planeta += '<li class="list-group-item">SUPERFICIE: ' + data.results[i].terrain + '</li>';
                    planeta += '<li class="list-group-item">SUPERFICIE DE AGUA: ' + data.results[i].surface_water + '</li>';
                    planeta += '<li class="list-group-item">POBLACION: ' + data.results[i].population + '</li>';
                    planeta += '</ul>';
                    planeta += '</div>';
                }
                $("#prev2").on('click', function(e){
                    e.preventDefault();
                    if (data.previous != null) {
                        load_planets(data.previous);
                    }
                });
                $("#next2").on('click', function(e){
                    e.preventDefault();
                    load_planets(data.next);
                });
                console.log(planeta);
                $('#id_planets').html(planeta);
            },
            error: function (e) {
                console.log(e);
            },
        });
    }
});
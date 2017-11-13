$(document).ready(function () {
    var root = 'https://swapi.co/api/vehicles/';

    load_cars(root);

    function load_cars(url) {
        $.ajax({
            method: 'GET',
            url: url,
            success: function (data) {
                console.log(data);
                var carro = '';
                for (i = 0; i < data.results.length; i++) {
                    carro += '<div class="card" style="width: 20rem;">';
                    carro += '<div class="card-block">';
                    carro += '<h4 class="card-title">NOMBRE: ' + data.results[i].name + '</h4>';
                    carro += '<p class="card-text">MODELO: ' + data.results[i].model + '</p>';
                    carro += '</div>';
                    carro += '<ul class="list-group list-group-flush" style="color:#fc0202;">';
                    carro += '<li class="list-group-item">LONGITUD: ' + data.results[i].length + '</li>';
                    carro += '<li class="list-group-item">TRIPULACIÓN: ' + data.results[i].crew + '</li>';
                    carro += '<li class="list-group-item">PASAJEROS: ' + data.results[i].passengers + '</li>';
                    carro += '<li class="list-group-item">CLASE DE VEHICULO: ' + data.results[i].vehicle_class + '</li>';
                    carro += '</ul>';
                    carro += '</div>';
                }
                $("#prev3").on('click', function(e){
                    e.preventDefault();
                    if (data.previous != null) {
                        load_cars(data.previous);
                    }
                });
                $("#next3").on('click', function(e){
                    e.preventDefault();
                    load_cars(data.next);
                });
                console.log(carro);
                $('#id_cars').html(carro);
            },
            error: function (e) {
                console.log(e);
            },
        });
    }
});
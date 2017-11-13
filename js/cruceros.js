$(document).ready(function () {
    var root = 'https://swapi.co/api/starships/';

    load_starship(root);

    function load_starship(url) {
        $.ajax({
            method: 'GET',
            url: url,
            success: function (data) {
                console.log(data);
                var crucero = '';
                for (i = 0; i < data.results.length; i++) {
                    crucero += '<div class="card" style="width: 20rem;">';
                    crucero += '<div class="card-block">';
                    crucero += '<h4 class="card-title">NOMBRE: ' + data.results[i].name + '</h4>';
                    crucero += '<p class="card-text">MODELO: ' + data.results[i].model + '</p>';
                    crucero += '</div>';
                    crucero += '<ul class="list-group list-group-flush" style="color:#fc0202;">';
                    crucero += '<li class="list-group-item">MANUFACTURADORA: ' + data.results[i].length + '</li>';
                    crucero += '<li class="list-group-item">TRIPULACIÓN: ' + data.results[i].crew + '</li>';
                    crucero += '<li class="list-group-item">PASAJEROS: ' + data.results[i].passengers + '</li>';
                    crucero += '</ul>';
                    crucero += '</div>';
                }
                $("#prev4").on('click', function(e){
                    e.preventDefault();
                    if (data.previous != null) {
                        load_starship(data.previous);
                    }
                });
                $("#next4").on('click', function(e){
                    e.preventDefault();
                    load_starship(data.next);
                });
                console.log(crucero);
                $('#id_crucero').html(crucero);
            },
            error: function (e) {
                console.log(e);
            },
        });
    }
});
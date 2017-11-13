$(document).ready(function () {
    var url = 'https://swapi.co/api/people/';

    load_char(url);
    planet(url);
    especie(url);
    clasi(url);
    leng(url);
    pelis(url);
    cap(url);
    // extraelen(root);
    // extrapeli(root);
    // extrapeli2(root);


    function load_char(url) {
        $.ajax({
            url: url,
            method: 'GET',
            success: function (data) {
                console.log(data);
                var html = '';
                for (i = 0; i < data.results.length; i++) {

                    html += '<div class="card" style="width: 30rem;">';
                    html += '<div class="card-body">';

                    if (data.results[i].name == "Luke Skywalker") {
                        html += '<img class="card-img-top img-fluid" src="img/luke.jpg" alt="Card image cap">';

                    }
                    if (data.results[i].name == "C-3PO") {
                        html += '<img class="card-img-top img-fluid" src="img/c3po.jpg" alt="Card image cap">';

                    }
                    html += '<h4 class="card-text"> <strong>NOMBRE:</strong> </h4>' + '<h5>' + data.results[i].name + '</h5>';
                    html += '<h4 class="card-text"><font-size: "5">Planeta Origen: </h4>' + '<h5>' + planet(data.results[i].homeworld) + '</h5>'; //nombre
                    html += '<h4 class="card-text"><font-size: "5">Especie: </h4>' + '<h5>' + especie(data.results[i].species) + '</h5>'; //nombre, clasificacion, idioma
                    html += '<h4 class="card-text"><font-size: "5">Clasificacion: </h4>' + '<h5>' + clasi(data.results[i].species) + '</h5>'; //nombre, clasificacion, idioma
                    html += '<h4 class="card-text"><font-size: "5">Lenguaje: </h4>' + '<h5>' + leng(data.results[i].species) + '</h5>'; //nombre, clasificacion, idioma
                    html += '<ul class="list-group list-group-flush ">Peliculas:';
                    for (var j = 0; j < data.results[i].films.length; j++) {
                        html += '<p><h5>Episodio:' + cap(data.results[i].films[j]) + '</h5>' + pelis(data.results[i].films[j]) + '</p>';
                    }
                    html += '</ul>';

                    html += '</div>';
                    html += '</div>';

                }
                $("#prev").on('click', function (e) {
                    e.preventDefault();
                    if (data.previous != null) {
                        load_char(data.previous);
                    }
                });
                $("#next").on('click', function (e) {
                    e.preventDefault();
                    load_char(data.next);
                });
                $('#listado-personajes').html(html);
            },
            error: function (e) {
                console.log(e);
            },
        });
    }
    function planet(url) {
        var nameplanet = '';
        $.ajax({
            url: url,
            method: 'GET',
            async: false,
            success: function (data) {
                nameplanet = '<i>' + data.name + '</i>';
            },
            error: function (e) {
                console.log(e);
            },
        });
        return nameplanet;
    }
    function especie(url) {
        var name_specie = '';
        // var class_name = '';
        $.ajax({
            url: url,
            method: 'GET',
            async: false,
            success: function (data) {
                name_specie = '<i>' + data.name + '</i>';
                // classificacion = '<i>' + data.classification + '</i>';
            },
            error: function (e) {
                console.log(e);
            },
        });
        return name_specie;
        // return classificacion;
    }
    function clasi(url) {
        // var name_specie = '';
        var classificacion = '';
        $.ajax({
            url: url,
            method: 'GET',
            async: false,
            success: function (data) {
                // name_specie = '<i>' + data.name + '</i>';
                classificacion = '<i>' + data.classification + '</i>';
            },
            error: function (e) {
                console.log(e);
            },
        });
        // return name_specie;
        return classificacion;
    }
    function leng(url) {
        var lengua = '';
        var classificacion = '';
        $.ajax({
            url: url,
            method: 'GET',
            async: false,
            success: function (data) {
                // name_specie = '<i>' + data.name + '</i>';
                lengua = '<i>' + data.language + '</i>';
            },
            error: function (e) {
                console.log(e);
            },
        });
        // return name_specie;
        return lengua;
    }
    function pelis(url) {
        var pelicula = '';
        // var classificacion = '';
        $.ajax({
            url: url,
            method: 'GET',
            async: false,
            success: function (data) {
                // name_specie = '<i>' + data.name + '</i>';
                pelicula = '<i>' + data.title + '</i>';
            },
            error: function (e) {
                console.log(e);
            },
        });
        // return name_specie;
        return pelicula;
    }
    function cap(url) {
        var capitulo = '';
        // var classificacion = '';
        $.ajax({
            url: url,
            method: 'GET',
            async: false,
            success: function (data) {
                // name_specie = '<i>' + data.name + '</i>';
                capitulo = '<i>' + data.episode_id + '</i>';
            },
            error: function (e) {
                console.log(e);
            },
        });
        // return name_specie;
        return capitulo;
    }
})
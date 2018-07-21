$(function() {

  var pokemonSearch;
  var defaultPokemon = 'snorlax';
  var defaultPokemonData;

  var initFunc = function () {
    // https:pokeapi.co/api/v2/pokemon/?limit=811
    defaultPokemonData = $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon/" + defaultPokemon,
      method: "GET",
    });

    defaultPokemonData.done(function( data ) {
      $('.loading-container').removeClass('active')
      defaultPokemonData = data;
      $('.poke-img img').attr('src', data.sprites.front_default)
      $('.pokedex h3').text(data.name)
      console.log(defaultPokemonData)
    });

    defaultPokemonData.fail(function( jqXHR, textStatus, error ) {
      alert( "Request failed: " + textStatus + '' + error );
    });
  }

  initFunc()

  $('.btn').on('click', function(){

    pokemonSearch = $('.pokedex input[type="text"]').val();

    var request = $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon/" + pokemonSearch,
      method: "GET",
    });

    request.done(function( data ) {
      $('.poke-img img').attr('src', data.sprites.front_default)
      $('.pokedex h3').text(data.name)
      console.log(data)
    });

    request.fail(function( jqXHR, textStatus, error ) {
      alert( "Request failed: " + textStatus + '' + error );
    });
  })

});

/* TO DO

display the habitat(or something else unique) for each pokemon, if available

create 1 big blue and 3 small different colored squares/circles in the corner of the pokedex div, to further reference the design of a pokedex

and yes, snorlax is the default pokemon <3

create a sliding menu for all existing pokemon, per joe's request

edit the loading message

*/

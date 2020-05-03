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

    pokemonSearch = $('.pokedex input[type="text"]').val().toLowerCase();

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

  // $('.pokedex input[type="text"]').attr("disabled", "disabled");

  $('.pokedex input[type="text"]').on('keydown', function (e) {
         if(e.which === 13){

            //Disable textbox to prevent multiple submit
            $(this).attr("disabled", "disabled");

            $('.btn').click();

            //Enable the textbox again if needed.
            $(this).removeAttr("disabled");
         }
   });

});

/* TO DO

stop the page from submitting when the enter key is pressed. redirect to search
(the search button)

display the habitat(or something else unique) for each pokemon, if available

and yes, snorlax is the default pokemon <3

create a sliding menu for all existing pokemon

edit the loading message

*/

var main = function() {
      var cities = [
      "Los Angeles",
      "Santa Monica",
      "Venice",
      "Irvine",
      "Westwood",
      "Newport Beach",
      "Westminster",
      "Garden Grove",
      "Orange",
      "Playa Vista",
      "Marina Del Rey",
      "Daimond Bar",
      "Fontana",
      "Compton",
      "Encino",
      "Costa Mesa",
      "El Segundo",
      "Thousand Oaks",
      "Whitter",
      "Melrose",
      "Beverly Hills",
      "Inglewood"
    ];
    $( "#cities" ).autocomplete({
      source: cities
    });
};
 
$(document).ready(main);
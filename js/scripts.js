var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
var capitalList = $("#capital-name");
var timezoneList = $("#time-zones");
var populationList = $("#population");
var bordersList = $("#border");

$('#search').click(searchCountries);

function searchCountries() {
 	var countryName = $('#country-name').val();
if(!countryName.length) countryName = 'Germany';
$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}

function showCountriesList(resp) {
  countriesList.empty();
  capitalList.empty();
  timezoneList.empty();
  populationList.empty();
  bordersList.empty();
  resp.forEach(function(item){
     	$('<li>').text(item.name).appendTo(countriesList);
      $('<li>').text(item.capital).appendTo(capitalList);
      $('<li>').text("Region: " + item.subregion).appendTo(countriesList);
      $('<li>').text(item.timezones).appendTo(timezoneList);
      $('<li>').text(item.population + " people").appendTo(populationList);
      $('<li>').text(item.borders).appendTo(bordersList);
});
};

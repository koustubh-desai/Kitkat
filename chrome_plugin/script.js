$(document).ready(function() {
	
var path = chrome.extension.getURL('dynamic.css');
$('head').append($('<link>')
    .attr("rel","stylesheet")
    .attr("type","text/css")
    .attr("href", path));
//	alert('mimo');
});
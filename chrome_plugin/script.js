$(document).ready(function() {
	
	var css = chrome.extension.getURL('dynamic.css');
	$('head').append($('<link>')
	    .attr("rel","stylesheet")
	    .attr("type","text/css")
	    .attr("href", css));
	var js = chrome.extension.getURL('newton.js');
	$('head').append($('<script>')
	    .attr("type","text/javascript")
	    .attr("src", js));
});
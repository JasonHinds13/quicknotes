/* global $ */

$(document).ready(function(){

	function openNav(){
        document.getElementById("navbar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }

    function closeNav(){
        document.getElementById("navbar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
    }

    $("#activate").on('click', openNav);
    $("#close").on('click', closeNav);

    $("#new").on('click', function(){
    	$("#main").load("frags/MakeNotes.html");
    });

    $("#view").on('click', function(){
    	$("#main").load("frags/ViewNotes.html");
    });

});

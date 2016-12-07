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
    
    $("#login").on('click', function(){
        $("#main").load("frags/login.html");
    });
    
    $("#signup").on('click', function(){
        $("#main").load("frags/signup.html");
    });

    $("#new").on('click', function(){
    	$("#main").load("frags/MakeNotes.html");
    });

    $("#view").on('click', function(){
    	$("#main").load("frags/ViewNotes.html");
    });

});

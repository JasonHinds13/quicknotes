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
        $("#main").load("/login");
        closeNav();
    });
    
    $("#signup").on('click', function(){
        $("#main").load("/signup");
        closeNav();
    });

    $("#new").on('click', function(){
    	$("#main").load("/MakeNotes");
    	closeNav();
    });

    $("#view").on('click', function(){
    	$("#main").load("/ViewNotes");
    	closeNav();
    });

});

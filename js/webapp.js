// Alert functionality

$(document).ready(function() {
	var $rand = Math.floor(Math.random() * 3) + 1;
	console.log($rand);
	if ($rand === 3) {
		$(".wrapper:first").prepend("<div class='alert'><p><span class='alert-bold'>Alert </span>Lorem ipsum dolor sit amet</p><p class='alert-close'>X</p></div>");
	} else if ($rand === 2) {
		$(".wrapper:first").prepend("<div class='alert'><p><span class='alert-bold'>Alert </span>Lorem ipsum dolor sit amet</p><p class='alert-close'>X</p></div>");
	} else {
		$(".wrapper:first").prepend("<div class='alert'><p><span class='alert-bold'>Alert </span>Lorem ipsum dolor sit amet</p><p class='alert-close'>X</p></div>");
	}

	var $alertLight = $(".alert-light");
	var $notifyBox = $(".notify-box");

	$(".alert-bell").click(function() {
		if ($alertLight.css("opacity") !== "0") {
			$notifyBox.slideDown(200);
		}
	}); 

	$(".close-box").click(function() {
		$alertLight.css("opacity", "0");
	});

	$(".alert-close").click(function() {
		$('.alert').slideUp(200);
	});
}); // end ready

// Sticky code for nav bar on larger screens

var $window = $(window);
var $sticky = $('.nav-bar');
var $top = $sticky.offset().top;

$window.scroll(function() {
	$sticky.toggleClass('sticky', $window.scrollTop() > $top);
});

// Traffic select

$(".traffic-option").click(function() {
	$(".traffic-option").removeClass("selected");
	$(this).addClass("selected");
});

$("#hourly").click(function() {
	$(".chart-option").css("display", "none");
	$("#line-chart--hourly").css("display", "flex");
});

$("#daily").click(function() {
	$(".chart-option").css("display", "none");
	$("#line-chart--daily").css("display", "flex");
});

$("#weekly").click(function() {
	$(".chart-option").css("display", "none");
	$("#line-chart--weekly").css("display", "flex");
});

$("#monthly").click(function() {
	$(".chart-option").css("display", "none");
	$("#line-chart--monthly").css("display", "flex");
});

// Auto-complete 

$("#recipient").autocomplete({
  source: [ "James Gordon", "Brad Johnson", "Dale Byrd", "Hal Griffin" ]
});

// Message Condition Code

$("#send").click(function() {
	if ($(".message-input").val().trim() === "") {
		$(".status").slideUp(200);
		$("<div class='status status--warning'>Please fill in all fields.</div>").insertBefore(this);
	} else {
		$(".status").slideUp(200);
		$("<div class='status status--success'>Your message had been sent!</div>").insertBefore(this);
	}
});

// Local Storage Code

var $timezone = $("#timezone");
var $save = $("#save");
var $cancel = $("#cancel");

function loadSettings() {
    var $setting1 = localStorage.getItem("setting1");
    var $setting2 = localStorage.getItem("setting2");
   
    if ($setting1 !== null) {
        $("input[name='setting1']").attr("checked", "checked");
    }

    if ($setting2  !== null) {
        $("input[name='setting2']").attr("checked", "checked");
    }
    
    $timezone.val(localStorage.timezone);
}

function saveSettings() {
	if ($("input[name='setting1']").is(":checked")) {
        localStorage.setItem("setting1", $("input[name='setting1']").val());
    } else {
        localStorage.removeItem("setting1");
    }

    if ($("input[name='setting2']").is(":checked")) {
        localStorage.setItem("setting2", $("input[name='setting2']").val());
    } else {
        localStorage.removeItem("setting2");
    }
    	
	localStorage.timezone = $timezone.val();
}    

$save.click( function() { 
	saveSettings();
});

$cancel.click( function() {
	localStorage.removeItem("setting1");
	localStorage.removeItem("setting2");
	localStorage.timezone = 0;
});

loadSettings();
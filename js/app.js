$(document).ready(function() {
	$('#fullpage').fullpage({
		responsiveWidth: 900,
		'navigation': true,
		'scrollBar': true,
		'navigationPosition': 'right',
		onLeave: function(index, nextIndex, direction){
			var loadedSection = $(this);
			if(nextIndex == 2){
				$(".anidown-two").addClass("animated slideInDown")
				$(".aniup-two").addClass("animated slideInUp")
				$(".colorfo2").addClass("animated slideInUp")

			}
			if(nextIndex == 3){
				$(".aniup-tre").addClass("animated slideInUp")
				$(".con-tre-right").addClass("animated slideInRight")
			}

		}
	});

	function setIntervalX(delay, repetitions) {
	    var x = 0;
	    var nombre = "kevin caicedo riascos"
	    var intervalID = window.setInterval(function () {

	       $(".machine-text").append(nombre[x])
	       if (++x === repetitions) {
	           window.clearInterval(intervalID);
	           $(".machine-text").addClass("enpausa")
	       }
	    }, delay);
	}

	setIntervalX(100, 21);
	
});
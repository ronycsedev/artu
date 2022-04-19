
(function($){
	$(function(){



    $(".question-content-info").each(function(){
        var $this = $(this);
        $this.find(" > h5").on("click touch", function(){
            $(".question-content-info").removeClass("accordion-active")
            $(".question-content-text").slideUp();
            if($this.find(".question-content-text:visible").length){
                $(".question-content-info").removeClass("accordion-active")
                $(".question-content-text").slideUp();
            }
            else{
                $this.addClass("accordion-active")
                $(".question-content-text").slideUp();
                $this.find(" > .question-content-text").slideDown();
            }
        })
    });


    if($('.gallery-slider-wrap').length){
        $('.gallery-slider-wrap').slick({
            arrows:true,
            infinite: true,
            autoplay:false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:false,
            centerMode: false,
            focusOnSelect: true,
            fade: false,
        });
        $(window).on('resize', function () {
            $('.gallery-slider-wrap').slick('resize');

        });
    }


    //this function for selectric
    if ($("select.size").length) {
        $('select.size').selectric({
        });
    }



        
		
	})// End ready function.


})(jQuery)

var mac = 0;
if (navigator.userAgent.indexOf('Mac') > 0) {
    mac = 1;
} else {
    mac = 0;
}
if (1 == mac) {
    $('body').addClass('mac-os');
} else {
    $("body").addClass('win-os');
}

function increaseCount(e, el) {
    var input = el.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}
function decreaseCount(e, el) {
    var input = el.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}

function navSwitch(button)
{
    $("#button_contact").removeClass("badge badge-primary");
    $("#button_portfolio").removeClass("badge badge-primary");
    $("#button_start").removeClass("badge badge-primary");

    $(button).addClass("badge badge-primary");

    console.log("switch "+button)
}

var scrolled;
window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 1200) {
        navSwitch("#button_contact");
        $("header").removeClass("black")
        $("header").removeClass("white")
        $("header").addClass("white")
    } else if(scrolled > 600){
        navSwitch("#button_portfolio")
        $("header").removeClass("black")
        $("header").removeClass("white")
        $("header").addClass("black")
    }
    else {
        navSwitch("#button_start")
        $("header").removeClass("black")
        $("header").removeClass("white")
        $("header").addClass("white")
    }
}

$(function(){
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});
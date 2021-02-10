// Header controll
function navSwitch(section) {
    // controll active button in header nav
    $("header nav a").removeClass("active");
    $("header nav a[href='#"+section+"']").addClass("active");

    // controll color text'a
    if (section == "portfolio") $("header").addClass("black");
    else $("header").removeClass("black");
}

// Нижние границы секций
$portfolioCoord = 0.92 * $("#contacts").height();
$contactsCoord = $portfolioCoord + $("#portfolio").height();

// Евент на скролл окна
$(window).scroll(function(){
    if ($(window).scrollTop() < $portfolioCoord ) navSwitch("start");
    else if ($(window).scrollTop() < $contactsCoord) navSwitch("portfolio");
    else navSwitch("contacts");
});

// Плавная прокрутка
$(function(){
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
    });
});

// Для мобилы
if (screen.width < 770) {
    $(window).scroll(function(){
        if ($(window).scrollTop() > $("header #logo").height()) $("header nav").addClass("fixed");
        else $("header nav").removeClass("fixed");
    });
}
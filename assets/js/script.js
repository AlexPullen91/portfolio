// Get the user-agent string 
let userAgentString =
    navigator.userAgent;

// Detect Chrome 
let chromeAgent =
    userAgentString.indexOf("Chrome") > -1;

// Detect Internet Explorer 
let IExplorerAgent =
    userAgentString.indexOf("MSIE") > -1 ||
    userAgentString.indexOf("rv:") > -1;

// Detect Firefox 
let firefoxAgent =
    userAgentString.indexOf("Firefox") > -1;

// Detect Safari 
let safariAgent =
    userAgentString.indexOf("Safari") > -1;

// Discard Safari since it also matches Chrome 
if ((chromeAgent) && (safariAgent))
    safariAgent = false;

// Detect Opera 
let operaAgent =
    userAgentString.indexOf("OP") > -1;

// Discard Chrome since it also matches Opera      
if ((chromeAgent) && (operaAgent))
    chromeAgent = false;


/**
 * If user is using safari then display a message advising 
 * to use other browsers for best experience.
 */
if (safariAgent) {
    document.querySelector(".safari-warning").classList.remove('d-none');
}


$(".navbar-toggler").click(function () {
    /**
     * Spin the hamburger menu 90 degrees on click
     */
    $(this).toggleClass("drop-down-menu-90 drop-down-menu-0");
});

$(function () {
    /**
     * Close nav menu once a link is clicked
     */
    var navMain = $(".navbar-collapse");

    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
        $(".navbar-toggler").toggleClass("drop-down-menu-90 drop-down-menu-0");
    });
});
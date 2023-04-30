/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
document.cookie = 'same-site-cookie=foo; SameSite=Lax';
document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure';

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


// function hasTouch() {
//     return 'ontouchstart' in document.documentElement
//            || navigator.maxTouchPoints > 0
//            || navigator.msMaxTouchPoints > 0;
// }

// if (hasTouch()) { // remove all :hover stylesheets
//     try { // prevent exception on browsers not supporting DOM styleSheets properly
//         for (var si in document.styleSheets) {
//             var styleSheet = document.styleSheets[si];
//             if (!styleSheet.rules) continue;

//             for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
//                 if (!styleSheet.rules[ri].selectorText) continue;

//                 if (styleSheet.rules[ri].selectorText.match(':hover')) {
//                     styleSheet.deleteRule(ri);
//                 }
//             }
//         }
//     } catch (ex) {}
// }

// $(".dropbtn").click(function() {
// $(".content").toggle();
// });

$(".dropdown").click(function() {
$(".black").toggle();
});

 if($('.black').is(':visible'))
 {
    $('body').addClass("fixedPosition");
 }
 else
 {
    $('body').removeClass("fixedPosition");
 }


// $(".dropdown").click(function() {
// $("body").css("overflow", "hidden");
// });

// $(".dropbtn").click(function() {
// $("body").css("overflow", "initial");
// });
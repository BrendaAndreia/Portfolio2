window.console=window.console||function(){
    var o={};
    return o.log=o.warn=o.debug=o.info=o.error=o.time=o.dir=o.profile=o.clear=o.exception=o.trace=o.assert=function(){},o
}(),
jQuery(document).ready(function(o){
    o("ul.pattern .color1").click(function(){
        return o("#option-color").attr("href","css/color/default.css"),!1
    }),
    o("ul.pattern .color2").click(function(){
        return o("#option-color").attr("href","css/color/blue.css"),!1
    }),
    o("ul.pattern .color3").click(function(){
        return o("#option-color").attr("href","css/color/green.css"),!1
    })
    ,o("ul.pattern .color4").click(function(){
        return o("#option-color").attr("href","css/color/yellow.css"),!1
    }),
    o("#color-switcher .bottom a.settings").click(function(t){
        t.preventDefault(),"-230px"===o("#color-switcher").css("left")?o("#color-switcher").animate({left:"0px"}):o("#color-switcher").animate({left:"-230"})
    }),
    o("ul.pattern li a").click(function(t){
        t.preventDefault(),o(this).parent().parent().find("a").removeClass("active"),o(this).addClass("active")
    }),
    o("#color-switcher").animate({left:"-230px"})
});
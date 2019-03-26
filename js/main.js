$(document).ready(function() {

    $("#header").on("click", function() {
        console.log("dzsf")
        $("#text").slideToggle()

    });

    let flag = true;
    $("#button").on("click",function () {
        console.log(flag);

        if (flag === true) {
            flag = false;

            $("#menu").slideToggle(500, function () {
                flag = true;
            });
        }
    });


    $("#auth-link").on("click",function(){
        $('.popup,.popup_overlay').fadeIn(400); //показываем всплывающее окно
    });
    $('.closer,.popup_overlay').click(function(){
        $('.popup,.popup_overlay').fadeOut(400); //скрываем всплывающее окно
    });

    $("#top").on("click", function() {
        $("html, body").animate({ scrollTop: 0 }, 3000);

    });
});


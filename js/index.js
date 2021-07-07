$(document).ready(function () {

    $("#loding").fadeOut(2000, function () {

        $("body").css("overflow", "auto")
    });



    let aboutOffsetTop = $("#About").offset().top;

    $(window).scroll(function () {


        let wScroll = $(window).scrollTop();
        if (wScroll > aboutOffsetTop - 150) {


            $("#main-nav").css("backgroundColor", "white");
            $("#main-nav a ").css("color", "black");
            $("#main-nav a img ").attr("src", "imgs/logo-dark.png");
            $("#btnUp").fadeIn(500)


        }
        else {
            $("#main-nav").css("backgroundColor", "transparent")
            $("#main-nav a ").css("color", "white")
            $("#main-nav a img ").attr("src", "imgs/logo.png");
            $("#btnUp").fadeOut(500)
        }
    })
    $("#btnUp").click(function () {

        $("html , body").animate({ scrollTop: 0 }, 2500)
    })

    $(".navbar-nav  a[href^='#']").click(function () {
        let aHref = $(this).attr("href");
        let sectionOffset = $(aHref).offset().top;
        $("html , body").animate({ scrollTop: sectionOffset }, 2000)


    })


    $("#slideBarToggle").click(function () {
        $("#colorBox").show(1000)
    })

    $("#slideBarToggle").click(function () {
        let colorBoxWidth = $("#colorBox").innerWidth();
        if ($("#slideBar").css("left") == "0px") {
            $("#slideBar").animate({ left: `-${colorBoxWidth}` }, (1000))
        }
        else {
            $("#slideBar").animate({ left: `0px` })
        }


    })


    let colorItem = $(".color-item");

    for (let i = 0; i < colorItem.length; i++) {
        let color1 = Math.round(Math.random() * 255);
        let color2 = Math.round(Math.random() * 255);
        let color3 = Math.round(Math.random() * 255);
        $(colorItem).eq(i).css("backgroundColor", `rgb(${color1} ,${color2},${color3})`);
    }

    $(colorItem).click(function () {

        let bgColor = $(this).css("backgroundColor");
        $("h1 ,h2, h3 ,h4, h5, h6, .home .caption a ,p ,#services .services-item i ,#services .services-item .brdr,i,#blog a,#blog p ,.btn").css("color", bgColor)
        $("#services .services-item .brdr,#works .nav-pills .nav-link   ").css("backgroundColor", bgColor)

    })

    new WOW().init();


    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
        autoplay: true,

    });
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });

})


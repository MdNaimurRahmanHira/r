$(document).ready(function () {
    $(".menu-hide-btn").click(function () {
        $(".menu-hide-btn img").toggle()
        $(".menu-hide-btn i").toggle()

        $(".left-menu").toggleClass("left-menu-none")
        $(".right-content").toggleClass("col").removeClass("col-12")

    })

    if (window.matchMedia('(max-width: 767px)').matches) {
        $(".menu-hide-btn").click(function () {
            $(".left-menu").toggleClass("menu-for-small-screen")
        })

    }

})

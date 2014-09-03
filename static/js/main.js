$(document).foundation();

// Initialize sticky navigation.
$(document).ready(function(){
    $(".pageHeader .headerNav .bottom").sticky({topSpacing:30});
    $(".tourNavigator").sticky({topSpacing:67});
});

// Touch-enabled scrolling ease on HTML DOM-element
$(document).ready(
    function() {
        $("html").niceScroll({
            cursorborder:"0",
            touchbehavior: true,
            zindex: "999999999999",
            railpadding: {right: 2},
            cursorborderradius: "0",
            bouncescroll: true,
            scrollspeed: "60"
        });
    }
);

//Content slider frontpage
$(document).ready(function(){
    var sudoSlider = $("#storySlider").sudoSlider({
        customLink: 'a.customNav',
        prevNext: false,
        controlsFade: false,
        effect: "slide",
        useCSS: true,
        responsive: true,
        touch: true
    });
});

// SlideToggle class (filter options on product overview).
$('.productOverview .overviewLeft .title').click(function(){
    $(this).toggleClass('titleclosed');
    $(this).next().slideToggle();
});


// Clone menu on behalf of offcanvas.
$( ".navPrimary ul.menu" ).clone().appendTo( ".off-canvas-list" );


// Product price range filter
$('#price-range').slider({
    range: true,
    min: 0,
    max: 500,
    values: [ 75, 300 ],
    slide: function(event, ui) {
        $('#price').html("&euro;" + ui.values[0] + " - &euro;" + ui.values[1]);
    }
});

$('#price').html("&euro;" + $("#price-range" ).slider("values",0) + " - &euro;" + $("#price-range").slider("values",1));


// Make DIV clickable based on href inside div.
$(".div-url").click(function(){
    window.location=$(this).find("a").attr("href");
    return false;
});


// FAQ / Support
$( "#accordion" ).accordion({
    collapsible: true,
    heightStyle: "content",
    active: false
});

function replaceContentInContainer(target, source) {
    document.getElementById(target).innerHTML = document.getElementById(source).innerHTML;
}

$('#questions li a, #accordion li a, .tourNavigator li a').on('click', function(){
    $('li a.active').removeClass('active');
    $(this).addClass('active');
});

// Checkout show delivery address form
$(document).ready(function(){
    $('#delivery').change(function(){
        if(this.checked)
            $('#newAddress').slideToggle('slow');
        else
            $('#newAddress').slideToggle('slow');
    });
});

// Show rembours shipping method
$(document).ready(function(){
    $('#noshippingcosts').change(function(){
        if(this.checked)
            $('#rembours_shipping').slideToggle('slow');
    });

    $('#shippingcosts').change(function(){
        if(this.checked)
            $('#rembours_shipping').slideToggle('slow');
    });
});

//Shoppingbag: Quantity add/remove
$(".ddd").on("click", function () {
    var $button = $(this);
    var oldValue = $button.closest('.quantity').find("input.quantity-input").val();

    if ($button.text() == "+") {
        var newVal = parseFloat(oldValue) + 1;
    } else {
        // Don't allow decrementing below zero
        if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
        } else {
            newVal = 0;
        }
    }

    $button.closest('.quantity').find("input.quantity-input").val(newVal);
});

// Shoppingbag: Remove product from bag
$("#remove-id1").click(function(){
    $("article.product.id1").fadeOut(700, function() {
        $(this).remove();
    });
});


$("#remove-id2").click(function(){
    $("article.product.id2").fadeOut(700, function() {
        $(this).remove();
    });
});


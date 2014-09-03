/**
 * Created by Jasper on 22-08-14.
 */

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
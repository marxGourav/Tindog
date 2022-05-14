alert("dhdhdfhdhd");
$(document).ready(function() {
    
    $(window).scroll(function() {
        
        if($(this).scrollTop()>50){
            $('#totop').fadeIn();
        }
        else{
            $('#totop').fadeOut();
        }
    });



$('#totop').click(function() {
    $('body,html').animate({
        scrollTop:0},400);
    return false;
    
});
});
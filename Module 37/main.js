$("#btn2").click(function(){
    $(".hidden").hide('slow');
});

$("#btn1").click(function(){
    $(".hidden").show(200);
});

$("#mySquare").click(function(){
    $("#mySquare").animate({
        'width': '200px',
        'height': '200px'
    });
});

$("#mySquare").dblclick(function(){
    $("#mySquare").animate({
        'width': '100px',
        'height': '100px'
    });
});

$('.testing').click(function(){
    $(this).animate({
        'left': '+=50px',
        'opacity': 0.25,
        'fontSize': '30px'
    },
300,
function(){
    console.log("Animation is complete");
})
});
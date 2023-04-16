$(".result-card, .note").hide();
var score;
$(document).click(function(event){
    if($(event.target).parent().hasClass("rating-list")){
        score = $(event.target).text();
    }else{
        score = undefined;
    }
});

$(".submit-btn").click(function(){
    if(score==undefined){
        $(".note").show();
    }else{
     $(".note").hide();
    $(".points").text(score+" "); 
    $(".first-card").hide();
    $(".result-card").show();
    }
});

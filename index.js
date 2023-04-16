$(".result-card").hide();
var score;
$("button.bg-circle").click(function(){
    score = $(this).text();
})

$(".submit-btn").click(function(){
    $(".points").text(score+" "); 
    $(".first-card").hide();
    $(".result-card").show();
})

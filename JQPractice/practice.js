$("#btn").click(function () {
    $("#goAway").slideDown("slow");
});

$("#btn2").click(function () {
    $("#goAway").slideUp("slow");
});

$(document).ready(function () {
    if($("#par").text() == "A paragraph")
    {
        alert($("#myDiv").html());
        alert($("#inBox").val());
    }
})
$(document).ready(function()
{
    $("#imgAnimate").hover(
        function()
        {
            $(this).attr("src", "img/game.gif");
        },
        function()
        {
            $(this).attr("src", "img/game.png");
        });
});
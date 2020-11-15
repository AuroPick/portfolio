$(document).ready(function(){
    $(".form").on("submit", () => {
        $(".sk-chase").css("display", "block");
        $("#submit").val("");
        setTimeout(() => {
            $(".sk-chase").css("display", "none");
            $("#submit").val("Gönder");
        }, 3000);
    });
  });
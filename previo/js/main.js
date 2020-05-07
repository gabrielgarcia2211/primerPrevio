
$( document ).ready(function() {
    console.log("hola");

    $(".registrar").click(function(){
        $(".inferior").load("registro.html");
        console.log("hola");
    });

});


function carga(){
    $(".informacion").load("mas.html");
}


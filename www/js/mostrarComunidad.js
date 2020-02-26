$(document).ready(function() {
    $.ajax({
            type: "POST",
            url: "https://andreaconeche.000webhostapp.com/mostrarComunidad.php",
            cache: false,
            data: "nombre="+localStorage.getItem("nombre"),
            beforeSend: function() {
                $("#muestaUsuarios").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestaUsuarios').html(response).fadeIn();
                $("#muestaUsuarios").listview("refresh");

                
               
            }
    });

});

$(document).ready(function() {
    $('h3').text(localStorage.getItem("nombre"));
    $.ajax({
            type: "POST",
            url: "https://andreaconeche.000webhostapp.com/mostrarImagen.php",
            cache: false,
            data: "nombre="+localStorage.getItem("nombre"),
            beforeSend: function() {
                $("#fotoPerfil").text("Cargando...");
              },
            success: function(response)
            {
                $('#fotoPerfil').html(response).fadeIn();
                $("#fotoPerfil").listview("refresh");
                
            }
    });

});
var usuarioDesti="";
var usuarioRemi=localStorage.getItem("nombre");

function mensajea(destinatario){
    $.mobile.changePage("#mensajes",{ transition: "slideup", changeHash: true});
    usuarioDesti=destinatario;
}



$("#enviarMensaje").click(function(){

  var mensaje=$('[name="mensaje"]').val();
  
  
  var fMensaje = $("#mensaje").val();
 
  
  var dataString = "mensaje=" + fMensaje +"&destinatario=" + usuarioDesti +"&remitente=" + usuarioRemi;
  $.ajax({
    type:"POST",
    url: "https://andreaconeche.000webhostapp.com/mandarMensaje.php",
    data: dataString,
    crossDomain: true,
    cache: false,
    beforeSend: function() {
      document.getElementById("enviarMensaje").innerHTML = "Enviando...";
    },
    success: function(data) {
      if (data == "success") {
        document.getElementById("enviarMensaje").innerHTML = "Enviar";
        var fMensaje = $("#mensaje").val(" ");
        refrescar();
      } else if (data == "error") {
        alert("Error");
      }
  }
  });
  
});

$("#actua").click(function(){

  refrescar();
  
});

$("#mensajes").on("pageshow", function(){ 
     
  
  $.ajax({
  type: "POST",
  url: "https://andreaconeche.000webhostapp.com/mostrarMensajes.php",
  cache: false,
  data: "destinatario=" + usuarioDesti +"&remitente=" + usuarioRemi+ "&nombre=" + localStorage.getItem("nombre"),
  beforeSend: function() {
      $("#muestradeMensajes").text("Cargando...");
    },
  success: function(response)
  {
      $('#muestradeMensajes').html(response).fadeIn();
      $("#muestradeMensajes").listview("refresh");    
  }
});
  /** Una vez obtenido el ID de noticia hacemos lo necesario para cargar los datos de la noticia **/

});

$("#mensajesPanel").on("pageshow", function(){ 
     
$.ajax({
  type: "POST",
  url: "https://andreaconeche.000webhostapp.com/yalolei.php",
  cache: false,
  data: "nombre="+localStorage.getItem("nombre"),

  success: function(response)
  {
      refrescar(); 
  }
});
  /** Una vez obtenido el ID de noticia hacemos lo necesario para cargar los datos de la noticia **/

});

$("#mensajesPanel").click(function(){

  refrescar();
  
});

$("#inicio").on("pageshow", function(){ 
     var inicio=document.getElementById("estoyInicio");
    inicio.style.backgroundColor="red";
  
  });

  $("#rutina").on("pageshow", function(){ 
    var inicio=document.getElementById("estoyRutina");
   inicio.style.backgroundColor="red";
 
 });
 $("#ejercicios").on("pageshow", function(){ 
  var inicio=document.getElementById("estoyEjercicios");
 inicio.style.backgroundColor="red";

});
$("#articulos").on("pageshow", function(){ 
  var inicio=document.getElementById("estoyArticulos");
 inicio.style.backgroundColor="red";

});
$("#videos").on("pageshow", function(){ 
  var inicio=document.getElementById("estoyVideos");
 inicio.style.backgroundColor="red";

});
$("#actua1").click(function(){

  refrescar();
  
});
$("#actua2").click(function(){

  refrescar();
  
});
$("#actua3").click(function(){

  refrescar();
  
});
$("#actua4").click(function(){

  refrescar();
  
});
$("#actua5").click(function(){

  refrescar();
  
});
$("#actua6").click(function(){

  refrescar();
  
});
$("#actua7").click(function(){

  refrescar();
  
});
$("#actua8").click(function(){

  refrescar();
  
});
$("#actua9").click(function(){

  refrescar();
  
});
$("#actua10").click(function(){

  refrescar();
  
});

function refrescar(){

  $(document).ready(function() {
   
    $.ajax({
            type: "POST",
            url: "https://andreaconeche.000webhostapp.com/mensajesPanel.php",
            cache: false,
            data: "nombre="+localStorage.getItem("nombre"),
            beforeSend: function() {
                $("#muestradeMensajesPanel").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestradeMensajesPanel').html(response).fadeIn();
                $("#muestradeMensajesPanel").listview("refresh");
                
            }
    });

});
$.ajax({
  type: "POST",
  url: "https://andreaconeche.000webhostapp.com/mostrarMensajes.php",
  cache: false,
  data: "destinatario=" + usuarioDesti +"&remitente=" + usuarioRemi + "&nombre=" + localStorage.getItem("nombre"),
  beforeSend: function() {
      $("#muestradeMensajes").text("Enviando...");
    },
  success: function(response)
  {
      $('#muestradeMensajes').html(response).fadeIn();
      $("#muestradeMensajes").listview("refresh");   
  }
});
$(document).ready(function() {
   
  $.ajax({
          type: "POST",
          url: "https://andreaconeche.000webhostapp.com/mensajes.php",
          cache: false,
          data: "nombre="+localStorage.getItem("nombre"),
        
          success: function(response)
          {
              $('#mns').html(response).fadeIn();
              $("#mns").listview("refresh");
          }
  });

})
}






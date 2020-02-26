$(document).ready(function() {
    $.ajax({
            type: "POST",
            url: "https://andreaconeche.000webhostapp.com/mostrarAlimentos.php",
            cache: false,
            beforeSend: function() {
                $("#muestraAlimento").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestraAlimento').html(response).fadeIn();
                $("#muestraAlimento").listview("refresh");

                
               
            }
    });

});

function detalleAlim(id){

    $.ajax({
      type: "POST",
      url: "https://andreaconeche.000webhostapp.com/detalleAlimento.php",
      cache: false,
      data: "id="+id,
      beforeSend: function() {
          $("#alimentoDetalle").text("Cargando...");
         
        },
      success: function(response)
      {
          $('#alimentoDetalle').html(response).fadeIn();
          $("#alimentoDetalle").listview("refresh");
        
      }
  });
  }


  $("#miPlanAlimenticio").on("pageshow", function(){ 
   
   var peso= localStorage.getItem("peso");
   var edad= localStorage.getItem("edad");
   var altura=localStorage.getItem("altura");
   var sexo = localStorage.getItem("sexo");
    var flexiones= localStorage.getItem("flexiones");
    

   if(sexo=="Hombre"){
        var RequerimientoDiario=  66.5 + (13.75 * peso) + (5.08 * altura ) - (6.78 * edad);
        if(flexiones<1){
            RequerimientoDiario+=RequerimientoDiario/100*20;
        }
        else if(flexiones < 10){
            RequerimientoDiario+=RequerimientoDiario/100*30;
        }
        else{
            RequerimientoDiario+=RequerimientoDiario/100*40;
        }
   }else{
        var RequerimientoDiario=   65.51 + ( 9.56 * peso) + (1.85 * altura ) - ( 4.68 * edad);
        if(flexiones<1){
            RequerimientoDiario+=RequerimientoDiario/100*20;
        }
        else if(flexiones < 10){
            RequerimientoDiario+=RequerimientoDiario/100*30;
        }
        else{
            RequerimientoDiario+=RequerimientoDiario/100*40;
        }
   }
   if(localStorage.getItem("objetivo")=="BajarPeso"){
        var carbohidratos= RequerimientoDiario/100*40;
        var proteinas= RequerimientoDiario/100*35;
        var grasas= RequerimientoDiario/100*25;
   }else if(localStorage.getItem("objetivo")=="Hipertrofia"){
        var carbohidratos= RequerimientoDiario/100*50;
        var proteinas= RequerimientoDiario/100*25;
        var grasas= RequerimientoDiario/100*25;
   }else{
        var carbohidratos= RequerimientoDiario/100*45;
        var proteinas= RequerimientoDiario/100*35;
        var grasas= RequerimientoDiario/100*20;
   }
   var gramosCarbo=(carbohidratos/4).toFixed(2);
   var gramosProte=(proteinas/4).toFixed(2);
   var gramosGrasa=(grasas/9).toFixed(2);

   RequerimientoDiario=RequerimientoDiario.toFixed(2);
   carbohidratos=carbohidratos.toFixed(2);
   proteinas=proteinas.toFixed(2);
   grasas=grasas.toFixed(2);

   $('#requerimientoCalorico').html(RequerimientoDiario +" Calorias <br>");
   $('#mostrarMacros').html("<tr style='font-size: 16px'><th class='carbo'>Carbohidratos</th><th class='prote'>Proteinas</th><th class='grasa'>Grasas</th></tr>"+
                                "<tr><td class='carbo'>"+ carbohidratos +"Kcal</td><td class='prote'>"+ proteinas +"Kcal</td><td class='grasa'>"+ grasas +"Kcal</td></tr>"+
                                "<td class='carbo'>"+ gramosCarbo +" g</td><td class='prote'>"+ gramosProte +" g</td><td class='grasa'>"+ gramosGrasa +" g</td>");

                var popCanvas = $("#popChart");
                var popCanvas = document.getElementById("popChart");
                var popCanvas = document.getElementById("popChart").getContext("2d");
                var barChart = new Chart(popCanvas, {
          type: 'doughnut',
          data: {
            labels: ["Carbohidratos" , 
                     "Proteinas", 
                     "Grasas"],
            datasets: [{
              label: 'Population',
              data: [carbohidratos, proteinas, grasas],
              backgroundColor: [
                'rgba(229, 31, 31)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)'
              ]
            }]
          },
          options: {
            title: {
              display: true,
              text: '',
              legend: {
                display: true,
                labels: {
                    fontColor: 'rgb(255, 99, 132)'
                }
            }
            }
          }
        });

    /** Una vez obtenido el ID de noticia hacemos lo necesario para cargar los datos de la noticia **/
  
  });





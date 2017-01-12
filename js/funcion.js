function calculo() {
    var tipo = document.getElementById("tipo").value;
    var frente = document.getElementById("frente").value;
    var fondo = document.getElementById("fondo").value;
    var mCuadrados = frente * fondo;
    var precioCalculado = precio(mCuadrados,tipo);
    document.getElementById("resultado").innerHTML = "\tSe ha realizado el calculo promedio segun los costos.<br>El total del calculo de su Propiedad es de $"+precioCalculado+" pesos";

    alert("Se ha realizado el calculo promedio segun los costos.\n\nEl total del calculo de su Propiedad es de $"+precioCalculado+" pesos");

    if(confirm("Es correcto para UD. la contizacion presione \"ACEPTAR\"\n\nEn caso contrario presione \"CANCELAR\" para recalcular")){
      alert("Fue Un placer servilre en \"Bienes Raices \"PIPECO\"");
    setTimeout(function(){window.location.href ="http://www.google.com"},6000);
    }else {
      alert("Recuerde que el tipo de propiedad es un factor determinante en el calculo");
    setTimeout(function(){window.location.href = 'cotizador.html'},2000);
    }
}
function precio(totalM,tipo){
  if (tipo == 'terremo') {
    return totalM * 1110;
  }else if (tipo == 'casa') {
    return totalM *2220;
  }else if (tipo == 'local') {
    return totalM * 3330;
  }else if (tipo == 'residencial' ) {
    return totalM * 4440;
  }else {
    return totalM * 5550;
  }
}

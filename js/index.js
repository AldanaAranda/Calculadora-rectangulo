function multiplicar(){
    var base = document.getElementById("base").value;
    var altura = document.getElementById("altura").value;
    var area = base * altura;
    var alt = altura * 2;
    var bas = base * 2;
    var perimetro = alt + bas;
    document.getElementById("area").value = area;
    document.getElementById("perimetro").value = perimetro;
  }

  $(document).ready(function() {
    $('#limpiar').click(function() {
        $('.rect-base').val('');
        $('.rect-altura').val('');
    });
});

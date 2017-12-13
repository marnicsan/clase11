/*Crearse varias clases con background-color, fuentes, tamaños y colores
Crear una noticia / articulo
Incluir un boton que agregue articulos y con distintas clases, para hacer de estos distintos uno del otro.*/

var numero = 0;

function agregarNoticia(){
    numero++;
    var titulo = $("#titulo").val();
    var contenido = $("#contenido").val();
    var estilo = $("#estilo").val();
    
    $("#noticias").append("<div id=\"noticia" + numero + "\"></div>");
    $("#noticia" + numero).append("<span id=\"titulo" + numero + "\"></span>").append("<div class='" + estilo + "_contenido'></div>").addClass(estilo);
                          
    $("#titulo" + numero).append(titulo).addClass(estilo + "_titulo");
    
    $("#noticia" + numero + " div").append(contenido);
    
}
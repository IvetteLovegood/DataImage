function getPreview(fileInput) {
  var files = fileInput.files;
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    var imageType = /image.*/;
    if (!file.type.match(imageType)) {
      continue;
    }
    var img = document.getElementById("img-preview");
    //Se obtiene las dimensiones de la imagen
    img.onload = function() {
      var height = img.height;
      var width = img.width;
      document.getElementById("height").innerHTML = height + " px ";
      document.getElementById("width").innerHTML = width + " px ";
    }
    //Se muestra la vista previa de la imagen
    img.file = file;
    var size = file.size / 1024;
    var type = file.type;
    var lastmodified = file.lastModifiedDate;
    document.getElementById("size").innerHTML = size + " kb ";
    document.getElementById("type").innerHTML = type;
    document.getElementById("lastdate").innerHTML = lastmodified;
    var reader = new FileReader();
    reader.onload = (function(imgload) {
      return function(e) {
        imgload.src = e.target.result;
      };
    })(img);
    reader.readAsDataURL(file);
  }
}

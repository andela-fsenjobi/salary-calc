function generateImage(callback) {
  html2canvas($('#search-results'), {
    onrendered: function(canvas){
      callback(canvas);
    }
  });
}

function downloadImage() {
    generateImage(function(img) {
      var imgageData = img.toDataURL("image/png");
      var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
      window.location = newData;
    });
}

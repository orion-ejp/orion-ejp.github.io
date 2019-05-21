$(document).ready(function() {

for (i = 0; i< 1000;i++){

    if(window.location.href.indexOf('#'+i+'term') != -1) {
        $('#'+i+'term').modal('show');
      }
}  
});
  
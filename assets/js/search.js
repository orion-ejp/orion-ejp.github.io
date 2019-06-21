---
layout: null
---




function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchBar");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

  $(window).load(function(){
    $(".loader").fadeOut("slow")
  });

  $(function(){
    $('[data-toggle="popover"]').popover({
      html: true
    });
    
  });


  var dataset =  {{  site.data.Glossary_V9 | map: "Term" |uniq |jsonify }};
//console.log(dataset)

$(function () {
  
var list = dataset
var list = list.toString();
var listArray = list.split(",");

var availableTags = listArray;

$(".autocomplete").autocomplete({
  source: availableTags

});
});
$(document).ready(function() {

  var datasetID =  {{  site.data.Glossary_V9 | map: "UUID" |uniq |jsonify }};

for (i = 0; i< datasetID.length;i++){

    if(window.location.href.indexOf('#'+datasetID[i]) != -1) {
        $('#'+datasetID[i]).modal('show');
      }
}  
});

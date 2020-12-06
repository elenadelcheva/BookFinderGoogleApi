
$(document).ready(function(){	

   $("#myform").submit(function(){

   	  var search = $("#books").val();
   	  if(search == "")
   	  {
   	  	alert("Please enter something in the field");
   	  }
   	  else{		
   	  var url = "";
   	  var img = "";
      var title = "";
      var author = "";

   	  $.get("https://www.googleapis.com/books/v1/volumes?q=" + search,function(response){

          for(i=0;i<response.items.length;i++)
          {
           title=$('<h5 class=" black-text">' + response.items[i].volumeInfo.title + '</h5>');  
           author=$('<h5 class=" black-text"> By:' + response.items[i].volumeInfo.authors + '</h5>');
           img = $('<img class="aligning" id="dynamic"><br><a href=' + response.items[i].volumeInfo.infoLink + '><button id="imagebutton" class="btn pink aligning">Read More</button></a>'); 	
           url= response.items[i].volumeInfo.imageLinks.thumbnail;
           img.attr('src', url);
           title.appendTo('#result');
           author.appendTo('#result');
           img.appendTo('#result');
          }
        });
      
      }
      return false;
   });
});

var elements = document.getElementsByClassName("menu");

var i;

function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}
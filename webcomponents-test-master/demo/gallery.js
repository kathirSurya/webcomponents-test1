var html='';
$(document).ready(function(){
	var dirPath="../assets/";
	
	for(var e=1;e<=8;e++){	
   		var img_count=8;
   		var slideIndex = 4;
   		html='<div class="container">';
   		for(var c=1;c<=img_count;c++){
		cimg=dirPath+"image"+c+".jpg";
   			html=html
   		+'<div class="flowerSlides" onmouseout="show()" onmouseover="hide()"><img src="'+cimg+'" style="width:100%"></div>'
   		;}
   		html=html
   		+'<br>'
   		+'<div class="row" id="gal">';
   		for(var s=1;s<=img_count;s++){
   			simg=dirPath+"image"+s+".jpg";
   			html=html
   		+'<div class="column"><img class="demo cursor img-height" src="'+simg+'" style="width:100%" onclick="liveSlide('+s+')" alt="image'+s+'"></div>'
   		;}
   		html=html
   		+'</div>'
   		+'</div>';
   		$('#test').html(html);
   		showSlides(slideIndex);

	}

});

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function liveSlide(n) {
	$('#test').html(html);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("flowerSlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
  
}

function hide(){
	document.getElementById('gal').style.display="none";
}
function show(){
	document.getElementById('gal').style.display="block";
}
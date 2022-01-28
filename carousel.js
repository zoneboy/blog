
var slideIndex = 1;


function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length){
		slideIndex = 1;
	}

	if (n < 1){
		slideIndex = slides.length;
	}

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", " ");
	}
	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].className += " active";
	// dots[slideIndex - 1].className = dots[slideIndex - 1].className += " active";
	setTimeout(showSlides, 2000);
}
showSlides(slideIndex);

//Next and Previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

//Ads js
var slideIndexAd = 0;
showSlidesAd();

function showSlidesAd() {
  var i;
  var slidesAd = document.getElementsByClassName("ads_mySlides");
  var dotsAd = document.getElementsByClassName("ads_dot");
  for (i = 0; i < slidesAd.length; i++) {
    slidesAd[i].style.display = "none";  
  }
  slideIndexAd++;
  if (slideIndexAd > slidesAd.length) {slideIndexAd = 1}    
  for (i = 0; i < dotsAd.length; i++) {
    dotsAd[i].className = dotsAd[i].className.replace(" active", "");
  }
  slidesAd[slideIndexAd -1].style.display = "block";  
  dotsAd[slideIndexAd -1].className += " active";
  setTimeout(showSlidesAd, 2000); // Change image every 2 seconds
}




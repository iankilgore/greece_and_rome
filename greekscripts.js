var slide_counter = 0;
var slide_array = [
"<a href='#zeus'><img src='images/Statue-Of-Zeus-at-Olympia-394x400.jpg' width='400' height='400'></a>",
"<a href='#hades'><img src='images/Hades_with_cerberus-357x584.jpg' align='right' width='400' height='400'></a>",
"<a href='#poseidon'><img src='images/poseidon_640x480.jpg' align='right' width='400' height='400'></a>",
"<a href='#hera'><img src='images/hera_640x446.jpg' align='right' width='400' height='400'></a>",
"<a href='#aphrodite'><img src='images/aphrodite-phyrne-headshot2-932x827.jpg' align='right'width='400' height='400'></a>",
"<a href='#ares'><img src='images/ares_2848x4288.jpg' align='right' width='400' height='400'></a>",
"<a href='#athena'><img src='images/athena_510x509.jpg' align='right' width='400' height='400'></a>",
"<a href='#artemis'><img src='images/artemis_995x850.jpg' align='right' width='400' height='400'></a>",
"<a href='#apollo'><img src='images/apollo_500x377.jpg' align='right' width='400' height='400'></a>",
"<a href='#hephaestus'><img src='images/hephaestus_1600x1200.JPG' align='right' width='400' height='400'></a>",
"<a href='#hermes'><img src='images/Hermes_2048x1536.JPG' align='right' width='400' height='400'></a>",
"<a href='#hestia'><img src='images/hestia_650x645.jpg' align='right' width='400' height='400'></a>",
"<a href='#demeter'><img src='images/demeter_500x447.jpg' align='right' width='400' height='400'></a>",
"<a href='#dionysus'><img src='images/dionysus_968x1255.jpg' align='right' width='400' height='400'></a>",

]

var slide_element;
function Next(){
	slide_counter++;
	slide_element.style.opacity = 0;
	if(slide_counter > (slide_array.length - 1)){
		slide_counter = 0;
	}
	setTimeout('switchSlide()',1000);
}
function switchSlide(){
	slide_element.innerHTML = slide_array[slide_counter];
	slide_element.style.opacity = 1;
	setTimeout('Next()',2000);
}
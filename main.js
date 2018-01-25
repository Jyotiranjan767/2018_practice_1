const current = document.querySelector('#current');
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.4;
// the above two lines can be written in a single line using
//es6 variable structure that is how shown below
//const[current ,imgs] = [document.querySelector('#current'),document.querySelectorAll(".imgs img")]

//set the first img opacity
imgs[0].style.opacity = opacity; 

imgs.forEach(img => img.addEventListener('click', imgClick));//, (e) =>current.src=e.target.src));

function imgClick(e){
	// reset the opacity 
	imgs.forEach(img => (img.style.opacity = 1));
	
	// change current image to src of clicked image
	current.src = e.target.src;
	
	// add in fade-in class
	current.classList.add('fade-in');

	//remove the fade-in class after .5s
	setTimeout(() => current.classList.remove('fade-in'),500);
	// add opacity to  clicked image below to make differnt among others
	e.target.style.opacity = opacity ;
}



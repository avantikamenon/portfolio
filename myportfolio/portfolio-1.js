const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".nav-link");

function animatee()
{
	selectElement(".nav-list").classList.toggle("active");
    selectElement(".menu-icon").classList.toggle("toggle")

    navLinks.forEach((link, index) => {
        if (link.style.animation){
            link.style.animation = ""
        }else{
            link.style.animation = `navLinkAnimate 0.5s ease forwards ${ index/7 + 0.5}s`
            console.log(index/7 + 0.5)
        }
	});

}

selectElement(".menu-icon").addEventListener("click", () => {
	animatee();
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
		animatee();
    })
})


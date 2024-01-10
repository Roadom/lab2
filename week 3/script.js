// SCROLL SNAPPING STUFF
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        })
    })
})
// LIGHTBOX MODIFICATION
lightbox.option({
    'showImageNumberLabel': false,
    'imageFadeDuration': 0
})

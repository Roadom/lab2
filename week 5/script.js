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
// Birth stuff
const birthDate = new Date("September 16, 2003");
const currentDate = new Date() 

const timeDifference = currentDate - birthDate;
const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

if (daysDifference > 0) {
    document.getElementById("days").innerHTML = `I am ${daysDifference} days old 😎`;
}
// Soundboard stuff
function sound(soundName) {
    const soundPaths = {
        'anita max win': 'sounds/anita.mp3',
        'bruh': 'sounds/bruh.mp3',
        'yowai mo': 'sounds/yowai.mp3',
        'vine boom': 'sounds/boom.mp3',
        'huh': 'sounds/huh.mp3',
    };    
    const audio = new Audio(soundPaths[soundName]);
    audio.play();
    const soundDesc = document.getElementById('sound-desc');
    soundDesc.textContent = `${soundName}`;
    }

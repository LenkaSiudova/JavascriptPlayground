//Film
let currentMovie = location.hash.substring(1);
console.log(currentMovie)

//FindMyMovie
let movieIndex
for(let i = 0; i < filmy.length; i++){
	if(filmy[i].id===currentMovie) movieIndex = i
}

const filmName   = document.getElementById('filmName') //Sem patří název filmu
const filmDetail = document.getElementById('filmDetail')
const filmPoster = document.getElementById('filmPoster')
const filmPremiera = document.getElementById('premiera')

filmName.textContent = filmy[movieIndex].nazev
filmDetail.textContent = filmy[movieIndex].popis
filmPoster.setAttribute('src', filmy[movieIndex].plakat.url)

function formatDateToCzechSentence(dateString) {
    const inputDate = new Date(dateString)
    const currentDate = new Date()
    
    // Format the date to Czech format 
    const day = inputDate.getDate()
    const monthNames = ["ledna", "února", "března", "dubna", "května", "června", "července", "srpna", "září", "října", "listopadu", "prosince"]
    const month = monthNames[inputDate.getMonth()]
    const year = inputDate.getFullYear()
    const formattedDate = `${day}. ${month} ${year}`

	const timeDifference = inputDate.getTime() - currentDate.getTime();
    const dayDifference = Math.ceil(timeDifference / (1000 * 3600 * 24))
    
    let sentence
    if (dayDifference > 0) { // Date is in the future
        sentence = `Premiéra bude ${formattedDate}, což je za ${dayDifference} dní.`
    } else { // Date is in the past
        const pastDayDifference = Math.abs(dayDifference);
        sentence = `Premiéra byla ${formattedDate}, což je před ${pastDayDifference} dny.`
    }
    return sentence;
}

filmPremiera.textContent = formatDateToCzechSentence(filmy[movieIndex].premiera)

let comentDiv = document.querySelector("#note-form")
comentDiv.addEventListener("submit", (e) => {
	e.preventDefault()
    const comment = document.querySelector("#message-input")
    if(comment.value.length>0 && document.querySelector("#terms-checkbox").checked){
        comment.classList.remove("is-invalid")
        console.log(`${comment.value}`)
        filmDetail.textContent = comment.value
    }
    else {
        comment.classList += " is-invalid"
        comment.focus()
    }
} )

//Stars
const stars = document.querySelectorAll('.button-star');
let SavedStar = 0

function starsFn(action) {
    stars.forEach(star => {
        star.addEventListener(action, () => {
            let starValue;
            starValue = parseInt(star.textContent);
            if (action === 'click')     {SavedStar = starValue } // Save the value on click
            if (action === 'mouseleave'){ starValue = SavedStar} // Load the saved value on mouse leave
            // Update classes for stars up to the starValue
            stars.forEach((s, index) => {
                if (index < starValue) {
                    s.classList.remove('far')
                    s.classList.add('fas')
                } else {
                    s.classList.remove('fas')
                    s.classList.add('far')
                }
            })
        })
    })
}

starsFn('click')
starsFn('mouseenter')
starsFn('mouseleave')



const playButton = document.querySelector('.play')
const pauseButton = document.querySelector('.pause')
const video = document.getElementById('video')
const prehravac = document.getElementById('prehravac')
const currentTimeDisplay = document.querySelector('.current-time')
console.log(currentTimeDisplay)


playButton.addEventListener('click', () => { 
    video.play() 
})

video.addEventListener('playing', () => { 
    prehravac.classList.add("playing") 
})

pauseButton.addEventListener('click', () => { 
    video.pause() 
    prehravac.classList.remove('playing') 
})

video.addEventListener('timeupdate', () => {
    const currentTime = Math.round(video.currentTime);
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;
    const string = String(minutes).padStart(2, '0')+":"+String(seconds).padStart(2, '0')
    currentTimeDisplay.textContent = string
});



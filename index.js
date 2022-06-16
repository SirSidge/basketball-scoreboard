let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

let homeCount = 0;
let guestCount = 0;

function newGame() {
    //set both number values of home and guest to zero 0
    homeCount = 0;
    guestCount = 0;
    homeEl.value = 0;
    guestEl.value = 0;
    document.getElementById("home-el").style.border = "none"
    document.getElementById("guest-el").style.border = "none"
}

function increment(num, team) {
    if (team === 'home') {
        homeCount += num;
        homeEl.value = homeCount;
    } else {
        guestCount += num;
        guestEl.value = guestCount;
    }
    if (homeCount > guestCount) {
        document.getElementById("home-el").style.border = "2px solid #9AABD8"
        document.getElementById("guest-el").style.border = "none"
    } else if (guestCount > homeCount) {
        document.getElementById("guest-el").style.border = "2px solid #9AABD8"
        document.getElementById("home-el").style.border = "none"
    } else {
        document.getElementById("guest-el").style.border = "none"
        document.getElementById("home-el").style.border = "none"
    }
}


lines = [
    "On the scale of 1-10, you're 9. And I'm the 1 you need.",
    "Oops...... Girl, although my shoelace were tied, I fell for you.",
    "Your lips look lonely. Can mine keep them company?",
    "No pen, no pencil but still she draws my attention.",
    "You are like an question paper, whenever I see you, my mind goes blank.",
    "Your hands look heavy. Can I hold them for you 👀💕.",
    "Are you Microsoft cause I want to crash at your place.",
    "You know the melting point of human heart? <br> Her: What? <br> Your smile",
    "I don't use google anymore beacuse my search completed after finding you.",
    "Are you my mum's flying chappal, cause you hit hit different.",
    "I can't change water into wine, but I can change you into mine.",
    "The happiness starts with H, but why does mine starts with U?",
    "I dreamt for girls that are not like you, but you're better than I could ever imagine.",
    "Hey girl, are you a rope? Cause I wanna hang with you tonight.",
    "It's hard to call you by your name. Can I call you mine?",
    "Are you wifi? Cause I feel a connection.",
    "I hope you know CPR cause you took my breath away.",
    "I'm not 14 but I'm the 1 4 you.",
    "Are your parent's bakers? Because you're a cutie pie.",
    "Do you believe in love at first sight or should I walk past again?",
    "Are you an arrow? Because you have pierced mt heart.",
    "People float in zero gravity, but I would still fall for you.",
    "You're so pretty. I'm so cute. Together, we can be 'pretty cute'.",
    "Are you a time ttraveller, cause I see you in my future.",
    "Aren't you exhausted? Because you're running on my mind all day long.",
    "Do you happen to have a band-aid? Cause I have scraped my knees falling for you.",
    "I'm good at algebra. I can replace your X and you wouldn't need to figure out Y.",
    "Are you from turkey bcoz whenever I see you I become tharkey.",
    "There are 20 angels in the world. 11 are playing, 8 are sleeping and 1 is right in front of me.",
    "Are you my phone? Cause when ever I hold you, I don't want to leave you."
];

function pickUP() {
    var random = Math.floor(Math.random() * lines.length);
    var line = lines[random];

    document.getElementById('pickUp').innerHTML = line;
}

pickUP();

document.addEventListener('click', pickUP);
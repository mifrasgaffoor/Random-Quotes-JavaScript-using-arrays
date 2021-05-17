const btn = document.querySelector("button");
const txt = document.querySelector("p")

const arrayofQuetes= [
     "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.Marilyn Monroe" ,
     "Don't cry because it's over, smile because it happened. Dr. Seuss" ,
    "“Be yourself; everyone else is already taken.", "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
     "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
     "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
     "“A room without books is like a body without a soul.”",
      "“So many books, so little time.”",
     "“You only live once, but if you do it right, once is enough.”",
    "“Be the change that you wish to see in the world.”",
    
]



btn.addEventListener('click',
function generateQuotes(){
    var index =   parseInt(Math.random()*arrayofQuetes.length);
    txt.textContent = arrayofQuetes[index]
}

)



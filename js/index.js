

var quottte=document.getElementById("quote")
var quote=document.getElementById("quuuu");
var authorName=document.getElementById("author");

function getRandomQuote(){
quottte.classList.add("opacity-100");
var rand=Math.random()*randomQuote.length
var i =Math.floor(rand)


quote.innerHTML=randomQuote[i].quote
authorName.innerHTML=randomQuote[i].author

}

var randomQuote=[
    {
        quote:"“Be yourself; everyone else is already taken.”",
        author:"Oscar Wilde"
    },
    {
        quote:"“So many books, so little time.”",
        author:" Frank Zappa"
    },
    {
        quote:"“A room without books is like a body without a soul.”",
        author:"Marcus Tullius Cicero"
    },
    {
        quote:"“You only live once, but if you do it right, once is enough.”",
        author:"Mae West"
    },
    {
        quote:"“Be the change that you wish to see in the world.”",
        author:"Mahatma Gandhi"
    },
    {
        quote:"“In three words I can sum up everything I've learned about life: it goes on.”",
        author:"Robert Frost"
    }

]
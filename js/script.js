//Create an empty message
var message = "";

//Create an array of quotes
var quotes = [
	{quote:"Strange women lying in ponds distributing swords is no basis for a system of government.", source:"Dennis the Peasant", citation:"Monty Python and the Holy Grail", year:"1975", category:"humor"
	},
	{quote:"Invention, my dear friends, is 93% perspiration, 6% electricity, 4% evaporation, and 2% butterscotch ripple.", source:"Willy Wonka", citation:"Willy Wonka & the Chocolate Factory", year:"1971", category:"humor"
	},
	{quote:"Ray, if someone asks you if you’re a god, you say YES!", source:"Winston", citation:"Ghostbusters", year:"1984", category:"humor"
	},
	{quote:"The good thing about science is that it's true whether or not you believe in it.", source:"Neil deGrasse Tyson", category:"science"
	},
	{quote:"Be the change that you wish to see in the world.", source:"Mahatma Gandhi", category:"inspriational"}
];

//Create an array of colors
var colors = ['#36b55c', '#56638A', '#483A58', '#56203D', '#20063B'];

//Create interval
var timer = window.setInterval(autoChange, 20000);

//Random Quote Generator
function getRandomQuote() {
	let randomNumber = Math.floor(Math.random() * 5);
	let randomQuote = quotes[randomNumber];
	return randomQuote;
}

//Random Background Color
function backgroundColor() {
	let randomNumber = Math.floor(Math.random() * 5);
	let randomColor = colors[randomNumber];
	return randomColor;
}

function autoChange() {
	printQuote();
}

//Create printQuote function that prints out random quote and changes background color
function printQuote() {
	let randomColor = backgroundColor();
	document.getElementById('body').style.backgroundColor = randomColor;
	document.getElementById('loadQuote').style.backgroundColor = randomColor;
	let randomQuote = getRandomQuote();
	message = '<p class="quote">' + randomQuote.quote + '</p>';
	message += '<p class="source">' + randomQuote.source;
	if(randomQuote.citation !== undefined) {
		message += '<span class="citation">' + randomQuote.citation + '</span>';
	}
	if(randomQuote.year !== undefined) {
	message += '<span class="year">' + randomQuote.year + '</span>';
	}
	message += '<span class="category">' + randomQuote.category + '</span>';
	message += '</p>';
	document.getElementById('quote-box').innerHTML = message;
}

printQuote();

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


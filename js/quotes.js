const quotes = [
{
    quote: "Those who make peaceful revolution impossible, make violent revolution inevitable.",
    author: "John F. Kennedy",
},
{
    quote: "The goal of life is living in agreement with nature.",
    author: "Zeno",
},
{
    quote: "Well done is better than well said.",
    author: "Benjamin Franklin",
},
{
    quote: "Some people are born on third base and go through life thinking they hit a triple.",
    author: "Barry Switzer",
},
{
    quote: "Let no one ever come to you without leaving better and happier.",
    author: "Mother Teresa",
},
{
    quote: "Only in the agony of parting do we look into the depths of love.",
    author: "George Eliot",
},
{
    quote: "Calendars are for careful people, not passionate ones.",
    author: "Chuck Sigars",
},
{
    quote: "All that really belongs to us is time; even he who has nothing else has that.",
    author: "Baltasar Gracian",
},
{
    quote: "I tend to live in the past because most of my life is there.",
    author: "Herb Caen",
},
{
    quote: "I may lose land...but I never lose a minute.",
    author: "Napoleon Bonaparte",
},
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
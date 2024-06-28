const quotes = [
    {
        author: 'Arthur Ashe',
        quote: 'Start where you are. Use what you have. Do what you can.'
    },
    {
        author: 'Mark Twain',
        quote: 'The secret of getting ahead is getting started.'
    },
    {
        author: 'Abraham Lincoln',
        quote: 'The best way to predict the future is to create it.'
    },
    {
        author: 'Martin Luther King Jr.',
        quote: 'You don’t have to see the whole staircase, just take the first step.'
    },
    {
        author: 'Aristotle',
        quote: 'We are what we repeatedly do. Excellence, then, is not an act, but a habit.'
    },
    {
        author: 'William Arthur Ward',
        quote: 'Study while others are sleeping; work while others are loafing; prepare while others are playing; and dream while others are wishing.'
    },
    {
        author: 'Robert Schuller',
        quote: 'Better to do something imperfectly than to do nothing flawlessly.'
    },
    {
        author: 'Thomas Edison',
        quote: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.'
    },
    {
        author: 'Thomas Jefferson',
        quote: 'If you want something you’ve never had, you must be willing to do something you’ve never done.'
    },
    {
        author: 'William Arthur Ward',
        quote: 'If you can imagine it, you can achieve it; if you can dream it, you can become it.'
    }
];

const getRandomPerson = myArr => {

    let randIndx = Math.floor(Math.random() * myArr.length);
    let quote = myArr[randIndx].quote + "\n\n" + myArr[randIndx].author;
    quote = quote.replace(/\n/g, "<br>")
    return quote;
}
    
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("button").addEventListener("click", () => {
        document.getElementById("generatedMsg").innerHTML = getRandomPerson(quotes);
    });
});


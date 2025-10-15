const greetings = [
    "Hello there",
    "Salutations be upon thee",
    "Greetings, friend",
    "Welcome to my house"
]

export function randomQuote() {
    const quote = greetings[Math.floor(Math.random() * greetings.length)]
    document.getElementById('greeting').innerText = quote
}
const showOnPage = function(text) {
    let newParagraph = document.createElement('p')
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById('output')
    outputDiv.append(newParagraph)
}
// Changing variables
// If it is 70 or below in the mornings I'll take my dog out
// If I wake up at 6 AM, I'll take my dog out for a walk
// If I wake up later than 7 AM, I need to ask my dad to walk my dog

showOnPage('Can I walk the dog today?')

// Global Variables
let temp = 60
let currentTime = 5
let walkDog = false

showOnPage('Wake up Time ---> ' + currentTime)
showOnPage('Current Temperature ---> ' + temp)

if (currentTime <= 6 && temp <= 70) {
    walkDog = true
    showOnPage('Walk the Dog!')
}
else if (currentTime >= 6 || temp >= 70) {
    walkDog = false
    showOnPage('Ask dad to walk the dog')
}
else {
    showOnPage('Play fetch with the dog in the backyard')
}

// She always is a good girl, but just wanted to add this cause I love her.

let goodBehavior = true
if (goodBehavior) {
    showOnPage('Give her lots of treats')
}



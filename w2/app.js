const showOnPage = function(text) {
    let newParagraph = document.createElement('p')
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById('output')
    outputDiv.append(newParagraph)
}
// If I take my meds at six, I am able to have breakfast and walk my dog and shower
// If I take my meds after six, I need to have a morning snack and shower at night
// If I don't have time to walk my dog, I need to get my dad to and workout in the evening

showOnPage('<b>Alarm is Set for 6 AM</b>')
// Global Variables
let wakeUp = 7
let morningTasks = 30
let takeMeds = false
let haveBreakfast = false
let walkDog = false
let haveSnack = false
let morningShower = false
let eveningShower = false
let eveningWorkout = false

if (wakeUp <= 6 && morningTasks) {
    takeMeds = true
    morningShower = true
    walkDog = true
    showOnPage('Eat Breakfast.')
    showOnPage('Walk Dog')
    showOnPage('Take Shower')
}
else if (wakeUp >= 6 && morningTasks) {
    haveSnack = true
    walkDog = false
    eveningShower = true
    showOnPage('Have morning snack')
    showOnPage('Have evening shower')
}
else {
    showOnPage('Wake up & Take your meds!')
}


const showOnPage = function(text) {
    let newParagraph = document.createElement('p')
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById('output')
    outputDiv.append(newParagraph)
}

let currentTemp = function(temp) {
    if (temp <= 70) {
        showOnPage(`It is ${temp} out! Perfect weather.`)
        return true
    } else if (temp >= 70) {
        showOnPage(`It is ${temp}. Might be too hot!`)
        return false
    }  
}

let currentTime = function (time) {
    if (time <= 6) {
        showOnPage(`It is ${time} o clock. Perfect time.`)
        return true
    } else if (time >= 6) {
        showOnPage(`It is ${time} o clock. Too late!`)
        return false
    }
}

let canWalkTemp = currentTemp(80)
let canWalkTime = currentTime(4)

if(canWalkTemp && canWalkTime) {
    showOnPage('Perfect time and weather to walk the dog!')
} else if (canWalkTemp || canWalkTime) {
    showOnPage('It is not the best time or weather for a walk.')
}



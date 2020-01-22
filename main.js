
const flightHandlerFunction = (event) => {
    let flight = document.querySelector("#flight");
    flight.classList.remove("disabled");
    flight.classList.add("enabled");
}

const mindreadingHandlerFunction = (event) => {
    let mindreading = document.querySelector("#mindreading");
    mindreading.classList.remove("disabled");
    mindreading.classList.add("enabled");
}

const xrayHandlerFunction = (event) => {
    let xray = document.querySelector("#xray");
    xray.classList.remove("disabled");
    xray.classList.add("enabled");
}

const deactivateAllFunction = (event) => {
    let deactivateAll = document.querySelectorAll(".power");
    for (let item of deactivateAll) {
        item.classList.remove("enabled");
        item.classList.add("disabled");
    }
}

const activateAllFunction = (event) => {
    let activateAll = document.querySelectorAll(".power");
    for (let item of activateAll) {
        item.classList.remove("disabled");
        item.classList.add("enabled");
    }
}



document.querySelector("#deactivate-all").addEventListener("click", deactivateAllFunction);
document.querySelector("#activate-all").addEventListener("click", activateAllFunction);

document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction);
document.querySelector("#activate-mindreading").addEventListener("click", mindreadingHandlerFunction);
document.querySelector("#activate-xray").addEventListener("click", xrayHandlerFunction);
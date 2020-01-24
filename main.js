

const activatePowerFunction = (event) => {
    let activatePower = document.querySelector(`#${event.target.id.split("-")[1]}`)
    activatePower.classList.remove("disabled");
    activatePower.classList.add("enabled");
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

document.querySelector("#activate-flight").addEventListener("click", activatePowerFunction);
document.querySelector("#activate-mindreading").addEventListener("click", activatePowerFunction);
document.querySelector("#activate-xray").addEventListener("click", activatePowerFunction);
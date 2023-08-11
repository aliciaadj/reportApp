const buttons = document.getElementsByTagName("button");
const hoursDiv  = document.getElementsByClassName("hours");
const distDiv  = document.getElementsByClassName("dist");
const returnDiv  = document.getElementsByClassName("return");
const studiesDiv  = document.getElementsByClassName("studies");
/*const minus1 = document.getElementsByClassName("min1")
const minus2 = document.getElementsByClassName("min2")
const minus3 = document.getElementsByClassName("min3")
const minus4 = document.getElementsByClassName("min4")
const plus1 = document.getElementsByClassName("plus1")
const plus2 = document.getElementsByClassName("plus2")
const plus3 = document.getElementsByClassName("plus3")
const plus4 = document.getElementsByClassName("plus4")*/

const plus = document.getElementsByClassName("plus")
const minus = document.getElementsByClassName("min")

for (let i = 0; i < buttons.length; i++) {
     const element = buttons[i];
}

hours = 0;
dist = 0;
returnv = 0;
studies = 0;

minus[0].addEventListener("click", descend1)
minus[1].addEventListener("click", descend2)
minus[2].addEventListener("click", descend3)
minus[3].addEventListener("click", descend4)

function descend1() {
    if (hours > 0) {
        hours = hours -1
        hoursDiv[0].innerHTML = hours;
    }
}

function descend2() {
    if (dist > 0) {
        dist = dist -1
        distDiv[0].innerHTML = dist;
    }
}

function descend3() {
    if (returnv > 0) {
        returnv = returnv -1
        returnDiv[0].innerHTML = returnv;
    }
}

function descend4() {
    if (studies > 0) {
        studies = studies -1
        studiesDiv[0].innerHTML = studies;
    }
}

plus[0].addEventListener("click", ascend)
plus[1].addEventListener("click", ascend2)
plus[2].addEventListener("click", ascend3)
plus[3].addEventListener("click", ascend4)

function ascend() {
        hours = hours + 1
        hoursDiv[0].innerHTML = hours;
}


function ascend2() {
        dist = dist + 1
        distDiv[0].innerHTML = dist;
}

function ascend3() {
        returnv = returnv + 1
        returnDiv[0].innerHTML = returnv;
}

function ascend4() {
        studies = studies + 1
        studiesDiv[0].innerHTML = studies;
}

buttons[8].addEventListener("click", reset)

console.log(buttons[8])

function reset() {
    hoursDiv[0].innerHTML = 0;
    distDiv[0].innerHTML = 0;
    returnDiv[0].innerHTML = 0;
    studiesDiv[0].innerHTML = 0;
    hours = 0;
    dist = 0;
    returnv = 0;
    studies = 0;
}
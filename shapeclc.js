class shapeCalculator {

    constructor(minor, major) {

        this.minorAxis = minor
        this.majorAxis = major
        this.PI = 3.14

    }
    getRectangleArea() {

        return this.minorAxis * this.majorAxis

    }

    getCircleArea() {

        return this.PI * this.minorAxis * this.majorAxis

    }


    getSquareArea() {

        return this.minorAxis * this.majorAxis

    }
    getElipseArea() {

        return this.PI * this.minorAxis * this.majorAxis

    }



}

var selectedShape = ''
var totalAreaOfSelectedShape = 0;
var minorAxis
var majorAxis


function onchangeRadioButton(event) {
    selectedShape = event.target.value
}

function calculateArea(selectedShape) {



    cl = new shapeCalculator(minorAxis, majorAxis)

    switch (selectedShape) {
        case "rectangle":

            totalAreaOfSelectedShape = cl.getRectangleArea().toFixed(2)

            break;
        case "circle":

            totalAreaOfSelectedShape = cl.getCircleArea().toFixed(2)

            break;
        case "square":

            totalAreaOfSelectedShape = cl.getSquareArea().toFixed(2)

            break;

        case "elipse":

            totalAreaOfSelectedShape = cl.getElipseArea().toFixed(2)

            break;

        default:
            break;


    }

    return totalAreaOfSelectedShape;

}



const gotostep2 = document.querySelector('#btn');
const radioButtons = document.querySelectorAll('input[name="shape"]');
gotostep2.addEventListener("click", () => {
    for (const radioButton of radioButtons) {
        console.log(radioButton.checked, radioButtons)
        if (radioButton.checked) {
            selectedShape = radioButton.value;
            showSecondStep()
            break;
        }
    }

    if (!selectedShape) {

        alert("please select a shape")

    }
    //  // show the output:
    output.innerText = selectedShape ? `You have selected a ${selectedShape}` + " please input the required variables" : `You haven't selected any shape`;
});

const canclebtn = document.querySelector('#cancle');
canclebtn.addEventListener("click", () => {

    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            radioButton.checked = false
            selectedShape = radioButton.value;
            break;
        }
    }



});

const canclestep2 = document.querySelector('#canclestep2');
canclestep2.addEventListener("click", () => {

    showFirstSrep()


    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            radioButton.checked = false
            selectedShape = radioButton.value;
            break;
        }
    }
    minorAxisValue = document.querySelector("#minorAxis")
    majorAxisValue = document.querySelector("#majorAxis")
    minorAxisValue.value = null;
    majorAxisValue.value = null;
    minorAxis = null
    majorAxis = null

    console.log(minorAxis, majorAxis)
    totalAreaOfSelectedShape = 0;

})


//get inputs and button element from document
var gotostep3 = document.querySelector("#calcBtn");

var areagEl = document.querySelector("#area");

//bind a function tothe onClick event the AddBtn
gotostep3.onclick = function() {
    minorAxis = document.querySelector("#minorAxis").value;
    majorAxis = document.querySelector("#majorAxis").value;
    if (!minorAxis || !majorAxis) {
        alert("please insert minor-axis and major-axis value")
        return;

    }
    showLastStep()
        //area formule length*width
    area = calculateArea(selectedShape)

    console.log(area, selectedShape)

    //write the results into #area #perimeter document 
    areagEl.innerHTML = " You have selected a " + selectedShape + " with Minor-Axis" + minorAxis + " and Major-Axis" + majorAxis + " The area is " + selectedShape + ":" + area;
}

const startover = document.querySelector('#startover');

startover.addEventListener("click", () => {

    showFirstSrep()

})

function showSecondStep() {
    document.getElementById('step1').style.display = "none";
    document.getElementById('step3').style.display = "none";
    document.getElementById('step2').style.display = "block";
}

function showLastStep() {
    document.getElementById('step1').style.display = "none";
    document.getElementById('step2').style.display = "none";
    document.getElementById('step3').style.display = "block";
}

function showFirstSrep() {
    document.getElementById('step1').style.display = "block";
    document.getElementById('step2').style.display = "none";
    document.getElementById('step3').style.display = "none";
}
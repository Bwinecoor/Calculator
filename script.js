let prevVal = ''
let newVal = ''
let resultVal = ''
let mathOperator = ''
// Store whether or not decimal was clicked
// (Only allow one decimal per val)
let decimalClicked = false
// Hold values we want stored in memory
let valMemStored = ''

function numButPress(num) {
    // check if a number has already been put
    if (resultVal) {
        //start a new number
        newVal = num
        //reset to create a new result
        resultVal = ''
    } else {
        if (num === '.'){
            if(decimalClicked != true) {
                //takes the current value of new val and add the character pressed
                newVal += num
                //Sets decimal check var to true, wont allow more
                decimalClicked = true
            }
        }else{
            newVal += num
            console.log(newVal)
        }
    }
    //update the display
    document.getElementById('entry').value = newVal
}


function mathButPress(operator) {

}

function equalButPress() {

}
//clears everything but memory
function clearButPress() {
    preVal = ''
    newVal = ''
    resultVal = ''
    mathOperator = ''
    decimalClicked = false
    document.getElementById('entry').value = '0'
}
//store the current value in entry in valMemRestored
function copyButPress() {
    valMemStored = document.getElementById('entry').value
}
// if a value has been stored, paste it in the #entry window and assign it as the newVal
function pasteButPress() {
    if (valMemStored) {
        document.getElementById('entry').value = valMemStored
        newVal = valMemStored

    }
}
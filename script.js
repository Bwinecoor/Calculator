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

} 

function mathButPress(operator) {

}

function equalButPress() {

}
//clears everything but memory
function clearButPress() {
    let prevVal = ''
    let newVal = ''
    let resultVal = ''
    let mathOperator = ''
    let decimalClicked = false
    document.getElementById('entry').value = '0'
}
//store the current value in entry in valMemRestored
function copyButPress() {
   valMemStored = document.getElementById('entry').value
}
// if a value has been stored, paste it in the #entry window and assign it as the newVal
function pasteButPress() {
    if(valMemStored) {
        document.getElementById('entry').value = valMemStored
        newVal = valMemStored

    }
}
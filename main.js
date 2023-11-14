
// display() function and appending any button clicked..No.being a parameter for the button clicked
function display(no){
    document.getElementById('result').value += no

    return no
 
}
function zero(){
    display = 0
}
// solve() function
function solve(){

    let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value = y

    return y

}
// clearScreen()
// This function is called when the user clicks on the C or the clear button. 

function clearScreen(){

    document.getElementById('result').value = ''

}
// deleteLast() function
function deleteLast() {
    let currentVal = document.getElementById('result').value;
    document.getElementById('result').value = currentVal.slice(0, -1);
   
}




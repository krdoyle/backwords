// Get user input - string (controller)
function getValue() {

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);

    displayString(revString);

}

// reverse the string (logic)
function reverseString(userString) {

    let revString = [];

    //reverse a string in a for loop
    for (let i = userString.length - 1; i >= 0; i--) {
        revString += userString[i];
    }

    return revString;

}

// display reversed string on screen (view)
function displayString(revString) {

    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;

    document.getElementById("alert").classList.remove("invisible");

}
// The SoftPhone
var phone = null;

// The current media session
var session = null;

// The call options
var callOptions = {
    "mediaConstraints": { "audio": true, "video": false },
    "pcConfig": {
        "iceServers": [
            { "urls": ["stun:stun.l.google.com:19302"] }
        ]
    }
};

// Pre-Fill the fields with working registration data, if we saved it before
document.addEventListener("DOMContentLoaded", function () {
    if (supportsLocalStorage()) {
        const registerForm = document.getElementById("register-form");

        // Get the data from the fields
        if (localStorage["username"])
            registerForm.username.value = localStorage["username"];

        if (localStorage["password"])
            registerForm.password.value = localStorage["password"];

        if (localStorage["registrar"])
            registerForm.registrar.value = localStorage["registrar"];
    }
});

// Event listener for the Register Button
document.getElementById("register-form-submit").addEventListener("click", (e) => {
    e.preventDefault();
    const registerForm = document.getElementById("register-form");

    // Get the data from the fields
    const username = registerForm.username.value;
    const password = registerForm.password.value;
    const registrar = registerForm.registrar.value;

    // Check if we have all the data needed
    if (username === "" || password === "" || registrar === "") {
        alert("Please fill out all fields!");
    } else {
        // Configure the SoftPhone
        register(registrar, username, password);
    }
})

// Event listener for the dialer. Add dialed digits to the number
const buttons = document.querySelectorAll(".dialpad-char");
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        var value = e.target.value ? e.target.value : e.target.innerText;
        var number = document.getElementById("phonenumber-field");
        if (value == "⇤") {
            if (number.value.length > 0)
                number.value = number.value.slice(0, -1);
        } else {
            number.value += value;

            // TODO: Send DTMF
        }
    })
});

// Event listener for the Unregister Button
document.getElementById("unregister-submit").addEventListener("click", (e) => {
    e.preventDefault();
    unregister();
})

// Event listener for the Dial Button
document.getElementById("dial").addEventListener("click", (e) => {
    e.preventDefault();
    var number = document.getElementById("phonenumber-field");
    if (number.value === "")
        alert("Please enter a number");
    else
        dial(number.value);
})

// Event listener for the Hangup Button
document.getElementById("hangup").addEventListener("click", (e) => {
    e.preventDefault();
    hangup();
})

// Event listener for the Accept Button
document.getElementById("accept").addEventListener("click", (e) => {
    e.preventDefault();
    accept();
})

// Event listener for the Reject Button
document.getElementById("reject").addEventListener("click", (e) => {
    e.preventDefault();
    hangup();
})

// Event listener for the Hold Button
document.getElementById("hold").addEventListener("click", (e) => {
    e.preventDefault();
    var isHeld = toggleHold();
    document.getElementById("hold").value = isHeld ? "Retrieve" : "Hold";
})

// Event listener for the Mute Button
document.getElementById("mute").addEventListener("click", (e) => {
    e.preventDefault();
    var isMuted = toggleMute();
    document.getElementById("mute").value = isMuted ? "UnMute" : "Mute";
})

// Event listener for the Transfer Button
document.getElementById("transfer").addEventListener("click", (e) => {
    e.preventDefault();
    transfer();
})

// Event listener for the Send chat message Button
document.getElementById("send-chat-message").addEventListener("click", (e) => {
    e.preventDefault();
    var recipient = document.getElementById("chat-recipient");
    var message = document.getElementById("chat-message");
    if (message.value == "" || recipient.value == "") {
        alert("Please enter recipient and message to proceed");
    } else {
        sendChatMessage(recipient.value, message.value);
    }
})

// Configure the SoftPhone and return it
function register(registrar, username, password) {
    // TODO: Register the SoftPhone and set the UI states
}

// Unregister SoftPhone
function unregister() {
    // TODO: UnRegister the SoftPhone and set the UI states
}

// Dial a number
function dial(number) {
    // TODO: Dial the number given
}

// Hangup an ongoing call
function hangup() {
    // TODO: Hangup the ongoing call
}

// Accept incoming call
function accept() {
    // TODO: Accept the currently incoming call
}

// Prepare WebRTC media and Media elements
function prepareCallingAndMedia() {
    // TODO: Prepare the SoftPhone and create the Objects for incmoing and outgoing media
}

// Toogle hold and return the current state
function toggleHold() {
    var isHold = false;
    // TODO: Check the hold state and toggle it
    return isHold;
}

// Toogle mute and return the current state
function toggleMute() {
    var isMuted = false;
    // TODO: Check the mute state and toggle it
    return isMuted;
}

// Transfer the current call to a destination
function transfer() {
    // TODO: Transfer the call to a destination put-in by the user
}

// Send a chat message
function sendChatMessage(receiver, message) {
    // TODO: Send a chat message
}
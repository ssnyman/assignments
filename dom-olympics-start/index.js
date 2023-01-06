//  **QUALIFIER** create header / sub

const h1 = document.createElement("h1");
h1.textContent = "JavaScript made this!";
h1.style.fontSize = "35px";
document.getElementById("header").appendChild(h1);
h1.className = "header";

const subTitle = document.createElement("sub");
subTitle.innerHTML = "<span class = 'name'> Shelby </span> wrote the JavaScript!";
subTitle.style.fontSize = "20px";
document.getElementById("header").appendChild(subTitle);
subTitle.className = "header";

//  **BRONZE** create new messages

let messages = document.getElementsByClassName("message");

messages[0].textContent = "Hey! How was your trip?";
messages[1].textContent = "It was great!";
messages[2].textContent = "Are you going back?";
messages[3].textContent = "Yeah, eventually.";

const clearButton = document.getElementById("clear-button");
const dltMsg = document.querySelector(".messages");

clearButton.addEventListener("click", () => {
        dltMsg.textContent = "";
})

// **SILVER**  change themes

const dropDown = document.getElementById("theme-drop-down");
const messageText = document.querySelector(".messages");

for (let i = 0; i < messages.length; i++){
        messages[i].classList.toggle("theme-two");
}

dropDown.onchange = function () {
        if (dropDown.value == "theme-one") {
                messageText.style.color = "brown";
                document.querySelector(".message.left").style.backgroundColor = "blue";
                document.querySelector(".message.right").style.backgroundColor = "blue";
        } else if (dropDown.value == "theme-two") {
                messageText.style.color = "red";
                document.querySelector(".message.left").style.backgroundColor = "black";
                document.querySelector(".message.right").style.backgroundColor = "black";

        }
}

// **GOLD** add more messages

const form = document["message"]
form.messageInput.value = "";

form.addEventListener("submit", function (event) {
        event.preventDefault();
        const div = document.createElement("div");
        div.textContent = form.messageInput.value;
        document.getElementsByClassName("messages")[0].append(div);
})

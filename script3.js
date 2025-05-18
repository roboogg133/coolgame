const main = document.getElementById("main")
const two = document.getElementById("2")
const three = document.getElementById("3")
const four = document.getElementById("4")
const five = document.getElementById("5")
let lastMessages = [];

let msg1
let msg2
let msg3
let msg4
let msg5



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function messagesys() {
    const res = await fetch('http://31.97.20.160:9834/api/see');
    const data = await res.json();

    if (data.length >= 5) {
        const newMessages = [
            data[0].message,
            data[1].message,
            data[2].message,
            data[3].message,
            data[4].message
        ];

        const changed = newMessages.some((msg, i) => msg !== lastMessages[i]);

        if (!changed) return; 

        msg1 = data[4].id
        msg2 = data[3].id
        msg3 = data[2].id
        msg4 = data[1].id
        msg5 = data[0].id

        lastMessages = [...newMessages];

        main.classList.add("opacity0");
        two.classList.add("opacity0");
        three.classList.add("opacity0");
        four.classList.add("opacity0");
        five.classList.add("opacity0");

        await sleep(1500);

        five.textContent = data[0].message;
        four.textContent = data[1].message;
        three.textContent = data[2].message;
        two.textContent = data[3].message;
        main.textContent = data[4].message;

        main.classList.remove("opacity0");
        two.classList.remove("opacity0");
        three.classList.remove("opacity0");
        four.classList.remove("opacity0");
        five.classList.remove("opacity0");

        main.classList.add("fall");
        main.classList.add("opacity1");
        two.classList.add("opacity1");
        three.classList.add("opacity1");
        four.classList.add("opacity1");
        five.classList.add("opacity1");

        await sleep(1500);

        main.classList.remove("fall");
        main.classList.remove("opacity1");
        two.classList.remove("opacity1");
        three.classList.remove("opacity1");
        four.classList.remove("opacity1");
        five.classList.remove("opacity1");

    }
}

setInterval(messagesys, 8000);
messagesys();
const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const titleInput = document.getElementById("title");
const messageInput = document.getElementById("message");
const messageTag = document.getElementById("message-p");
const nameSpan = document.getElementById("name-span");
const titleSpan = document.getElementById("title-span");
const recentMessages = document.querySelector(".recent-messages");

const postMessage = async (dataObj) => {
    const results = await fetch("/api/feedback", {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(dataObj)
    })
    return await results.json();
}

const fetchMessages = async () => {
    const data = await fetch("/api/feedback");
    return await data.json();
}

const deleteMessage = async (index) => {
    const results = await fetch("/api/feedback", {
        method: "DELETE",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify({ index })
    })
    return await results.json();
}

const renderMessages = (feedback) => {
    const html = [];
    feedback.forEach((messageObj, index) => {
        html.push(`
        <div class="message-box">
            <div>
                <span id="name-span" class="h4">${messageObj.name}</span>
                <span class="h4"> - </span>
                <span id="title-span" class="h4">${messageObj.title}</span>
                <p id="message-p">${messageObj.message}</p>
            </div>
            <button class="btn btn-danger" value="${index}">Delete</button>
        </div>
        `)
    })
    recentMessages.innerHTML = html.join("");
}

const onPageVisit = async () => {
    const feedback = await fetchMessages();
    renderMessages(feedback);
}

form.addEventListener("submit", async event => {
    event.preventDefault();
    if (nameInput.value && titleInput.value && messageInput.value) {
        const feedback = await postMessage({
            name: nameInput.value,
            title: titleInput.value,
            message: messageInput.value
        })
        renderMessages(feedback);
        nameInput.value = "";
        titleInput.value = "";
        messageInput.value = "";
    }
})

recentMessages.addEventListener("click", async event => {
    if (event.target.attributes && event.target.attributes.value) {
        const feedback = await deleteMessage(event.target.attributes.value.value)
        renderMessages(feedback);
    }
})

onPageVisit();
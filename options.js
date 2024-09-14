let themes_buttons = document.querySelectorAll(".theme");


document.querySelector(".zekr").className = `zekr ${localStorage.getItem("dark")} ${localStorage.getItem("theme")}`;
document.querySelector(".zekr").style.top = localStorage.getItem("top") + "px";
document.querySelector(".zekr").style.left = localStorage.getItem("left") + "px";
document.querySelector(".zekr").style.scale = localStorage.getItem("scale") / 100;
document.querySelector("#top").value = localStorage.getItem("top");
document.querySelector("#left").value = localStorage.getItem("left");
document.querySelector("#scale").value = localStorage.getItem("scale");



document.addEventListener("click", (e) => {
    if (e.target.className == "theme") {

        // for (let i = 0; i < themes_buttons.length; i++) {
        //     console.log(e.target.id)

        // }

        localStorage.setItem("theme", e.target.id);
        // saveToChromeStorage("theme", e.target.id);
        chrome.storage.local.set({ "theme": e.target.id }).then(() => {
            console.log("Value is set" + e.target.id);
        });
        document.querySelector(".zekr").className = `zekr ${localStorage.getItem("dark")} ${localStorage.getItem("theme")}`;

    }

    if (document.querySelector("#dark").checked == true) {
        localStorage.setItem("dark", "dark");
        document.querySelector(".zekr").classList.add("dark");
        chrome.storage.local.set({ "dark": "dark" }).then(() => {
            console.log("Value is set" + "dark");
        });
    }
    else if (document.querySelector("#dark").checked == false) {
        localStorage.setItem("dark", "");
        document.querySelector(".zekr").classList.remove("dark");
        chrome.storage.local.set({ "dark": "value" }).then(() => {
            console.log("Value is set" + "light");
        });

    }
})

document.addEventListener("mousemove", function (e) {
    let current_zekr = document.querySelector(".zekr");
    if (e.target.id == "top") {
        localStorage.setItem("top", document.querySelector("#top").value)
        current_zekr.style.top = localStorage.getItem("top") + "px";

        chrome.storage.local.set({ "top": document.querySelector("#top").value }).then(() => {
            console.log("top" + document.querySelector("#top").value);
        });


    }
    if (e.target.id == "left") {
        localStorage.setItem("left", document.querySelector("#left").value)
        current_zekr.style.left = localStorage.getItem("left") + "px";

        chrome.storage.local.set({ "left": document.querySelector("#left").value }).then(() => {
            console.log("left" + document.querySelector("#left").value);
        });


    }
    if (e.target.id == "scale") {
        localStorage.setItem("scale", document.querySelector("#scale").value)
        current_zekr.style.scale = localStorage.getItem("scale") / 100;

        chrome.storage.local.set({ "scale": document.querySelector("#scale").value }).then(() => {
            console.log("scale" + document.querySelector("#scale").value);
        });


    }
    // set_position();

})

function saveToChromeStorage(value, keyData) {
    chrome.storage.local.set({ value: keyData }), function () {
        console.log("Value is set" + keyData);
    };

}


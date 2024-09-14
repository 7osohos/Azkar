
let Azkar_arr = [
    'سبحان الله', 'الحمدلله', 'اللهم صل علي سيدنا محمد', 'لا اله الا انت سبحانك اني كنت من الظالمين', 'رب اغفر لي', 'لا اله الا الله', 'لا حول ولا قوة الا بالله', 'اللهم انصرنا', 'اللهم اهدنا في من هديت', 'اللهم عافنا في من عافيت', 'اللهم انك عفو تحب العفو فاعفوا عنا', 'يا حي يا قيوم برحمتك نستغيث', 'اللهم اجرنا من خزي الدنيا وخزي النار', 'اللهم تول امرنا', 'اللهم اصلح عيوبنا', 'يا كريم اكرمنا', 'يا فتاح افتح علينا', 'يا رزاق ارزقنا', 'رب اغفرلي ما رأت عيناي', 'رب اغفرلي ما سمعت اذناي', 'رب اغفرلي ما نطقت به شفتاي', 'اعوذ بالله من الشيطان الرجيم', 'لا اله الا الله'
]
if (document.querySelector(".zekr")) {
    chrome.storage.local.get(["top", "left", "scale"]).then((result) => {


    });
}


let Zekr = document.querySelector(".zekr");

setInterval(() => {
    if (document.querySelector(".zekr")) {
        zekrFading(document.querySelector(".zekr"));

    }
    let newZekr = document.createElement("div");
    newZekr.className = `zekr red`;


    let random_Zekr = Math.floor(Math.random() * Azkar_arr.length)
    newZekr.innerHTML = Azkar_arr[random_Zekr];


    document.querySelector("body").appendChild(newZekr);

    chrome.storage.local.get(["theme", "dark", "top", "left", "scale"]).then((result) => {
        newZekr.className = `zekr ${result.dark} ${result.theme}`;


        newZekr.style.top = result.top + "px";
        newZekr.style.left = result.left + "px";
        newZekr.style.scale = result.scale / 100;


        // console.log("Value is " + result.theme);
        // console.log("Value is " + result.dark);
        // console.log("Value is " + result.top);
        // console.log("Value is " + result.left);
        // console.log("Value is " + result.scale);
    });


    setTimeout(() => {
        newZekr.classList.add("fadeOut");

        setTimeout(() => {
            newZekr.remove();

        }, 1000)

    }, 8000)

}, 50000)


document.addEventListener("click", (e) => {
    // console.log(document.querySelector("#top").value)
    if (e.target.classList.contains("zekr")) {
        e.target.classList.add("fadeOut");
        zekrFading(e.target);
    }
})

let zekrFading = (zekr) => {
    setTimeout(() => {
        zekr.remove();
    }, 1000)

}


// function getDataFromChromeStorage(keyData) {

//     chrome.storage.local.get([keyData]), function (result) {
//         // newZekr.className = `zekr ${result.keyData}`;

//         console.log("Value is " + result.keyData);
//     };

// }
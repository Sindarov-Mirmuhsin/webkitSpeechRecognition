var record = new webkitSpeechRecognition;

record.lang = "uz-RU";

record.onerror = function () {
  console.log(" === Xatolik yuz berdi ===");
}

record.onend = function () {
  console.log(" === Aloqa tugadi ===");
}


record.onresult = function (evt) {
  var commands = evt.results[0][0].transcript;

  console.log(commands);
  if (commands == "assalomu alaykum") {
    prompt("Vaalaykum assalom Assalomu alaykum");
  } if (commands == "qalaysiz") {
    prompt("Yaxshi raxmat o'zingizchi?");
  } if (commands == "nima gap") {
    prompt("Tinchlik o'zingizdachi?");
  } if (commands == "nima yangiliklar") {
    prompt("Yangiliklar xozircha yo'q o'zingizdachi?");
  } if (commands == "qayerda o'qiyapsiz") {
    prompt("TATU da o'zingizchi?");
  } if (commands == "qaysi fakultetda o'qiyabsiz") {
    alert("Dasturiy Injenering");
  } if (commands == "kontrakt nech pul") {
    alert("12 million");
  } if (commands == "salomat boling") {
    prompt("charchamang");
  }

}

btn.addEventListener("click", function () {
  console.log(" === Aloqa boshlandi ===");
  record.start();
})

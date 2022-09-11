var ninelocaltext = localStorage.getItem("ninetext");
var tenlocaltext = localStorage.getItem("tentext");
var elevenlocaltext = localStorage.getItem("eleventext");
var twelvelocaltext = localStorage.getItem("twelvetext");
var onelocaltext = localStorage.getItem("onetext");
var twolocaltext = localStorage.getItem("twotext");
var threelocaltext = localStorage.getItem("threetext");
var fourlocaltext = localStorage.getItem("fourtext");
var fivelocaltext = localStorage.getItem("fivetext");

var nineSaveBtn = $('button[name=nineSaveBtn]');
var tenSaveBtn = $('button[name=tenSaveBtn]');
var elevenSaveBtn = $('button[name=elevenSaveBtn]');
var twelveSaveBtn = $('button[name=twelveSaveBtn]');
var oneSaveBtn = $('button[name=oneSaveBtn]');
var twoSaveBtn = $('button[name=twoSaveBtn]');
var threeSaveBtn = $('button[name=threeSaveBtn]');
var fourSaveBtn = $('button[name=fourSaveBtn]');
var fiveSaveBtn = $('button[name=fiveSaveBtn]');

var nineTextEl = $('#9am-text');
var tenTextEl = $('#10am-text');
var elevenTextEl = $('#11am-text');
var twelveTextEl = $('#12am-text');
var oneTextEl = $('#1pm-text');
var twoTextEl = $('#2pm-text');
var threeTextEl = $('#3pm-text');
var fourTextEl = $('#4pm-text');
var fiveTextEl = $('#5pm-text');

nineSaveBtn.on("click", function () {
    localStorage.setItem("ninetext", $(nineTextEl).val());
})

tenSaveBtn.on("click", function () {
    localStorage.setItem("tentext", $(tenTextEl).val());
})

elevenSaveBtn.on("click", function () {
    localStorage.setItem("eleventext", $(elevenTextEl).val());
})

twelveSaveBtn.on("click", function () {
    localStorage.setItem("twelvetext", $(twelveTextEl).val());
})

oneSaveBtn.on("click", function () {
    localStorage.setItem("onetext", $(oneTextEl).val());
})

twoSaveBtn.on("click", function () {
    localStorage.setItem("twotext", $(twoTextEl).val());
})

threeSaveBtn.on("click", function () {
    localStorage.setItem("threetext", $(threeTextEl).val());
})

fourSaveBtn.on("click", function () {
    localStorage.setItem("fourtext", $(fourTextEl).val());
})

fiveSaveBtn.on("click", function () {
    localStorage.setItem("fivetext", $(fiveTextEl).val());
})

function renderStoredText() {
    if (ninelocaltext) {
        nineTextEl.text(ninelocaltext)
    }
    if (tenlocaltext) {
        tenTextEl.text(tenlocaltext)
    }
    if (elevenlocaltext) {
        elevenTextEl.text(elevenlocaltext)
    }
    if (twelvelocaltext) {
        twelveTextEl.text(twelvelocaltext)
    }
    if (onelocaltext) {
        oneTextEl.text(onelocaltext)
    }
    if (twolocaltext) {
        twoTextEl.text(twolocaltext)
    }    
    if (threelocaltext) {
        threeTextEl.text(threelocaltext)
    }
    if (fourlocaltext) {
        fourTextEl.text(fourlocaltext)
    }
    if (fivelocaltext) {
        fiveTextEl.text(fivelocaltext)
    }
}

renderStoredText();

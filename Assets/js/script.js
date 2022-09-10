$('#currentDay').text(moment().format("dddd, MMMM Do YYYY"));
var tableEl = $('.table');
var textCells = $('td[name=text-cell');

switch (moment().hour()) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
        j = 0;
        for (i = 0; i < textCells.length; i++){
            var dataIdValue = $(textCells[i]).attr("data-Id");
            if (dataIdValue == j) {
                $(textCells[i]).css("background-color", "lightcoral");
            } else if (dataIdValue < j) {
                $(textCells[i]).css("background-color", "lightgray");
            } else {
                $(textCells[i]).css("background-color", "lightgreen");
            }
        }
        break;
    case 9:
        j = 1;
        for (i = 0; i < textCells.length; i++){
            var dataIdValue = $(textCells[i]).attr("data-Id");
            if (dataIdValue == j) {
                $(textCells[i]).css("background-color", "lightcoral");
            } else if (dataIdValue < j) {
                $(textCells[i]).css("background-color", "lightgray");
            } else {
                $(textCells[i]).css("background-color", "lightgreen");
            }
        }
        break;
    case 10:
        j = 2;
        for (i = 0; i < textCells.length; i++){
            var dataIdValue = $(textCells[i]).attr("data-Id");
            if (dataIdValue == j) {
                $(textCells[i]).css("background-color", "lightcoral");
            } else if (dataIdValue < j) {
                $(textCells[i]).css("background-color", "lightgray");
            } else {
                $(textCells[i]).css("background-color", "lightgreen");
            }
        }
        break;
    case 11:
        j = 3;
        for (i = 0; i < textCells.length; i++){
            var dataIdValue = $(textCells[i]).attr("data-Id");
            if (dataIdValue == j) {
                $(textCells[i]).css("background-color", "lightcoral");
            } else if (dataIdValue < j) {
                $(textCells[i]).css("background-color", "lightgray");
            } else {
                $(textCells[i]).css("background-color", "lightgreen");
            }
        }
        break;
    case 12:
        j = 4;
        for (i = 0; i < textCells.length; i++){
            var dataIdValue = $(textCells[i]).attr("data-Id");
            if (dataIdValue == j) {
                $(textCells[i]).css("background-color", "lightcoral");
            } else if (dataIdValue < j) {
                $(textCells[i]).css("background-color", "lightgray");
            } else {
                $(textCells[i]).css("background-color", "lightgreen");
            }
        }
        break;
    case 13:
        j = 5;
        for (i = 0; i < textCells.length; i++){
            var dataIdValue = $(textCells[i]).attr("data-Id");
            if (dataIdValue == j) {
                $(textCells[i]).css("background-color", "lightcoral");
            } else if (dataIdValue < j) {
                $(textCells[i]).css("background-color", "lightgray");
            } else {
                $(textCells[i]).css("background-color", "lightgreen");
            }
        }
        break;
    case 14:
        j = 6;
        for (i = 0; i < textCells.length; i++){
            var dataIdValue = $(textCells[i]).attr("data-Id");
            if (dataIdValue == j) {
                $(textCells[i]).css("background-color", "lightcoral");
            } else if (dataIdValue < j) {
                $(textCells[i]).css("background-color", "lightgray");
            } else {
                $(textCells[i]).css("background-color", "lightgreen");
            }
        }
        break;
    case 15:
        j = 7;
        for (i = 0; i < textCells.length; i++){
            var dataIdValue = $(textCells[i]).attr("data-Id");
            if (dataIdValue == j) {
                $(textCells[i]).css("background-color", "lightcoral");
            } else if (dataIdValue < j) {
                $(textCells[i]).css("background-color", "lightgray");
            } else {
                $(textCells[i]).css("background-color", "lightgreen");
            }
        }
        break;
    case 16:
        j = 8;
        for (i = 0; i < textCells.length; i++){
            var dataIdValue = $(textCells[i]).attr("data-Id");
            if (dataIdValue == j) {
                $(textCells[i]).css("background-color", "lightcoral");
            } else if (dataIdValue < j) {
                $(textCells[i]).css("background-color", "lightgray");
            } else {
                $(textCells[i]).css("background-color", "lightgreen");
            }
        }
        break;
    case 17: 
        j = 9;
        for (i = 0; i < textCells.length; i++){
            var dataIdValue = $(textCells[i]).attr("data-Id");
            if (dataIdValue == j) {
                $(textCells[i]).css("background-color", "lightcoral");
            } else if (dataIdValue < j) {
                $(textCells[i]).css("background-color", "lightgray");
            } else {
                $(textCells[i]).css("background-color", "lightgreen");
            }
        }
        break;
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
        j = 24;
        for (i = 0; i < textCells.length; i++){
            var dataIdValue = $(textCells[i]).attr("data-Id");
            if (dataIdValue == j) {
                $(textCells[i]).css("background-color", "lightcoral");
            } else if (dataIdValue < j) {
                $(textCells[i]).css("background-color", "lightgray");
            } else {
                $(textCells[i]).css("background-color", "lightgreen");
            }
        }
        break;

}

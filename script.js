window.addEventListener("load", () => {
    const container = document.getElementById("container");
    const main = document.getElementById("main");
    const letter = document.getElementById("letter");
    const sentencesHTML = document.getElementsByClassName("line");
    const music = new Audio("./assets/tracks/Sac-Moi-Em-Hong-Minh-Hang.mp3");
    const sentencesText = [];


    const main_animate = [
        {transform: 'scale(0)'},
        {transform: 'scale(1)'}
    ]

    const main_animate_timing = {
        duration: 1000,
    }

    letter.addEventListener("click", () => {
        container.style.display = "none";
        main.style.display = "flex";
        main.animate(main_animate, main_animate_timing);
        music.currentTime = 15;
        music.play();
        for (var i = 0; i < sentencesHTML.length; i++) {
            sentencesText.push(sentencesHTML[i].innerText);
            sentencesHTML[i].innerHTML = "";
        }
        setTimeout(function () { typeWriter(sentencesText, sentencesHTML, 0, 40); }, 1100);
    });


    /*typing one sentence each time */
    function typeWriter(sentencesText, sentencesHTML, sentence_index, speed) {
        if (sentence_index < sentencesText.length) {
            printSentence(0, sentencesText[sentence_index], sentencesHTML, sentence_index, speed);
            setTimeout(function () {
                typeWriter(sentencesText, sentencesHTML, sentence_index, speed);
            }, speed * sentencesText[sentence_index].length + 500)
            sentence_index++;
        }
    }

    /*typing character of sentence */

    function printSentence(charPosition, sentence, sentencesHTML, sentence_index, speed) {
        if (charPosition < sentence.length) {
            sentencesHTML[sentence_index].innerHTML += sentence.charAt(charPosition);
            charPosition++;
            setTimeout(function () { printSentence(charPosition, sentence, sentencesHTML, sentence_index, speed); }, speed);
        }
    }
});

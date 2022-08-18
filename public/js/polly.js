function pollyTextToSpeech() {

    const elemPlayButton = document.querySelector("#play-button");
    const elemVoice = document.querySelector("#voice");
    const elemText = document.querySelector("#message");

    elemPlayButton.addEventListener("click", function pollyTextToSpeech() {

        let url = "https://dum41kup26.execute-api.us-east-1.amazonaws.com/default/text_to_speech";
        url += "?voice=" + encodeURIComponent(elemVoice.value);
        url += "&text=" + encodeURIComponent(elemText.textContent);

        const elemAudio = document.createElement("AUDIO");
        document.body.appendChild(elemAudio);
        elemAudio.controls = true;
        elemAudio.src = url;
        elemAudio.play();
    });

};

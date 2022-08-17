const AWS = require('aws-sdk')
const fs = require('fs')

const AWS_IAM_ID = "AKIAXLAM5Q6ZGOKP5GOT";
const AWS_IAM_SECRET = "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";

// const Polly = new AWS.Polly({
//   region: 'us-east-1
// })

// const input = {
//   Text: "Hello Polly, This is my first attempt",
//   OutputFormat: "mp3",
//   VoiceId: "Joanna"
//   LanguageCode: "en"
// }

// Polly.synthesizeSpeech(input, (err, data) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   if (data.AudioStream instanceof Buffer){
//     fs.writeFile('hello.mp3', data.AudioStream, (fsErr) => {
//         if (fsErr) {
//           console.error(err)
//           return
//         )
//         console.log('Success')
//   }


function getQueryParameter(event, key) {

    const value = event["queryStringParameters"] && event["queryStringParameters"][key];

    if (!value) {
        throw new Error("Could not get the query parameter \"" + key + "\".");
    }

    return value;

}

async function createAudioData(voiceID, text) {
    return new Promise((resolve, reject) => {

        const credentials = new AWS.Credentials(AWS_IAM_ID, AWS_IAM_SECRET);

        AWS.config.update({
            credentials,
        });

        const pollyParams = {
            OutputFormat: "mp3",
            Text: text,
            VoiceId: voiceID,
        };

        let polly = new AWS.Polly();
        polly.synthesizeSpeech(pollyParams, function(error, data) {

            if (error) {
                reject(error);
                return;
            }

            let audioStream = data.AudioStream;

            resolve(audioStream);

        });
    });
}

exports.handler = async(event) => {

    try {

        const qpVoiceID = getQueryParameter(event, "voice");
        const qpText = getQueryParameter(event, "text");

        const audioData = await createAudioData(qpVoiceID, qpText);

        const response = {
            statusCode: 200,
            headers: {
                "content-type": "audio/mpeg",
            },
            body: audioData.toString("base64"),
            isBase64Encoded: true,
        };
        return response;

    } catch (error) {

        console.error("error", error);

        const response = {
            statusCode: 500,
            body: error.toString(),
        };
        return response;

    }

};

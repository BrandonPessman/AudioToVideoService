const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
ffmpeg.setFfmpegPath(ffmpegPath);

new ffmpeg('./A.mp3').output('./A.mp4').outputOptions(['-c:v libx264', '-crf 18', '-c:a aac', '-strict experimental', '-b:a 192k', '-shortest']).on('error', function (err) {
    console.log(err)
}).on('end', function () {
    console.log("OK")
}).run();;
(function () {
  'use strict';
  var
    wait = 1500,
    standby = true,
    command = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
    length = command.length,
    index = 0,
    timer = null;
  document.addEventListener('keydown', function (ev) {
    clearTimeout(timer);
    if (standby && ev.keyCode === command[index]) {
      index++
      if (index >= length) {
        standby = false;
        index = 0;

        console.log("アイウエオ");

      } else {
        timer = setTimeout(function () {
          index = 0;
        }, wait);
      }
    } else {
      index = 0;
    }
  });
})();
// アプリの基本変数を設定する
var record = document.querySelector('.record');
var record2 = document.querySelector('.record2');
var record3 = document.querySelector('.record3');
var record4 = document.querySelector('.record4');
var record5 = document.querySelector('.record5');
var reset = document.querySelector('.reset');
var reset2 = document.querySelector('.reset2');
var reset3 = document.querySelector('.reset3');
var reset4 = document.querySelector('.reset4');
var reset5 = document.querySelector('.reset5');
var soundClips = document.querySelector('.sound-clips');
var canvas = document.querySelector('.visualizer');
var mainSection = document.querySelector('.main-controls');
var audio = document.createElement('audio');

// visualiser setup - Web Audio API Contextとcanvasを作成する

var audioCtx = new (window.AudioContext || webkitAudioContext)();
var canvasCtx = canvas.getContext("2d");

// 音声録音を行うメインブロック

if (navigator.mediaDevices.getUserMedia) {
  console.log('getUserMedia supported.');

  var constraints = { audio: true };
  var chunks = [];

  var onSuccess = function (stream) {
    var mediaRecorder = new MediaRecorder(stream);
    visualize(stream);


    //トラック１
    var countA = 0
    record.onclick = function () {
      document.getElementById("btn1").innerHTML = ++countA;
      if (countA > 2) {
        countA = 1;
      }
      if (countA == 1) {
        mediaRecorder.start();
        console.log(mediaRecorder.state);
        console.log("recorder started");
        document.getElementById('btn1').style.color = 'red';
        document.getElementById('btn1').style.border = '8px solid red';
      } else if (countA == 2) {
        mediaRecorder.stop();
        console.log(mediaRecorder.state);
        console.log("recorder stopped");
        document.getElementById('btn1').style.color = '#01DF01';
        document.getElementById('btn1').style.border = '8px solid #01DF01';
      }
    };
    reset.onclick = function () {
      countA = 0;
      document.getElementById('btn1').style.color = 'gray';
      document.getElementById('btn1').style.border = '8px solid gray';
      audio.pause();
      audio.currentTime = 0;
    }


    //トラック２
    var countB = 0
    record2.onclick = function () {
      document.getElementById("btn2").innerHTML = ++countB;
      if (countB > 2) {
        countB = 1;
      }
      if (countB == 1) {
        mediaRecorder.start();
        console.log(mediaRecorder.state);
        console.log("recorder started");
        document.getElementById('btn2').style.color = 'red';
        document.getElementById('btn2').style.border = '8px solid red';
      } else if (countB == 2) {
        mediaRecorder.stop();
        console.log(mediaRecorder.state);
        console.log("recorder stopped");
        document.getElementById('btn2').style.color = '#01DF01';
        document.getElementById('btn2').style.border = '8px solid #01DF01';
      }
    }
    reset2.onclick = function () {
      countB = 0;
      document.getElementById('btn2').style.color = 'gray';
      document.getElementById('btn2').style.border = '8px solid gray';
      audio.pause();
      audio.currentTime = 0;
    }


    //トラック３
    var countC = 0
    record3.onclick = function () {
      document.getElementById("btn3").innerHTML = ++countC;
      if (countC > 2) {
        countC = 1;
      }
      if (countC == 1) {
        mediaRecorder.start();
        console.log(mediaRecorder.state);
        console.log("recorder started");
        document.getElementById('btn3').style.color = 'red';
        document.getElementById('btn3').style.border = '8px solid red';
      } else if (countC == 2) {
        mediaRecorder.stop();
        console.log(mediaRecorder.state);
        console.log("recorder stopped");
        document.getElementById('btn3').style.color = '#01DF01';
        document.getElementById('btn3').style.border = '8px solid #01DF01';
      }
    }
    reset3.onclick = function () {
      countC = 0;
      document.getElementById('btn3').style.color = 'gray';
      document.getElementById('btn3').style.border = '8px solid gray';
      audio.pause();
      audio.currentTime = 0;
    }


    //トラック４
    var countD = 0
    record4.onclick = function () {
      document.getElementById("btn4").innerHTML = ++countD;
      if (countD > 2) {
        countD = 1;
      }
      if (countD == 1) {
        mediaRecorder.start();
        console.log(mediaRecorder.state);
        console.log("recorder started");
        document.getElementById('btn4').style.color = 'red';
        document.getElementById('btn4').style.border = '8px solid red';

      } else if (countD == 2) {
        mediaRecorder.stop();
        console.log(mediaRecorder.state);
        console.log("recorder stopped");
        document.getElementById('btn4').style.color = '#01DF01';
        document.getElementById('btn4').style.border = '8px solid #01DF01';
      }
    }
    reset4.onclick = function () {
      countD = 0;
      document.getElementById('btn4').style.color = 'gray';
      document.getElementById('btn4').style.border = '8px solid gray';
      audio.pause();
      audio.currentTime = 0;
    }


    //トラック５
    var countE = 0
    record5.onclick = function () {
      document.getElementById("btn5").innerHTML = ++countE;
      if (countE > 2) {
        countE = 1;
      }
      if (countE == 1) {
        mediaRecorder.start();
        console.log(mediaRecorder.state);
        console.log("recorder started");
        document.getElementById('btn5').style.color = 'red';
        document.getElementById('btn5').style.border = '8px solid red';

      } else if (countE == 2) {
        mediaRecorder.stop();
        console.log(mediaRecorder.state);
        console.log("recorder stopped");
        document.getElementById('btn5').style.color = '#01DF01';
        document.getElementById('btn5').style.border = '8px solid #01DF01';
      }
    }
    reset5.onclick = function () {
      countE = 0;
      document.getElementById('btn5').style.color = 'gray';
      document.getElementById('btn5').style.border = '5px solid gray';
      audio.pause();
      audio.currentTime = 0;
    }


    mediaRecorder.onstop = function (e) {
      console.log("data available after MediaRecorder.stop() called.");

      var clipContainer = document.createElement('article');
      var deleteButton = document.createElement('button');

      deleteButton.textContent = 'Delete';
      deleteButton.className = 'delete';


      clipContainer.appendChild(audio);
      clipContainer.appendChild(deleteButton);
      soundClips.appendChild(clipContainer);


      audio.controls = true;
      audio.loop = true;
      var blob = new Blob(chunks, { 'type': 'audio/ogg; codecs=opus' });
      chunks = [];
      var audioURL = window.URL.createObjectURL(blob);
      audio.src = audioURL;
      console.log("recorder stopped");
      audio.play();


      deleteButton.onclick = function (e) {
        evtTgt = e.target;
        evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
      }
    }

    mediaRecorder.ondataavailable = function (e) {
      chunks.push(e.data);
    }
  }


  var onError = function (err) {
    console.log('The following error occured: ' + err);
  }

  navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);

} else {
  console.log('getUserMedia not supported on your browser!');
}

function visualize(stream) {
  var source = audioCtx.createMediaStreamSource(stream);

  var analyser = audioCtx.createAnalyser();
  analyser.fftSize = 2048;
  var bufferLength = analyser.frequencyBinCount;
  var dataArray = new Uint8Array(bufferLength);

  source.connect(analyser);

  draw()

  function draw() {
    WIDTH = canvas.width
    HEIGHT = canvas.height;

    requestAnimationFrame(draw);

    analyser.getByteTimeDomainData(dataArray);

    canvasCtx.fillStyle = 'rgb(0, 0, 0)';
    canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

    canvasCtx.lineWidth = 2;
    canvasCtx.strokeStyle = 'rgb(0, 255, 0)';

    canvasCtx.beginPath();

    var sliceWidth = WIDTH * 1.0 / bufferLength;
    var x = 0;

    for (var i = 0; i < bufferLength; i++) {

      var v = dataArray[i] / 128.0;
      var y = v * HEIGHT / 2;

      if (i === 0) {
        canvasCtx.moveTo(x, y);
      } else {
        canvasCtx.lineTo(x, y);
      }

      x += sliceWidth;
    }

    canvasCtx.lineTo(canvas.width, canvas.height / 2);
    canvasCtx.stroke();

  }
}

window.onresize = function () {
  canvas.width = mainSection.offsetWidth;
}

window.onresize();
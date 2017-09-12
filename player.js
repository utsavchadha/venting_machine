//var osc = new Tone.Oscillator(440, "sine").toMaster().start();
var delay = new Tone.FeedbackDelay({
	delayTime : 0.3, 
  feedback : 0.8,
  wet : 0.2
}).toMaster();

var synth = new Tone.Synth({
	'oscillator.type' : 'sine4',
  envelope : {
  	attack : 0.01,
    decay : 0.2,
    sustain : 0
  }
}).connect(delay)

var notes = ["C4", "C3", "D4", "D3", "A4", "B4"]
var noteIndex = 0

function pickRandom(){
	var nextRandom = Math.floor(Math.random() * notes.length)
  if (nextRandom !== noteIndex){
    return nextRandom
  } else {
  	return pickRandom()
  }
}

var synthLoop = new Tone.Loop(function(time){
	var value = notes[noteIndex];
	noteIndex++;
	noteIndex = noteIndex%6;
	synth.triggerAttack(value, time)
}, 0.2)

var sawtooth = new Tone.Synth({
  oscillator: {
    type: "sawtooth16"
  },
  envelope: {
    attack: 3,
    decay: 0.1,
    sustain: 0.7,
    release: 1
  }
}).connect(delay).toMaster();

var synth1 = new Tone.Synth({
  oscillator: {
    type: "sine6"
  },
  envelope: {
    attack: 3,
    decay: 0.1,
    sustain: 0.7,
    release: 1
  }
}).connect(delay).toMaster();

var synth2 = new Tone.Synth({
  oscillator: {
    type: "sine6"
  },
  envelope: {
    attack: 3,
    decay: 0.1,
    sustain: 0.7,
    release: 1
  }
}).connect(delay).toMaster();

var synth3 = new Tone.Synth({
  oscillator: {
    type: "sine6"
  },
  envelope: {
    attack: 3,
    decay: 0.1,
    sustain: 0.7,
    release: 1
  }
}).connect(delay).toMaster();

var synth4 = new Tone.Synth({
  oscillator: {
    type: "sine6"
  },
  envelope: {
    attack: 3,
    decay: 0.1,
    sustain: 0.7,
    release: 1
  }
}).connect(delay).toMaster();

var patternSaw = new Tone.Pattern(function(time, note) {
	sawtooth.triggerAttackRelease(note, 0.40);
}, ["C2", "C2", "C2", "C2"]);

var pattern = new Tone.Pattern(function(time, note) {
	synth1.triggerAttackRelease(note, 0.40);
}, ["A2", "B2", "C2", "G2"]);

var pattern2 = new Tone.Pattern(function(time, note) {
	synth2.triggerAttackRelease(note, 0.35);
}, ["D3", "B3", "A3", "C3"]);

var pattern3 = new Tone.Pattern(function(time, note) {
	synth3.triggerAttackRelease(note, 0.40);
}, ["D4", "C4", "C4", "G4"]);

var pattern4 = new Tone.Pattern(function(time, note) {
	synth4.triggerAttackRelease(note, 0.40);
}, ["G2", "G3", "G2", "G3"]);

var iddaka = new Tone.Player({
  "url": "https://raw.githubusercontent.com/utsavchadha/projects/master/samples/electronic1.wav",
  "loop": true,
  "loopstart": 0,
  "loopend": 5,
});

var sitar1 = new Tone.Player({
  "url": "https://raw.githubusercontent.com/utsavchadha/samples/master/Documents/Samples/Soundpiece%20-%20Ragamala/Sitar%20Samples/sitar_two.wav",
  "loop": true,
});

var sitar2 = new Tone.Player({
  "url": "https://raw.githubusercontent.com/utsavchadha/projects/master/samples/electronic1.wav",
  "loop": true,
});

var tarang = new Tone.Player({
  "url": "https://raw.githubusercontent.com/utsavchadha/projects/master/samples/tarang1.wav",
  "loop": true,
});

var bass = new Tone.Player({
  "url": "https://raw.githubusercontent.com/utsavchadha/samples/master/Documents/Samples/Soundpiece%20-%20Ragamala/Pro%20Tools/Rock%20Hard/Bass/Rock/bass_one.wav",
  "loop": true,
});

Tone.Buffer.on("load", function() {
  //player.start();
  //player5.start(2);
  //player5.stop(25);
  //player2.start(0);
  //player3.start(15);
  //player4.start(10);
}.bind(this));
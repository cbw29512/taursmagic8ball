var answers = [
  "I hate this guild!",
  "Fuck you Pale!",
  "I drank too much...",
  "uuuhhhh OK.",
  "SHUT THE FUCK UP!",
  "YO! That wasn't me!",
  "HELL YEAH!",
  "We fucks with them!",
  "They're good people.",
  "and theeen...and theeeen...and theeeeen...",
  "Let's go!!",
  "Heroic Mana Tombs, it's just the first boss...",
  "But for real though!",
  "AAWWW DUDE, DUDE, NAH, DUDE!",
  "Nah, No way Bro!",
  "I'm done for the night.",
  "I hate you guys!",
  "I had taco bell for dinner",
  "I forgot my tremor totem/ankhs",
  "HOLY FUCK MAN!",
  "I can't fucking handle you guys!",
];

document.getElementById("eight-ball").onclick = function () {
  var answer = answers[Math.floor(Math.random() * answers.length)];
  document.getElementById("answer").innerHTML = answer;
};

const typingElement = document.getElementById('typing-text');
const music = document.getElementById("music");

const script = [
  { time: 0, duration: 2, text: "Form FORM-55551-5:\n" },
  { time: 2, duration: 2, text: "Personnel File Addendum:\n\n" },
  { time: 4, duration: 3, text: "Dear <<Teste 001>>,\n\n" },
  { time: 7, duration: 3, text: "This was a triumph\n" },
  { time: 11, duration: 3, text: "I'm making a note here: Huge success\n" },
  { time: 17, duration: 3, text: "It's hard to overstate my satisfaction\n" },
  { time: 24, duration: 2, text: "Aperture Science\n" },
  { time: 27, duration: 2, text: "We do what we must\n" },
  { time: 29, duration: 3, text: "Because we can\n" },
  { time: 33, duration: 3, text: "For the good of all of us\n" },
  { time: 36, duration: 2, text: "Except the ones who are dead\n\n" },
  { time: 38, duration: 4, text: "But there's no sense crying over every mistake\n" },
  { time: 42, duration: 4, text: "You just keep on trying till you run out of cake\n" },
  { time: 46, duration: 2, text: "And the science gets done\n" },
  { time: 48, duration: 2, text: "And you make a neat gun\n" },
  { time: 50, duration: 3, text: "For the people who are still alive\n\n" },
  { time: 53, duration: 2, text: "Form FORM-55551-5:\n" },
  { time: 55, duration: 2, text: "Personnel File Addendum:\n\n" },
  { time: 57, duration: 2, text: "Dear <<Teste 001>>,\n\n" },
  { time: 59, duration: 2, text: "I'm not even angry\n" },
  { time: 63, duration: 3, text: "I'm being so sincere right now\n" },
  { time: 68, duration: 4, text: "Even though you broke my heart\n" },
  { time: 72, duration: 2, text: "And killed me\n" },
  { time: 75, duration: 2, text: "And tore me to pieces\n" },
  { time: 79, duration: 3, text: "And threw every piece into a fire\n"},
  { time: 85, duration: 5, text: "As they burned it hurt because I was so happy for you!\n\n"},
  { time: 90, duration: 4, text: "Now these points of data make a beautiful line\n" },
  { time: 94, duration: 2, text: "And we're out of beta\n" },
  { time: 96, duration: 2, text: "We're releasing on time\n" },
  { time: 98, duration: 2, text: "So I'm GLaD I got burned\n"},
  { time: 100, duration: 3, text: "Think of all the things we learned\n"},
  { time: 103, duration: 3, text: "For the people who are still alive\n\n"},
  { time: 106, duration: 2, text: "Form FORM-55551-5:\n" },
  { time: 108, duration: 4, text: "Personnel File Addendum:\n\n Dear <<Teste 001>>,\n\n" },
  { time: 112, duration: 2, text: "Go ahead and leave me\n"},
  { time: 115, duration: 3, text: "I think I prefer to stay inside\n" },
  { time: 120, duration: 4, text: "Maybe you'll find someone else to help you\n" },
  { time: 128, duration: 2, text: "Maybe Black Mesa\n" },
  { time: 132, duration: 1, text: "That was a joke\n"},
  { time: 134, duration: 2, text: "FAT CHANCE.\n"},
  { time: 137, duration: 3, text: "Anyway, this cake is great\n"},
  { time: 140, duration: 2, text: "It's so delicious and moist\n\n"},
  { time: 142, duration: 2, text: "Look at me still talking\n"},
  { time: 144, duration: 2, text: "When there's Science to do\n"},
  { time: 146, duration: 4, text: "When I look out there, it makes me GLaD I'm not you\n"},
  { time: 150, duration: 2, text: "I've experiments to run\n"},
  { time: 152, duration: 2, text: "There is research to be done\n"},
  { time: 154, duration: 3, text: "On the people who are still alive\n"},
  { time: 158, duration: 3, text: "PS: And believe me, I am still alive\n"},
  { time: 162, duration: 3, text: "PPS: I'm doing Science and I'm still alive\n"},
  { time: 166, duration: 4, text: "PPPS: I feel fantastic and I'm still alive\n\n"},
  { time: 171, duration: 3, text: "While you're dying, I'll be still alive\n"},
  { time: 174, duration: 3, text: "And when you're dead, I will be still alive\n"},
  { time: 177, duration: 2, text: "Still alive\n"},
  { time: 179, duration: 2, text: "Still alive\n"}
];


let currentLineIndex = 0;
let output = "";

function syncTyping() {
  const t = music.currentTime;
  const currentLine = script[currentLineIndex];
  const elapsed = t - currentLine.time;

  if (elapsed >= currentLine.duration && currentLineIndex < script.length - 1) {
    currentLineIndex++;
    return syncTyping();
  }

  if (elapsed >= 0) {
    const speed = currentLine.text.length / currentLine.duration;
    const charsToShow = Math.min(
      currentLine.text.length,
      Math.floor(speed * elapsed)
    );

  const MAX_LINES = 16;

const start = Math.floor(currentLineIndex / MAX_LINES) * MAX_LINES;
const visibleLines = script.slice(start, currentLineIndex);

output =
  visibleLines.map(l => l.text).join("") +
  currentLine.text.slice(0, charsToShow);
  }

  typingElement.textContent = output;
  requestAnimationFrame(syncTyping);
}

document.addEventListener("click", () => {
  music.volume = 0.6;
  music.play().then(() => {
    syncTyping();
  });
}, { once: true });



const questions = {
  sweet: [
    "What’s the weirdest compliment you’ve ever gotten?",
    "If you were a dessert, what would you be and why?",
    "What’s a small thing someone did that totally made your day?",
    "What’s your feel-good song on repeat right now?",
    "Which animal do you think matches your vibe today?",
    "What’s your 'silly little joy' you’d defend with your life?",
    "Who’s a fictional character you lowkey relate to?",
    "What's your comfort food and who would you share it with?",
  ],
  spill: [
    "What’s something you always pretend to understand but don’t?",
    "Have you ever rage-quit something for a petty reason? Spill.",
    "What’s your pet peeve that instantly breaks your vibe?",
    "What’s a hill you’ll die on, no matter how petty?",
    "What’s your most unhinged tab open right now?",
    "If your phone gallery got leaked, what’s the funniest pic people would find?",
    "What’s your go-to chaos move in group projects?",
    "What's something your coworkers would be shocked to learn about you?",
  ],
  still: [
    "What’s something that’s been on your mind lately (in a good way)?",
    "What’s a lesson you keep learning over and over?",
    "What gives you peace, even when things are messy?",
    "What does a ‘good day’ feel like to you?",
    "Who do you become when you’re really relaxed?",
    "What’s one belief or value you’re holding onto tightly right now?",
    "If your current mood was a color, what would it be and why?",
    "When do you feel most like yourself?",
  ],
};

function getRandomQuestion(type) {
  const qSet = questions[type];
  const randomIndex = Math.floor(Math.random() * qSet.length);
  return qSet[randomIndex];
}

document.querySelectorAll("button[data-type]").forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.getAttribute("data-type");
    const question = getRandomQuestion(type);
    document.getElementById("questionOutput").innerText = question;
  });
});

document.getElementById("infoBtn").addEventListener("click", () => {
  const box = document.getElementById("instructionsBox");
  box.classList.toggle("hidden");
});

document.getElementById("resetBtn").addEventListener("click", () => {
  const output = document.getElementById("questionOutput");
  output.innerText = "";
});

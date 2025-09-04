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
    "What’s the cutest random act of kindness you’ve ever witnessed?",
    "If you could bottle one emotion forever, what would it be?",
    "What’s the funniest typo you’ve ever sent?",
    "What snack instantly reminds you of childhood?",
    "What emoji do you feel describes you best?",
    "Which cartoon character do you think you’d be friends with?",
    "If you were a season, which one would you be?",
    "What’s a song lyric that always makes you smile?",
    "What’s your favorite underrated holiday?",
    "Which color feels the most like 'home' to you?",
    "What’s your go-to way of cheering someone up?",
    "If you could have unlimited supply of one snack, what’s your pick?",
  ],
  spill: [
    "What’s something you always pretend to understand but don’t?",
    "Have you ever rage-quit something for a petty reason? Spill.",
    "What’s your pet peeve that instantly breaks your vibe?",
    "What’s a hill you’ll die on, no matter how petty?",
    "What’s your most unhinged tab open right now?",
    "If your phone gallery got leaked, what’s the funniest pic people would find?",
    "What’s your go-to chaos move in group projects?",
    "What's something people would be shocked to learn about you?",
    "What’s your most embarrassing autocorrect fail?",
    "Who was your most questionable celebrity crush?",
    "What’s the pettiest argument you’ve ever had?",
    "What’s your guilty-pleasure reality show?",
    "What’s the weirdest lie you’ve told to get out of something?",
    "Have you ever ghosted someone online?",
    "What’s the most random thing in your bag right now?",
    "What’s your biggest ‘ick’?",
    "What’s the most chaotic text you’ve sent?",
    "What’s the dumbest way you’ve injured yourself?",
    "What’s the weirdest food combo you actually love?",
    "What’s your most random purchase ever?",
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
    "What’s a book, song, or movie that calms you instantly?",
    "Where’s your favorite quiet spot?",
    "What does ‘rest’ look like for you?",
    "When was the last time you felt fully present?",
    "What’s a memory you revisit when you need comfort?",
    "When you are not well, who do you usually turn to?",
    "What’s your favorite sound in nature?",
    "What reminds you of home (besides a place)?",
    "How do you know when you need to slow down?",
    "What makes you feel grounded instantly?",
    "What’s the best advice you’ve received about balance?",
    "What do you want more of in your life right now?",
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

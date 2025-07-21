// List of workout categories & data
const workouts = [
  {
    key: "strength",
    bgClass: "strength-bg",
    athlete: {
      name: "Virat Kohli (Cricket Legend)",
      imgCredit: "Unsplash: Anastase Maragos"
    },
    title: "Strength Training 💪",
    description: "Increase your muscle power, endurance, and overall body strength with resistance workouts.",
    exercises: [
      { name: "Squats", icon: "🏋️" },
      { name: "Deadlifts", icon: "🦵" },
      { name: "Push-ups", icon: "🤸" },
      { name: "Pull-ups", icon: "🏒" },
      { name: "Dumbbell Press", icon: "🏋️‍♂️" }
    ],
    benefits: [
      "Builds muscle strength and endurance",
      "Increases metabolism (helps in fat loss)",
      "Improves bone density",
      "Supports joint health and stability"
    ]
  },
  {
    key: "cardio",
    bgClass: "cardio-bg",
    athlete: {
      name: "Cristiano Ronaldo (Football Superstar)",
      imgCredit: "Unsplash: Jeffrey F Lin"
    },
    title: "Cardio Training 🏃",
    description: "Boost your heart health and stamina with energetic aerobic exercises.",
    exercises: [
      { name: "Running", icon: "🏃‍♂️" },
      { name: "Jogging", icon: "👟" },
      { name: "Cycling", icon: "🚴" },
      { name: "Swimming", icon: "🏊" },
      { name: "Jump Rope", icon: "🤾" }
    ],
    benefits: [
      "Improves heart and lung health",
      "Aids in weight management",
      "Boosts stamina and energy",
      "Reduces risk of heart disease"
    ]
  },
  {
    key: "flexibility",
    bgClass: "flex-bg",
    athlete: {
      name: "Simone Biles (Gymnastics Icon)",
      imgCredit: "Unsplash: Abigail Keenan"
    },
    title: "Flexibility & Mobility 🧘",
    description: "Enhance your flexibility, posture, and relaxation with stretching and mobility workouts.",
    exercises: [
      { name: "Yoga", icon: "🧘" },
      { name: "Dynamic Stretching", icon: "🤸‍♂️" },
      { name: "Pilates", icon: "🧘‍♀️" }
    ],
    benefits: [
      "Improves flexibility and posture",
      "Reduces muscle stiffness and soreness",
      "Enhances relaxation and reduces stress",
      "Improves balance and coordination"
    ]
  },
  {
    key: "lowimpact",
    bgClass: "lowimpact-bg",
    athlete: {
      name: "Serena Williams (Tennis Champion)",
      imgCredit: "Unsplash: Braden Collum"
    },
    title: "Low-Impact Training 🚶",
    description: "Stay active and protect your joints with gentle, effective exercises.",
    exercises: [
      { name: "Walking", icon: "🚶" },
      { name: "Elliptical", icon: "🚴‍♀️" },
      { name: "Hiking", icon: "🥾" },
      { name: "Swimming (gentle)", icon: "🏊‍♀️" }
    ],
    benefits: [
      "Easy on joints while keeping you active",
      "Great for beginners or injury recovery",
      "Improves overall mood and energy",
      "Supports weight loss gradually"
    ]
  },
  {
    key: "hiit",
    bgClass: "hiit-bg",
    athlete: {
      name: "Usain Bolt (Sprint Legend)",
      imgCredit: "Unsplash: Steven Lelham"
    },
    title: "HIIT (High-Intensity Interval Training) 🔥",
    description: "Maximize your workout in minimal time with high-intensity intervals.",
    exercises: [
      { name: "30s sprint + 30s rest", icon: "⏱️" },
      { name: "Jump Squats", icon: "🤾‍♂️" },
      { name: "Burpees", icon: "🏃‍♀️" },
      { name: "Mountain Climbers", icon: "⛰️" }
    ],
    benefits: [
      "Burns more calories in a short time",
      "Improves cardiovascular fitness",
      "Helps in muscle building and fat loss together",
      "Time-efficient workout"
    ]
  }
];

// State management
let currentIndex = 0;

// DOM refs
const sectionEl = document.getElementById('workout-section');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Render function
function renderSection(index) {
  // Remove previous bg
  document.body.className = '';

  const w = workouts[index];
  // Set background
  document.body.classList.add(w.bgClass);

  // Build HTML
  sectionEl.innerHTML = `
    <div class="workout-title">${w.title}</div>
    <div class="athlete-credit">Inspired by: <strong>${w.athlete.name}</strong> <span style="font-size:0.95em;opacity:0.7;">(${w.athlete.imgCredit})</span></div>
    <div class="workout-desc">${w.description}</div>
    <ul class="exercise-list">
      ${
        w.exercises.map(ex => `<li><span class="exercise-icon">${ex.icon}</span> <span>${ex.name}</span></li>`).join('')
      }
    </ul>
    <div class="benefits-title" style="margin-top:1.4em; font-weight:700; color:#ffe066; font-size:1.18em;">Major Benefits</div>
    <ul class="benefit-list">
      ${
        w.benefits.map(b => `<li>🌟 ${b}</li>`).join('')
      }
    </ul>
  `;

  // Fade-in animation
  sectionEl.classList.remove('fade-in');
  void sectionEl.offsetWidth; // reflow
  sectionEl.classList.add('fade-in');
}

// Navigation handlers
prevBtn.onclick = () => {
  currentIndex = (currentIndex === 0) ? workouts.length - 1 : currentIndex - 1;
  renderSection(currentIndex);
};
nextBtn.onclick = () => {
  currentIndex = (currentIndex === workouts.length - 1) ? 0 : currentIndex + 1;
  renderSection(currentIndex);
};

// Initial render
renderSection(currentIndex);

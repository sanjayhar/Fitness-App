document.getElementById("exerciseForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const exercise = document.getElementById("exercise").value;
  const sets = parseInt(document.getElementById("sets").value);
  const reps = parseInt(document.getElementById("reps").value);
  const days = parseInt(document.getElementById("days").value);

  let emoji = "";
  let outcome = "";

  switch(exercise) {
    case "pushups":
      emoji = "💪";
      outcome = `${name}, after ${days} days of doing ${sets} sets × ${reps} pushups daily, your biceps and upper body will be stronger and more defined! ${emoji} Keep going!`;
      break;
    case "squats":
      emoji = "🦵";
      outcome = `${name}, ${sets} sets × ${reps} squats for ${days} days will supercharge your legs and glutes. Expect increased power and endurance! ${emoji}`;
      break;
    case "plank":
      emoji = "🧱";
      outcome = `${name}, holding plank for ${sets} sets × ${reps} seconds every day for ${days} days will give you an iron core and better posture! ${emoji}`;
      break;
    case "pullups":
      emoji = "🏋️‍♂️";
      outcome = `${name}, ${sets} sets × ${reps} pull-ups daily for ${days} days will sculpt your back and arms beautifully! ${emoji}`;
      break;
    case "lunges":
      emoji = "🕴️";
      outcome = `${name}, lunges (${sets} sets × ${reps}) for ${days} days will tone your legs and improve balance! ${emoji}`;
      break;
    default:
      outcome = "Select a valid exercise!";
  }

  document.getElementById("result").innerHTML = `<strong>Outcome:</strong> <br>${outcome}`;
});
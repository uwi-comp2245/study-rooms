// Help panel
document.querySelector('#help-button').addEventListener('click', () => {
  const help = document.querySelector('#help');
  help.hidden = !help.hidden;
});

// Opening hours
document.querySelector('#hours-toggle').addEventListener('click', () => {
  const hours = document.querySelector('#hours');
  hours.hidden = !hours.hidden;
});

// Booking
document.querySelector('#book').addEventListener('click', () => {
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const room = document.querySelector('#room');
  const date = document.querySelector('#date');
  const result = document.querySelector('#result');
  result.textContent = '';

  name.classList.toggle('wrong', name.value.trim() === '');
  email.classList.toggle('wrong', !email.value.includes('@'));
  room.classList.toggle('wrong', room.value === '');
  date.classList.toggle('wrong', date.value === '');
  if (document.querySelector('.wrong')) return;

  result.textContent = `Room ${room.value} is booked for ${date.value}.`;
});

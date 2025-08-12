const form = document.getElementById('symptom-form');
const modal = document.getElementById('solution-modal');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('.close-btn');

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const selectedSymptoms = Array.from(
    document.querySelectorAll('input[type="checkbox"]:checked')
  ).map(cb => cb.value);

  if (selectedSymptoms.length === 0) {
    modalText.innerHTML = "⚠️ Please select at least one symptom.";
    modal.style.display = 'block';
    return;
  }

  try {
    // const response = await fetch('http://localhost:4000/api/support', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ symptoms: selectedSymptoms })
    // });

    const API_BASE_URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:4000'
  : 'https://expert-system-prbm.onrender.com';

const response = await fetch(`${API_BASE_URL}/api/support`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ symptoms: selectedSymptoms })
});






    const data = await response.json();
    modalText.innerHTML = data.solution;
  } catch (err) {
    modalText.innerHTML = "⚠️ Could not connect to expert system backend.";
  }

  modal.style.display = 'block';
});

// Close modal when clicking X
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside the content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

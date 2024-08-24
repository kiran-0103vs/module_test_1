// script.js
document.addEventListener('DOMContentLoaded', () => {
  const decrementBtn = document.getElementById('decrement-btn');
  const incrementBtn = document.getElementById('increment-btn');
  const clearBtn = document.getElementById('clear-btn');
  const counterDisplay = document.getElementById('counter-display');
  const errorMessage = document.getElementById('error-message');

  let count = 0;

  incrementBtn.addEventListener('click', () => {
    count++;
    updateCounter();
  });

  decrementBtn.addEventListener('click', () => {
    if (count > 0) {
      count--;
      errorMessage.style.display = 'none'; // Hide error message
    } else {
      errorMessage.style.display = 'block'; // Show error message
    }
    updateCounter();
  });

  clearBtn.addEventListener('click', () => {
    count = 0;
    updateCounter();
  });

  function updateCounter() {
    counterDisplay.innerHTML = count;
    clearBtn.style.display = count > 0 ? 'block' : 'none'; // Show or hide the clear button
  }
});

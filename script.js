const steps = document.querySelectorAll('.form-section');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const submitBtn = document.getElementById('submit-btn');
let currentStep = 0;

function showStep(step) {
  steps.forEach((section, index) => {
    section.classList.toggle('active', index === step);
  });
  prevBtn.style.display = step === 0 ? 'none' : 'inline-block';
  nextBtn.style.display = step === steps.length - 1 ? 'none' : 'inline-block';
  submitBtn.style.display = step === steps.length - 1 ? 'inline-block' : 'none';
}

nextBtn.addEventListener('click', () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
});

prevBtn.addEventListener('click', () => {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
});

showStep(currentStep);

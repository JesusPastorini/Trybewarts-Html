const buttonLogin = document.getElementsByClassName('button')[0];

const verificaloginsenha = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

buttonLogin.addEventListener('click', verificaloginsenha);

const labelRate = document.getElementById('label-rate');

for (let i = 0; i < 6; i += 1) {
  const values = ['HoFs', 'Jest', 'Promises', 'React', 'SQL', 'Python'];
  const checkContent = document.createElement('input');
  checkContent.type = 'checkbox';
  checkContent.className = 'subject';
  checkContent.value = values[i];
  const contentOptionText = document.createElement('span');
  contentOptionText.innerText = values[i];
  labelRate.parentNode.insertBefore(checkContent, labelRate);
  labelRate.parentNode.insertBefore(contentOptionText, labelRate);
}

const textArea = document.getElementsByClassName('textarea')[0];

for (let i = 1; i <= 10; i += 1) {
  const inputSatisfaction = document.createElement('input');
  inputSatisfaction.type = 'radio';
  inputSatisfaction.value = i;
  inputSatisfaction.name = 'rate';
  const rate = document.createElement('span');
  rate.innerText = i;
  textArea.parentNode.insertBefore(inputSatisfaction, textArea);
  textArea.parentNode.insertBefore(rate, textArea);
}

const submitBtn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

const agreementCheck = () => {
  if (agreement.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
};

agreement.addEventListener('change', agreementCheck);

window.onload = agreementCheck;

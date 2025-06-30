let string = "";
let buttons = document.querySelectorAll('.button');
let input = document.querySelector('input');


window.onload = () => {
  input.focus();
};


buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    let value = e.target.innerHTML.trim();

    if (value === '=') {
      try {
        string = eval(string);
      } catch {
        string = "Error";
      }
    } else if (value === 'C') {
      string = "";
    } else {
      string += value;
    }

    input.value = string;
  });
});


document.addEventListener('keydown', (e) => {
  const key = e.key;
  const allowed = '0123456789+-*/.';

  if (allowed.includes(key)) {
    string += key;
  } else if (key === 'Enter') {
    try {
      string = eval(string);
    } catch {
      string = "Error";
    }
  } else if (key === 'Backspace') {
    string = string.slice(0, -1);
  }

  input.value = string;
});

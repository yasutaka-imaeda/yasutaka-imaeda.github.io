`use strict`;

{

  document.getElementById('input-button').addEventListener('click', () => {
    const li = document.querySelector('li');

    const text = document.querySelector('input');

    li.textContent = text.value;
    document.querySelector('ul').appendChild(li);

    text.value = '';
    text.focus();
  });



}
`use strict`;

{

  document.getElementById('input-button').addEventListener('click', () => {
    const li = document.querySelector('li');
    var gbtn = document.createElement('button');
    var bbtn = document.createElement('button');
    gbtn.innerHTML = 'good';
    gbtn.id = 'good-btn';
    bbtn.innerHTML = 'bad';
    bbtn.id = 'bad-btn';

    const text = document.querySelector('input');

    li.textContent = text.value;
    document.querySelector('ul').appendChild(li);
    document.querySelector('ul').appendChild(gbtn);
    document.querySelector('ul').appendChild(bbtn);

    text.value = '';
    text.focus();
  });

  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submit');
  });



}
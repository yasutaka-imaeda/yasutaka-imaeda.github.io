`use strict`;

{

  document.getElementById('input-button').addEventListener('click', () => {

    const list = document.querySelectorAll('li')
    const div = document.createElement('div');
    const li = document.createElement('li');
    const ul = document.querySelector('ul');
    var gbtn = document.createElement('button');
    var bbtn = document.createElement('button');
    gbtn.innerHTML = 'good';
    gbtn.id = 'good-btn';
    bbtn.innerHTML = 'bad';
    bbtn.id = 'bad-btn';
    
    const text = document.querySelector('input');

    if (list.length > 5) {
      ul.removeChild(ul.children[0]);
    }

    li.textContent = text.value;
    ul.appendChild(li);
    li.appendChild(div)
    div.appendChild(gbtn);
    div.appendChild(bbtn);

    text.value = '';
    text.focus();
  });

  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submit');
  });


}
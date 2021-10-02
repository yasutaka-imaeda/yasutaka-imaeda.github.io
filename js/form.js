'use strict';

{
  const dts = document.querySelectorAll('dt');

  //ひとつしか開かない設定

  // dts.forEach((dt) => {
  //   dt.addEventListener('click', () => {
  //     dt.parentNode.classList.toggle('appear')

  //     dts.forEach((el) => {
  //       if (dt !== el) {
  //         el.parentNode.classList.remove('appear');
  //       }
  //     });
  //   });
  // });

  //自由に開ける設定
  
  dts.forEach((dt) => {
    dt.addEventListener('click', () => {
      dt.parentNode.classList.toggle('appear')
    });
  });



}
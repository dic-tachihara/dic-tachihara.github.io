// JavaScript Document

const smoothScroll = e => {
  const target = document.querySelector(e.target.getAttribute('href'));
  const position = target.getBoundingClientRect().top + window.scrollY;

  e.preventDefault();

  window.scrollTo({
    top: position,
    behavior: 'smooth'
  });
  //window.scrollToの引数のtopは「ドキュメントの左上を基準にした目標の要素のY座標のピクセル値」で、
  //behaviorにはsmoothを指定する事で挙動がスムーススクロールになります。
}

const buttons = document.querySelectorAll('.scroll__button');

buttons.forEach(button => {
  button.addEventListener('click', smoothScroll);
})
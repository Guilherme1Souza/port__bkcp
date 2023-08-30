const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  document.querySelectorAll('.container__cards__top__education__data__secundary').forEach(card => card.classList.toggle('dark'));
  document.querySelectorAll('.container__header__menu__list__element__link').forEach(link => link.classList.toggle('dark'));
  document.querySelectorAll('.a').forEach(a => a.classList.toggle('dark'));
  document.querySelectorAll('.container__cards__bottom__TechnicalSkills__Title').forEach(title => title.classList.toggle('dark'));
});

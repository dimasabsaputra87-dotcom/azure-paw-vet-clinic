document.getElementById('yr').textContent = new Date().getFullYear();
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => document.getElementById('nav').classList.remove('open')));
document.getElementById('apptForm').addEventListener('submit', function(e){
  e.preventDefault();
  const f = this;
  if(!f.name.value.trim() || !f.phone.value.trim() || !/\S+@\S+\.\S+/.test(f.email.value)){
    alert('Please fill in your name, phone and a valid email.');
    return;
  }
  document.getElementById('thanks').style.display = 'block';
  f.reset();
});
document.querySelector('.menu-btn').addEventListener('click', () => document.getElementById('nav').classList.toggle('open'));

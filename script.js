// ------------------------------------ \\
// ------- Inspired by: Wes Bos ------- \\
// -------     #JavaScript30    ------- \\
// ------------------------------------ \\
// ------- design: mateuszmatzh ------- \\
// -- https://github.com/mateuszmatzh - \\
/* ------------------------------------ */ 

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing'); 
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound); 
// 'keydown' is the event.
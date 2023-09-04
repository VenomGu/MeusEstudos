const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const flyingShell = document.querySelector('.flyingShell');
let isColliding = false; //variavel de controle 

const jump = () => { 
    if (!isColliding) { // Verifique se não está colidindo antes de pular
        mario.classList.add('jump');
        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
}

const loop = setInterval(() => {    
    const pipePosition = pipe.offsetLeft;
    const flyingShellPosition = parseFloat(getComputedStyle(flyingShell).bottom)
    const marioPosition = parseFloat(getComputedStyle(mario).bottom);
    const marioWidth = mario.offsetWidth;
    const shellWidth = flyingShell.offsetWidth;
    console.log("Pipe Position:", pipePosition);
    console.log("Flying Shell Position:", flyingShellPosition);
    console.log("Mario Position:", marioPosition);

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        // Colisão com o pipe
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        pipe.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'MarioDead.gif';
        clearInterval(loop);
    } else if (flyingShellPosition > marioPosition + marioWidth &&
        flyingShellPosition + shellWidth < marioPosition) {
        // Colisão com a flyingShell
        console.log(flyingShellPosition);
        console.log(marioPosition);
        flyingShell.style.animation = 'none';
        flyingShell.style.left = `${flyingShellPosition}px`;

        flyingShell.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'MarioDead.gif';
        clearInterval(loop);
        isColliding = true; 
    }
}, 10);

document.addEventListener('keydown', jump);

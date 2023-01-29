const gameCanvas = document.querySelector('#game-canvas');
const ctx = gameCanvas.getContext('2d');
const playGameBtn = document.querySelector('.start-game');
let playGame = false;
let lasers = [];

const hero = {
  color: '#005717',
  position: {
    x: 10,
    y: 650,
    w: 50,
    h: 50
  }
}

function Laser(xPos) {
  return {
    color: '#f00',
    position: {
      x: xPos,
      y: 650,
      w: 5,
      h: 20
    }
  }
}

playGameBtn.addEventListener('click', () => {
  playGame = true;
  gameInit();
}, false)

document.addEventListener('keydown', (e) => {
  if (e.key == 'ArrowLeft' && hero.position.x > 0) hero.position.x -= 10;
  if (e.key == 'ArrowRight' && hero.position.x < 1230) hero.position.x += 10;
  if (e.key == ' ') fire();
});

function moveHero() {
  ctx.clearRect(0,0,1280,720);
  ctx.fillStyle = hero.color;
  ctx.fillRect(hero.position.x, hero.position.y, hero.position.w, hero.position.h);
};

function moveLaser() {
  for (var i = 0; i < lasers.length; i++) {
    if (lasers[i].position.y < -10) {
      lasers.splice(i, 1);
    } else {
      ctx.fillStyle = lasers[i].color;
      lasers[i].position.y -= 2;
      ctx.fillRect(lasers[i].position.x, lasers[i].position.y, lasers[i].position.w, lasers[i].position.h);
    }
  }
}

function fire() {
  let laser = new Laser(hero.position.x + (hero.position.w / 2 - 2));
  lasers.push(laser);
};

function gameInit() {
  gameLoop();
};

function gameLoop() {
  moveHero();
  if (lasers.length > 0) {
    moveLaser();
  }
  if (playGame === true) {
    setInterval(gameLoop, 100);
  }
};
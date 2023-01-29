const gameCanvas = document.querySelector('#game-canvas');
const ctx = gameCanvas.getContext('2d');
const playGameBtn = document.querySelector('.start-game');
var playGame = false;

const hero = {
  color: '#005717',
  position: {
    x: 10,
    y: 650,
    w: 50,
    h: 50
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
  ctx.fillRect(hero.position.x, hero.position.y, hero.position.w, hero.position.h)
};

function fire() {
  console.log('FIRE!')
};

function gameInit() {
  gameLoop();
};

function gameLoop() {
  moveHero();
  if (playGame === true) {
    setInterval(gameLoop, 100)
  }
};
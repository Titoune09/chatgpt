const startBtn = document.getElementById('start');
const arena = document.getElementById('arena');
const scoreEl = document.getElementById('score');
const comboEl = document.getElementById('combo');
const timerEl = document.getElementById('timer');
const livesEl = document.getElementById('lives');
const bestEl = document.getElementById('best');
const feedbackEl = document.getElementById('feedback');

const MAX_LIVES = 3;
const ROUND_TIME = 60;
const COMBO_WINDOW = 1200;

const state = {
    score: 0,
    combo: 1,
    timeLeft: ROUND_TIME,
    lives: MAX_LIVES,
    playing: false,
    timerId: null,
    tokenTimerId: null,
    lastCaptureTime: 0,
    tokenId: 0,
    best: Number(localStorage.getItem('pause-jeu-best') || 0),
};

bestEl.textContent = state.best;

startBtn.addEventListener('click', () => {
    if (state.playing) return;
    startGame();
});

function startGame() {
    resetState();
    state.playing = true;
    startBtn.disabled = true;
    startBtn.textContent = 'En cours...';
    feedback('Attrape le jeton !');
    tickTimer();
    spawnToken();
}

function resetState() {
    state.score = 0;
    state.combo = 1;
    state.timeLeft = ROUND_TIME;
    state.lives = MAX_LIVES;
    state.lastCaptureTime = 0;
    state.tokenId = 0;
    clearInterval(state.timerId);
    clearTimeout(state.tokenTimerId);
    removeToken();
    updateHud();
}

function tickTimer() {
    updateHud();
    state.timerId = setInterval(() => {
        state.timeLeft -= 1;
        if (state.timeLeft <= 0) {
            state.timeLeft = 0;
            updateHud();
            endGame('Temps écoulé !');
        } else {
            updateHud();
        }
    }, 1000);
}

function spawnToken() {
    removeToken();

    const token = document.createElement('button');
    token.className = 'token';
    token.type = 'button';
    token.textContent = '⚡';

    const size = randomInRange(60, 110);
    const maxLeft = arena.clientWidth - size;
    const maxTop = arena.clientHeight - size;

    token.style.width = `${size}px`;
    token.style.height = `${size}px`;
    token.style.left = `${randomInRange(0, Math.max(maxLeft, 0))}px`;
    token.style.top = `${randomInRange(0, Math.max(maxTop, 0))}px`;

    const thisTokenId = ++state.tokenId;
    token.dataset.tokenId = String(thisTokenId);

    token.addEventListener('click', () => captureToken(thisTokenId));

    arena.appendChild(token);

    const lifetime = Math.max(650, 2000 - state.score * 6);
    clearTimeout(state.tokenTimerId);
    state.tokenTimerId = setTimeout(() => {
        if (state.playing && Number(token.dataset.tokenId) === state.tokenId) {
            missToken();
        }
    }, lifetime);
}

function captureToken(id) {
    if (!state.playing || id !== state.tokenId) {
        return;
    }

    const now = performance.now();
    const withinCombo = now - state.lastCaptureTime <= COMBO_WINDOW;
    state.combo = withinCombo ? Math.min(state.combo + 1, 8) : 1;
    state.lastCaptureTime = now;

    const basePoints = 10;
    const points = basePoints * state.combo;
    state.score += points;

    feedback(`+${points} points ! Combo x${state.combo}`, 'success');
    updateHud();
    spawnToken();
}

function missToken() {
    state.combo = 1;
    state.lives -= 1;
    feedback('Oups ! Ne le laisse pas filer.', 'fail');
    updateHud();
    removeToken();

    if (state.lives <= 0) {
        endGame('Toutes les vies sont perdues !');
        return;
    }

    if (state.playing) {
        state.tokenTimerId = setTimeout(spawnToken, 400);
    }
}

function endGame(message) {
    state.playing = false;
    clearInterval(state.timerId);
    clearTimeout(state.tokenTimerId);
    removeToken();
    startBtn.disabled = false;
    startBtn.textContent = 'Rejouer';

    if (state.score > state.best) {
        state.best = state.score;
        localStorage.setItem('pause-jeu-best', String(state.best));
        feedback(`${message} Nouveau record : ${state.score} !`, 'success');
    } else {
        feedback(`${message} Score final : ${state.score}.`, 'fail');
    }

    updateHud();
}

function removeToken() {
    arena.querySelectorAll('.token').forEach(token => token.remove());
}

function updateHud() {
    scoreEl.textContent = state.score;
    comboEl.textContent = `x${state.combo}`;
    timerEl.textContent = `${state.timeLeft}s`;
    livesEl.textContent = `${'❤️'.repeat(state.lives)}${'🖤'.repeat(MAX_LIVES - state.lives)}`;
    bestEl.textContent = state.best;
}

function feedback(message, type) {
    feedbackEl.textContent = message;
    feedbackEl.classList.remove('success', 'fail');
    if (type) {
        feedbackEl.classList.add(type);
    }
}

function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener('blur', () => {
    if (state.playing) {
        endGame('Pause forcée : la fenêtre a été quittée.');
    }
});

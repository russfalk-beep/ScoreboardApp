// Main app controller
let currentSport = 'football';
let pickerSport = null;
let pickerSide = null;
let setupMode = true;
let setupTeams = { away: null, home: null };

// ===== SETUP FLOW =====
function setupPickTeam(side) {
    pickerSport = currentSport;
    pickerSide = side;
    const modal = document.getElementById('team-picker-modal');
    document.getElementById('team-search').value = '';
    renderTeamGrid(TEAMS[currentSport]);
    modal.style.display = 'flex';
    document.getElementById('team-search').focus();
}

function updateSetupCard(side, team) {
    setupTeams[side] = team;
    const card = document.getElementById('setup-' + side + '-card');
    const logo = document.getElementById('setup-' + side + '-logo');
    const name = document.getElementById('setup-' + side + '-name');

    card.classList.add('picked');
    logo.style.display = '';
    setTeamLogo(logo, currentSport, team);
    name.textContent = team.name;

    // Check if both teams picked
    const btn = document.getElementById('play-btn');
    if (setupTeams.away && setupTeams.home) {
        btn.disabled = false;
        btn.classList.add('ready');
        btn.textContent = "LET'S PLAY!";
    }
}

function startGame() {
    if (!setupTeams.away || !setupTeams.home) return;
    setupMode = false;

    // Hide overlay, show scoreboard
    document.getElementById('setup-overlay').classList.add('hidden');
    const boardId = currentSport === 'football' ? 'football-scoreboard' :
                    currentSport === 'baseball' ? 'baseball-scoreboard' : 'basketball-scoreboard';
    document.getElementById(boardId).style.display = '';

    // Apply teams
    const module = getModule();
    module.setTeam('away', setupTeams.away);
    module.setTeam('home', setupTeams.home);
}

function resetSetup() {
    setupMode = true;
    setupTeams = { away: null, home: null };
    ['away', 'home'].forEach(side => {
        const card = document.getElementById('setup-' + side + '-card');
        card.classList.remove('picked');
        document.getElementById('setup-' + side + '-logo').style.display = 'none';
        document.getElementById('setup-' + side + '-plus').style.display = '';
        document.getElementById('setup-' + side + '-name').textContent = 'Tap to pick';
    });
    const btn = document.getElementById('play-btn');
    btn.disabled = true;
    btn.classList.remove('ready');
    btn.textContent = 'Pick both teams to start!';
    document.getElementById('setup-overlay').classList.remove('hidden');
}

// ===== SPORT SWITCHING =====
function switchSport(sport) {
    currentSport = sport;
    document.querySelectorAll('.sport-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.sport === sport);
    });
    document.body.className = sport + '-theme';

    // Hide all scoreboards
    ['football-scoreboard', 'baseball-scoreboard', 'basketball-scoreboard'].forEach(id => {
        document.getElementById(id).style.display = 'none';
    });

    if (setupMode) {
        resetSetup();
        document.getElementById('setup-overlay').classList.remove('hidden');
    } else {
        const boardId = sport === 'football' ? 'football-scoreboard' :
                        sport === 'baseball' ? 'baseball-scoreboard' : 'basketball-scoreboard';
        document.getElementById(boardId).style.display = '';
    }
}

// ===== TEAM PICKER =====
function openTeamPicker(sport, side) {
    pickerSport = sport;
    pickerSide = side;
    document.getElementById('team-search').value = '';
    renderTeamGrid(TEAMS[sport]);
    document.getElementById('team-picker-modal').style.display = 'flex';
    document.getElementById('team-search').focus();
}

function renderTeamGrid(teams) {
    const grid = document.getElementById('team-grid');
    grid.innerHTML = '';
    const divisions = {};
    teams.forEach(team => {
        const key = (team.conference || team.league) + ' ' + team.division;
        if (!divisions[key]) divisions[key] = [];
        divisions[key].push(team);
    });
    Object.keys(divisions).sort().forEach(divName => {
        const h = document.createElement('div');
        h.className = 'division-header';
        h.textContent = divName;
        grid.appendChild(h);
        const g = document.createElement('div');
        g.className = 'division-teams';
        divisions[divName].forEach(team => {
            const card = document.createElement('div');
            card.className = 'team-card';
            card.style.borderColor = team.colors[0];
            card.onclick = () => selectTeam(team);
            const logo = document.createElement('img');
            logo.className = 'picker-logo';
            setTeamLogo(logo, pickerSport, team);
            const name = document.createElement('div');
            name.className = 'picker-team-name';
            name.textContent = team.name;
            card.appendChild(logo);
            card.appendChild(name);
            g.appendChild(card);
        });
        grid.appendChild(g);
    });
}

function filterTeams() {
    const q = document.getElementById('team-search').value.toLowerCase();
    const teams = TEAMS[pickerSport].filter(t =>
        t.name.toLowerCase().includes(q) || t.abbr.toLowerCase().includes(q) || t.city.toLowerCase().includes(q)
    );
    renderTeamGrid(teams);
}

function selectTeam(team) {
    if (setupMode) {
        updateSetupCard(pickerSide, team);
    } else {
        getModule().setTeam(pickerSide, team);
    }
    closeTeamPicker();
}

function closeTeamPicker() {
    document.getElementById('team-picker-modal').style.display = 'none';
}

// ===== COACH MODE =====
function toggleCoachMode(boardId) {
    const board = document.getElementById(boardId);
    const btn = board.querySelector('.coach-toggle');
    const controls = board.querySelector('.coach-controls');
    const isOn = controls.style.display !== 'none';
    controls.style.display = isOn ? 'none' : '';
    btn.classList.toggle('active', !isOn);
    btn.textContent = isOn ? '\u2699 Coach Mode' : '\u2699 Coach Mode ON';

    // Show/hide coach-detail items in game info bar
    board.classList.toggle('coach-mode-on', !isOn);
}

// ===== SCORE ANIMATION =====
function animateScore(scoreId, points) {
    const el = document.getElementById(scoreId);
    el.classList.remove('flash');
    void el.offsetWidth;
    el.classList.add('flash');
    setTimeout(() => el.classList.remove('flash'), 600);

    const popId = scoreId.replace('-score', '-pop');
    const pop = document.getElementById(popId);
    if (pop) {
        pop.textContent = (points > 0 ? '+' : '') + points;
        pop.classList.remove('active');
        void pop.offsetWidth;
        pop.classList.add('active');
        setTimeout(() => pop.classList.remove('active'), 900);
    }
}

// ===== TEAM COLORS =====
function applyTeamColors(boardId, side, team) {
    const board = document.getElementById(boardId);
    const row = board.querySelector(side === 'away' ? '.away-row' : '.home-row');
    const c = team.colors[0];
    const r = parseInt(c.slice(1,3), 16);
    const g = parseInt(c.slice(3,5), 16);
    const b = parseInt(c.slice(5,7), 16);
    // Use brighter color if primary is too dark
    const lum = (r * 299 + g * 587 + b * 114) / 1000;
    const useColor = lum < 40 ? team.colors[1] : c;
    const r2 = parseInt(useColor.slice(1,3), 16);
    const g2 = parseInt(useColor.slice(3,5), 16);
    const b2 = parseInt(useColor.slice(5,7), 16);
    row.style.background = `linear-gradient(90deg, rgba(${r2},${g2},${b2},0.15) 0%, transparent 60%)`;
    row.style.borderLeftColor = useColor;
    row.style.borderLeftWidth = '4px';
    row.style.borderLeftStyle = 'solid';

    // Tint scoring section
    const section = board.querySelector(side === 'away' ? '.away-scoring' : '.home-scoring');
    if (section) {
        section.style.borderColor = `rgba(${r2},${g2},${b2},0.3)`;
        section.style.background = `rgba(${r2},${g2},${b2},0.05)`;
        const label = section.querySelector('.scoring-label span');
        if (label) label.style.color = useColor;
        section.querySelectorAll('.s-btn').forEach(btn => {
            btn.style.borderColor = `rgba(${r2},${g2},${b2},0.4)`;
            btn.style.color = useColor;
        });
    }
}

// ===== UTILITIES =====
function getModule() {
    return currentSport === 'football' ? Football : currentSport === 'baseball' ? Baseball : Basketball;
}

function resetGame() {
    if (!confirm('Start a new game?')) return;
    getModule().reset();
    // Hide all scoreboards and go back to setup
    ['football-scoreboard', 'baseball-scoreboard', 'basketball-scoreboard'].forEach(id => {
        document.getElementById(id).style.display = 'none';
    });
    resetSetup();
}

function swapTeams() {
    const module = getModule();
    const prefix = currentSport === 'football' ? 'fb' : currentSport === 'baseball' ? 'bb' : 'bk';
    const boardId = currentSport === 'football' ? 'football-scoreboard' :
                    currentSport === 'baseball' ? 'baseball-scoreboard' : 'basketball-scoreboard';
    const away = module.state.awayTeam;
    const home = module.state.homeTeam;
    const as = module.state.awayScore;
    const hs = module.state.homeScore;
    module.state.awayScore = hs;
    module.state.homeScore = as;
    if (away) module.setTeam('home', away);
    if (home) module.setTeam('away', home);
    module.updateDisplay();
}

// ===== EVENTS =====
document.addEventListener('click', e => {
    const btn = e.target.closest('button, .to-dot');
    if (btn) btn.blur();
});

let touchMoved = false;
document.addEventListener('touchstart', () => { touchMoved = false; }, { passive: true });
document.addEventListener('touchmove', () => { touchMoved = true; }, { passive: true });

document.getElementById('team-picker-modal').addEventListener('click', function(e) {
    if (e.target === this) closeTeamPicker();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeTeamPicker(); });

// ===== INIT =====
Football.init();
Baseball.init();
Basketball.init();

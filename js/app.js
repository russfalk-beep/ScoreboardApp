// Main app controller
let currentSport = 'football';
let pickerSport = null;
let pickerSide = null;

function switchSport(sport) {
    currentSport = sport;

    // Update buttons
    document.querySelectorAll('.sport-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.sport === sport);
    });

    // Show/hide scoreboards
    document.getElementById('football-scoreboard').style.display = sport === 'football' ? '' : 'none';
    document.getElementById('baseball-scoreboard').style.display = sport === 'baseball' ? '' : 'none';
    document.getElementById('basketball-scoreboard').style.display = sport === 'basketball' ? '' : 'none';

    // Apply theme class
    document.body.className = sport + '-theme';
}

function openTeamPicker(sport, side) {
    pickerSport = sport;
    pickerSide = side;

    const modal = document.getElementById('team-picker-modal');
    const grid = document.getElementById('team-grid');
    const search = document.getElementById('team-search');

    search.value = '';
    renderTeamGrid(TEAMS[sport]);

    modal.style.display = 'flex';
    search.focus();
}

function renderTeamGrid(teams) {
    const grid = document.getElementById('team-grid');
    grid.innerHTML = '';

    // Group by division
    const divisions = {};
    teams.forEach(team => {
        const groupKey = (team.conference || team.league) + ' ' + team.division;
        if (!divisions[groupKey]) divisions[groupKey] = [];
        divisions[groupKey].push(team);
    });

    Object.keys(divisions).sort().forEach(divName => {
        const divHeader = document.createElement('div');
        divHeader.className = 'division-header';
        divHeader.textContent = divName;
        grid.appendChild(divHeader);

        const divGrid = document.createElement('div');
        divGrid.className = 'division-teams';

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
            divGrid.appendChild(card);
        });

        grid.appendChild(divGrid);
    });
}

function filterTeams() {
    const query = document.getElementById('team-search').value.toLowerCase();
    const teams = TEAMS[pickerSport].filter(t =>
        t.name.toLowerCase().includes(query) ||
        t.abbr.toLowerCase().includes(query) ||
        t.city.toLowerCase().includes(query)
    );
    renderTeamGrid(teams);
}

function selectTeam(team) {
    switch (pickerSport) {
        case 'football':
            Football.setTeam(pickerSide, team);
            break;
        case 'baseball':
            Baseball.setTeam(pickerSide, team);
            break;
        case 'basketball':
            Basketball.setTeam(pickerSide, team);
            break;
    }
    closeTeamPicker();
}

function closeTeamPicker() {
    document.getElementById('team-picker-modal').style.display = 'none';
}

function resetGame() {
    if (!confirm('Start a new game? This will reset all scores.')) return;
    switch (currentSport) {
        case 'football': Football.reset(); break;
        case 'baseball': Baseball.reset(); break;
        case 'basketball': Basketball.reset(); break;
    }
}

function swapTeams() {
    let module, prefix;
    switch (currentSport) {
        case 'football': module = Football; prefix = 'fb'; break;
        case 'baseball': module = Baseball; prefix = 'bb'; break;
        case 'basketball': module = Basketball; prefix = 'bk'; break;
    }

    const awayTeam = module.state.awayTeam;
    const homeTeam = module.state.homeTeam;
    const awayScore = module.state.awayScore;
    const homeScore = module.state.homeScore;

    module.state.awayScore = homeScore;
    module.state.homeScore = awayScore;

    if (awayTeam) module.setTeam('home', awayTeam);
    if (homeTeam) module.setTeam('away', homeTeam);
    if (!awayTeam) {
        document.getElementById(prefix + '-home-name').textContent = 'Home Team';
        module.state.homeTeam = null;
    }
    if (!homeTeam) {
        document.getElementById(prefix + '-away-name').textContent = 'Away Team';
        module.state.awayTeam = null;
    }

    module.updateDisplay();
}

// Close modal on outside click
document.getElementById('team-picker-modal').addEventListener('click', function(e) {
    if (e.target === this) closeTeamPicker();
});

// Keyboard shortcut to close modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeTeamPicker();
});

// Initialize all scoreboards
Football.init();
Baseball.init();
Basketball.init();

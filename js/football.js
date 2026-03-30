const Football = {
    state: {
        quarter: 1,
        clockSeconds: 900,
        clockRunning: false,
        clockInterval: null,
        down: 1,
        distance: 10,
        yardline: 50,
        possession: null,
        awayScore: 0,
        homeScore: 0,
        awayTimeouts: [true, true, true],
        homeTimeouts: [true, true, true],
        quarterScores: { away: [0, 0, 0, 0, 0], home: [0, 0, 0, 0, 0] },
        awayTeam: null,
        homeTeam: null,
    },

    init() {
        this.updateDisplay();
    },

    addScore(side, points) {
        const key = side + 'Score';
        this.state[key] = Math.max(0, this.state[key] + points);
        const qi = Math.min(this.state.quarter - 1, 4);
        this.state.quarterScores[side][qi] += points;
        if (this.state.quarterScores[side][qi] < 0) this.state.quarterScores[side][qi] = 0;
        this.updateDisplay();
    },

    nextQuarter() {
        if (this.state.quarter < 5) {
            this.state.quarter++;
            this.state.clockSeconds = this.state.quarter <= 4 ? 900 : 600;
            this.stopClock();
            this.resetTimeouts();
            this.updateDisplay();
        }
    },

    prevQuarter() {
        if (this.state.quarter > 1) {
            this.state.quarter--;
            this.state.clockSeconds = 900;
            this.stopClock();
            this.updateDisplay();
        }
    },

    toggleClock() {
        this.state.clockRunning ? this.stopClock() : this.startClock();
    },

    startClock() {
        if (this.state.clockRunning) return;
        this.state.clockRunning = true;
        this.state.clockInterval = setInterval(() => {
            if (this.state.clockSeconds > 0) {
                this.state.clockSeconds--;
                this.updateClockDisplay();
            } else {
                this.stopClock();
            }
        }, 1000);
    },

    stopClock() {
        this.state.clockRunning = false;
        if (this.state.clockInterval) {
            clearInterval(this.state.clockInterval);
            this.state.clockInterval = null;
        }
    },

    resetClock() {
        this.stopClock();
        this.state.clockSeconds = this.state.quarter <= 4 ? 900 : 600;
        this.updateClockDisplay();
    },

    toggleTimeout(side, index) {
        this.state[side + 'Timeouts'][index] = !this.state[side + 'Timeouts'][index];
        this.updateTimeouts();
    },

    resetTimeouts() {
        this.state.awayTimeouts = [true, true, true];
        this.state.homeTimeouts = [true, true, true];
        this.updateTimeouts();
    },

    setPossession(side) {
        this.state.possession = side;
        document.getElementById('fb-poss-away-dot').classList.toggle('active', side === 'away');
        document.getElementById('fb-poss-home-dot').classList.toggle('active', side === 'home');
    },

    nextDown() {
        if (this.state.down < 4) {
            this.state.down++;
        } else {
            this.state.down = 1;
            this.state.distance = 10;
        }
        this.updateDisplay();
    },

    prevDown() {
        if (this.state.down > 1) this.state.down--;
        this.updateDisplay();
    },

    moveBall(yards) {
        this.state.yardline = Math.max(0, Math.min(100, this.state.yardline + yards));
        this.updateDisplay();
    },

    setTeam(side, team) {
        this.state[side + 'Team'] = team;
        const prefix = 'fb-' + side;
        document.getElementById(prefix + '-name').textContent = team.abbr;
        document.getElementById(prefix + '-abbr').textContent = team.abbr;
        document.getElementById(prefix + '-score-label').textContent = team.abbr;
        setTeamLogo(document.getElementById(prefix + '-logo'), 'football', team);
    },

    updateClockDisplay() {
        const mins = Math.floor(this.state.clockSeconds / 60);
        const secs = this.state.clockSeconds % 60;
        document.getElementById('fb-clock').textContent =
            mins.toString().padStart(2, '0') + ':' + secs.toString().padStart(2, '0');
    },

    updateTimeouts() {
        ['away', 'home'].forEach(side => {
            const container = document.getElementById('fb-' + side + '-to');
            const dots = container.querySelectorAll('.to-dot');
            this.state[side + 'Timeouts'].forEach((active, i) => {
                dots[i].classList.toggle('active', active);
            });
        });
    },

    updateDisplay() {
        const labels = ['1ST QTR', '2ND QTR', '3RD QTR', '4TH QTR', 'OT'];
        document.getElementById('fb-quarter').textContent = labels[this.state.quarter - 1];

        this.updateClockDisplay();

        document.getElementById('fb-away-score').textContent = this.state.awayScore;
        document.getElementById('fb-home-score').textContent = this.state.homeScore;

        const downOrd = ['1ST', '2ND', '3RD', '4TH'];
        document.getElementById('fb-down').textContent = downOrd[this.state.down - 1];
        document.getElementById('fb-distance').textContent = this.state.distance;
        document.getElementById('fb-yardline').textContent = this.state.yardline;

        document.getElementById('fb-play-clock').textContent = this.state.playClockSeconds || 40;

        this.updateTimeouts();
        this.updateQuarterScores();
    },

    updateQuarterScores() {
        ['away', 'home'].forEach(side => {
            const row = document.getElementById('fb-' + side + '-qtrs');
            const cells = row.querySelectorAll('td');
            let total = 0;
            for (let i = 0; i < 5; i++) {
                const val = this.state.quarterScores[side][i];
                cells[i + 1].textContent = i === 4 && this.state.quarter < 5 ? '-' : val;
                total += val;
            }
            cells[6].textContent = total;
        });
    },

    reset() {
        this.stopClock();
        this.state.quarter = 1;
        this.state.clockSeconds = 900;
        this.state.down = 1;
        this.state.distance = 10;
        this.state.yardline = 50;
        this.state.possession = null;
        this.state.awayScore = 0;
        this.state.homeScore = 0;
        this.state.awayTimeouts = [true, true, true];
        this.state.homeTimeouts = [true, true, true];
        this.state.quarterScores = { away: [0, 0, 0, 0, 0], home: [0, 0, 0, 0, 0] };
        document.getElementById('fb-poss-away-dot').classList.remove('active');
        document.getElementById('fb-poss-home-dot').classList.remove('active');
        this.updateDisplay();
    }
};

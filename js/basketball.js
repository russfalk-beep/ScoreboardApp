const Basketball = {
    state: {
        quarter: 1,
        clockSeconds: 720,
        clockRunning: false,
        clockInterval: null,
        shotClockSeconds: 24,
        shotClockRunning: false,
        possession: null,
        awayScore: 0,
        homeScore: 0,
        awayFouls: 0,
        homeFouls: 0,
        awayTimeouts: [true, true, true, true, true, true, true],
        homeTimeouts: [true, true, true, true, true, true, true],
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

    addFoul(side, count) {
        this.state[side + 'Fouls'] = Math.max(0, this.state[side + 'Fouls'] + count);
        this.updateDisplay();
    },

    nextQuarter() {
        if (this.state.quarter < 5) {
            this.state.quarter++;
            this.state.clockSeconds = this.state.quarter <= 4 ? 720 : 300;
            this.stopClock();
            this.state.awayFouls = 0;
            this.state.homeFouls = 0;
            this.updateDisplay();
        }
    },

    prevQuarter() {
        if (this.state.quarter > 1) {
            this.state.quarter--;
            this.state.clockSeconds = 720;
            this.stopClock();
            this.updateDisplay();
        }
    },

    toggleClock() {
        this.state.clockRunning ? this.stopClock() : this.startClock();
    },

    startClock(speed) {
        if (this.state.clockRunning) return;
        const interval = speed || 1000;
        this.state.clockRunning = true;
        this.state.clockSpeed = interval;
        this.state.clockInterval = setInterval(() => {
            if (this.state.clockSeconds > 0) {
                this.state.clockSeconds--;
                if (this.state.shotClockRunning && this.state.shotClockSeconds > 0) {
                    this.state.shotClockSeconds--;
                }
                this.updateClockDisplay();
                document.getElementById('bk-shot-clock').textContent = this.state.shotClockSeconds;
            } else {
                this.stopClock();
            }
        }, interval);
    },

    fastForward() {
        this.stopClock();
        this.startClock(100); // 10x speed
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
        this.state.clockSeconds = this.state.quarter <= 4 ? 720 : 300;
        this.updateClockDisplay();
    },

    setShotClock(seconds) {
        this.state.shotClockSeconds = seconds;
        document.getElementById('bk-shot-clock').textContent = seconds;
    },

    toggleShotClock() {
        this.state.shotClockRunning = !this.state.shotClockRunning;
    },

    setPossession(side) {
        this.state.possession = side;
        document.getElementById('bk-poss-away-dot').classList.toggle('active', side === 'away');
        document.getElementById('bk-poss-home-dot').classList.toggle('active', side === 'home');
    },

    toggleTimeout(side, index) {
        this.state[side + 'Timeouts'][index] = !this.state[side + 'Timeouts'][index];
        this.updateTimeouts();
    },

    setTeam(side, team) {
        this.state[side + 'Team'] = team;
        const prefix = 'bk-' + side;
        document.getElementById(prefix + '-name').textContent = team.abbr;
        document.getElementById(prefix + '-abbr').textContent = team.abbr;
        document.getElementById(prefix + '-score-label').textContent = team.abbr;
        setTeamLogo(document.getElementById(prefix + '-logo'), 'basketball', team);
    },

    updateClockDisplay() {
        const mins = Math.floor(this.state.clockSeconds / 60);
        const secs = this.state.clockSeconds % 60;
        document.getElementById('bk-clock').textContent =
            mins.toString().padStart(2, '0') + ':' + secs.toString().padStart(2, '0');
    },

    updateTimeouts() {
        ['away', 'home'].forEach(side => {
            const container = document.getElementById('bk-' + side + '-to');
            const dots = container.querySelectorAll('.to-dot');
            this.state[side + 'Timeouts'].forEach((active, i) => {
                dots[i].classList.toggle('active', active);
            });
        });
    },

    updateDisplay() {
        const labels = ['1ST QTR', '2ND QTR', '3RD QTR', '4TH QTR', 'OT'];
        document.getElementById('bk-quarter').textContent = labels[this.state.quarter - 1];

        this.updateClockDisplay();

        document.getElementById('bk-away-score').textContent = this.state.awayScore;
        document.getElementById('bk-home-score').textContent = this.state.homeScore;

        document.getElementById('bk-away-fouls').textContent = this.state.awayFouls;
        document.getElementById('bk-home-fouls').textContent = this.state.homeFouls;

        document.getElementById('bk-away-bonus').textContent = this.state.awayFouls >= 5 ? 'BONUS' : '';
        document.getElementById('bk-home-bonus').textContent = this.state.homeFouls >= 5 ? 'BONUS' : '';

        document.getElementById('bk-shot-clock').textContent = this.state.shotClockSeconds;

        this.updateTimeouts();
        this.updateQuarterScores();
    },

    updateQuarterScores() {
        ['away', 'home'].forEach(side => {
            const row = document.getElementById('bk-' + side + '-qtrs');
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
        this.state.clockSeconds = 720;
        this.state.shotClockSeconds = 24;
        this.state.shotClockRunning = false;
        this.state.possession = null;
        this.state.awayScore = 0;
        this.state.homeScore = 0;
        this.state.awayFouls = 0;
        this.state.homeFouls = 0;
        this.state.awayTimeouts = [true, true, true, true, true, true, true];
        this.state.homeTimeouts = [true, true, true, true, true, true, true];
        this.state.quarterScores = { away: [0, 0, 0, 0, 0], home: [0, 0, 0, 0, 0] };
        document.getElementById('bk-poss-away-dot').classList.remove('active');
        document.getElementById('bk-poss-home-dot').classList.remove('active');
        this.updateDisplay();
    }
};

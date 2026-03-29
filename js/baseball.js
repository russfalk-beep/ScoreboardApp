const Baseball = {
    state: {
        inning: 1,
        isTop: true,
        balls: 0,
        strikes: 0,
        outs: 0,
        bases: { first: false, second: false, third: false },
        awayScore: 0,
        homeScore: 0,
        awayHits: 0,
        homeHits: 0,
        awayErrors: 0,
        homeErrors: 0,
        inningScores: { away: [0,0,0,0,0,0,0,0,0], home: [0,0,0,0,0,0,0,0,0] },
        awayTeam: null,
        homeTeam: null,
    },

    init() {
        this.updateDisplay();
    },

    addRun(side, count) {
        const key = side + 'Score';
        this.state[key] = Math.max(0, this.state[key] + count);
        const inningIdx = Math.min(this.state.inning - 1, 8);
        this.state.inningScores[side][inningIdx] += count;
        if (this.state.inningScores[side][inningIdx] < 0) this.state.inningScores[side][inningIdx] = 0;
        this.updateDisplay();
    },

    addHit(side) {
        this.state[side + 'Hits']++;
        this.updateDisplay();
    },

    addError(side) {
        this.state[side + 'Errors']++;
        this.updateDisplay();
    },

    addBall() {
        this.state.balls++;
        if (this.state.balls >= 4) {
            this.state.balls = 0;
            this.state.strikes = 0;
        }
        this.updateDisplay();
    },

    addStrike() {
        this.state.strikes++;
        if (this.state.strikes >= 3) {
            this.state.strikes = 0;
            this.state.balls = 0;
            this.addOut();
            return;
        }
        this.updateDisplay();
    },

    addOut() {
        this.state.outs++;
        if (this.state.outs >= 3) {
            this.state.outs = 0;
            this.state.balls = 0;
            this.state.strikes = 0;
            this.state.bases = { first: false, second: false, third: false };
            if (this.state.isTop) {
                this.state.isTop = false;
            } else {
                this.state.isTop = true;
                this.state.inning++;
            }
        }
        this.updateDisplay();
    },

    resetCount() {
        this.state.balls = 0;
        this.state.strikes = 0;
        this.updateDisplay();
    },

    toggleBase(base) {
        this.state.bases[base] = !this.state.bases[base];
        this.updateDisplay();
    },

    nextInning() {
        if (this.state.isTop) {
            this.state.isTop = false;
        } else {
            this.state.isTop = true;
            if (this.state.inning < 12) this.state.inning++;
        }
        this.state.outs = 0;
        this.state.balls = 0;
        this.state.strikes = 0;
        this.state.bases = { first: false, second: false, third: false };
        this.updateDisplay();
    },

    prevInning() {
        if (!this.state.isTop) {
            this.state.isTop = true;
        } else {
            if (this.state.inning > 1) this.state.inning--;
            this.state.isTop = false;
        }
        this.state.outs = 0;
        this.state.balls = 0;
        this.state.strikes = 0;
        this.updateDisplay();
    },

    setTeam(side, team) {
        this.state[side + 'Team'] = team;
        const prefix = 'bb-' + side;
        document.getElementById(prefix + '-name').textContent = team.abbr;
        document.getElementById(prefix + '-abbr').textContent = team.abbr;
        setTeamLogo(document.getElementById(prefix + '-logo'), 'baseball', team);
    },

    updateDisplay() {
        const ordinals = ['1ST','2ND','3RD','4TH','5TH','6TH','7TH','8TH','9TH','10TH','11TH','12TH'];
        document.getElementById('bb-inning').textContent = ordinals[this.state.inning - 1] || this.state.inning + 'TH';
        document.getElementById('bb-inning-half').innerHTML = this.state.isTop ? '&#9650;' : '&#9660;';

        document.getElementById('bb-away-score').textContent = this.state.awayScore;
        document.getElementById('bb-home-score').textContent = this.state.homeScore;
        document.getElementById('bb-away-hits').textContent = this.state.awayHits;
        document.getElementById('bb-home-hits').textContent = this.state.homeHits;
        document.getElementById('bb-away-errors').textContent = this.state.awayErrors;
        document.getElementById('bb-home-errors').textContent = this.state.homeErrors;

        this.updateDots('bb-balls', this.state.balls);
        this.updateDots('bb-strikes', this.state.strikes);
        this.updateDots('bb-outs', this.state.outs);

        document.getElementById('bb-first').classList.toggle('occupied', this.state.bases.first);
        document.getElementById('bb-second').classList.toggle('occupied', this.state.bases.second);
        document.getElementById('bb-third').classList.toggle('occupied', this.state.bases.third);

        this.updateLineScore();
    },

    updateDots(containerId, count) {
        const dots = document.getElementById(containerId).querySelectorAll('.dot');
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.toggle('active', i < count);
        }
    },

    updateLineScore() {
        ['away', 'home'].forEach(side => {
            const row = document.getElementById('bb-' + side + '-innings');
            const cells = row.querySelectorAll('td');
            for (let i = 0; i < 9; i++) {
                cells[i + 1].textContent = this.state.inningScores[side][i];
            }
            cells[10].textContent = this.state[side + 'Score'];
            cells[11].textContent = this.state[side + 'Hits'];
            cells[12].textContent = this.state[side + 'Errors'];
        });
    },

    reset() {
        this.state.inning = 1;
        this.state.isTop = true;
        this.state.balls = 0;
        this.state.strikes = 0;
        this.state.outs = 0;
        this.state.bases = { first: false, second: false, third: false };
        this.state.awayScore = 0;
        this.state.homeScore = 0;
        this.state.awayHits = 0;
        this.state.homeHits = 0;
        this.state.awayErrors = 0;
        this.state.homeErrors = 0;
        this.state.inningScores = { away: [0,0,0,0,0,0,0,0,0], home: [0,0,0,0,0,0,0,0,0] };
        this.updateDisplay();
    }
};

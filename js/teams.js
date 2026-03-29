// All NFL, MLB, and NBA teams with their info and logo URLs
// Logos sourced from ESPN CDN
// Falls back to colored placeholder circles if images fail to load

const TEAMS = {
    football: [
        // AFC East
        { name: "Buffalo Bills", abbr: "BUF", city: "Buffalo", conference: "AFC", division: "East", colors: ["#00338D", "#C60C30"], logo: "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png" },
        { name: "Miami Dolphins", abbr: "MIA", city: "Miami", conference: "AFC", division: "East", colors: ["#008E97", "#FC4C02"], logo: "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png" },
        { name: "New England Patriots", abbr: "NE", city: "New England", conference: "AFC", division: "East", colors: ["#002244", "#C60C30"], logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png" },
        { name: "New York Jets", abbr: "NYJ", city: "New York", conference: "AFC", division: "East", colors: ["#125740", "#FFFFFF"], logo: "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png" },
        // AFC North
        { name: "Baltimore Ravens", abbr: "BAL", city: "Baltimore", conference: "AFC", division: "North", colors: ["#241773", "#9E7C0C"], logo: "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png" },
        { name: "Cincinnati Bengals", abbr: "CIN", city: "Cincinnati", conference: "AFC", division: "North", colors: ["#FB4F14", "#000000"], logo: "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png" },
        { name: "Cleveland Browns", abbr: "CLE", city: "Cleveland", conference: "AFC", division: "North", colors: ["#311D00", "#FF3C00"], logo: "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png" },
        { name: "Pittsburgh Steelers", abbr: "PIT", city: "Pittsburgh", conference: "AFC", division: "North", colors: ["#FFB612", "#101820"], logo: "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png" },
        // AFC South
        { name: "Houston Texans", abbr: "HOU", city: "Houston", conference: "AFC", division: "South", colors: ["#03202F", "#A71930"], logo: "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png" },
        { name: "Indianapolis Colts", abbr: "IND", city: "Indianapolis", conference: "AFC", division: "South", colors: ["#002C5F", "#A2AAAD"], logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png" },
        { name: "Jacksonville Jaguars", abbr: "JAX", city: "Jacksonville", conference: "AFC", division: "South", colors: ["#006778", "#D7A22A"], logo: "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png" },
        { name: "Tennessee Titans", abbr: "TEN", city: "Tennessee", conference: "AFC", division: "South", colors: ["#0C2340", "#4B92DB"], logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png" },
        // AFC West
        { name: "Denver Broncos", abbr: "DEN", city: "Denver", conference: "AFC", division: "West", colors: ["#FB4F14", "#002244"], logo: "https://a.espncdn.com/i/teamlogos/nfl/500/den.png" },
        { name: "Kansas City Chiefs", abbr: "KC", city: "Kansas City", conference: "AFC", division: "West", colors: ["#E31837", "#FFB81C"], logo: "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png" },
        { name: "Las Vegas Raiders", abbr: "LV", city: "Las Vegas", conference: "AFC", division: "West", colors: ["#000000", "#A5ACAF"], logo: "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png" },
        { name: "Los Angeles Chargers", abbr: "LAC", city: "Los Angeles", conference: "AFC", division: "West", colors: ["#0080C6", "#FFC20E"], logo: "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png" },
        // NFC East
        { name: "Dallas Cowboys", abbr: "DAL", city: "Dallas", conference: "NFC", division: "East", colors: ["#003594", "#869397"], logo: "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png" },
        { name: "New York Giants", abbr: "NYG", city: "New York", conference: "NFC", division: "East", colors: ["#0B2265", "#A71930"], logo: "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png" },
        { name: "Philadelphia Eagles", abbr: "PHI", city: "Philadelphia", conference: "NFC", division: "East", colors: ["#004C54", "#A5ACAF"], logo: "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png" },
        { name: "Washington Commanders", abbr: "WAS", city: "Washington", conference: "NFC", division: "East", colors: ["#5A1414", "#FFB612"], logo: "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png" },
        // NFC North
        { name: "Chicago Bears", abbr: "CHI", city: "Chicago", conference: "NFC", division: "North", colors: ["#0B162A", "#C83803"], logo: "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png" },
        { name: "Detroit Lions", abbr: "DET", city: "Detroit", conference: "NFC", division: "North", colors: ["#0076B6", "#B0B7BC"], logo: "https://a.espncdn.com/i/teamlogos/nfl/500/det.png" },
        { name: "Green Bay Packers", abbr: "GB", city: "Green Bay", conference: "NFC", division: "North", colors: ["#203731", "#FFB612"], logo: "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png" },
        { name: "Minnesota Vikings", abbr: "MIN", city: "Minnesota", conference: "NFC", division: "North", colors: ["#4F2683", "#FFC62F"], logo: "https://a.espncdn.com/i/teamlogos/nfl/500/min.png" },
        // NFC South
        { name: "Atlanta Falcons", abbr: "ATL", city: "Atlanta", conference: "NFC", division: "South", colors: ["#A71930", "#000000"], logo: "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png" },
        { name: "Carolina Panthers", abbr: "CAR", city: "Carolina", conference: "NFC", division: "South", colors: ["#0085CA", "#101820"], logo: "https://a.espncdn.com/i/teamlogos/nfl/500/car.png" },
        { name: "New Orleans Saints", abbr: "NO", city: "New Orleans", conference: "NFC", division: "South", colors: ["#D3BC8D", "#101820"], logo: "https://a.espncdn.com/i/teamlogos/nfl/500/no.png" },
        { name: "Tampa Bay Buccaneers", abbr: "TB", city: "Tampa Bay", conference: "NFC", division: "South", colors: ["#D50A0A", "#34302B"], logo: "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png" },
        // NFC West
        { name: "Arizona Cardinals", abbr: "ARI", city: "Arizona", conference: "NFC", division: "West", colors: ["#97233F", "#000000"], logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png" },
        { name: "Los Angeles Rams", abbr: "LAR", city: "Los Angeles", conference: "NFC", division: "West", colors: ["#003594", "#FFA300"], logo: "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png" },
        { name: "San Francisco 49ers", abbr: "SF", city: "San Francisco", conference: "NFC", division: "West", colors: ["#AA0000", "#B3995D"], logo: "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png" },
        { name: "Seattle Seahawks", abbr: "SEA", city: "Seattle", conference: "NFC", division: "West", colors: ["#002244", "#69BE28"], logo: "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png" },
    ],

    baseball: [
        // AL East
        { name: "Baltimore Orioles", abbr: "BAL", city: "Baltimore", league: "AL", division: "East", colors: ["#DF4601", "#27251F"], logo: "https://a.espncdn.com/i/teamlogos/mlb/500/bal.png" },
        { name: "Boston Red Sox", abbr: "BOS", city: "Boston", league: "AL", division: "East", colors: ["#BD3039", "#0C2340"], logo: "https://a.espncdn.com/i/teamlogos/mlb/500/bos.png" },
        { name: "New York Yankees", abbr: "NYY", city: "New York", league: "AL", division: "East", colors: ["#003087", "#E4002C"], logo: "https://a.espncdn.com/i/teamlogos/mlb/500/nyy.png" },
        { name: "Tampa Bay Rays", abbr: "TB", city: "Tampa Bay", league: "AL", division: "East", colors: ["#092C5C", "#8FBCE6"], logo: "https://a.espncdn.com/i/teamlogos/mlb/500/tb.png" },
        { name: "Toronto Blue Jays", abbr: "TOR", city: "Toronto", league: "AL", division: "East", colors: ["#134A8E", "#1D2D5C"], logo: "https://a.espncdn.com/i/teamlogos/mlb/500/tor.png" },
        // AL Central
        { name: "Chicago White Sox", abbr: "CWS", city: "Chicago", league: "AL", division: "Central", colors: ["#27251F", "#C4CED4"], logo: "https://a.espncdn.com/i/teamlogos/mlb/500/chw.png" },
        { name: "Cleveland Guardians", abbr: "CLE", city: "Cleveland", league: "AL", division: "Central", colors: ["#00385D", "#E50022"], logo: "https://a.espncdn.com/i/teamlogos/mlb/500/cle.png" },
        { name: "Detroit Tigers", abbr: "DET", city: "Detroit", league: "AL", division: "Central", colors: ["#0C2340", "#FA4616"], logo: "https://a.espncdn.com/i/teamlogos/mlb/500/det.png" },
        { name: "Kansas City Royals", abbr: "KC", city: "Kansas City", league: "AL", division: "Central", colors: ["#004687", "#BD9B60"], logo: "https://a.espncdn.com/i/teamlogos/mlb/500/kc.png" },
        { name: "Minnesota Twins", abbr: "MIN", city: "Minnesota", league: "AL", division: "Central", colors: ["#002B5C", "#D31145"], logo: "https://a.espncdn.com/i/teamlogos/mlb/500/min.png" },
        // AL West
        { name: "Houston Astros", abbr: "HOU", city: "Houston", league: "AL", division: "West", colors: ["#002D62", "#EB6E1F"], logo: "https://a.espncdn.com/i/teamlogos/mlb/500/hou.png" },
        { name: "Los Angeles Angels", abbr: "LAA", city: "Los Angeles", league: "AL", division: "West", colors: ["#BA0021", "#003263"], logo: "https://a.espncdn.com/i/teamlogos/mlb/500/laa.png" },
        { name: "Oakland Athletics", abbr: "OAK", city: "Oakland", league: "AL", division: "West", colors: ["#003831", "#EFB21E"], logo: "https://a.espncdn.com/i/teamlogos/mlb/500/oak.png" },
        { name: "Seattle Mariners", abbr: "SEA", city: "Seattle", league: "AL", division: "West", colors: ["#0C2C56", "#005C5C"], logo: "https://a.espncdn.com/i/teamlogos/mlb/500/sea.png" },
        { name: "Texas Rangers", abbr: "TEX", city: "Texas", league: "AL", division: "West", colors: ["#003278", "#C0111F"], logo: "https://a.espncdn.com/i/teamlogos/mlb/500/tex.png" },
        // NL East
        { name: "Atlanta Braves", abbr: "ATL", city: "Atlanta", league: "NL", division: "East", colors: ["#CE1141", "#13274F"], logo: "https://a.espncdn.com/i/teamlogos/mlb/500/atl.png" },
        { name: "Miami Marlins", abbr: "MIA", city: "Miami", league: "NL", division: "East", colors: ["#00A3E0", "#EF3340"], logo: "https://a.espncdn.com/i/teamlogos/mlb/500/mia.png" },
        { name: "New York Mets", abbr: "NYM", city: "New York", league: "NL", division: "East", colors: ["#002D72", "#FF5910"], logo: "https://a.espncdn.com/i/teamlogos/mlb/500/nym.png" },
        { name: "Philadelphia Phillies", abbr: "PHI", city: "Philadelphia", league: "NL", division: "East", colors: ["#E81828", "#002D72"], logo: "https://a.espncdn.com/i/teamlogos/mlb/500/phi.png" },
        { name: "Washington Nationals", abbr: "WSH", city: "Washington", league: "NL", division: "East", colors: ["#AB0003", "#14225A"], logo: "https://a.espncdn.com/i/teamlogos/mlb/500/wsh.png" },
        // NL Central
        { name: "Chicago Cubs", abbr: "CHC", city: "Chicago", league: "NL", division: "Central", colors: ["#0E3386", "#CC3433"], logo: "https://a.espncdn.com/i/teamlogos/mlb/500/chc.png" },
        { name: "Cincinnati Reds", abbr: "CIN", city: "Cincinnati", league: "NL", division: "Central", colors: ["#C6011F", "#000000"], logo: "https://a.espncdn.com/i/teamlogos/mlb/500/cin.png" },
        { name: "Milwaukee Brewers", abbr: "MIL", city: "Milwaukee", league: "NL", division: "Central", colors: ["#FFC52F", "#12284B"], logo: "https://a.espncdn.com/i/teamlogos/mlb/500/mil.png" },
        { name: "Pittsburgh Pirates", abbr: "PIT", city: "Pittsburgh", league: "NL", division: "Central", colors: ["#27251F", "#FDB827"], logo: "https://a.espncdn.com/i/teamlogos/mlb/500/pit.png" },
        { name: "St. Louis Cardinals", abbr: "STL", city: "St. Louis", league: "NL", division: "Central", colors: ["#C41E3A", "#0C2340"], logo: "https://a.espncdn.com/i/teamlogos/mlb/500/stl.png" },
        // NL West
        { name: "Arizona Diamondbacks", abbr: "AZ", city: "Arizona", league: "NL", division: "West", colors: ["#A71930", "#E3D4AD"], logo: "https://a.espncdn.com/i/teamlogos/mlb/500/ari.png" },
        { name: "Colorado Rockies", abbr: "COL", city: "Colorado", league: "NL", division: "West", colors: ["#33006F", "#C4CED4"], logo: "https://a.espncdn.com/i/teamlogos/mlb/500/col.png" },
        { name: "Los Angeles Dodgers", abbr: "LAD", city: "Los Angeles", league: "NL", division: "West", colors: ["#005A9C", "#EF3E42"], logo: "https://a.espncdn.com/i/teamlogos/mlb/500/lad.png" },
        { name: "San Diego Padres", abbr: "SD", city: "San Diego", league: "NL", division: "West", colors: ["#2F241D", "#FFC425"], logo: "https://a.espncdn.com/i/teamlogos/mlb/500/sd.png" },
        { name: "San Francisco Giants", abbr: "SF", city: "San Francisco", league: "NL", division: "West", colors: ["#FD5A1E", "#27251F"], logo: "https://a.espncdn.com/i/teamlogos/mlb/500/sf.png" },
    ],

    basketball: [
        // Atlantic
        { name: "Boston Celtics", abbr: "BOS", city: "Boston", conference: "Eastern", division: "Atlantic", colors: ["#007A33", "#BA9653"], logo: "https://a.espncdn.com/i/teamlogos/nba/500/bos.png" },
        { name: "Brooklyn Nets", abbr: "BKN", city: "Brooklyn", conference: "Eastern", division: "Atlantic", colors: ["#000000", "#FFFFFF"], logo: "https://a.espncdn.com/i/teamlogos/nba/500/bkn.png" },
        { name: "New York Knicks", abbr: "NYK", city: "New York", conference: "Eastern", division: "Atlantic", colors: ["#006BB6", "#F58426"], logo: "https://a.espncdn.com/i/teamlogos/nba/500/ny.png" },
        { name: "Philadelphia 76ers", abbr: "PHI", city: "Philadelphia", conference: "Eastern", division: "Atlantic", colors: ["#006BB6", "#ED174C"], logo: "https://a.espncdn.com/i/teamlogos/nba/500/phi.png" },
        { name: "Toronto Raptors", abbr: "TOR", city: "Toronto", conference: "Eastern", division: "Atlantic", colors: ["#CE1141", "#000000"], logo: "https://a.espncdn.com/i/teamlogos/nba/500/tor.png" },
        // Central
        { name: "Chicago Bulls", abbr: "CHI", city: "Chicago", conference: "Eastern", division: "Central", colors: ["#CE1141", "#000000"], logo: "https://a.espncdn.com/i/teamlogos/nba/500/chi.png" },
        { name: "Cleveland Cavaliers", abbr: "CLE", city: "Cleveland", conference: "Eastern", division: "Central", colors: ["#860038", "#FDBB30"], logo: "https://a.espncdn.com/i/teamlogos/nba/500/cle.png" },
        { name: "Detroit Pistons", abbr: "DET", city: "Detroit", conference: "Eastern", division: "Central", colors: ["#C8102E", "#1D42BA"], logo: "https://a.espncdn.com/i/teamlogos/nba/500/det.png" },
        { name: "Indiana Pacers", abbr: "IND", city: "Indiana", conference: "Eastern", division: "Central", colors: ["#002D62", "#FDBB30"], logo: "https://a.espncdn.com/i/teamlogos/nba/500/ind.png" },
        { name: "Milwaukee Bucks", abbr: "MIL", city: "Milwaukee", conference: "Eastern", division: "Central", colors: ["#00471B", "#EEE1C6"], logo: "https://a.espncdn.com/i/teamlogos/nba/500/mil.png" },
        // Southeast
        { name: "Atlanta Hawks", abbr: "ATL", city: "Atlanta", conference: "Eastern", division: "Southeast", colors: ["#E03A3E", "#C1D32F"], logo: "https://a.espncdn.com/i/teamlogos/nba/500/atl.png" },
        { name: "Charlotte Hornets", abbr: "CHA", city: "Charlotte", conference: "Eastern", division: "Southeast", colors: ["#1D1160", "#00788C"], logo: "https://a.espncdn.com/i/teamlogos/nba/500/cha.png" },
        { name: "Miami Heat", abbr: "MIA", city: "Miami", conference: "Eastern", division: "Southeast", colors: ["#98002E", "#F9A01B"], logo: "https://a.espncdn.com/i/teamlogos/nba/500/mia.png" },
        { name: "Orlando Magic", abbr: "ORL", city: "Orlando", conference: "Eastern", division: "Southeast", colors: ["#0077C0", "#C4CED4"], logo: "https://a.espncdn.com/i/teamlogos/nba/500/orl.png" },
        { name: "Washington Wizards", abbr: "WAS", city: "Washington", conference: "Eastern", division: "Southeast", colors: ["#002B5C", "#E31837"], logo: "https://a.espncdn.com/i/teamlogos/nba/500/wsh.png" },
        // Northwest
        { name: "Denver Nuggets", abbr: "DEN", city: "Denver", conference: "Western", division: "Northwest", colors: ["#0E2240", "#FEC524"], logo: "https://a.espncdn.com/i/teamlogos/nba/500/den.png" },
        { name: "Minnesota Timberwolves", abbr: "MIN", city: "Minnesota", conference: "Western", division: "Northwest", colors: ["#0C2340", "#236192"], logo: "https://a.espncdn.com/i/teamlogos/nba/500/min.png" },
        { name: "Oklahoma City Thunder", abbr: "OKC", city: "Oklahoma City", conference: "Western", division: "Northwest", colors: ["#007AC1", "#EF6100"], logo: "https://a.espncdn.com/i/teamlogos/nba/500/okc.png" },
        { name: "Portland Trail Blazers", abbr: "POR", city: "Portland", conference: "Western", division: "Northwest", colors: ["#E03A3E", "#000000"], logo: "https://a.espncdn.com/i/teamlogos/nba/500/por.png" },
        { name: "Utah Jazz", abbr: "UTA", city: "Utah", conference: "Western", division: "Northwest", colors: ["#002B5C", "#00471B"], logo: "https://a.espncdn.com/i/teamlogos/nba/500/utah.png" },
        // Pacific
        { name: "Golden State Warriors", abbr: "GSW", city: "Golden State", conference: "Western", division: "Pacific", colors: ["#1D428A", "#FFC72C"], logo: "https://a.espncdn.com/i/teamlogos/nba/500/gs.png" },
        { name: "Los Angeles Clippers", abbr: "LAC", city: "Los Angeles", conference: "Western", division: "Pacific", colors: ["#C8102E", "#1D428A"], logo: "https://a.espncdn.com/i/teamlogos/nba/500/lac.png" },
        { name: "Los Angeles Lakers", abbr: "LAL", city: "Los Angeles", conference: "Western", division: "Pacific", colors: ["#552583", "#FDB927"], logo: "https://a.espncdn.com/i/teamlogos/nba/500/lal.png" },
        { name: "Phoenix Suns", abbr: "PHX", city: "Phoenix", conference: "Western", division: "Pacific", colors: ["#1D1160", "#E56020"], logo: "https://a.espncdn.com/i/teamlogos/nba/500/phx.png" },
        { name: "Sacramento Kings", abbr: "SAC", city: "Sacramento", conference: "Western", division: "Pacific", colors: ["#5A2D81", "#63727A"], logo: "https://a.espncdn.com/i/teamlogos/nba/500/sac.png" },
        // Southwest
        { name: "Dallas Mavericks", abbr: "DAL", city: "Dallas", conference: "Western", division: "Southwest", colors: ["#00538C", "#002B5E"], logo: "https://a.espncdn.com/i/teamlogos/nba/500/dal.png" },
        { name: "Houston Rockets", abbr: "HOU", city: "Houston", conference: "Western", division: "Southwest", colors: ["#CE1141", "#000000"], logo: "https://a.espncdn.com/i/teamlogos/nba/500/hou.png" },
        { name: "Memphis Grizzlies", abbr: "MEM", city: "Memphis", conference: "Western", division: "Southwest", colors: ["#5D76A9", "#12173F"], logo: "https://a.espncdn.com/i/teamlogos/nba/500/mem.png" },
        { name: "New Orleans Pelicans", abbr: "NOP", city: "New Orleans", conference: "Western", division: "Southwest", colors: ["#0C2340", "#C8102E"], logo: "https://a.espncdn.com/i/teamlogos/nba/500/no.png" },
        { name: "San Antonio Spurs", abbr: "SAS", city: "San Antonio", conference: "Western", division: "Southwest", colors: ["#C4CED4", "#000000"], logo: "https://a.espncdn.com/i/teamlogos/nba/500/sa.png" },
    ]
};

// Get logo URL for a team - prefers the embedded URL, falls back to local file
function getLogoPath(sport, team) {
    if (team.logo) return team.logo;
    const leagueDir = sport === 'football' ? 'nfl' : sport === 'baseball' ? 'mlb' : 'nba';
    return `logos/${leagueDir}/${team.abbr}.png`;
}

// Generate a colored placeholder when no logo image is available
function getPlaceholderLogo(team) {
    const canvas = document.createElement('canvas');
    canvas.width = 100;
    canvas.height = 100;
    const ctx = canvas.getContext('2d');

    // Background circle
    ctx.fillStyle = team.colors[0];
    ctx.beginPath();
    ctx.arc(50, 50, 48, 0, Math.PI * 2);
    ctx.fill();

    // Border
    ctx.strokeStyle = team.colors[1];
    ctx.lineWidth = 3;
    ctx.stroke();

    // Team abbreviation text
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 28px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(team.abbr, 50, 50);

    return canvas.toDataURL();
}

// Set team logo with fallback to placeholder
function setTeamLogo(imgElement, sport, team) {
    const logoUrl = getLogoPath(sport, team);
    imgElement.onerror = function() {
        this.src = getPlaceholderLogo(team);
        this.onerror = null;
    };
    imgElement.src = logoUrl;
}

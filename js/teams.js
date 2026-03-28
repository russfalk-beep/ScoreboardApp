// All NFL, MLB, and NBA teams with their info and logo URLs
// Logos sourced from Wikipedia (Wikimedia Commons)
// Falls back to colored placeholder circles if images fail to load

const TEAMS = {
    football: [
        // AFC East
        { name: "Buffalo Bills", abbr: "BUF", city: "Buffalo", conference: "AFC", division: "East", colors: ["#00338D", "#C60C30"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Buffalo_Bills_logo.svg/189px-Buffalo_Bills_logo.svg.png" },
        { name: "Miami Dolphins", abbr: "MIA", city: "Miami", conference: "AFC", division: "East", colors: ["#008E97", "#FC4C02"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Miami_Dolphins_logo.svg/100px-Miami_Dolphins_logo.svg.png" },
        { name: "New England Patriots", abbr: "NE", city: "New England", conference: "AFC", division: "East", colors: ["#002244", "#C60C30"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/New_England_Patriots_logo.svg/100px-New_England_Patriots_logo.svg.png" },
        { name: "New York Jets", abbr: "NYJ", city: "New York", conference: "AFC", division: "East", colors: ["#125740", "#FFFFFF"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/New_York_Jets_logo.svg/100px-New_York_Jets_logo.svg.png" },
        // AFC North
        { name: "Baltimore Ravens", abbr: "BAL", city: "Baltimore", conference: "AFC", division: "North", colors: ["#241773", "#9E7C0C"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Baltimore_Ravens_logo.svg/193px-Baltimore_Ravens_logo.svg.png" },
        { name: "Cincinnati Bengals", abbr: "CIN", city: "Cincinnati", conference: "AFC", division: "North", colors: ["#FB4F14", "#000000"], logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Cincinnati_Bengals_logo.svg/100px-Cincinnati_Bengals_logo.svg.png" },
        { name: "Cleveland Browns", abbr: "CLE", city: "Cleveland", conference: "AFC", division: "North", colors: ["#311D00", "#FF3C00"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Cleveland_Browns_logo.svg/100px-Cleveland_Browns_logo.svg.png" },
        { name: "Pittsburgh Steelers", abbr: "PIT", city: "Pittsburgh", conference: "AFC", division: "North", colors: ["#FFB612", "#101820"], logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Pittsburgh_Steelers_logo.svg/100px-Pittsburgh_Steelers_logo.svg.png" },
        // AFC South
        { name: "Houston Texans", abbr: "HOU", city: "Houston", conference: "AFC", division: "South", colors: ["#03202F", "#A71930"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Houston_Texans_logo.svg/100px-Houston_Texans_logo.svg.png" },
        { name: "Indianapolis Colts", abbr: "IND", city: "Indianapolis", conference: "AFC", division: "South", colors: ["#002C5F", "#A2AAAD"], logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Indianapolis_Colts_logo.svg/100px-Indianapolis_Colts_logo.svg.png" },
        { name: "Jacksonville Jaguars", abbr: "JAX", city: "Jacksonville", conference: "AFC", division: "South", colors: ["#006778", "#D7A22A"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Jacksonville_Jaguars_logo.svg/100px-Jacksonville_Jaguars_logo.svg.png" },
        { name: "Tennessee Titans", abbr: "TEN", city: "Tennessee", conference: "AFC", division: "South", colors: ["#0C2340", "#4B92DB"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Tennessee_Titans_logo.svg/100px-Tennessee_Titans_logo.svg.png" },
        // AFC West
        { name: "Denver Broncos", abbr: "DEN", city: "Denver", conference: "AFC", division: "West", colors: ["#FB4F14", "#002244"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Denver_Broncos_logo.svg/100px-Denver_Broncos_logo.svg.png" },
        { name: "Kansas City Chiefs", abbr: "KC", city: "Kansas City", conference: "AFC", division: "West", colors: ["#E31837", "#FFB81C"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Kansas_City_Chiefs_logo.svg/100px-Kansas_City_Chiefs_logo.svg.png" },
        { name: "Las Vegas Raiders", abbr: "LV", city: "Las Vegas", conference: "AFC", division: "West", colors: ["#000000", "#A5ACAF"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/48/Las_Vegas_Raiders_logo.svg/150px-Las_Vegas_Raiders_logo.svg.png" },
        { name: "Los Angeles Chargers", abbr: "LAC", city: "Los Angeles", conference: "AFC", division: "West", colors: ["#0080C6", "#FFC20E"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/72/NFL_Chargers_logo.svg/100px-NFL_Chargers_logo.svg.png" },
        // NFC East
        { name: "Dallas Cowboys", abbr: "DAL", city: "Dallas", conference: "NFC", division: "East", colors: ["#003594", "#869397"], logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Dallas_Cowboys.svg/100px-Dallas_Cowboys.svg.png" },
        { name: "New York Giants", abbr: "NYG", city: "New York", conference: "NFC", division: "East", colors: ["#0B2265", "#A71930"], logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/New_York_Giants_logo.svg/100px-New_York_Giants_logo.svg.png" },
        { name: "Philadelphia Eagles", abbr: "PHI", city: "Philadelphia", conference: "NFC", division: "East", colors: ["#004C54", "#A5ACAF"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Philadelphia_Eagles_logo.svg/100px-Philadelphia_Eagles_logo.svg.png" },
        { name: "Washington Commanders", abbr: "WAS", city: "Washington", conference: "NFC", division: "East", colors: ["#5A1414", "#FFB612"], logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Washington_Commanders_logo.svg/100px-Washington_Commanders_logo.svg.png" },
        // NFC North
        { name: "Chicago Bears", abbr: "CHI", city: "Chicago", conference: "NFC", division: "North", colors: ["#0B162A", "#C83803"], logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Chicago_Bears_logo.svg/100px-Chicago_Bears_logo.svg.png" },
        { name: "Detroit Lions", abbr: "DET", city: "Detroit", conference: "NFC", division: "North", colors: ["#0076B6", "#B0B7BC"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/71/Detroit_Lions_logo.svg/100px-Detroit_Lions_logo.svg.png" },
        { name: "Green Bay Packers", abbr: "GB", city: "Green Bay", conference: "NFC", division: "North", colors: ["#203731", "#FFB612"], logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Green_Bay_Packers_logo.svg/100px-Green_Bay_Packers_logo.svg.png" },
        { name: "Minnesota Vikings", abbr: "MIN", city: "Minnesota", conference: "NFC", division: "North", colors: ["#4F2683", "#FFC62F"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/48/Minnesota_Vikings_logo.svg/98px-Minnesota_Vikings_logo.svg.png" },
        // NFC South
        { name: "Atlanta Falcons", abbr: "ATL", city: "Atlanta", conference: "NFC", division: "South", colors: ["#A71930", "#000000"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Atlanta_Falcons_logo.svg/192px-Atlanta_Falcons_logo.svg.png" },
        { name: "Carolina Panthers", abbr: "CAR", city: "Carolina", conference: "NFC", division: "South", colors: ["#0085CA", "#101820"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Carolina_Panthers_logo.svg/100px-Carolina_Panthers_logo.svg.png" },
        { name: "New Orleans Saints", abbr: "NO", city: "New Orleans", conference: "NFC", division: "South", colors: ["#D3BC8D", "#101820"], logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/New_Orleans_Saints_logo.svg/98px-New_Orleans_Saints_logo.svg.png" },
        { name: "Tampa Bay Buccaneers", abbr: "TB", city: "Tampa Bay", conference: "NFC", division: "South", colors: ["#D50A0A", "#34302B"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Tampa_Bay_Buccaneers_logo.svg/100px-Tampa_Bay_Buccaneers_logo.svg.png" },
        // NFC West
        { name: "Arizona Cardinals", abbr: "ARI", city: "Arizona", conference: "NFC", division: "West", colors: ["#97233F", "#000000"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Arizona_Cardinals_logo.svg/179px-Arizona_Cardinals_logo.svg.png" },
        { name: "Los Angeles Rams", abbr: "LAR", city: "Los Angeles", conference: "NFC", division: "West", colors: ["#003594", "#FFA300"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Los_Angeles_Rams_logo.svg/100px-Los_Angeles_Rams_logo.svg.png" },
        { name: "San Francisco 49ers", abbr: "SF", city: "San Francisco", conference: "NFC", division: "West", colors: ["#AA0000", "#B3995D"], logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/San_Francisco_49ers_logo.svg/100px-San_Francisco_49ers_logo.svg.png" },
        { name: "Seattle Seahawks", abbr: "SEA", city: "Seattle", conference: "NFC", division: "West", colors: ["#002244", "#69BE28"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Seattle_Seahawks_logo.svg/100px-Seattle_Seahawks_logo.svg.png" },
    ],

    baseball: [
        // AL East
        { name: "Baltimore Orioles", abbr: "BAL", city: "Baltimore", league: "AL", division: "East", colors: ["#DF4601", "#27251F"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Baltimore_Orioles_cap.svg/100px-Baltimore_Orioles_cap.svg.png" },
        { name: "Boston Red Sox", abbr: "BOS", city: "Boston", league: "AL", division: "East", colors: ["#BD3039", "#0C2340"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/RedSoxPrimary_HangingSocks.svg/100px-RedSoxPrimary_HangingSocks.svg.png" },
        { name: "New York Yankees", abbr: "NYY", city: "New York", league: "AL", division: "East", colors: ["#003087", "#E4002C"], logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/New_York_Yankees_Primary_Logo.svg/100px-New_York_Yankees_Primary_Logo.svg.png" },
        { name: "Tampa Bay Rays", abbr: "TB", city: "Tampa Bay", league: "AL", division: "East", colors: ["#092C5C", "#8FBCE6"], logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Tampa_Bay_Rays_Logo.svg/100px-Tampa_Bay_Rays_Logo.svg.png" },
        { name: "Toronto Blue Jays", abbr: "TOR", city: "Toronto", league: "AL", division: "East", colors: ["#134A8E", "#1D2D5C"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Toronto_Blue_Jays_logo.svg/100px-Toronto_Blue_Jays_logo.svg.png" },
        // AL Central
        { name: "Chicago White Sox", abbr: "CWS", city: "Chicago", league: "AL", division: "Central", colors: ["#27251F", "#C4CED4"], logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Chicago_White_Sox.svg/100px-Chicago_White_Sox.svg.png" },
        { name: "Cleveland Guardians", abbr: "CLE", city: "Cleveland", league: "AL", division: "Central", colors: ["#00385D", "#E50022"], logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Cleveland_Guardians_primary_logo.svg/100px-Cleveland_Guardians_primary_logo.svg.png" },
        { name: "Detroit Tigers", abbr: "DET", city: "Detroit", league: "AL", division: "Central", colors: ["#0C2340", "#FA4616"], logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Detroit_Tigers_logo.svg/100px-Detroit_Tigers_logo.svg.png" },
        { name: "Kansas City Royals", abbr: "KC", city: "Kansas City", league: "AL", division: "Central", colors: ["#004687", "#BD9B60"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Kansas_City_Royals.svg/100px-Kansas_City_Royals.svg.png" },
        { name: "Minnesota Twins", abbr: "MIN", city: "Minnesota", league: "AL", division: "Central", colors: ["#002B5C", "#D31145"], logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Minnesota_Twins_logo_%282023%29.svg/100px-Minnesota_Twins_logo_%282023%29.svg.png" },
        // AL West
        { name: "Houston Astros", abbr: "HOU", city: "Houston", league: "AL", division: "West", colors: ["#002D62", "#EB6E1F"], logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Houston-Astros-Logo.svg/100px-Houston-Astros-Logo.svg.png" },
        { name: "Los Angeles Angels", abbr: "LAA", city: "Los Angeles", league: "AL", division: "West", colors: ["#BA0021", "#003263"], logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Los_Angeles_Angels_of_Anaheim.svg/100px-Los_Angeles_Angels_of_Anaheim.svg.png" },
        { name: "Oakland Athletics", abbr: "OAK", city: "Oakland", league: "AL", division: "West", colors: ["#003831", "#EFB21E"], logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Oakland_A%27s_logo.svg/100px-Oakland_A%27s_logo.svg.png" },
        { name: "Seattle Mariners", abbr: "SEA", city: "Seattle", league: "AL", division: "West", colors: ["#0C2C56", "#005C5C"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Seattle_Mariners_logo_%28low_res%29.svg/100px-Seattle_Mariners_logo_%28low_res%29.svg.png" },
        { name: "Texas Rangers", abbr: "TEX", city: "Texas", league: "AL", division: "West", colors: ["#003278", "#C0111F"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Texas_Rangers.svg/100px-Texas_Rangers.svg.png" },
        // NL East
        { name: "Atlanta Braves", abbr: "ATL", city: "Atlanta", league: "NL", division: "East", colors: ["#CE1141", "#13274F"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Atlanta_Braves.svg/100px-Atlanta_Braves.svg.png" },
        { name: "Miami Marlins", abbr: "MIA", city: "Miami", league: "NL", division: "East", colors: ["#00A3E0", "#EF3340"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Marlins_team_logo.svg/100px-Marlins_team_logo.svg.png" },
        { name: "New York Mets", abbr: "NYM", city: "New York", league: "NL", division: "East", colors: ["#002D72", "#FF5910"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/100px-New_York_Mets.svg.png" },
        { name: "Philadelphia Phillies", abbr: "PHI", city: "Philadelphia", league: "NL", division: "East", colors: ["#E81828", "#002D72"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/Philadelphia_Phillies_%282019%29_logo.svg/100px-Philadelphia_Phillies_%282019%29_logo.svg.png" },
        { name: "Washington Nationals", abbr: "WSH", city: "Washington", league: "NL", division: "East", colors: ["#AB0003", "#14225A"], logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Washington_Nationals_logo.svg/100px-Washington_Nationals_logo.svg.png" },
        // NL Central
        { name: "Chicago Cubs", abbr: "CHC", city: "Chicago", league: "NL", division: "Central", colors: ["#0E3386", "#CC3433"], logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Chicago_Cubs_logo.svg/100px-Chicago_Cubs_logo.svg.png" },
        { name: "Cincinnati Reds", abbr: "CIN", city: "Cincinnati", league: "NL", division: "Central", colors: ["#C6011F", "#000000"], logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Cincinnati_Reds_Logo.svg/100px-Cincinnati_Reds_Logo.svg.png" },
        { name: "Milwaukee Brewers", abbr: "MIL", city: "Milwaukee", league: "NL", division: "Central", colors: ["#FFC52F", "#12284B"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Milwaukee_Brewers_logo.svg/100px-Milwaukee_Brewers_logo.svg.png" },
        { name: "Pittsburgh Pirates", abbr: "PIT", city: "Pittsburgh", league: "NL", division: "Central", colors: ["#27251F", "#FDB827"], logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Pittsburgh_Pirates_logo_2014.svg/100px-Pittsburgh_Pirates_logo_2014.svg.png" },
        { name: "St. Louis Cardinals", abbr: "STL", city: "St. Louis", league: "NL", division: "Central", colors: ["#C41E3A", "#0C2340"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/St._Louis_Cardinals_logo.svg/100px-St._Louis_Cardinals_logo.svg.png" },
        // NL West
        { name: "Arizona Diamondbacks", abbr: "AZ", city: "Arizona", league: "NL", division: "West", colors: ["#A71930", "#E3D4AD"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Arizona_Diamondbacks_logo.svg/100px-Arizona_Diamondbacks_logo.svg.png" },
        { name: "Colorado Rockies", abbr: "COL", city: "Colorado", league: "NL", division: "West", colors: ["#33006F", "#C4CED4"], logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Colorado_Rockies_logo.svg/100px-Colorado_Rockies_logo.svg.png" },
        { name: "Los Angeles Dodgers", abbr: "LAD", city: "Los Angeles", league: "NL", division: "West", colors: ["#005A9C", "#EF3E42"], logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Los_Angeles_Dodgers_Logo.svg/100px-Los_Angeles_Dodgers_Logo.svg.png" },
        { name: "San Diego Padres", abbr: "SD", city: "San Diego", league: "NL", division: "West", colors: ["#2F241D", "#FFC425"], logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/San_Diego_Padres_logo.svg/100px-San_Diego_Padres_logo.svg.png" },
        { name: "San Francisco Giants", abbr: "SF", city: "San Francisco", league: "NL", division: "West", colors: ["#FD5A1E", "#27251F"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/San_Francisco_Giants_Logo.svg/100px-San_Francisco_Giants_Logo.svg.png" },
    ],

    basketball: [
        // Atlantic
        { name: "Boston Celtics", abbr: "BOS", city: "Boston", conference: "Eastern", division: "Atlantic", colors: ["#007A33", "#BA9653"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/100px-Boston_Celtics.svg.png" },
        { name: "Brooklyn Nets", abbr: "BKN", city: "Brooklyn", conference: "Eastern", division: "Atlantic", colors: ["#000000", "#FFFFFF"], logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Brooklyn_Nets_newlogo.svg/100px-Brooklyn_Nets_newlogo.svg.png" },
        { name: "New York Knicks", abbr: "NYK", city: "New York", conference: "Eastern", division: "Atlantic", colors: ["#006BB6", "#F58426"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/100px-New_York_Knicks_logo.svg.png" },
        { name: "Philadelphia 76ers", abbr: "PHI", city: "Philadelphia", conference: "Eastern", division: "Atlantic", colors: ["#006BB6", "#ED174C"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Philadelphia_76ers_logo.svg/100px-Philadelphia_76ers_logo.svg.png" },
        { name: "Toronto Raptors", abbr: "TOR", city: "Toronto", conference: "Eastern", division: "Atlantic", colors: ["#CE1141", "#000000"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Toronto_Raptors_logo.svg/100px-Toronto_Raptors_logo.svg.png" },
        // Central
        { name: "Chicago Bulls", abbr: "CHI", city: "Chicago", conference: "Eastern", division: "Central", colors: ["#CE1141", "#000000"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Chicago_Bulls_logo.svg/100px-Chicago_Bulls_logo.svg.png" },
        { name: "Cleveland Cavaliers", abbr: "CLE", city: "Cleveland", conference: "Eastern", division: "Central", colors: ["#860038", "#FDBB30"], logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Cleveland_Cavaliers_logo.svg/100px-Cleveland_Cavaliers_logo.svg.png" },
        { name: "Detroit Pistons", abbr: "DET", city: "Detroit", conference: "Eastern", division: "Central", colors: ["#C8102E", "#1D42BA"], logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Pistons_logo17.svg/100px-Pistons_logo17.svg.png" },
        { name: "Indiana Pacers", abbr: "IND", city: "Indiana", conference: "Eastern", division: "Central", colors: ["#002D62", "#FDBB30"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Indiana_Pacers.svg/100px-Indiana_Pacers.svg.png" },
        { name: "Milwaukee Bucks", abbr: "MIL", city: "Milwaukee", conference: "Eastern", division: "Central", colors: ["#00471B", "#EEE1C6"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Milwaukee_Bucks_logo.svg/100px-Milwaukee_Bucks_logo.svg.png" },
        // Southeast
        { name: "Atlanta Hawks", abbr: "ATL", city: "Atlanta", conference: "Eastern", division: "Southeast", colors: ["#E03A3E", "#C1D32F"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Atlanta_Hawks_logo.svg/100px-Atlanta_Hawks_logo.svg.png" },
        { name: "Charlotte Hornets", abbr: "CHA", city: "Charlotte", conference: "Eastern", division: "Southeast", colors: ["#1D1160", "#00788C"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Charlotte_Hornets_%282014%29.svg/100px-Charlotte_Hornets_%282014%29.svg.png" },
        { name: "Miami Heat", abbr: "MIA", city: "Miami", conference: "Eastern", division: "Southeast", colors: ["#98002E", "#F9A01B"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Miami_Heat_logo.svg/100px-Miami_Heat_logo.svg.png" },
        { name: "Orlando Magic", abbr: "ORL", city: "Orlando", conference: "Eastern", division: "Southeast", colors: ["#0077C0", "#C4CED4"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Orlando_Magic_logo.svg/100px-Orlando_Magic_logo.svg.png" },
        { name: "Washington Wizards", abbr: "WAS", city: "Washington", conference: "Eastern", division: "Southeast", colors: ["#002B5C", "#E31837"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Washington_Wizards_logo.svg/100px-Washington_Wizards_logo.svg.png" },
        // Northwest
        { name: "Denver Nuggets", abbr: "DEN", city: "Denver", conference: "Western", division: "Northwest", colors: ["#0E2240", "#FEC524"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Denver_Nuggets.svg/100px-Denver_Nuggets.svg.png" },
        { name: "Minnesota Timberwolves", abbr: "MIN", city: "Minnesota", conference: "Western", division: "Northwest", colors: ["#0C2340", "#236192"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Minnesota_Timberwolves_logo.svg/100px-Minnesota_Timberwolves_logo.svg.png" },
        { name: "Oklahoma City Thunder", abbr: "OKC", city: "Oklahoma City", conference: "Western", division: "Northwest", colors: ["#007AC1", "#EF6100"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Oklahoma_City_Thunder.svg/100px-Oklahoma_City_Thunder.svg.png" },
        { name: "Portland Trail Blazers", abbr: "POR", city: "Portland", conference: "Western", division: "Northwest", colors: ["#E03A3E", "#000000"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Portland_Trail_Blazers_logo.svg/100px-Portland_Trail_Blazers_logo.svg.png" },
        { name: "Utah Jazz", abbr: "UTA", city: "Utah", conference: "Western", division: "Northwest", colors: ["#002B5C", "#00471B"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Utah_Jazz_logo_2022.svg/100px-Utah_Jazz_logo_2022.svg.png" },
        // Pacific
        { name: "Golden State Warriors", abbr: "GSW", city: "Golden State", conference: "Western", division: "Pacific", colors: ["#1D428A", "#FFC72C"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/100px-Golden_State_Warriors_logo.svg.png" },
        { name: "Los Angeles Clippers", abbr: "LAC", city: "Los Angeles", conference: "Western", division: "Pacific", colors: ["#C8102E", "#1D428A"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Los_Angeles_Clippers_%282024%29.svg/100px-Los_Angeles_Clippers_%282024%29.svg.png" },
        { name: "Los Angeles Lakers", abbr: "LAL", city: "Los Angeles", conference: "Western", division: "Pacific", colors: ["#552583", "#FDB927"], logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/100px-Los_Angeles_Lakers_logo.svg.png" },
        { name: "Phoenix Suns", abbr: "PHX", city: "Phoenix", conference: "Western", division: "Pacific", colors: ["#1D1160", "#E56020"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Phoenix_Suns_logo.svg/100px-Phoenix_Suns_logo.svg.png" },
        { name: "Sacramento Kings", abbr: "SAC", city: "Sacramento", conference: "Western", division: "Pacific", colors: ["#5A2D81", "#63727A"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/SaijcramentoKings.svg/100px-SaijcramentoKings.svg.png" },
        // Southwest
        { name: "Dallas Mavericks", abbr: "DAL", city: "Dallas", conference: "Western", division: "Southwest", colors: ["#00538C", "#002B5E"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Dallas_Mavericks_logo.svg/100px-Dallas_Mavericks_logo.svg.png" },
        { name: "Houston Rockets", abbr: "HOU", city: "Houston", conference: "Western", division: "Southwest", colors: ["#CE1141", "#000000"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Houston_Rockets.svg/100px-Houston_Rockets.svg.png" },
        { name: "Memphis Grizzlies", abbr: "MEM", city: "Memphis", conference: "Western", division: "Southwest", colors: ["#5D76A9", "#12173F"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Memphis_Grizzlies.svg/100px-Memphis_Grizzlies.svg.png" },
        { name: "New Orleans Pelicans", abbr: "NOP", city: "New Orleans", conference: "Western", division: "Southwest", colors: ["#0C2340", "#C8102E"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/New_Orleans_Pelicans_logo.svg/100px-New_Orleans_Pelicans_logo.svg.png" },
        { name: "San Antonio Spurs", abbr: "SAS", city: "San Antonio", conference: "Western", division: "Southwest", colors: ["#C4CED4", "#000000"], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/100px-San_Antonio_Spurs.svg.png" },
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

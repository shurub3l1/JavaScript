const _0x190839 = function () {
  let _0x1dafab = true;
  return function (_0x4458ed, _0x5169f7) {
    const _0xba366d = _0x1dafab ? function () {
      if (_0x5169f7) {
        const _0x2bc341 = _0x5169f7.apply(_0x4458ed, arguments);
        _0x5169f7 = null;
        return _0x2bc341;
      }
    } : function () {};
    _0x1dafab = false;
    return _0xba366d;
  };
}();
const _0x12e296 = _0x190839(this, function () {
  return _0x12e296.toString().search("(((.+)+)+)+$").toString().constructor(_0x12e296).search("(((.+)+)+)+$");
});
_0x12e296();
let changeLog = {
  '1.0': {
    'description': "Commands Overview.",
    'date': undefined
  },
  '2.0': {
    'description': "Auto Commands Sender.",
    'date': undefined
  },
  '2.0.1': {
    'description': "Update troop count after applying template.",
    'date': "28/06/2022"
  },
  '2.0.2': {
    'description': "Modified same of selected templates.",
    'date': "28/06/2022"
  },
  '2.0.3': {
    'description': "Show version.",
    'date': "28/06/2022"
  },
  '2.0.4': {
    'description': "Worlds restrictions for coops and multis.",
    'date': "28/06/2022"
  },
  '2.1.0': {
    'description': "Set and Read MS from plan.",
    'date': "19/07/2022"
  },
  '2.1.1': {
    'description': "New noble templates for non watchtower worlds",
    'date': "08/08/2022"
  },
  '2.1.2': {
    'description': "New noble templates for non watchtower worlds",
    'date': "01/10/2022"
  },
  '2.1.3': {
    'description': "Allow float numbers on random launch time offset.",
    'date': "01/10/2022"
  },
  '2.2.0': {
    'description': "Name of the added plan is the name of the template.",
    'date': "01/10/2022"
  },
  '2.3.0': {
    'description': "Show plan on the map.",
    'date': "26/01/2023"
  },
  '2.3.1': {
    'description': "Also show source villages on map.",
    'date': "18/03/2023"
  },
  '2.3.2': {
    'description': "Improved performance on sorting.",
    'date': "20/03/2023"
  },
  '2.3.3': {
    'description': "Show duplicate times.",
    'date': "20/03/2023"
  },
  '2.3.4': {
    'description': "Map options menu.",
    'date': "22/03/2023"
  },
  '2.3.5': {
    'description': "Allow catapult target.",
    'date': "26/03/2023"
  },
  '2.3.6': {
    'description': "Fixed 5 nobles templates.",
    'date': "01/04/2023"
  },
  '2.3.7': {
    'description': "5 commands same of selected template.",
    'date': "01/04/2023"
  },
  '2.3.8': {
    'description': "Close tab from 10 to 2 seconds.",
    'date': "05/05/2023"
  },
  '2.4.0': {
    'description': "Improved background performance",
    'date': "17/05/2023"
  },
  '2.4.1': {
    'description': "Bug fix for cats in one nt template",
    'date': "04/06/2023"
  },
  '2.4.2': {
    'description': "Bug fix on timings I hope",
    'date': "11/06/2023"
  },
  '2.4.3': {
    'description': "Sitter without permission can now use script on accounts that have permission.",
    'date': "19/06/2023"
  },
  '2.4.4': {
    'description': "Fix for auto send nobles.",
    'date': "24/06/2023"
  },
  '2.4.5': {
    'description': "Fix for non paladin worlds.",
    'date': "09/07/2023"
  },
  '2.4.6': {
    'description': "Fix for 5 noble nt templates.",
    'date': "09/07/2023"
  },
  '2.5.0': {
    'description': "Automatic timing offset calculation.",
    'date': "16/07/2023"
  },
  '2.6.0': {
    'description': "New way of verifying account.",
    'date': "21/07/2023"
  },
  '2.6.1': {
    'description': "New 5 nobles selected/rest template.",
    'date': "12/08/2023"
  },
  '2.6.2': {
    'description': "Leave spies at home.",
    'date': "19/08/2023"
  },
  '2.6.3': {
    'description': "Fix in last update.",
    'date': "22/08/2023"
  },
  '2.6.4': {
    'description': "Fix in coordinates with less than 3 digits.",
    'date': "22/09/2023"
  }
};
let version = Object.keys(changeLog).pop();
let randomLaunchTimeOffset = 0;
let autoSendNobles = true;
let autoTimingOffset = true;
let readMSFromPlan = false;
let autoFillNt = true;
let autoSendInTime = true;
let ntTemplates = {
  'splitSecondThirdNobleNT': {
    'name': "Split in 2nd&3rd Noble NT",
    'id': "NT_2ND&3RD_NOBLE_BUFF",
    'fillFunction': "fill2nd3rdNoblesNT",
    'noblesQnt': 0x4,
    'brownNoble': true,
    'onlyNobles': true,
    'selected': false
  },
  'secondNobleBuffNT': {
    'name': "2nd Noble Buff NT",
    'id': "NT_2ND_NOBLE_BUFF",
    'fillFunction': "fill2ndNobleBuffNT",
    'noblesQnt': 0x4,
    'brownNoble': true,
    'onlyNobles': true,
    'selected': false
  },
  'thirdNobleBuffNT': {
    'name': "3rd Noble Buff NT",
    'id': "NT_3RD_NOBLE_BUFF",
    'fillFunction': "fill3rdNobleBuffNT",
    'noblesQnt': 0x4,
    'brownNoble': true,
    'onlyNobles': true,
    'selected': false
  },
  'secondNobleBuffWith5NoblesNT': {
    'name': "2nd Noble Buff With 5 Nobles NT",
    'id': "NT_2ND_NOBLE_BUFF_WITH_5_NOBLES",
    'fillFunction': "fill2ndNobleBuffWith5NoblesNT",
    'noblesQnt': 0x5,
    'brownNoble': true,
    'onlyNobles': true,
    'selected': false
  },
  'secondNobleBuffWith2NoblesNT': {
    'name': "2nd Noble Buff With 2 Nobles NT",
    'id': "NT_2ND_NOBLE_BUFF_WITH_2_NOBLES",
    'fillFunction': "fill2ndNobleBuffWith2NoblesNT",
    'noblesQnt': 0x2,
    'brownNoble': true,
    'onlyNobles': true,
    'selected': false
  },
  'secondNobleWithRest': {
    'name': "2 Nobles Selected/Rest",
    'id': "2NoblesSelectedRest",
    'fillFunction': "fill2NobleSelectedRest",
    'noblesQnt': 0x2,
    'brownNoble': false,
    'onlyNobles': true,
    'selected': false
  },
  'thirdNobleWithRest': {
    'name': "3 Nobles Selected/Rest",
    'id': "3NoblesSelectedRest",
    'fillFunction': "fill3NobleSelectedRest",
    'noblesQnt': 0x3,
    'brownNoble': false,
    'onlyNobles': true,
    'selected': false
  },
  'fourNobleWithRest': {
    'name': "4 Nobles Selected/Rest",
    'id': "4NoblesSelectedRest",
    'fillFunction': "fill4NobleSelectedRest",
    'noblesQnt': 0x4,
    'brownNoble': false,
    'onlyNobles': true,
    'selected': false
  },
  'fiveNobleWithRest': {
    'name': "5 Nobles Selected/Rest",
    'id': "5NoblesSelectedRest",
    'fillFunction': "fill5NobleSelectedRest",
    'noblesQnt': 0x5,
    'brownNoble': false,
    'onlyNobles': true,
    'selected': false
  },
  'twoNoblesSame': {
    'name': "2 Commands Same of Selected",
    'id': "2CommandsSame",
    'fillFunction': "fill2NoblesSame",
    'noblesQnt': 0x2,
    'brownNoble': false,
    'onlyNobles': false,
    'selected': false
  },
  'threeNoblesSame': {
    'name': "3 Commands Same of Selected",
    'id': "3CommandsSame",
    'fillFunction': "fill3NoblesSame",
    'noblesQnt': 0x3,
    'brownNoble': false,
    'onlyNobles': false,
    'selected': false
  },
  'fourNoblesSame': {
    'name': "4 Commands Same of Selected",
    'id': "4CommandsSame",
    'fillFunction': "fill4NoblesSame",
    'noblesQnt': 0x4,
    'brownNoble': false,
    'onlyNobles': false,
    'selected': false
  },
  'fiveNoblesSame': {
    'name': "5 Commands Same of Selected",
    'id': "5CommandsSame",
    'fillFunction': "fill5NoblesSame",
    'noblesQnt': 0x5,
    'brownNoble': false,
    'onlyNobles': false,
    'selected': false
  },
  'firstNobleRedNT': {
    'name': "1st Noble Red NT",
    'id': "NT_1ST_NOBLE_RED",
    'fillFunction': "fill1stNobleRedNT",
    'noblesQnt': 0x4,
    'brownNoble': false,
    'onlyNobles': true,
    'selected': true
  },
  'secondNobleRedNT': {
    'name': "2nd Noble Red NT",
    'id': "NT_2ND_NOBLE_RED",
    'fillFunction': "fill2ndNobleRedNT",
    'noblesQnt': 0x4,
    'brownNoble': false,
    'onlyNobles': true,
    'selected': false
  },
  'thirdNobleRedNT': {
    'name': "3rd Noble Red NT",
    'id': "NT_3RD_NOBLE_RED",
    'fillFunction': "fill3rdNobleRedNT",
    'noblesQnt': 0x4,
    'brownNoble': false,
    'onlyNobles': true,
    'selected': false
  },
  'fourthNobleRedNT': {
    'name': "4th Noble Red NT",
    'id': "NT_4TH_NOBLE_RED",
    'fillFunction': "fill4thNobleRedNT",
    'noblesQnt': 0x4,
    'brownNoble': false,
    'onlyNobles': true,
    'selected': false
  },
  'firstNobleRed5NT': {
    'name': "1st Noble Red 5NT",
    'id': "NT_1ST_5NOBLE_RED",
    'fillFunction': "fill1stNobleRedNT",
    'noblesQnt': 0x5,
    'brownNoble': false,
    'onlyNobles': true,
    'selected': false
  },
  'secondNobleRed5NT': {
    'name': "2nd Noble Red 5NT",
    'id': "NT_2ND_5NOBLE_RED",
    'fillFunction': "fill2ndNobleRed5NT",
    'noblesQnt': 0x5,
    'brownNoble': false,
    'onlyNobles': true,
    'selected': false
  },
  'thirdNobleRed5NT': {
    'name': "3rd Noble Red 5NT",
    'id': "NT_3RD_5NOBLE_RED",
    'fillFunction': "fill3rdNobleRed5NT",
    'noblesQnt': 0x5,
    'brownNoble': false,
    'onlyNobles': true,
    'selected': false
  },
  'noNT': {
    'name': "no NT",
    'id': "NO_NT",
    'fillFunction': "noNT",
    'noblesQnt': 0x1,
    'brownNoble': false,
    'selected': false
  }
};
const currentWorldUrl = window.location.hostname;
const troops_data = {
  'spear': 0x438,
  'sword': 0x528,
  'axe': 0x438,
  'archer': 0x438,
  'spy': 0x21c,
  'light': 0x258,
  'marcher': 0x258,
  'heavy': 0x294,
  'ram': 0x708,
  'catapult': 0x708,
  'knight': 0x258,
  'snob': 0x834
};
const default_Attack_Template = {
  'id': "default_attack",
  'name': "default_attack",
  'units': {
    'spear': 0x0,
    'sword': 0x0,
    'axe': -1,
    'archer': 0x0,
    'spy': -1,
    'light': -1,
    'marcher': -1,
    'heavy': -1,
    'ram': -1,
    'catapult': -1,
    'knight': -1,
    'snob': 0x0
  }
};
const default_Support_Template = {
  'id': "default_support",
  'name': "default_support",
  'units': {
    'spear': -1,
    'sword': -1,
    'axe': 0x0,
    'archer': -1,
    'spy': -1,
    'light': 0x0,
    'marcher': 0x0,
    'heavy': -1,
    'ram': 0x0,
    'catapult': 0x0,
    'knight': 0x0,
    'snob': 0x0
  }
};
const default_All_Template = {
  'id': "default_all",
  'name': "default_all",
  'units': {
    'spear': -1,
    'sword': -1,
    'axe': -1,
    'archer': -1,
    'spy': -1,
    'light': -1,
    'marcher': -1,
    'heavy': -1,
    'ram': -1,
    'catapult': -1,
    'knight': -1,
    'snob': -1
  }
};
let commandsPerPage = 10;
let currentPage = 1;
let sitter = '';
let overviewVarsName;
let templatesData = {};
let revertCommands = [];
let worldSettings = {};
let sortedCommandsArray = [];
let loaderArray = [];
let loadTime;
let subscriptionCalledTimes = 0;
let serverDateDiff;
let snipeScriptStorageId;
const overviewVars = {};
const commands = {};
const settings = {};
let villageData = {};
const unitsData = {};
let gameData;
let usersInfo = {
  'snipeScript': {
    'sendButton': "troop_confirm_submit"
  }
};
let counter = 0;
let allowed = false;
let workerScript;
let worker;
let fakeIdToCallback = {};
let lastFakeId = 0;
const decipher = _0x2f023b => {
  const _0x1fe916 = _0x298d20 => _0x298d20.split('').map(_0x576577 => _0x576577.charCodeAt(0));
  const _0x21c785 = _0x7893a => _0x1fe916(_0x2f023b).reduce((_0x320983, _0x3ba7e7) => _0x320983 ^ _0x3ba7e7, _0x7893a);
  return _0x460e5a => _0x460e5a.match(/.{1,2}/g).map(_0x5404cb => parseInt(_0x5404cb, 16)).map(_0x21c785).map(_0x5b1e73 => String.fromCharCode(_0x5b1e73)).join('');
};
const myDecipher = decipher("#autoCommandsSenderXD#KEKHELPME");
start();
function start() {
  if (!window.as) {
    printError("Nope :), you cannot use this bot without dropbox link. And why would you want to do that? You get bug fixes and updates...");
    allowed = false;
  }
  showConsoleLogAuthorStats();
  sitterSetup();
  calculateTimezoneDifference();
  initWorkerScript();
  if (game_data.screen === "memo") {
    runOverviews();
  } else {
    if (game_data.screen === "place") {
      runAttack();
    } else {
      if (game_data.screen === "map") {
        runMap();
      } else {
        printError("Please run this script in Notebook or rally point");
        window.location.href = window.location.pathname + ('?' + (sitter ? sitter + '&' : '') + "screen=memo");
      }
    }
  }
}
function calculateTimezoneDifference() {
  let _0xde4ea5 = $("#serverDate")[0].innerText + " " + $("#serverTime")[0].innerText;
  let _0x4fc917 = _0xde4ea5.match(/^([0][1-9]|[12][0-9]|3[01])[/-]([0][1-9]|1[012])[/-](\d{4})( (0?[0-9]|[1][0-9]|[2][0-3])[:]([0-5][0-9])([:]([0-5][0-9]))?)?$/);
  serverDateDiff = new Date(new Date().setMilliseconds(0)).setSeconds(0) - new Date(new Date(_0x4fc917[2] + '/' + _0x4fc917[1] + '/' + _0x4fc917[3] + _0x4fc917[4]).setMilliseconds(0)).setSeconds(0);
}
async function runMap() {
  await asyncGetGameData();
  await asyncIdsFile();
  load();
  initMap();
}
async function runAttack() {
  await asyncGetGameData();
  await asyncIdsFile();
  load();
  setupAttack();
}
async function runOverviews() {
  memoSetup();
  startLoader();
  await asyncCalls();
  loadResource(load, "Loading stored data.", true);
  loadResource(setCssClasses, "Setting up css classes.", true);
  loadResource(beautifyTWBorders, "Beautifying borders.", true);
  loadResource(grabVillagesData, "Grabbing villages data.", true);
  loadResource(verifyUserIdentity, "Verifying User identity.", true);
  loadResource(startUI, "Starting UI.", true);
  pop_up_initializer();
  createHelpPopup();
  endLoader();
  initBot();
}
function sitterSetup() {
  let _0x4cfa1f = window.location.search.match(/t=\d+/g);
  if (_0x4cfa1f) {
    sitter = _0x4cfa1f;
  }
}
async function asyncCalls() {
  await loadResource(asyncGetGameData, "Downloading game data.", false);
  await loadResource(asyncWorldSettings, "Downloading world settings.", false);
  await loadResource(asyncGetUnitsData, "Downloading units data.", false);
  await loadResource(asyncTroopTemplates, "Downloading troop template.", false);
  await loadResource(asyncIdsFile, "Fetching user identity.", false);
}
async function asyncGetGameData() {
  gameData = await $.getJSON(document.location.href.replace(/action=\w*/, '').replace(/#.*$/, '') + "&_partial");
  gameData = gameData.game_data;
  overviewVarsName = "overviewVars_ID_" + gameData.player.id + currentWorldUrl.split('.')[0];
  snipeScriptStorageId = "snipeScheduleCommandsGlobalData_ID_" + gameData.player.id + currentWorldUrl.split('.')[0];
}
async function asyncIdsFile() {}
async function asyncWorldSettings() {
  worldSettings.config = await initWorldSettings();
}
async function asyncGetUnitsData() {
  objectReasign(unitsData, await getUnitsData());
}
async function asyncTroopTemplates() {
  templatesData = await initTroopsTemplates();
}
function setCssClasses() {
  $("#contentContainer").eq(0).prepend("<style>\n        .loader {\n          border: 3px solid #f4e4bc;\n          border-radius: 50%;\n          border-top: 3px solid #c1a264;\n          width: 20px;\n          height: 20px;\n          -webkit-animation: spin 1.2s linear infinite; /* Safari */\n          animation: spin 1.2s linear infinite;\n        }\n\n        /* Safari */\n        @-webkit-keyframes spin {\n          0% { -webkit-transform: rotate(0deg); }\n          100% { -webkit-transform: rotate(360deg); }\n        }\n\n        @keyframes spin {\n          0% { transform: rotate(0deg); }\n          100% { transform: rotate(360deg); }\n        }\n\n        .selectBox {\n            position: relative;\n        }\n\n        .selectBox select {\n            width: 100%;\n            font-weight: bold;\n        }\n\n        .overSelect {\n            position: absolute;\n            left: 0;\n            right: 0;\n            top: 0;\n            bottom: 0;\n            z-index: 10001;\n        }\n\n        .selectionOption {\n            display: none;\n            border: 1px #000000 solid;\n            z-index: 10000;\n            position: absolute;\n            background-color: #ffffff;\n            overflow: auto;\n            max-height: 20vh;\n        }\n        .selectionOption td {\n            background-color: #ffffff;\n            z-index: 10000;\n        }\n        .selectionOption tr:hover td{\n            background-color: #0099ff;\n        }\n        #checkboxFader {\n            position: fixed;\n            width: 100%;\n            height: 100%;\n            top: 0px;\n            left: 0px;\n            z-index: 9000;\n        }\n        .main {\n            overflow:visible!important;\n        }\n        .noPermission\n        {\n            pointer-events: none;\n            opacity: 0.5;\n            background: #CCC;\n        }\n        .rainbow-text2 {\n            background-image: repeating-linear-gradient(90deg, #f53803, #f5d020);\n            background-size: 100% 100%;\n            -webkit-background-clip: text;\n            -webkit-text-fill-color: transparent;\n            font-size: 24px;\n            animation: 2s ease infinite;\n        }\n    </style>");
  $("#mobileHeader").eq(0).prepend("<style>\n        .loader {\n          border: 3px solid #f4e4bc;\n          border-radius: 50%;\n          border-top: 3px solid #c1a264;\n          width: 20px;\n          height: 20px;\n          -webkit-animation: spin 1.2s linear infinite; /* Safari */\n          animation: spin 1.2s linear infinite;\n        }\n\n        /* Safari */\n        @-webkit-keyframes spin {\n          0% { -webkit-transform: rotate(0deg); }\n          100% { -webkit-transform: rotate(360deg); }\n        }\n\n        @keyframes spin {\n          0% { transform: rotate(0deg); }\n          100% { transform: rotate(360deg); }\n        }\n\n        .selectBox {\n            position: relative;\n        }\n\n        .selectBox select {\n            width: 100%;\n            font-weight: bold;\n        }\n\n        .overSelect {\n            position: absolute;\n            left: 0;\n            right: 0;\n            top: 0;\n            bottom: 0;\n            z-index: 10001;\n        }\n\n        .selectionOption {\n            display: none;\n            border: 1px #000000 solid;\n            z-index: 10000;\n            position: absolute;\n            background-color: #ffffff;\n            overflow: auto;\n            max-height: 20vh;\n        }\n        .selectionOption td {\n            background-color: #ffffff;\n            z-index: 10000;\n        }\n        .selectionOption tr:hover td{\n            background-color: #0099ff;\n        }\n        #checkboxFader {\n            position: fixed;\n            width: 100%;\n            height: 100%;\n            top: 0px;\n            left: 0px;\n            z-index: 9000;\n        }\n        .main {\n            overflow:visible!important;\n        }\n        .noPermission\n        {\n            pointer-events: none;\n            opacity: 0.5;\n            background: #CCC;\n        }\n        .rainbow-text2 {\n            background-image: repeating-linear-gradient(90deg, #f53803, #f5d020);\n            background-size: 100% 100%;\n            -webkit-background-clip: text;\n            -webkit-text-fill-color: transparent;\n            font-size: 24px;\n            animation: 2s ease infinite;\n        }\n    </style>");
}
function startUI() {
  let _0x36b4f5 = "<div id=\"commandSenderDiv\" class=\"memo_script\" style=\"clear: both; display: none\">\n        <br>\n        <div id=\"autoSenderAds\">\n            <div id=\"Manual_Sender_Menu\">\n                <div class=\"forum-content\" style=\"padding: 0;\">\n                    <table class=\"vis nowrap\" style=\"width: 100%;\">\n                        <thead>\n                            <tr>\n                                <th><span class=\"column-title\" style=\"font-size:16px;display: flex;justify-content: center;align-items: center;\">📜 Announcements 📜</span></th>\n                            </tr>\n                        </thead>\n                    </table>\n                </div>\n            </div>\n        </div>\n        <br>\n        <div style=\"display: grid;grid-template-columns: 4fr 4fr;grid-gap: 10px;\">\n            <div id=\"Manual_Sender_Menu\" style=\"min-width: 330px\">\n                <div class=\"forum-content\" style=\"padding: 0;\">\n                    <table class=\"vis nowrap\" style=\"width: 100%;\">\n                        <thead>\n                            <tr>\n                                <th colspan=\"3\"><span class=\"column-title\" style=\"font-size:16px\">📚 Auto Sender menu 📚 <span style=\"font-size: 10px; color: DarkSlateGrey;\">v" + version + "</span></span></th>\n                            </tr>\n                            <tr>\n                                <th style=\"text-align: center;\">🛡️ Info 🛡️</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td style=\"padding-left: 1em;\">\n                                    <a style=\"float: left\">🛡️</a>\n                                    <a id=\"menuCommandsPlannedCounter\"  style=\"display: flex;justify-content: center;align-items: center;color:#ff0000\"></a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style=\"padding-left: 1em;\">\n                                    <a style=\"float: left\">🛡️</a>\n                                    <a id=\"menuNextCommandInfo\" style=\"display: flex;justify-content: center;align-items: center;color:green\" class=\"overviewsTimer\"></a>\n                                </td>\n                            </tr>\n                            <tr id=\"popupsAllowedTr\">\n                                <td style=\"padding-left: 1em;\">\n                                    <a style=\"float: left\">🛡️</a>\n                                    <a id=\"popupsAllowed\" style=\"display: flex;justify-content: center;align-items: center;color:#ff0000;\">Popups are blocked! Click here to activate.</a>\n                                </td>\n                            </tr>\n                        </tbody>\n                        <thead id=\"settingsHeader\" style=\"cursor:pointer;\">\n                            <tr>\n                                <th style=\"text-align: center;\">⚙️ Global Settings ⚙️</th>\n                            </tr>\n                        </thead>\n                        <tbody id=\"settingsBody\">\n                            <tr style=\"display: none\" id=\"botSettingsNoPermissionDiv1\">\n                                <td style=\"text-align: center;vertical-align: middle;font-size: 14px\">\n                                    <span style=\"color: darkblue\">This is not available! </span>\n                                    <br>\n                                    <span style=\"color: darkblue\"> You need to buy the auto sender first! </span>\n                                </td>\n                            </tr>\n\t\t\t\t\t\t\t<tr>\n                                <td style=\"padding-left: 1em;display: flex;justify-content: center;\">\n                                    <a style=\"margin-right: auto;margin-left: 0;\">⚙️</a>\n\t\t\t\t\t\t\t\t\t<a style=\"padding-left: 5px; display: block;justify-content: center;color: black\">Auto Timing Offset:</a>\n                                    <input type=\"checkbox\" id=\"autoTimingOffset\" " + (settings.autoTimingOffset !== undefined ? settings.autoTimingOffset ? "checked" : '' : "checked") + ">\n                                    <a style=\"margin-left: auto;margin-right: 0;\">⚙️</a>\n                                </td>\n                            </tr>\n\t\t\t\t\t\t\t<tr>\n                                <td style=\"padding-left: 1em;display: flex;justify-content: center;\">\n                                    <a style=\"margin-right: auto;margin-left: 0;\">⚙️</a>\n                                    <a style=\"display: block;justify-content: center;color: black\">Timing Offset Multiplier:</a>\n                                    <input id=\"autoTimingOffsetMultiplier\" type=\"text\" style=\"width: 50px;margin-left: 7px\" value=\"" + (settings.autoTimingOffsetMultiplier !== undefined ? settings.autoTimingOffsetMultiplier : 0.25) + "\">\n                                    <a style=\"margin-left: auto;margin-right: 0;\">⚙️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style=\"padding-left: 1em;display: flex;justify-content: center;\">\n                                    <a style=\"margin-right: auto;margin-left: 0;\">⚙️</a>\n                                    <a style=\"display: block;justify-content: center;color: black\">Timing Offset:</a>\n                                    <input id=\"timing_offset\" type=\"text\" style=\"width: 50px;margin-left: 7px\" value=\"" + (settings.timing_offset !== undefined ? settings.timing_offset : 0) + "\">\n                                    <a style=\"margin-left: auto;margin-right: 0;\">⚙️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style=\"padding-left: 1em;display: flex;justify-content: center;\">\n                                    <a style=\"margin-right: auto;margin-left: 0;\">⚙️</a>\n                                    <a style=\"display: block;justify-content: center;color: black\">Open new tab delay (sec):</a>\n                                    <input id=\"openTabDelay\" type=\"text\" style=\"width: 50px;margin-left: 7px\" value=\"" + (settings.openTabDelay !== undefined ? settings.openTabDelay : 60) + "\">\n                                    <a style=\"margin-left: auto;margin-right: 0;\">⚙️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style=\"padding-left: 1em;display: flex;justify-content: center;\">\n                                    <a style=\"margin-right: auto;margin-left: 0;\">⚙️</a>\n                                    <a style=\"display: block;justify-content: center;color: black\">Auto Send Nobles:</a>\n                                    <input type=\"checkbox\" id=\"autoSendNobles\" " + (settings.autoSendNobles !== undefined ? settings.autoSendNobles ? "checked" : '' : "checked") + ">\n                                    <a style=\"margin-left: auto;margin-right: 0;\">⚙️</a>\n                                </td>\n                            </tr>\n                            <tr style=\"display: none\">\n                                <td style=\"padding-left: 1em;display: flex;justify-content: center;\">\n                                    <a style=\"margin-right: auto;margin-left: 0;\">⚙️</a>\n                                    <a style=\"display: block;justify-content: center;color: black\">Auto Fill Nt:</a>    \n                                    <input type=\"checkbox\" id=\"autoFillNt\" " + (settings.autoFillNt !== undefined ? settings.autoFillNt ? "checked" : '' : "checked") + ">\n                                    <a style=\"margin-left: auto;margin-right: 0;\">⚙️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style=\"padding-left: 1em;display: flex;justify-content: center;\">\n                                    <a style=\"margin-right: auto;margin-left: 0;\">⚙️</a>\n                                    <a style=\"display: block;justify-content: center;color: black\">Villages per page:</a>\n                                    <input id=\"commandsPerPageSetting\" type=\"text\" style=\"width: 50px;margin-left: 7px\" value=\"" + commandsPerPage + "\">\n                                    <a style=\"margin-left: auto;margin-right: 0;\">⚙️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style=\"padding-left: 1em;display: flex;justify-content: center;\">\n                                    <a style=\"margin-right: auto;margin-left: 0;margin: 4px;\">⚙️</a>\n                                    <button id='saveSettingsButton' class='btn' style='display: flex;justify-content: center;align-items: center'>Save Settings</button>\n                                    <a style=\"margin-left: auto;margin-right: 0;margin: 4px;\">⚙️</a>\n                                </td>\n                            </tr>\n                        </tbody>\n                        <thead id=\"botSettingsHeader\" style=\"cursor:pointer;\">\n                            <tr>\n                                <th style=\"text-align: center;\">⚙️On Add Plan Settings ⚙️</th>\n                            </tr>\n                        </thead>\n                        <tbody id=\"botSettingsBody\" style=\"position: relative;\">\n                            <tr style=\"display: none\" id=\"botSettingsNoPermissionDiv2\">\n                                <td style=\"text-align: center;vertical-align: middle;font-size: 14px\">\n                                    <span style=\"color: darkblue\">This is not available! </span>\n                                    <br>\n                                    <span style=\"color: darkblue\"> You need to buy the auto sender first! </span>\n                                </td>\n                            </tr>\n                            <tr style=\"display: none\">\n                                <td>\n                                    <table style=\"width: 100%\">\n                                        <thead>\n                                            <tr>\n                                                <th style=\"text-align: center\">⚙️Auto Send ⚙️</th>\n                                                <th style=\"text-align: center\">⚙️Fill Send ⚙️</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr>\n                                                <td><div style=\"text-align: center;\"><input type=\"radio\" name=\"autoSendInTime\" value=true " + (settings.autoSendInTime !== undefined ? settings.autoSendInTime ? "checked" : '' : "checked") + "></div></td>\n                                                <td><div style=\"text-align: center;\"><input type=\"radio\" name=\"autoSendInTime\" value=false " + (settings.autoSendInTime !== undefined ? settings.autoSendInTime ? '' : "checked" : '') + "></div></td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style=\"padding-left: 1em;display: flex;justify-content: center;\">\n                                    <a style=\"margin-right: auto;margin-left: 0;\">⚙️</a>\n                                    <a style=\"display: block;justify-content: center;color: black\">Attack Template:</a>\n                                    <select id='selectAttackTemplate' class='templateDropdown attackTemplate' style=\"margin-left: 7px;max-width: 110px;\"></select>\n                                    <a style=\"margin-left: auto;margin-right: 0;\">⚙️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style=\"padding-left: 1em;display: flex;justify-content: center;\">\n                                    <a style=\"margin-right: auto;margin-left: 0;\">⚙️</a>\n                                    <a style=\"display: block;justify-content: center;color: black\">Support Template:</a>\n                                    <select id='selectSupportTemplate' class='templateDropdown supportTemplate' style=\"margin-left: 7px;max-width: 110px;\"></select>\n                                    <a style=\"margin-left: auto;margin-right: 0;\">⚙️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style=\"padding-left: 1em;display: flex;justify-content: center;\">\n                                    <a style=\"margin-right: auto;margin-left: 0;\">⚙️</a>\n                                    <a style=\"display: block;justify-content: center;color: black\">NT Template:</a>\n                                    <select id='selectNTTemplate' style=\"margin-left: 7px;max-width: 140px;\"></select>\n                                    <a style=\"margin-left: auto;margin-right: 0;\">⚙️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style=\"padding-left: 1em;display: flex;justify-content: center;\">\n                                    <a style=\"margin-right: auto;margin-left: 0;\">⚙️</a>\n                                    <a style=\"display: block;justify-content: center;color: black\">Catapult Target:</a>\n                                    <select id='catapultTarget' style=\"margin-left: 7px;max-width: 140px;\"></select>\n                                    <a style=\"margin-left: auto;margin-right: 0;\">⚙️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style=\"padding-left: 1em;display: flex;justify-content: center;\">\n                                    <a style=\"margin-right: auto;margin-left: 0;\">⚙️</a>\n                                    <a style=\"display: block;justify-content: center;color: black\">Max %:</a>\n                                    <input id=\"toUse_percentage\" type=\"text\" style=\"width: 50px;margin-left: 7px\" value=\"" + (settings.toUse !== undefined ? settings.toUse : 100) + "\">\n                                    <a style=\"margin-left: auto;margin-right: 0;\">⚙️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style=\"padding-left: 1em;display: flex;justify-content: center;\">\n                                    <a style=\"margin-right: auto;margin-left: 0;\">⚙️</a>\n                                    <a style=\"display: block;justify-content: center;color: black\">Sigil %:</a>\n                                    <input id=\"sigil_percentage\" type=\"text\" style=\"width: 50px;margin-left: 7px\" value=\"" + (settings.sigil !== undefined ? settings.sigil : 0) + "\">\n                                    <a style=\"margin-left: auto;margin-right: 0;\">⚙️</a>\n                                </td>\n                            </tr>\n\t\t\t\t\t\t\t<tr>\n                                <td style=\"padding-left: 1em;display: flex;justify-content: center;\">\n                                    <a style=\"margin-right: auto;margin-left: 0;\">⚙️</a>\n                                    <a style=\"display: block;justify-content: center;color: black\">Leave (n) spies at home:</a>\n                                    <input id=\"leaveSpiesAtHome\" type=\"text\" style=\"width: 40px;margin-left: 7px\" value=\"" + (settings.leaveSpies !== undefined ? settings.leaveSpies : 0) + "\">\n                                    <a style=\"margin-left: auto;margin-right: 0;\">⚙️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style=\"padding-left: 1em;display: flex;justify-content: center;\">\n                                    <a style=\"margin-right: auto;margin-left: 0;\">⚙️</a>\n                                    <a style=\"display: block;justify-content: center;color: black\">Leave (n) rams at home:</a>\n                                    <input id=\"leaveRamsAtHome\" type=\"text\" style=\"width: 40px;margin-left: 7px\" value=\"" + (settings.leaveRams !== undefined ? settings.leaveRams : 0) + "\">\n                                    <a style=\"margin-left: auto;margin-right: 0;\">⚙️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style=\"padding-left: 1em;display: flex;justify-content: center;\">\n                                    <a style=\"margin-right: auto;margin-left: 0;\">⚙️</a>\n                                    <a style=\"display: block;justify-content: center;color: black\">Leave (n) catapults at home:</a>\n                                    <input id=\"leaveCatsAtHome\" type=\"text\" style=\"width: 40px;margin-left: 7px\" value=\"" + (settings.leaveCats !== undefined ? settings.leaveCats : 0) + "\">\n                                    <a style=\"margin-left: auto;margin-right: 0;\">⚙️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style=\"padding-left: 1em;display: flex;justify-content: center;\">\n                                    <a style=\"margin-right: auto;margin-left: 0;\">⚙️</a>\n                                    <a style=\"display: block;justify-content: center;color: black\">Random launch time offset (min):</a>\n                                    <input id=\"launchTime_offset\" type=\"text\" style=\"width: 30px;margin-left: 7px\" value=\"" + (settings.launchTime_offset !== undefined ? settings.launchTime_offset : 0) + "\">\n                                    <a style=\"margin-left: auto;margin-right: 0;\">⚙️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style=\"padding-left: 1em;display: flex;justify-content: center;\">\n                                    <a style=\"margin-right: auto;margin-left: 0;margin: 4px;\">⚙️</a>\n                                    <button id='saveSettingsButtonBot' class='btn' style='display: flex;justify-content: center;align-items: center'>Save Settings</button>\n                                    <a style=\"margin-left: auto;margin-right: 0;margin: 4px;\">⚙️</a>\n                                </td>\n                            </tr>\n                        </tbody>\n                        <thead id=\"botStatusSettingsHeader\" style=\"cursor:pointer;\">\n                            <tr>\n                                <th style=\"text-align: center;\">⚙️Bot Status ⚙️</th>\n                            </tr>\n                        </thead>\n                        <tbody id=\"botStatusSettingsBody\">\n                            <tr>\n                                <td style=\"padding-left: 1em;display: flex;justify-content: center;\">\n                                    <a style=\"margin-right: auto;margin-left: 0;margin: 4px;\">⚙️</a>\n                                    <button id='startStopBotButton' class='btn' style='display: flex;justify-content: center;align-items: center'>" + (settings.running !== undefined ? settings.running ? "Stop" : "Start" : "Start") + "</button>\n                                    <a style=\"margin-left: auto;margin-right: 0;margin: 4px;\">⚙️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style=\"padding-left: 1em;display: flex;justify-content: center;\">\n                                    <a style=\"margin-right: auto;margin-left: 0;margin: 4px;\">⚙️</a>\n                                    <a href=\"javascript:void(0)\" id=\"runningMenuInfo\" style=\"display: flex;justify-content: center;align-items: center;color:" + (settings.running !== undefined ? settings.running ? "Green" : "Red" : "Red") + "\"> " + (settings.running !== undefined ? settings.running ? "Running" : "Not Running" : "Not Running") + " </a>\n                                    <a style=\"margin-left: auto;margin-right: 0;margin: 4px;\">⚙️</a>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n            <div>\n                <div class=\"forum-content\" style=\"padding: 0;\">\n                    <table class=\"vis nowrap\" style=\"width: 100%;\">\n                        <thead>\n                            <tr>\n                                <th colspan=\"9\"><span class=\"column-title\" style=\"font-size:16px\">➕ Add commands ➕</span></th>\n                            </tr>\n                            <tr>\n                                <th colspan=\"9\" style=\"text-align: center;\">Quick add command</th>\n                            </tr>\n                            <tr>\n                                <th style=\"text-align: center;\">Name</th>\n                                <th style=\"text-align: center;\">Source</th>\n                                <th style=\"text-align: center;\">Target</th>\n                                <th style=\"text-align: center;\">\n                                    <select id=\"quickAddTime\">\n                                        <option value=\"arrival\"><strong>Arrival time</strong></option>\n                                        <option value=\"launch\"><strong>Launch time</strong></option>\n                                    </select>\n                                </th>\n                                <th style=\"text-align: center;\">Type</th>\n                                <th style=\"text-align: center;\">Template</th>\n                                <th style=\"text-align: center;width: 30px;\">Max (%)</th>\n                                <th style=\"text-align: center;\">Add</th>\n                                <th style=\"text-align: center;\">Settings</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td style=\"\"><input type=\"text\" id=\"quickAddName\"style=\"width:100px\" placeholder=\"Name\" tabindex=\"1\"></td>\n                                <td style=\"\"><input type=\"text\" id=\"quickAddSource\"style=\"width:50px\" placeholder=\"555|555\" tabindex=\"2\"></td>\n                                <td style=\"\"><input type=\"text\" id=\"quickAddTarget\" style=\"width:50px\" placeholder=\"555|555\" tabindex=\"3\"></td>\n                                <td style=\"\"><input type=\"datetime-local\" id=\"quickAddDate\" step=\".001\" style=\"width: auto;\"></td>\n                                </td>\n                                <td style=\"\">\n                                    <select id=\"quickAddCommandTypeSelection\" style=\"width: 70px;\">\n                                    <option value=\"Attack\" >Attack</option>\n                                    <option value=\"Support\">Support</option>\n                                    </select>\n                                </td>\n                                <td>\n                                    <select id='quickAddSelectTemplate' class='templateDropdown attackTemplate' style=\"margin-left: 7px\"></select>\n                                </td>\n                                <td style=\"\"><input type=\"text\" id=\"quickAddToUse\"style=\"width: 50px;text-align: center;vertical-align: middle;\" value=\"100\" tabindex=\"4\"></td>\n                                <td style=\"\"><input id=\"quickAddButton\" value=\"Add\" class=\"btn\" style=\"display: flex;justify-content: center;align-items: center;width:50px\" type=\"submit\"></input>\n                                </td>\n                                <td><a id=\"quickAddEdit\" href=\"javascript:void(0)\" style=\"font-size:20px;display: flex;justify-content: center;align-items: center;\">➕</a></td>\n                            </tr>\n                        </tbody>\n                        <thead>\n                            <tr>\n                                <th colspan=\"9\" style=\"text-align: center;\">Add Plan</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr class=\"edit_row\">\n                                <td colspan=\"9\">\n                                    <textarea id=\"addPlanTextArea\" style=\"width:98%\" rows=\"4\" placeholder=\"Put the planned text here...\"></textarea>\n                                </td>\n                            </tr>\n                        </tbody>\n                        <td colspan=\"9\">\n                            <button id=\"addPlanButton\" class=\"btn\">Add plan</button>\n                            <span style=\"padding-left: 10px\"><a id=\"addPlanHelpButton\" href=\"#\" class=\"help-link help_link\" data-topic=\"tribe\" data-section=\"stronghold\">Help</a></span>\n\t\t\t\t\t\t\t<div style=\"padding-left: 10px;display: inline-block;\">\n\t\t\t\t\t\t\t\t<a style=\"color: black\">Read MS from plan:</a>\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"readMSFromPlan\" " + (settings.readMSFromPlan !== undefined ? settings.readMSFromPlan ? "checked" : '' : "checked") + ">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div style=\"padding-left: 10px;display: inline-block;\">\n\t\t\t\t\t\t\t\t<a style=\"color: black\">Set MS to plan:</a>\n\t\t\t\t\t\t\t\t<input id=\"setMSWholePlane\" type=\"text\" style=\"width: 50px;margin-left: 7px\" value=\"" + (settings.setMSWholePlane !== undefined ? settings.setMSWholePlane : 0) + "\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</p>\n                        </td>\n                    </table>\n                </div>\n            </div>\n        </div>\n        <br>\n        <table class=\"vis\" width=\"100%\" style=\"margin-bottom: 2px\">\n            <tbody>\n                <tr>\n                    <td align=\"center\" id=\"commands_table_pages\">\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n        <div style=\"padding: 0;\" class=\"forum-content\">\n            <table style=\"width: 100%;\", class=\"vis overview_table\">\n                <thead id=\"comandsTableHeader\">\n                    <tr>\n                        <th colspan=\"20\">\n                            <span class=\"column-title\" style=\"font-size:16px\">⚔️ Planned Commands ⚔️</span>\n                        </th>\n                    </tr>\n                </thead>\n                <tbody id=\"comandsTableRows\">\n                </tbody>\n            </table>\n            <br>\n            <table>\n                <tbody>\n                    <tr>\n                        <td><a><input id=\"send_all\" class=\"btn\" name=\"send\" type=\"submit\" value=\"Send selected\"></a>\n                        </td>\n                        <td><a><input id=\"delete_all\" class=\"btn\" name=\"delete\" type=\"submit\" value=\"Delete selected\"></a>\n                        </td>\n                        <td><a><input id=\"delete_all_old_commands\" class=\"btn\" name=\"delete\" type=\"submit\" value=\"Delete old commands\"></a>\n                        </td>\n                        <td><a><input id=\"delete_all_done_commands\" class=\"btn\" name=\"delete\" type=\"submit\" value=\"Delete done commands\"></a>\n                        </td>\n                        <td><a><input id=\"revert_deleted_commands\" class=\"btn\" name=\"delete\" type=\"submit\" value=\"Revert deleted commands\"></a>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <br>\n        <div>\n            <span style='font-family:Verdana, Arial;float:left;margin: 7px;'>Problems? Join my <a style=\"color: -webkit-link\" href=\"https://discord.gg/JpHMjH8QtB\">Discord</a> or message me: <a href='./game.php?village=212&screen=info_player&id=2871948'>Im Kumin</a> </span>\n        </div>\n        <div style=\"float: right\">\n            <button id=\"startImportDataButton\" class=\"btn\">Import Data</button>\n            <button id=\"exportDataButton\" class=\"btn\">Export Data</button>\n            <button id=\"exportDataToFileButton\" class=\"btn\">Export Data To File</button>\n            <textarea id=\"importExportInput\" type=\"text\" style=\"display: none\"></textarea>\n            <button id=\"importDataButton\" class=\"btn\" style=\"display: none\">Import</button>\n            <button id=\"cancelImportDataButton\" class=\"btn\" style=\"display: none\">Cancel</button>\n        </div>\n    </div>";
  setHTML(_0x36b4f5, "#memoPlanner", {
    'callback': UIPostProcessing
  });
}
function getUniqueEntries(_0x575009) {
  return [...new Set($.map(commands, _0xa9242a => {
    return String(_0xa9242a[_0x575009]);
  }))];
}
function generateCommandsTableHeader() {
  if ($("#tableHeader").length) {
    $("#comandsTableHeader")[0].deleteRow(1);
  }
  setHTML("<th id=\"tableHeader\"><input type=\"checkbox\" id=\"select_all_commands\"></th>\n        <th id=\"thSelectionCheckboxtype\"></th>\n        <th id=\"thSelectionCheckboxname\"></th>\n        <th id=\"thSelectionCheckboxsource\"></th>\n        <th id=\"thSelectionCheckboxtarget\"></th>\n        <th><a>Launch Time</a></th>\n        <th id=\"thSelectionCheckboxslowestUnit\"></th>\n        <th><a>Send</a></th>\n        <th id=\"thSelectionCheckboxdone\"></th>\n        <th><a>Edit</a></th>", "#comandsTableHeader", {
    'wrapper': (_0x2280d0, _0x474bad) => _0x474bad.insertRow().innerHTML = _0x2280d0,
    'callback': () => {
      $("#select_all_commands").off("change");
      $("#select_all_commands").on("change", function () {
        $("[id^='select_command_']").prop("checked", this.checked);
      });
    }
  });
  generateCheckboxSelection("Name", getUniqueEntries("name"), "name");
  generateCheckboxSelection("Type", getUniqueEntries("type"), "type", _0x1ebdb0 => {
    return "<img src=\"https://dsen.innogamescdn.com/asset/34fb11bc/graphic/command/" + _0x1ebdb0.toLowerCase() + ".png\">";
  });
  generateCheckboxSelection("Source", getUniqueEntries("source"), "source");
  generateCheckboxSelection("Target", getUniqueEntries("target"), "target");
  generateCheckboxSelection("Slowest Unit", getUniqueEntries("slowestUnit"), "slowestUnit", _0x5cd273 => {
    return "<img src=\"/graphic/unit/unit_" + _0x5cd273 + ".png\">";
  });
  generateCheckboxSelection("Done", getUniqueEntries("done"), "done");
}
function generateCommandsTableRows(_0xc448f7) {
  $("#comandsTableRows > tr").remove();
  var _0x4679e7 = sortCommands(_0xc448f7);
  var _0x452e44 = _0x4679e7;
  if (currentPage > 0) {
    _0x452e44 = _0x4679e7.slice((currentPage - 1) * commandsPerPage, currentPage * commandsPerPage);
  }
  for (var _0x55283f = 0; _0x55283f < _0x452e44.length; _0x55283f++) {
    var _0x2f80b9 = _0x452e44[_0x55283f];
    var _0x33692a = _0x55283f % 2 ? "row_a" : "row_b";
    addCommandToTable(_0x2f80b9, _0x33692a);
  }
}
function addCommandToTable(_0x490874, _0x5808be) {
  var _0x52b9cb = "command_" + _0x490874.id;
  let _0x344df9 = "<tr class=\" " + _0x5808be + " \" id=\"" + _0x52b9cb + "\">\n        <td><input type=\"checkbox\" id=\"select_command_" + _0x52b9cb + "\" data-id=" + _0x490874.id + "></td>\n        <td>" + ("<img src=\"/graphic/command/" + _0x490874.type.toLowerCase() + ".png\">") + "</td>\n        <td> " + _0x490874.name + " </td>\n        <td> <a href=\"" + (window.location.pathname + '?' + (sitter ? sitter + '&' : '') + "village=" + _0x490874.sourceVillageId + "&screen=info_village&id=" + _0x490874.sourceVillageId) + "\" target=\"_blank\">" + _0x490874.source + " </a> </td>\n        <td> <a href=\"" + (window.location.pathname + '?' + (sitter ? sitter + '&' : '') + "village=" + _0x490874.sourceVillageId + "&screen=info_village&id=" + _0x490874.targetVillageId) + "\" target=\"_blank\">" + _0x490874.target + " </a> </td>\n        <td> " + convertDateToString(_0x490874.launchTime) + " <b  class=\"overviewsTimer commandTimer\" data-endtime=\"" + new Date(_0x490874.launchTime).getTime() + "\" data-randomtime=\"" + (parseInt(_0x490874.randomOffset) > 0 ? new Date(_0x490874.randomOffsetTime).getTime() : 0) + "\" data-format=\"%hh%:%mm%:%ss%\"></b> " + (_0x490874.duplicateError ? "⚠️ (Duplicate time)" : '') + "</td>\n        <td><img src=\"/graphic/unit/unit_" + _0x490874.slowestUnit + ".png\"></td>\n        <td><a><input id=\"send_" + _0x52b9cb + "\" data-id=" + _0x490874.id + " class=\"btn\" name=\"send\" type=\"submit\" value=\"Send\"></a></td>\n        <td> " + _0x490874.done + " </td>\n        <td><a data-id=" + _0x490874.id + " id=\"edit_" + _0x52b9cb + "\" href=\"javascript:void(0)\" style=\"font-size:20px;display: flex;justify-content: center;align-items: center;\">➕</a></td>\n        </tr>";
  setHTML(_0x344df9, "#comandsTableRows", {
    'wrapper': (_0x357692, _0x649a79) => _0x649a79.insertRow().outerHTML = _0x357692,
    'callback': setupCommandsClickListeners
  });
}
function setupCommandsClickListeners() {
  $("[id^=edit_command_]").off("click");
  $("[id^=send_command_]").off("click");
  $("[id^=edit_command_]").on("click", function () {
    openConfigPopup(this.dataset.id);
  });
  $("[id^=send_command_]").on("click", function () {
    sendCommands(this.dataset.id);
  });
}
function UIPostProcessing() {
  $("#send_all").off("click");
  $("#delete_all").off("click");
  $("#quickAddEdit").off("click");
  $("#quickAddButton").off("click");
  $("#addPlanButton").off("click");
  $("#saveSettingsButton").off("click");
  $("#saveSettingsButtonBot").off("click");
  $("#startImportDataButton").off("click");
  $("#importDataButton").off("click");
  $("#cancelImportDataButton").off("click");
  $("#exportDataButton").off("click");
  $("#exportDataToFileButton").off("click");
  $("#delete_all_old_commands").off("click");
  $("#delete_all_done_commands").off("click");
  $("#revert_deleted_commands").off("click");
  $("#quickAddCommandTypeSelection").off("change");
  $("#send_all").on("click", sendCheckedCommands);
  $("#delete_all").on("click", deleteCheckedCommands);
  $("#quickAddEdit").on("click", () => openConfigPopup(-1));
  $("#quickAddButton").on("click", quickAdd);
  $("#addPlanButton").on("click", addPlan);
  $("#quickAddDate").val(convertToInput(new Date()));
  $("#saveSettingsButton").on("click", saveSettings);
  $("#saveSettingsButtonBot").on("click", saveSettings);
  $("#startImportDataButton").on("click", startImportConfigurations);
  $("#importDataButton").on("click", importConfigurations);
  $("#cancelImportDataButton").on("click", cancelImportConfigurations);
  $("#exportDataButton").on("click", exportConfigurations);
  $("#exportDataToFileButton").on("click", exportConfigurationsToFile);
  $("#delete_all_old_commands").on("click", deleteOldCommands);
  $("#delete_all_done_commands").on("click", deleteDoneCommands);
  $("#revert_deleted_commands").on("click", revertLastDeleteAction);
  $("#quickAddCommandTypeSelection").on("change", function () {
    if (this.value == "Support") {
      $("#quickAddSelectTemplate").val(overviewVars.settings.currentSupportTemplate);
    } else {
      $("#quickAddSelectTemplate").val(overviewVars.settings.currentAttackTemplate);
    }
  });
  changeAutoTimingOffsetCheckbox();
  $("#autoTimingOffset").on("change", function () {
    changeAutoTimingOffsetCheckbox();
  });
  $("#autoTimingOffsetMultiplier").on("change", function () {
    changeAutoTimingOffsetMultiplier(this);
  });
  $("#addPlanHelpButton").on("click", showAddPlanHelp);
  $("#botSettingsHeader").on("click", showHideBotSettings);
  $("#settingsHeader").on("click", showHideSettings);
  $("#botStatusSettingsHeader").on("click", showHideBotStatusSettings);
  $("#startStopBotButton").on("click", startStopBot);
  allowPopups("init");
  $("#popupsAllowedTr").on("click", allowPopups);
  setupPlanMSListeners();
  setupNTTemplateUI();
  setupTemplateUI();
  setupCatapultTargetUI();
  addAuthors("#memoPlanner");
  initiateTimers(".commandTimer", {
    'htmlWrapper': _0x56ea62 => {
      if (_0x56ea62 == "OnHold") {
        return "(<span style=\"color: green;\">On Hold</span>)";
      } else {
        if (_0x56ea62 != "end") {
          return "(<span style=\"color: blue;\">" + _0x56ea62 + "</span>)";
        } else {
          return "(<span style=\"color: red;\">Command overdue</span>)";
        }
      }
    },
    'refreshTime': 0x1f4
  });
  makeCommandsTable();
  startMenuRoutine();
}
function changeAutoTimingOffsetCheckbox() {
  let _0x302938 = $("#autoTimingOffset").is(":checked");
  if (_0x302938) {
    $("#autoTimingOffsetMultiplier").show(500);
    $("#timing_offset").hide(500);
  } else {
    $("#autoTimingOffsetMultiplier").hide(500);
    $("#timing_offset").show(500);
  }
}
function changeAutoTimingOffsetMultiplier(_0xdf8359) {
  if (_0xdf8359.value < 0) {
    _0xdf8359.value = 0;
  }
  if (_0xdf8359.value > 100) {
    _0xdf8359.value = 100;
  }
}
function setupPlanMSListeners() {
  $("#readMSFromPlan").on("change", saveOnChangePlanMSSettings);
  $("#setMSWholePlane").on("change", saveOnChangePlanMSSettings);
  if (settings.readMSFromPlan) {
    $("#setMSWholePlane").attr("disabled", true);
  } else {
    $("#setMSWholePlane").attr("disabled", false);
  }
}
function saveOnChangePlanMSSettings() {
  settings.readMSFromPlan = $("#readMSFromPlan").is(":checked");
  readMSFromPlan = settings.readMSFromPlan;
  if (settings.readMSFromPlan) {
    $("#setMSWholePlane").attr("disabled", true);
  } else {
    $("#setMSWholePlane").attr("disabled", false);
  }
  const _0x555b44 = document.getElementById("setMSWholePlane").value;
  let _0x361bf8 = 0;
  if (_0x555b44 != '') {
    _0x361bf8 = parseInt(_0x555b44);
  }
  settings.setMSWholePlane = _0x361bf8;
  saveOverviewVars();
}
function allowPopups(_0x558709) {
  if (settings.allowPopups) {
    $("#popupsAllowedTr").hide(100);
    return;
  }
  let _0x455447 = window.open(null, '', "width=1,height=1");
  try {
    _0x455447.close();
    if (_0x558709 == "init") {
      settings.allowPopups = true;
      $("#popupsAllowedTr").hide(100);
    }
  } catch (_0x5a1b19) {
    settings.allowPopups = false;
    $("#popupsAllowedTr").show(100);
  }
  saveOverviewVars();
}
function makeCommandsTable(_0x403ea5 = true) {
  if (_0x403ea5) {
    generateCommandsTableHeader();
  }
  autoDeleteCommands();
  makeCommandsTableRows();
}
function makeCommandsTableRows() {
  let _0x39d089 = get_active_commands();
  generateCommandsTableRows(_0x39d089);
  setupCommandsClickListeners();
  saveOverviewVars();
}
function quickAdd() {
  if (!verifyUserIdentity() || !allowed || !window.as || window.console.ASAllowed) {
    return;
  }
  const _0x475960 = document.getElementById("quickAddName").value;
  const _0x421b83 = document.getElementById("quickAddSource").value;
  const _0x3e9fd6 = document.getElementById("quickAddTarget").value;
  const _0x96a8b3 = document.getElementById("quickAddToUse").value;
  let _0x4586a8;
  let _0xaeef4c;
  if ($("#quickAddTime")[0].value == "arrival") {
    _0xaeef4c = new Date(document.getElementById("quickAddDate").value);
  } else {
    _0x4586a8 = new Date(document.getElementById("quickAddDate").value);
  }
  const _0x12b494 = $("#quickAddCommandTypeSelection")[0].value;
  setCommand(_0x475960, _0x421b83, _0x3e9fd6, _0x4586a8, _0xaeef4c, _0x12b494, {
    'id': -1,
    'useDefaultTemplate': false,
    'fromQuickAdd': true,
    'toUse': _0x96a8b3
  });
  makeCommandsTable();
}
function addPlan() {
  if (!verifyUserIdentity() || !allowed || !window.as || window.console.ASAllowed) {
    return;
  }
  const _0x5ac9f6 = document.getElementById("addPlanTextArea").value;
  const _0x31e891 = _0x5ac9f6.split("\n");
  for (let _0x2fc6f9 = 0; _0x2fc6f9 < _0x31e891.length; _0x2fc6f9++) {
    const _0x5b089a = _0x31e891[_0x2fc6f9];
    const _0x342531 = getCoordsFromPlan(_0x5b089a);
    if (_0x342531 == null || _0x342531.length <= 1) {
      continue;
    }
    const _0x485022 = _0x342531[0];
    const _0x594ad1 = _0x342531[1];
    const _0x4014c9 = getDateFromPlan(_0x5b089a);
    const _0x576f35 = getSlowestUnitFromPlan(_0x5b089a);
    const _0x12770c = getCommandTypeFromPlan(_0x5b089a);
    setCommand(undefined, _0x485022, _0x594ad1, _0x4014c9, undefined, _0x12770c, {
      'useDefaultTemplate': true,
      'slowestUnit': _0x576f35,
      'id': -1
    });
  }
  makeCommandsTable();
}
function setCommand(_0x2b0cb2, _0x595afd, _0x46d046, _0x92b7d2, _0x119680, _0x1e0782, {
  units = {},
  id = -1,
  useDefaultTemplate = false,
  slowestUnit = '',
  fromQuickAdd = false,
  toUse = settings.toUse,
  autoSend = true,
  randomOffset = settings.launchTime_offset,
  randomOffsetTime: _0x1a2fbf,
  sigil = settings.sigil,
  leaveCats = settings.leaveCats,
  leaveSpies = settings.leaveSpies,
  leaveRams = settings.leaveRams,
  ntTemplate = getSelectedNtTemplate(),
  catapultTarget = settings.currentCatapultTarget
}) {
  if (!verifyUserIdentity() || !allowed || !window.as || window.console.ASAllowed) {
    return;
  }
  loadCommandsOnly();
  let _0x29d9f6;
  if (useDefaultTemplate || fromQuickAdd) {
    if (_0x1e0782 == "Support") {
      _0x29d9f6 = templatesData[settings.currentSupportTemplate];
    } else {
      _0x29d9f6 = templatesData[settings.currentAttackTemplate];
    }
    if (fromQuickAdd) {
      _0x29d9f6 = templatesData[$("#quickAddSelectTemplate")[0].value];
    }
    units = Object.assign({}, _0x29d9f6.units);
  }
  let _0x172580 = _0x2b0cb2;
  if (!_0x172580) {
    _0x172580 = _0x29d9f6.name;
  }
  if (!villageData[_0x595afd]) {
    printError("Source village does not exists.");
    return;
  } else {
    if (!villageData[_0x46d046]) {
      printError("Target village does not exists.");
      return;
    } else {
      if (_0x172580.length > 32) {
        printError("Command name character limit exceeded, limit is 32 characters.");
        return;
      }
    }
  }
  $.each(units, (_0x3d72b5, _0x50d672) => units[_0x3d72b5] = parseInt(_0x50d672 != '' ? _0x50d672 : 0));
  if (unitsData[slowestUnit]) {
    if (units[slowestUnit] == 0) {
      units[slowestUnit] = 1;
    }
  }
  const _0x58bc2f = [];
  $.each(unitsData, (_0x31e59c, _0x54fb6e) => {
    let _0x4d74f8 = Math.ceil(_0x54fb6e.speed);
    _0x58bc2f.push({
      'key': _0x31e59c,
      'thisSpeed': _0x4d74f8
    });
  });
  const _0x365786 = _0x58bc2f.sort(function _0x55b872(_0x2a0911, _0x5f01a1) {
    if (_0x2a0911.thisSpeed < _0x5f01a1.thisSpeed) {
      return 1;
    } else {
      if (_0x2a0911.thisSpeed > _0x5f01a1.thisSpeed) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  for (const _0x1ee04d in _0x365786) {
    if (units[_0x365786[_0x1ee04d].key] != 0) {
      if (unitsData[slowestUnit]) {
        if (_0x365786[_0x1ee04d].speed > unitsData[slowestUnit].speed) {
          units[_0x365786[_0x1ee04d]] = 0;
        }
      } else {
        slowestUnit = _0x365786[_0x1ee04d].key;
        break;
      }
    }
  }
  if (_0x1e0782 == "Support" && units.knight != 0 && gameData.units.includes("knight")) {
    slowestUnit = "knight";
  }
  if (id < 0) {
    UI.SuccessMessage("New Command programmed");
  }
  id = id < 0 ? overviewVars.commandIdCounter++ : id;
  const _0x494a62 = {
    'id': id,
    'name': _0x172580,
    'sourceVillageId': villageData[_0x595afd].id,
    'targetVillageId': villageData[_0x46d046].id,
    'source': _0x595afd,
    'target': _0x46d046,
    'launchTime': _0x92b7d2,
    'arrivalTime': _0x119680,
    'slowestUnit': slowestUnit,
    'units': units,
    'type': _0x1e0782,
    'done': false,
    'toUse': toUse,
    'autoSend': autoSend,
    'preparedByBot': false,
    'randomOffset': randomOffset,
    'randomOffsetTime': _0x1a2fbf,
    'sigil': sigil,
    'leaveCats': leaveCats,
    'leaveSpies': leaveSpies,
    'leaveRams': leaveRams,
    'ntTemplate': ntTemplate,
    'catapultTarget': catapultTarget,
    'duplicateError': false
  };
  calculateMissingTimes(_0x494a62);
  commands[id] = _0x494a62;
  saveOverviewVars();
}
function sendCommands() {
  if (!verifyUserIdentity() || !allowed || !window.as || window.console.ASAllowed) {
    return;
  }
  for (let _0x48ac92 = 0; _0x48ac92 < arguments.length; _0x48ac92++) {
    setTimeout(function (_0x526e30, _0x4d3d9b, _0x1d4485) {
      const _0x175350 = commands[_0x1d4485[_0x4d3d9b]];
      let _0x5b5728 = window.location.pathname + '?' + (_0x526e30 ? _0x526e30 + '&' : '') + "village=" + _0x175350.sourceVillageId + "&screen=place&target=" + _0x175350.targetVillageId;
      let _0x264d92 = window.open(_0x5b5728);
      _0x264d92.sessionStorage.setItem("commandsOverviewCommandData", JSON.stringify(_0x175350), "_blank", "toolbar=0,location=0,menubar=0");
    }, 400 * (_0x48ac92 + Math.random() * 0.1), sitter, _0x48ac92, arguments);
  }
  makeCommandsTable();
}
function createIframe(_0x52e6ac, _0x6c0e11) {
  let _0x2d2a8f = document.createElement("iframe");
  _0x2d2a8f.setAttribute('id', _0x52e6ac);
  _0x2d2a8f.setAttribute('src', _0x6c0e11);
  _0x2d2a8f.style.width = window.innerWidth / 4 - 10 + 'px';
  _0x2d2a8f.style.height = window.innerHeight - 90 + 'px';
  document.body.appendChild(_0x2d2a8f);
  return _0x2d2a8f;
}
function autoDeleteCommands() {}
function deleteOldCommands(_0x261fff) {
  console.log("Deleting old commands");
  let _0x4a84e5 = 0;
  const _0xde5aa3 = [];
  $.each(commands, (_0x4ee895, _0x51c814) => {
    if (_0x51c814) {
      var _0x5b6e3a = new Date(Timing.getCurrentServerTime() - serverDateDiff - 120000);
      if (dateCommandComparator(commands[_0x4ee895], _0x5b6e3a) < 0) {
        if (_0x261fff != "auto") {
          _0xde5aa3.push(commands[_0x4ee895]);
        }
        _0x4a84e5++;
        delete commands[_0x4ee895];
      }
    }
  });
  if (_0xde5aa3.length > 0) {
    revertCommands.push(_0xde5aa3);
  }
  console.log("Deleted " + _0x4a84e5 + " commands");
  makeCommandsTableRows();
}
function deleteDoneCommands(_0x3f8934) {
  let _0xf34a96 = 0;
  const _0x510165 = [];
  $.each(commands, (_0x420102, _0xc553c9) => {
    if (_0xc553c9) {
      if (_0xc553c9.done) {
        if (_0x3f8934 != "auto") {
          _0x510165.push(commands[_0x420102]);
        }
        _0xf34a96++;
        delete commands[_0x420102];
      }
    }
  });
  if (_0x510165.length > 0) {
    revertCommands.push(_0x510165);
  }
  console.log("Deleted " + _0xf34a96 + " done commands");
  makeCommandsTableRows();
}
function sendCheckedCommands() {
  sendCommands(...$.map($("[id^='select_command_']").filter(":checked"), _0x1d2d08 => {
    return _0x1d2d08.dataset.id;
  }));
}
function deleteCheckedCommands() {
  deleteCommands(...$.map($("[id^='select_command_']").filter(":checked"), _0x41d273 => {
    return _0x41d273.dataset.id;
  }));
}
function deleteCommands() {
  const _0x50786a = [];
  for (let _0xd68f45 = 0; _0xd68f45 < arguments.length; _0xd68f45++) {
    _0x50786a.push(commands[arguments[_0xd68f45]]);
    delete commands[arguments[_0xd68f45]];
  }
  if (_0x50786a.length > 0) {
    revertCommands.push(_0x50786a);
  }
  console.log("Deleted " + arguments.length + " commands");
  makeCommandsTable();
}
function revertLastDeleteAction() {
  if (revertCommands.length == 0) {
    printError("There is no deleted commands to revert.");
    return;
  }
  const _0x1ae1e9 = revertCommands.pop();
  for (let _0x33f4a5 = 0; _0x33f4a5 < _0x1ae1e9.length; _0x33f4a5++) {
    const _0x3c280e = _0x1ae1e9[_0x33f4a5];
    commands[_0x3c280e.id] = _0x3c280e;
  }
  console.log("Reverted " + _0x1ae1e9.length + " commands");
  makeCommandsTable();
}
function sortCommands(_0x341a95) {
  let _0x179462 = Object.values(_0x341a95);
  let _0x242f0d = _0x179462.length === Object.keys(commands).length;
  if (_0x179462.length < 1) {
    return [];
  }
  const _0x289c75 = [];
  $.each(_0x341a95, (_0x2f2d17, _0xbbaf77) => {
    _0x289c75.push(_0xbbaf77);
  });
  const _0x528f57 = _0x289c75.sort(dateCommandComparator);
  if (_0x242f0d) {
    sortedCommandsArray = _0x528f57;
    checkForDuplicates(_0x179462, _0x528f57);
  }
  return _0x528f57;
}
function checkForDuplicates() {
  for (let _0x4e80d6 in sortedCommandsArray) {
    let _0xb03d99 = sortedCommandsArray[_0x4e80d6];
    let _0x485fab = null;
    if (_0x4e80d6 > 0) {
      _0x485fab = sortedCommandsArray[_0x4e80d6 - 1];
    }
    if (_0x485fab != null && true && checkIfDuplicateTime(_0xb03d99, _0x485fab)) {
      _0xb03d99.duplicateError = true;
      _0x485fab.duplicateError = true;
    } else {
      _0xb03d99.duplicateError = false;
    }
  }
}
function checkIfDuplicateTime(_0x5d4999, _0x23d3d5) {
  let _0x393ae6 = new Date(_0x5d4999.launchTime).getTime();
  let _0x11cf82 = new Date(_0x23d3d5.launchTime).getTime();
  return Math.abs(_0x393ae6 - _0x11cf82) < 2000;
}
function nextInTimeCommand() {
  let _0xe5acfa = null;
  for (let _0x43d7f5 = 0; _0x43d7f5 < sortedCommandsArray.length && _0xe5acfa == null; _0x43d7f5++) {
    const _0x486432 = sortedCommandsArray[_0x43d7f5];
    if (dateCommandComparator(_0x486432, new Date(new Date() - serverDateDiff)) > 0) {
      _0xe5acfa = _0x486432;
    }
  }
  return _0xe5acfa;
}
function nextInTimeCommands(_0x164ec0) {
  let _0x3604b5 = [];
  let _0x15fd7e = 0;
  for (let _0x13e62b = 0; _0x13e62b < sortedCommandsArray.length; _0x13e62b++) {
    const _0x37c709 = sortedCommandsArray[_0x13e62b];
    const _0x503f29 = new Date(Timing.getCurrentServerTime() + _0x164ec0 * 1000 - serverDateDiff);
    if (!_0x37c709.done && dateCommandComparatorWithRandom(_0x37c709, _0x503f29) < 0 && dateCommandComparatorWithRandom(_0x37c709, new Date(new Date() - serverDateDiff)) > 0) {
      _0x3604b5[_0x15fd7e] = _0x37c709;
      _0x15fd7e++;
    }
  }
  return _0x3604b5;
}
function generateCheckboxSelection(_0x23b48f, _0x3030f7, _0x3e8025, _0x146f80 = _0x529803 => {
  return _0x529803;
}) {
  let _0x572110 = "<form>\n        <div class=\"multipleSelection\">\n            <div class=\"selectBox\" data-id=\"" + _0x3e8025 + "\" id=\"selectBox_" + _0x3e8025 + "\">\n                <select>\n                    <option selected hidden>" + _0x23b48f + "</option>\n                </select>\n                <div class=\"overSelect\"></div>\n            </div>\n\n            <div id=\"checkBoxes_" + _0x3e8025 + "\" class='selectionOption' style=\"display:none;\">\n                <table>\n                    <tbody>\n                        <tr>\n                            <td><input type=\"checkbox\" class=\"selectionCheckboxAll\" id=\"select_" + _0x3e8025 + "_all\" data-id=\"" + _0x3e8025 + "\" checked></td><td>All</td>\n                        </tr>\n                        " + $.map(_0x3030f7, (_0x31e583, _0x18271d) => "\n                        <tr>\n                            <td><input type=\"checkbox\" id=\"select_" + _0x3e8025 + '_' + _0x18271d + "\" class=\"selectionCheckbox\" checked data-option=\"" + _0x31e583 + "\" data-id=\"" + _0x3e8025 + "\"></td><td>" + _0x146f80(_0x31e583) + "</td>\n                        </tr>").join("\n") + "\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </form>\n    ";
  setHTML(_0x572110, "#thSelectionCheckbox" + _0x3e8025, {
    'callback': bindCheckboxSelectionEvents
  });
  return _0x572110;
}
function bindCheckboxSelectionEvents() {
  if (!$("#checkboxFader").length) {
    $("#memoPlanner").append("<div id=\"checkboxFader\" style=\"display:none;\"></div> ");
  }
  let _0x4a6bfb = function () {
    let _0xf748a3 = $("#checkBoxes_" + this.dataset.id)[0];
    let _0x3a3ffb = _0xf748a3.style.display == "none" ? "block" : "none";
    $("#checkboxFader")[0].style.display = _0x3a3ffb;
    _0xf748a3.style.display = _0x3a3ffb;
  };
  $(".selectBox").off("click");
  $("#checkboxFader").off("click");
  $(".selectionCheckboxAll").off("change");
  $(".selectionCheckbox").off("change");
  $(".selectBox").on("click", _0x4a6bfb);
  $("#checkboxFader").on("click", function () {
    $(".selectionOption").css("display", "none");
    $("#checkboxFader").css("display", "none");
  });
  $(".selectionCheckboxAll").on("change", function () {
    let _0x48a847 = this.dataset.id;
    $("[id^=select_" + _0x48a847 + '_]').prop("checked", this.checked);
    makeCommandsTableRows();
  });
  $(".selectionCheckbox").on("change", makeCommandsTableRows);
}
function get_active_commands() {
  let _0x405286 = [...$(".selectionCheckbox:checkbox:checked").map((_0x244730, _0x202c62) => {
    return [[_0x202c62.dataset.id, _0x202c62.dataset.option]];
  })];
  let _0x23f396 = _0x405286.reduce((_0x41d3ed, _0x14a839) => {
    let [_0x39e0de, _0xfe8058] = _0x14a839;
    if (!Object.keys(_0x41d3ed).includes(_0x39e0de)) {
      _0x41d3ed[_0x39e0de] = [];
    }
    _0x41d3ed[_0x39e0de].push(_0xfe8058);
    return _0x41d3ed;
  }, {});
  $(".selectBox").each((_0x5d6308, _0x11bcb8) => {
    _0x23f396[_0x11bcb8.dataset.id] = _0x23f396[_0x11bcb8.dataset.id] ? _0x23f396[_0x11bcb8.dataset.id] : [];
  });
  let _0x40b7d6 = [];
  $.each(commands, (_0x25b360, _0x5d70bd) => {
    let _0x5259b0 = _0x23f396.name.includes(_0x5d70bd.name);
    let _0x428fb0 = _0x23f396.type.includes(_0x5d70bd.type);
    let _0x5abe12 = _0x23f396.source.includes(_0x5d70bd.source);
    let _0x4e2bf0 = _0x23f396.target.includes(_0x5d70bd.target);
    let _0x1453c3 = _0x23f396.slowestUnit.includes(_0x5d70bd.slowestUnit);
    let _0x1159ea = _0x23f396.done.includes(_0x5d70bd.done.toString());
    if (_0x5259b0 && _0x428fb0 && _0x5abe12 && _0x4e2bf0 && _0x1453c3 && _0x1159ea) {
      _0x40b7d6.push({
        [_0x25b360]: _0x5d70bd
      });
    }
  });
  paginationHeaderSetup(_0x40b7d6.length);
  return Object.assign({}, ..._0x40b7d6);
}
function loadCommandsData() {
  if (overviewVars.commandIdCounter == null) {
    overviewVars.commandIdCounter = 0;
  }
  if (!overviewVars.commands) {
    overviewVars.commands = {};
  }
  objectReasign(commands, overviewVars.commands);
}
function pop_up_initializer() {
  let _0x13aaa8 = 0;
  let _0x32284d = 0;
  function _0x38726f(_0x49802f) {
    let _0x373125 = "<tr class=\"" + (_0x32284d++ % 2 ? "row_a" : "row_b") + "\">\n            <td><a class=\"templateLink\" data-templateid=\"" + _0x49802f.id + "\" href=\"javascript:void(0);\">" + _0x49802f.name + "</a></td>\n        </tr>";
    return _0x373125;
  }
  var _0x3c6f8e = "<div class=\"popup_box_container\" id=\"config_popup\" style=\"display:none;\">\n        <div class=\"popup_box show\" id=\"popup_box_popup_command\" style=\"min-width: 700px;\">\n            <div class=\"popup_box_content\">\n                <a class=\"popup_box_close tooltip-delayed\" id=\"popup_cross\" href=\"javascript:void(0)\"> </a>\n                <h3>Set attack units</h3>\n                <div style=\"display: grid;grid-template-columns: auto auto;grid-gap: 10px;\">\n                    <div style=\"min-width: 600px;\">\n                        <table>\n                            <tbody>\n                                <tr>\n                                    <td valign=\"top\">\n                                        <table class=\"vis\" width=\"100%\">\n                                            <tbody>\n                                                <tr>\n                                                    <th>Infantry</th><th>Send All</th>\n                                                </tr>\n                                                " + ("<tr><td class=\"nowrap\"><a href=\"javascript:void(0)\" class=\"unit_link\" data-unit=\"spear\"><img src=\"/graphic/unit/unit_spear.png\"></a> <input id=\"unit_input_spear\" name=\"spear\" type=\"text\" tabindex=\"" + _0x13aaa8++ + "\" value=\"" + unitProperties("spear", -1).value + "\" class=\"unitsInput\" Disabled></td><td align=\"center\"><input type=\"checkbox\" tabindex=\"" + _0x13aaa8++ + "\" id=\"" + "spear" + "_all\" class=\"popupCheckbox\" checked = \"" + unitProperties("spear", -1).checked + "\" data-unit=\"" + "spear" + "\"> </td></tr>") + "\n                                                " + ("<tr><td class=\"nowrap\"><a href=\"javascript:void(0)\" class=\"unit_link\" data-unit=\"sword\"><img src=\"/graphic/unit/unit_sword.png\"></a> <input id=\"unit_input_sword\" name=\"sword\" type=\"text\" tabindex=\"" + _0x13aaa8++ + "\" value=\"" + unitProperties("sword", -1).value + "\" class=\"unitsInput\" Disabled></td><td align=\"center\"><input type=\"checkbox\" tabindex=\"" + _0x13aaa8++ + "\" id=\"" + "sword" + "_all\" class=\"popupCheckbox\" checked = \"" + unitProperties("sword", -1).checked + "\" data-unit=\"" + "sword" + "\"> </td></tr>") + "\n                                                " + ("<tr><td class=\"nowrap\"><a href=\"javascript:void(0)\" class=\"unit_link\" data-unit=\"axe\"><img src=\"/graphic/unit/unit_axe.png\"></a> <input id=\"unit_input_axe\" name=\"axe\" type=\"text\" tabindex=\"" + _0x13aaa8++ + "\" value=\"" + unitProperties('axe', -1).value + "\" class=\"unitsInput\" Disabled></td><td align=\"center\"><input type=\"checkbox\" tabindex=\"" + _0x13aaa8++ + "\" id=\"" + 'axe' + "_all\" class=\"popupCheckbox\" checked = \"" + unitProperties('axe', -1).checked + "\" data-unit=\"" + 'axe' + "\"> </td></tr>") + "\n                                                " + (Object.keys(unitsData).includes("archer") ? "<tr><td class=\"nowrap\"><a href=\"javascript:void(0)\" class=\"unit_link\" data-unit=\"archer\"><img src=\"/graphic/unit/unit_archer.png\"></a> <input id=\"unit_input_archer\" name=\"archer\" type=\"text\" tabindex=\"" + _0x13aaa8++ + "\" value=\"" + unitProperties("archer", -1).value + "\" class=\"unitsInput\" Disabled></td><td align=\"center\"><input type=\"checkbox\" tabindex=\"" + _0x13aaa8++ + "\" id=\"" + "archer" + "_all\" class=\"popupCheckbox\" checked = \"" + unitProperties("archer", -1).checked + "\" data-unit=\"" + "archer" + "\"> </td></tr>" : '') + "\n                                            </tbody>\n                                        </table>\n                                    </td>\n                                    <td valign=\"top\">\n                                        <table class=\"vis\" width=\"100%\">\n                                            <tbody>\n                                                <tr>\n                                                    <th>Cavalry</th><th>Send All</th>\n                                                </tr>\n                                                " + ("<tr><td class=\"nowrap\"><a href=\"javascript:void(0)\" class=\"unit_link\" data-unit=\"spy\"><img src=\"/graphic/unit/unit_spy.png\"></a> <input id=\"unit_input_spy\" name=\"spy\" type=\"text\" tabindex=\"" + _0x13aaa8++ + "\" value=\"" + unitProperties("spy", -1).value + "\" class=\"unitsInput\" Disabled></td><td align=\"center\"><input type=\"checkbox\" tabindex=\"" + _0x13aaa8++ + "\" id=\"" + "spy" + "_all\" class=\"popupCheckbox\" checked = \"" + unitProperties("spy", -1).checked + "\" data-unit=\"" + "spy" + "\"> </td></tr>") + "\n                                                " + ("<tr><td class=\"nowrap\"><a href=\"javascript:void(0)\" class=\"unit_link\" data-unit=\"light\"><img src=\"/graphic/unit/unit_light.png\"></a> <input id=\"unit_input_light\" name=\"light\" type=\"text\" tabindex=\"" + _0x13aaa8++ + "\" value=\"" + unitProperties("light", -1).value + "\" class=\"unitsInput\" Disabled></td><td align=\"center\"><input type=\"checkbox\" tabindex=\"" + _0x13aaa8++ + "\" id=\"" + "light" + "_all\" class=\"popupCheckbox\" checked = \"" + unitProperties("light", -1).checked + "\" data-unit=\"" + "light" + "\"> </td></tr>") + "\n                                                " + (Object.keys(unitsData).includes("marcher") ? "<tr><td class=\"nowrap\"><a href=\"javascript:void(0)\" class=\"unit_link\" data-unit=\"marcher\"><img src=\"/graphic/unit/unit_marcher.png\"></a> <input id=\"unit_input_marcher\" name=\"marcher\" type=\"text\" tabindex=\"" + _0x13aaa8++ + "\" value=\"" + unitProperties("marcher", -1).value + "\" class=\"unitsInput\" Disabled></td><td align=\"center\"><input type=\"checkbox\" tabindex=\"" + _0x13aaa8++ + "\" id=\"" + "marcher" + "_all\" class=\"popupCheckbox\" checked = \"" + unitProperties("marcher", -1).checked + "\" data-unit=\"" + "marcher" + "\"> </td></tr>" : '') + "\n                                                " + ("<tr><td class=\"nowrap\"><a href=\"javascript:void(0)\" class=\"unit_link\" data-unit=\"heavy\"><img src=\"/graphic/unit/unit_heavy.png\"></a> <input id=\"unit_input_heavy\" name=\"heavy\" type=\"text\" tabindex=\"" + _0x13aaa8++ + "\" value=\"" + unitProperties("heavy", -1).value + "\" class=\"unitsInput\" Disabled></td><td align=\"center\"><input type=\"checkbox\" tabindex=\"" + _0x13aaa8++ + "\" id=\"" + "heavy" + "_all\" class=\"popupCheckbox\" checked = \"" + unitProperties("heavy", -1).checked + "\" data-unit=\"" + "heavy" + "\"> </td></tr>") + "\n                                            </tbody>\n                                        </table>\n                                    </td>\n                                    <td valign=\"top\">\n                                        <table class=\"vis\" width=\"100%\">\n                                            <tbody>\n                                                <tr>\n                                                    <th>Siege Weapons</th><th>Send All</th>\n                                                </tr>\n                                                " + ("<tr><td class=\"nowrap\"><a href=\"javascript:void(0)\" class=\"unit_link\" data-unit=\"ram\"><img src=\"/graphic/unit/unit_ram.png\"></a> <input id=\"unit_input_ram\" name=\"ram\" type=\"text\" tabindex=\"" + _0x13aaa8++ + "\" value=\"" + unitProperties("ram", -1).value + "\" class=\"unitsInput\" Disabled></td><td align=\"center\"><input type=\"checkbox\" tabindex=\"" + _0x13aaa8++ + "\" id=\"" + "ram" + "_all\" class=\"popupCheckbox\" checked = \"" + unitProperties("ram", -1).checked + "\" data-unit=\"" + "ram" + "\"> </td></tr>") + "\n                                                " + ("<tr><td class=\"nowrap\"><a href=\"javascript:void(0)\" class=\"unit_link\" data-unit=\"catapult\"><img src=\"/graphic/unit/unit_catapult.png\"></a> <input id=\"unit_input_catapult\" name=\"catapult\" type=\"text\" tabindex=\"" + _0x13aaa8++ + "\" value=\"" + unitProperties("catapult", -1).value + "\" class=\"unitsInput\" Disabled></td><td align=\"center\"><input type=\"checkbox\" tabindex=\"" + _0x13aaa8++ + "\" id=\"" + "catapult" + "_all\" class=\"popupCheckbox\" checked = \"" + unitProperties("catapult", -1).checked + "\" data-unit=\"" + "catapult" + "\"> </td></tr>") + "\n                                            </tbody>\n                                        </table>\n                                    </td>\n                                    <td valign=\"top\">\n                                        <table class=\"vis\" width=\"100%\">\n                                            <tbody>\n                                                <tr>\n                                                    <th>Others</th><th>Send All</th>\n                                                </tr>\n                                                " + (Object.keys(unitsData).includes("knight") ? "<tr><td class=\"nowrap\"><a href=\"javascript:void(0)\" class=\"unit_link\" data-unit=\"knight\"><img src=\"/graphic/unit/unit_knight.png\"></a> <input id=\"unit_input_knight\" name=\"knight\" type=\"text\" tabindex=\"" + _0x13aaa8++ + "\" value=\"" + unitProperties("knight", -1).value + "\" class=\"unitsInput\" Disabled></td><td align=\"center\"><input type=\"checkbox\" tabindex=\"" + _0x13aaa8++ + "\" id=\"" + "knight" + "_all\" class=\"popupCheckbox\" checked = \"" + unitProperties("knight", -1).checked + "\" data-unit=\"" + "knight" + "\"> </td></tr>" : '') + "\n                                                " + ("<tr><td class=\"nowrap\"><a href=\"javascript:void(0)\" class=\"unit_link\" data-unit=\"snob\"><img src=\"/graphic/unit/unit_snob.png\"></a> <input id=\"unit_input_snob\" name=\"snob\" type=\"text\" tabindex=\"" + _0x13aaa8++ + "\" value=\"" + unitProperties("snob", -1).value + "\" class=\"unitsInput\" Disabled></td><td align=\"center\"><input type=\"checkbox\" tabindex=\"" + _0x13aaa8++ + "\" id=\"" + "snob" + "_all\" class=\"popupCheckbox\" checked = \"" + unitProperties("snob", -1).checked + "\" data-unit=\"" + "snob" + "\"> </td></tr>") + "\n                                            </tbody>\n                                        </table>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                    <div class=\"vis\" style=\"margin: 4px 10px 0px 10px; min-width: 125px; float:right; height:max-content\">\n                        <h4>\n                            <a href=\"" + window.location.origin + "/game.php?screen=place&mode=templates\">Troop templates</a>\n                        </h4>\n                        <table class=\"vis\" style=\"width: 100%\">\n                            <tbody>\n                               " + $.map(templatesData, _0x339d34 => _0x38726f(_0x339d34)).join("\n") + "\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n                <br>\n                <table>\n                    <thead>\n                        <tr>\n                            <th style=\"text-align: center;\">Name</th>\n                            <th style=\"text-align: center;\">Source</th>\n                            <th style=\"text-align: center;\">Target</th>\n                            <th style=\"text-align: center;\">\n                                <select id=\"popupTime\">\n                                        <option value=\"arrival\"><strong>Arrival time</strong></option>\n                                        <option value=\"launch\"><strong>Launch time</strong></option>\n                                </select>\n                            </th>\n                            <th style=\"text-align: center;\">Type</th>\n                            <th style=\"text-align: center;\">Max(%)</th>\n                            <th style=\"text-align: center;\">Sigil(%)</th>\n                            <th style=\"text-align: center;\">Leave Spies</th>\n                            <th style=\"text-align: center;\">Leave Cats</th>\n                            <th style=\"text-align: center;\">Leave Rams</th>\n                            <th style=\"text-align: center;\">Random Launch Offset</th>\n                            <th style=\"text-align: center;\">Catapult Target</th>\n                            <th style=\"text-align: center;\">NT Template</th>\n                            <th style=\"text-align: center;\">Auto Send?</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td style=\"\"><input type=\"text\" id=\"popupName\"style=\"width:100px\" placeholder=\"Name\"></td>\n                            <td style=\"\"><input type=\"text\" id=\"popupSource\"style=\"width:45px\" placeholder=\"555|555\"></td>\n                            <td style=\"\"><input type=\"text\" id=\"popupTarget\" style=\"width:45px\" placeholder=\"555|555\"></td>\n                            <td style=\"\"><input type=\"datetime-local\" id=\"popupDate\" step=\".001\"></td>\n                            <td style=\"\">\n                                <select id=\"popupCommandTypeSelection\" style=\"width: 70px;\">\n                                    <option value=\"Attack\" >Attack</option>\n                                    <option value=\"Support\">Support</option>\n                                </select>\n                            </td>\n                            <td style=\"\"><input type=\"text\" id=\"popupToUse\" style=\"width:50px\" value=\"100\">\n                            <td style=\"\"><input type=\"text\" id=\"popupSigil\" style=\"width:50px\" value=\"100\">\n                            <td style=\"\"><input type=\"text\" id=\"popupLeaveSpies\" style=\"width:50px\" value=\"100\">\n                            <td style=\"\"><input type=\"text\" id=\"popupLeaveCats\" style=\"width:50px\" value=\"100\">\n                            <td style=\"\"><input type=\"text\" id=\"popupLeaveRams\" style=\"width:50px\" value=\"100\">\n                            <td style=\"\"><input type=\"text\" id=\"popupRandomLaunchTimeOffset\" style=\"width:50px\" value=\"100\">\n                            <td style=\"\">\n                                <select id=\"popUpCatapultTarget\" style=\"width: 70px;\"></select>\n                            </td>\n                            <td style=\"\">\n                                <select id=\"popupNtTemplate\" style=\"width: 70px;\"></select>\n                            </td>\n                            <td style=\"text-align: center;vertical-align: middle;\"><input type=\"checkbox\" id=\"popupAutoSend\">\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <table>\n                    <tbody>\n                        <tr>\n                            <td id=\"popupSetDiv\">\n                                <input id=\"popupSet\" tabindex=\"15\" class=\"btn\" name=\"set_troops\" type=\"submit\" value=\"Save\">\n                            </td>\n                            <td>\n                                <input id=\"popupSetNew\" tabindex=\"15\" class=\"btn\" name=\"set_troops\" type=\"submit\" value=\"Create New\">\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n    <div class=\"fader\" id=\"popup_fader\" style=\"display:none;\"></div>";
  $("#memoPlanner").append(_0x3c6f8e);
  let _0x2b6b2d = $(".popupCheckbox");
  _0x2b6b2d.off("change");
  _0x2b6b2d.on("change", function () {
    let _0x3004b7 = $(this)[0];
    let _0x1fa96a = _0x3004b7.dataset.unit;
    $("#unit_input_" + _0x1fa96a)[0].disabled = _0x3004b7.checked;
  });
  let _0x101c7e = $(".templateLink");
  _0x101c7e.off("click");
  _0x101c7e.on("click", function () {
    fillPopupFromTemplate(templatesData[this.dataset.templateid]);
  });
  $("#popup_fader").off("click");
  $("#popup_cross").off("click");
  $("#popup_fader").on("click", function () {
    closeConfigPopup(false);
  });
  $("#popup_cross").on("click", function () {
    closeConfigPopup(false);
  });
  $.each(ntTemplates, _0xc89981 => {
    $("#popupNtTemplate").append($("<option>", {
      'id': _0xc89981,
      'text': ntTemplates[_0xc89981].name
    }));
  });
  $.each(gameData.village.buildings, _0x5f4772 => {
    $("#popUpCatapultTarget").append($("<option>", {
      'id': _0x5f4772 + "PopUp",
      'text': _0x5f4772
    }));
  });
}
function fillPopupFromTemplate(_0x53f610) {
  setPopupUnits(_0x53f610.units);
}
function unitProperties(_0x55b551, _0x2ff49e) {
  let _0x315a95 = !(_0x2ff49e != -1);
  let _0x2a8f0b = !(_0x2ff49e != -1);
  let _0x25294b = _0x2ff49e > 0 ? _0x2ff49e : '';
  return {
    'disabled': _0x315a95,
    'checked': _0x2a8f0b,
    'value': _0x25294b
  };
}
function setPopupUnits(_0x3e02f6) {
  $.each(_0x3e02f6, (_0x5a057, _0x37cf12) => {
    if (Object.keys(unitsData).includes(_0x5a057)) {
      $("#unit_input_" + _0x5a057)[0].value = unitProperties(_0x5a057, _0x37cf12).value;
      $("#unit_input_" + _0x5a057)[0].disabled = unitProperties(_0x5a057, _0x37cf12).disabled;
      $('#' + _0x5a057 + "_all")[0].checked = unitProperties(_0x5a057, _0x37cf12).checked;
    }
  });
}
function setPopupProperties(_0x30e4ff) {
  let _0x3c5aa3 = {};
  if (!commands[_0x30e4ff]) {
    $.each(unitsData, _0x574d6d => _0x3c5aa3[_0x574d6d] = -1);
  } else {
    _0x3c5aa3 = commands[_0x30e4ff].units;
  }
  setPopupUnits(_0x3c5aa3);
  if (_0x30e4ff != -1) {
    $("#popupName")[0].value = commands[_0x30e4ff].name;
    $("#popupSource")[0].value = commands[_0x30e4ff].source;
    $("#popupTarget")[0].value = commands[_0x30e4ff].target;
    $("#popupDate").val(convertToInput(new Date(commands[_0x30e4ff].arrivalTime)));
    $("#popupCommandTypeSelection").val(commands[_0x30e4ff].type);
    $("#popupToUse").val(commands[_0x30e4ff].toUse ? commands[_0x30e4ff].toUse : 100);
    $("#popupAutoSend").prop("checked", commands[_0x30e4ff].autoSend);
    $("#popupRandomLaunchTimeOffset").val(commands[_0x30e4ff].randomOffset ? commands[_0x30e4ff].randomOffset : 0);
    $("#popupSigil").val(commands[_0x30e4ff].sigil ? commands[_0x30e4ff].sigil : 0);
    $("#popupLeaveSpies").val(commands[_0x30e4ff].leaveSpies ? commands[_0x30e4ff].leaveSpies : 0);
    $("#popupLeaveCats").val(commands[_0x30e4ff].leaveCats ? commands[_0x30e4ff].leaveCats : 0);
    $("#popupLeaveRams").val(commands[_0x30e4ff].leaveRams ? commands[_0x30e4ff].leaveRams : 0);
    $('#' + commands[_0x30e4ff].ntTemplate).prop("selected", true);
    $('#' + commands[_0x30e4ff].catapultTarget + "PopUp").prop("selected", true);
  } else {
    $("#popupName")[0].value = $("#quickAddName")[0].value;
    $("#popupSource")[0].value = $("#quickAddSource")[0].value;
    $("#popupTarget")[0].value = $("#quickAddTarget")[0].value;
    $("#popupDate").val(convertToInput(new Date($("#quickAddDate")[0].value)));
    $("#popupCommandTypeSelection")[0].value = $("#quickAddCommandTypeSelection")[0].value;
    $("#popupToUse").val(100);
    $("#popupSigil").val(0);
    $("#popupLeaveCats").val(0);
    $("#popupLeaveSpies").val(0);
    $("#popupLeaveRams").val(0);
    $("#popupAutoSend").prop("checked", true);
    $("#popupRandomLaunchTimeOffset").val(0);
    $("#popupNtTemplate").val(ntTemplates[getSelectedNtTemplate()].id);
    $('#' + getSelectedNtTemplate()).prop("selected", true);
    $("#popUpCatapultTarget").val(settings.currentCatapultTarget);
    $('#' + settings.currentCatapultTarget + "PopUp").prop("selected", true);
  }
}
function openConfigPopup(_0x48c1e7 = -1) {
  _0x48c1e7 = parseInt(_0x48c1e7);
  setPopupProperties(_0x48c1e7);
  $("#config_popup")[0].style.display = "flex";
  $("#popup_fader")[0].style.display = "flex";
  if (_0x48c1e7 == -1) {
    $("#popupSetDiv")[0].style.display = "none";
  } else {
    $("#popupSetDiv")[0].style.display = "flex";
  }
  $("#popupSet").off("click");
  $("#popupSet").on("click", function () {
    closeConfigPopup(true, _0x48c1e7);
  });
  $("#popupSetNew").off("click");
  $("#popupSetNew").on("click", function () {
    closeConfigPopup(true, -1, false);
  });
}
function closeConfigPopup(_0x4441d2, _0x24dc29 = -1, _0x4816d6 = true) {
  if (_0x4441d2) {
    let _0x402cea = $("#popupName")[0].value;
    let _0x306b7d = $("#popupSource")[0].value;
    let _0x2a08ce = $("#popupTarget")[0].value;
    let _0x32f3c4;
    let _0x3687f8;
    if ($("#popupTime")[0].value == "launch") {
      _0x32f3c4 = new Date($("#popupDate")[0].value);
    } else {
      _0x3687f8 = new Date($("#popupDate")[0].value);
    }
    let _0x4a57c4 = $("#popupCommandTypeSelection")[0].value;
    let _0xd26881 = Object.assign({}, ...$.map(unitsData, (_0x38610f, _0x166df0) => {
      let _0x572ab3 = $("#unit_input_" + _0x166df0)[0].value;
      let _0x4d5e13 = $('#' + _0x166df0 + "_all")[0].checked;
      return {
        [_0x166df0]: _0x4d5e13 ? -1 : _0x572ab3
      };
    }));
    let _0xca1280 = $("#popupToUse")[0].value;
    let _0x1b7a5d = $("#popupAutoSend").is(":checked");
    let _0x1f6a6a = $("#popupRandomLaunchTimeOffset")[0].value;
    let _0x316c40 = $("#popupSigil")[0].value;
    let _0xc671d5 = $("#popupLeaveCats")[0].value;
    let _0x358c47 = $("#popupLeaveSpies")[0].value;
    let _0x1837c7 = $("#popupLeaveRams")[0].value;
    let _0x34d4c1 = "firstNobleRedNT";
    let _0x1668ec = $("#popUpCatapultTarget").find(":selected").attr("text");
    let _0x1950ec = $("#popupNtTemplate").find(":selected").attr('id');
    if (_0x1950ec) {
      _0x34d4c1 = _0x1950ec;
    }
    setCommand(_0x402cea, _0x306b7d, _0x2a08ce, _0x32f3c4, _0x3687f8, _0x4a57c4, {
      'units': _0xd26881,
      'id': _0x24dc29,
      'useDefaultTemplate': false,
      'toUse': _0xca1280,
      'autoSend': _0x1b7a5d,
      'sigil': _0x316c40,
      'randomOffset': _0x1f6a6a,
      'leaveCats': _0xc671d5,
      'leaveSpies': _0x358c47,
      'leaveRams': _0x1837c7,
      'ntTemplate': _0x34d4c1,
      'catapultTarget': _0x1668ec
    });
    makeCommandsTable(false);
  }
  if (_0x4816d6) {
    $("#config_popup")[0].style.display = "none";
    $("#popup_fader")[0].style.display = "none";
  }
}
function initTroopsTemplates() {
  return new Promise(function (_0x3d3eed, _0x733f7a) {
    $.get("/game.php?" + (sitter ? sitter + '&' : '') + "village=" + gameData.village.id + "&screen=place&mode=templates", function (_0x221be2) {
      const _0x32c03f = new DOMParser();
      const _0x2e7f6a = _0x32c03f.parseFromString(_0x221be2, "text/html");
      const _0x571f64 = _0x2e7f6a.getElementById("troop_template").childNodes[5];
      const _0x27a814 = _0x571f64.innerHTML.split("\n")[2];
      const _0x5447bd = JSON.parse(_0x27a814.match(/.+=(.+);/)[1]);
      _0x3d3eed(createTemplateDataFromObject(_0x5447bd));
    }).fail(() => _0x733f7a(printError("Error getting troop templates")));
  });
}
function createTemplateDataFromObject(_0x16fdb2) {
  const _0x46cbe8 = {};
  addDefaultTemplates(_0x46cbe8);
  $.each(_0x16fdb2, _0x3ad0fe => {
    let _0x3fc6cf = {};
    $.each(unitsData, _0x10aac0 => {
      _0x3fc6cf[_0x10aac0] = parseInt(_0x16fdb2[_0x3ad0fe][_0x10aac0]) < 0 ? -1 : parseInt(_0x16fdb2[_0x3ad0fe][_0x10aac0]);
    });
    const _0xc62152 = _0x16fdb2[_0x3ad0fe].use_all;
    $.each(_0xc62152, _0x3688bf => {
      _0x3fc6cf[_0xc62152[_0x3688bf]] = -1;
    });
    _0x46cbe8[_0x3ad0fe] = {
      'id': _0x16fdb2[_0x3ad0fe].id,
      'name': _0x16fdb2[_0x3ad0fe].name,
      'units': _0x3fc6cf
    };
  });
  return _0x46cbe8;
}
function addDefaultTemplates(_0x133a40) {
  _0x133a40.default_attack = default_Attack_Template;
  _0x133a40.default_support = default_Support_Template;
  _0x133a40.default_all = default_All_Template;
}
function setupTemplateUI() {
  $.each(templatesData, _0x2850a6 => {
    $(".templateDropdown").append($("<option>", {
      'value': templatesData[_0x2850a6].id,
      'text': templatesData[_0x2850a6].name
    }));
  });
  $(".attackTemplate").val(settings.currentAttackTemplate);
  $(".supportTemplate").val(settings.currentSupportTemplate);
}
function setupCatapultTargetUI() {
  const _0x857d4f = gameData.village.buildings;
  $.each(_0x857d4f, _0x529694 => {
    $("#catapultTarget").append($("<option>", {
      'id': _0x529694,
      'text': _0x529694
    }));
  });
  $("#catapultTarget").val(settings.currentCatapultTarget);
}
function memoSetup() {
  setupNotesListeners();
  createPlanningButton();
}
function setupNotesListeners() {
  $(".memo-tab").not("#tab_Planner").click(unfocusPlanner);
  Memo._addTab = Memo.addTab;
  Memo.addTab = async () => {
    Memo._addTab();
    unfocusPlanner();
  };
}
function loadFocused() {
  if (overviewVars.focused == null) {
    overviewVars.focused = false;
  }
}
function createPlanningButton() {
  const _0x100a0d = document.getElementById("tab-bar");
  const _0x2ca1b5 = document.createElement("div");
  _0x2ca1b5.setAttribute('id', "tab_Planner");
  _0x2ca1b5.setAttribute("class", "memo-tab");
  _0x100a0d.parentNode.insertBefore(_0x2ca1b5, _0x100a0d.nextSibling);
  setupTabButton();
}
function focusPlanner() {
  if (overviewVars.focused) {
    return;
  }
  $(".memo-tab").not("#tab_Planner").off("click");
  $(".memo-tab").not("#tab_Planner").click(unfocusPlanner);
  $(".memo_container").hide();
  overviewVars.focused = true;
  $("#memoPlanner")[0].style.display = "block";
  $("#tab_Planner")[0].innerHTML = "\n    <span class=\"memo-tab-label\">\n        <strong>Auto Sender</strong>\n    </span>";
  $("#tab-bar > div").removeClass("memo-tab-selected");
  let _0x4a8a5c = $("#tab_" + Memo.selectedTab)[0].innerText;
  $("#tab_" + Memo.selectedTab + " > .memo-tab-label")[0].innerHTML = "<a href=\"#\" onclick=\"Memo.selectTab(" + Memo.selectedTab + "); return false\">" + _0x4a8a5c + "</a>";
  $("#tab_Planner")[0]["class"] = "memo-tab memo-tab-selected";
}
function unfocusPlanner() {
  if (!overviewVars.focused) {
    return;
  }
  overviewVars.focused = false;
  $("#memoPlanner")[0].style.display = "none";
  $("#memo_" + Memo.selectedTab)[0].style.display = "block";
  $("#tab_Planner")[0]["class"] = "memo-tab";
  setupTabButton();
}
function setupTabButton() {
  $("#tab_Planner")[0].innerHTML = "<span class=\"memo-tab-label\">\n        <a id=\"plannerButton\" href=\"javascript:void(0)\">Auto Sender</a>\n        </span>";
  $("#plannerButton").off("click");
  $("#plannerButton").on("click", focusPlanner);
}
function initWorldSettings() {
  return new Promise(function (_0xb5dbc9, _0x562cf5) {
    $.get("/interface.php?func=get_config").done(function (_0x32fbc1) {
      _0xb5dbc9(xmlToJson(_0x32fbc1).config);
    }).fail(() => _0x562cf5(printError("Error world settings")));
  });
}
function getCoordsFromString(_0x298094) {
  return getCoordsFromPlan(_0x298094)[0].split('|');
}
function getCoordsFromPlan(_0x3b2241) {
  const _0x438e2f = _0x3b2241.match(/\d+\|\d+/ig);
  return _0x438e2f ? _0x438e2f : null;
}
function getDateFromPlan(_0x58dafa) {
  const _0x1d38c7 = _0x58dafa.match(/(\d{1,2}([:.])\d{1,2}([:.])\d{1,2}(([.])\d{3})?)/g);
  const _0x2655e6 = _0x58dafa.match(/(\d{1,4}([\-\/])\d{1,2}([\-\/])\d{1,4})/g);
  let _0x4af958 = new Date(_0x1d38c7[0] + " " + _0x2655e6[0].replace(/(\d{1,2})([\/\-])(\d{1,2})([\/\-])(\d{4})/g, "$3$2$1$4$5"));
  if (!readMSFromPlan) {
    if (_0x4af958.getMilliseconds() >= 500) {
      _0x4af958.setSeconds(_0x4af958.getSeconds() + 1);
    }
    _0x4af958.setMilliseconds(settings.setMSWholePlane);
  }
  return _0x4af958;
}
function getSlowestUnitFromPlan(_0x3a419f) {
  let _0x29cf9c = _0x3a419f.match(/(?<=\[unit\])(.*?)(?=\[\/unit\])/ig);
  if (!_0x29cf9c) {
    $.each(troops_data, _0x37ef33 => {
      if (_0x3a419f.toLowerCase().includes(_0x37ef33)) {
        _0x29cf9c = _0x37ef33;
      } else {
        if (_0x37ef33 == "snob" && (_0x3a419f.toLowerCase().includes("noble") || _0x3a419f.toLowerCase().includes("nobleman"))) {
          _0x29cf9c = _0x37ef33;
        } else {
          if (_0x37ef33 == "catapult" && _0x3a419f.toLowerCase().includes('cat')) {
            _0x29cf9c = _0x37ef33;
          }
        }
      }
    });
  } else {
    _0x29cf9c = _0x29cf9c[0];
  }
  return _0x29cf9c;
}
function getCommandTypeFromPlan(_0x4f965e) {
  if (_0x4f965e.toLowerCase().includes("support")) {
    return "Support";
  } else {
    return "Attack";
  }
}
function calculateDistance(_0x711c3d, _0x473c61) {
  const _0x5992ff = getCoordsFromPlan(_0x711c3d)[0].split('|');
  const _0x2531de = getCoordsFromPlan(_0x473c61)[0].split('|');
  const _0x3e42ee = Math.abs(_0x2531de[0] - _0x5992ff[0]);
  const _0x187089 = Math.abs(_0x2531de[1] - _0x5992ff[1]);
  return Math.sqrt(_0x3e42ee * _0x3e42ee + _0x187089 * _0x187089);
}
function dateCommandComparator(_0x327c94, _0x2c7b04) {
  let _0x98fe03 = _0x327c94;
  if (!(_0x327c94 instanceof Date)) {
    _0x98fe03 = new Date(_0x327c94.launchTime);
  }
  let _0x1b3d62 = _0x2c7b04;
  if (!(_0x2c7b04 instanceof Date)) {
    _0x1b3d62 = new Date(_0x2c7b04.launchTime);
  }
  if (_0x98fe03.valueOf() > _0x1b3d62.valueOf()) {
    return 1;
  } else {
    if (_0x98fe03.valueOf() < _0x1b3d62.valueOf()) {
      return -1;
    } else {
      return 0;
    }
  }
}
function dateCommandComparatorWithRandom(_0x392c38, _0x1910df) {
  let _0x1c1dc7 = _0x392c38;
  if (!(_0x392c38 instanceof Date)) {
    _0x1c1dc7 = new Date(_0x392c38.launchTime);
    if (_0x392c38.randomOffset > 0) {
      _0x1c1dc7 = new Date(_0x392c38.randomOffsetTime);
    }
    if (!_0x1c1dc7) {
      _0x1c1dc7 = new Date(_0x392c38.launchTime);
    }
  }
  let _0x2ac195 = _0x1910df;
  if (!(_0x1910df instanceof Date)) {
    _0x2ac195 = new Date(_0x1910df.launchTime);
    if (_0x1910df.randomOffset > 0) {
      _0x2ac195 = new Date(_0x1910df.randomOffsetTime);
    }
    if (!_0x2ac195) {
      _0x1c1dc7 = new Date(_0x392c38.launchTime);
    }
  }
  if (_0x1c1dc7.valueOf() > _0x2ac195.valueOf()) {
    return 1;
  } else {
    if (_0x1c1dc7.valueOf() < _0x2ac195.valueOf()) {
      return -1;
    } else {
      return 0;
    }
  }
}
function convertToInput(_0x5c4ea2) {
  let _0x40d2b6 = new Date(_0x5c4ea2);
  _0x40d2b6.setMinutes(_0x5c4ea2.getMinutes() - _0x5c4ea2.getTimezoneOffset());
  return _0x40d2b6.toISOString().slice(0, 23);
}
function convertDateToString(_0x5c6f2c) {
  let _0x535c98 = _0x5c6f2c;
  if (!(_0x5c6f2c instanceof Date)) {
    _0x535c98 = new Date(_0x5c6f2c);
  }
  const _0x5ea1ae = _0x535c98.getHours().toLocaleString("en-US", {
    'minimumIntegerDigits': 2,
    'useGrouping': false
  }) + ':' + _0x535c98.getMinutes().toLocaleString("en-US", {
    'minimumIntegerDigits': 2,
    'useGrouping': false
  }) + ':' + _0x535c98.getSeconds().toLocaleString("en-US", {
    'minimumIntegerDigits': 2,
    'useGrouping': false
  }) + '.' + _0x535c98.getMilliseconds().toLocaleString("en-US", {
    'minimumIntegerDigits': 3,
    'useGrouping': false
  });
  const _0x827725 = _0x535c98.getDate() + '/' + (_0x535c98.getMonth() + 1) + '/' + _0x535c98.getFullYear();
  return _0x5ea1ae + " " + _0x827725;
}
function convertDigit(_0x17ab2e, _0x27a31e) {
  return _0x17ab2e.toLocaleString("en-US", {
    'minimumIntegerDigits': _0x27a31e,
    'useGrouping': false
  });
}
function calculateMissingTimes(_0x25daae) {
  const _0x26d823 = calculateTravelTime(_0x25daae);
  if (_0x25daae.launchTime == undefined) {
    _0x25daae.launchTime = new Date(_0x25daae.arrivalTime.getTime() - _0x26d823);
  } else {
    _0x25daae.arrivalTime = new Date(_0x25daae.launchTime.getTime() + _0x26d823);
  }
  if (_0x25daae.randomOffsetTime == undefined) {
    _0x25daae.randomOffsetTime = new Date(_0x25daae.launchTime.getTime() + Math.random() * (_0x25daae.launchTime.getTime() + _0x25daae.randomOffset * 60000 - _0x25daae.launchTime.getTime()));
  }
}
function calculateTravelTime(_0x333963) {
  let _0x22d309 = worldSettings.config.speed;
  let _0x18e93f = worldSettings.config.unit_speed;
  let _0x2f3e19 = calculateDistance(_0x333963.source, _0x333963.target);
  let _0x3e53e8 = 1 + _0x333963.sigil / 100;
  if (_0x333963.type == "Attack") {
    _0x3e53e8 = 1;
  }
  let _0x5bbf95 = troops_data[_0x333963.slowestUnit];
  let _0x37005c = 1000 * Math.round(_0x2f3e19 * (_0x5bbf95 / _0x22d309 / _0x18e93f) / _0x3e53e8);
  return _0x37005c;
}
function getRandomDate(_0x42af82, _0xb1ffb) {
  return new Date(_0x42af82 + Math.random() * (_0xb1ffb - _0x42af82));
}
function paginationHeaderSetup(_0x3c4446) {
  const _0x1409df = Math.ceil(_0x3c4446 / commandsPerPage);
  let _0x5c828d = '';
  for (let _0x3acde2 = 1; _0x3acde2 <= _0x1409df; _0x3acde2++) {
    if (currentPage == _0x3acde2) {
      _0x5c828d += "<strong> &gt;" + _0x3acde2 + "&lt; </strong>";
    } else {
      _0x5c828d += "<a class=\"paged-nav-item\" style=\"cursor: pointer;\" id=\"page_command_" + _0x3acde2 + "\" data-id=\"" + _0x3acde2 + "\"> [" + _0x3acde2 + "] </a>";
    }
  }
  if (currentPage == -1 && _0x1409df > 1) {
    _0x5c828d += "<strong> &gt;All&lt; </strong>";
  } else {
    if (_0x1409df > 1) {
      _0x5c828d += "<a class=\"paged-nav-item\" style=\"cursor: pointer;\" id=\"page_command_all\" data-id=\"-1\"> [All] </a>";
    }
  }
  setHTML(_0x5c828d, "#commands_table_pages", {
    'callback': setPagesClickListeners
  });
}
function setPagesClickListeners() {
  $("[id^=page_command_]").off("click");
  $("[id^=page_command_]").on("click", function () {
    currentPage = parseInt(this.dataset.id);
    makeCommandsTableRows();
  });
}
function savePagination() {
  const _0x1f7cbc = document.getElementById("commandsPerPageSetting").value;
  if (_0x1f7cbc != '') {
    commandsPerPage = parseInt(_0x1f7cbc);
  }
  settings.commandsPerPage = commandsPerPage;
  currentPage = 1;
}
function saveOpenTabDelay() {
  const _0x4cf91d = document.getElementById("openTabDelay").value;
  let _0x29e844 = 0;
  if (_0x4cf91d != '') {
    _0x29e844 = parseInt(_0x4cf91d);
  }
  settings.openTabDelay = _0x29e844;
}
function saveOffset() {
  const _0x33ed3c = document.getElementById("timing_offset").value;
  let _0x3c3b03 = 0;
  if (_0x33ed3c != '') {
    _0x3c3b03 = parseInt(_0x33ed3c);
  }
  settings.timing_offset = _0x3c3b03;
}
function saveAutoOffset() {
  const _0x22e46d = document.getElementById("autoTimingOffsetMultiplier").value;
  let _0x429e15 = 0.25;
  if (_0x22e46d != '') {
    _0x429e15 = parseFloat(_0x22e46d);
  }
  settings.autoTimingOffsetMultiplier = _0x429e15;
}
function saveToUse() {
  const _0x448ff7 = document.getElementById("toUse_percentage").value;
  let _0x2b431f = 100;
  if (_0x448ff7 != '') {
    _0x2b431f = parseInt(_0x448ff7);
  }
  settings.toUse = _0x2b431f;
}
function saveSigil() {
  const _0x31741a = document.getElementById("sigil_percentage").value;
  let _0x51ef06 = 0;
  if (_0x31741a != '') {
    _0x51ef06 = parseInt(_0x31741a);
  }
  settings.sigil = _0x51ef06;
}
function saveLeaveCats() {
  const _0x23694c = document.getElementById("leaveCatsAtHome").value;
  let _0x59d6a6 = 0;
  if (_0x23694c != '') {
    _0x59d6a6 = parseInt(_0x23694c);
  }
  settings.leaveCats = _0x59d6a6;
}
function saveLeaveSpies() {
  const _0x250827 = document.getElementById("leaveSpiesAtHome").value;
  let _0x55901f = 0;
  if (_0x250827 != '') {
    _0x55901f = parseInt(_0x250827);
  }
  settings.leaveSpies = _0x55901f;
}
function saveLeaveRams() {
  const _0x363465 = document.getElementById("leaveRamsAtHome").value;
  let _0xeae4ad = 0;
  if (_0x363465 != '') {
    _0xeae4ad = parseInt(_0x363465);
  }
  settings.leaveRams = _0xeae4ad;
}
function loadPagination() {
  commandsPerPage = settings.commandsPerPage;
}
function startMenuRoutine() {
  menuNextCommandInfoSetup();
  initiateTimers("#menuNextCommandInfo", {
    'callback': _0x2d80e1 => {
      if (_0x2d80e1 != "end") {
        document.title = "Next command:  " + _0x2d80e1;
      } else {
        if (!nextInTimeCommand()) {
          document.title = "Commands Overview";
        } else {
          document.title = "Next command:  00:00:00";
        }
      }
      menuCommandCounterSetup();
      menuNextCommandInfoSetup();
    },
    'htmlWrapper': _0x39ae3b => {
      if (nextInTimeCommand()) {
        if (_0x39ae3b != "end") {
          return "<span style=\"color: darkblue;\">Next command to " + nextInTimeCommand().target + " in " + _0x39ae3b + "</span>";
        }
        return "<span style=\"color: darkblue;\">Next command to " + nextInTimeCommand().target + " in 00:00:00 </span>";
      }
      return "<span style=\"color: red;\">All of your commands are in the past!</span>";
    },
    'refreshTime': 0x1f4
  });
}
function menuCommandCounterSetup() {
  const _0x118872 = document.getElementById("menuCommandsPlannedCounter");
  let _0x6872cf;
  const _0xf145a6 = Object.keys(commands).length;
  if (_0xf145a6 > 0) {
    _0x6872cf = _0xf145a6 + " commands planned";
    _0x118872.style.color = "darkblue";
  } else {
    _0x6872cf = "No commands planned";
    _0x118872.style.color = "red";
  }
  _0x118872.innerText = _0x6872cf;
}
function menuNextCommandInfoSetup() {
  let _0x1a69d8 = nextInTimeCommand();
  $("#menuNextCommandInfo")[0].dataset.endtime = _0x1a69d8 ? new Date(_0x1a69d8.launchTime).getTime() : Timing.getCurrentServerTime() - serverDateDiff;
  $("#menuNextCommandInfo")[0].dataset.format = "%hh%:%mm%:%ss%";
}
function saveDefaultTemplates() {
  settings.currentAttackTemplate = $("#selectAttackTemplate")[0].value;
  settings.currentSupportTemplate = $("#selectSupportTemplate")[0].value;
  settings.currentCatapultTarget = $("#catapultTarget")[0].value;
}
function saveSettings() {
  saveDefaultTemplates();
  savePagination();
  saveOffset();
  saveAutoOffset();
  saveOpenTabDelay();
  saveSigil();
  saveToUse();
  saveLeaveCats();
  saveLeaveSpies();
  saveLeaveRams();
  saveBotSettings();
  saveOverviewVars();
  makeCommandsTable();
}
function loadSettings() {
  if (!overviewVars.settings) {
    overviewVars.settings = {};
    overviewVars.settings.currentCatapultTarget = "wall";
    overviewVars.settings.currentAttackTemplate = "default_attack";
    overviewVars.settings.currentSupportTemplate = "default_support";
    overviewVars.settings.timing_offset = 0;
    overviewVars.settings.autoTimingOffset = true;
    overviewVars.settings.autoTimingOffsetMultiplier = 0.25;
    overviewVars.settings.openTabDelay = 60;
    overviewVars.settings.setMSWholePlane = 0;
    overviewVars.settings.toUse = 100;
    overviewVars.settings.sigil = 0;
    overviewVars.settings.leaveCats = 0;
    overviewVars.settings.leaveSpies = 0;
    overviewVars.settings.leaveRams = 0;
    overviewVars.settings.launchTime_offset = 0;
    overviewVars.settings.autoFillNt = true;
    overviewVars.settings.autoSendInTime = true;
    overviewVars.settings.autoSendNobles = true;
    overviewVars.settings.readMSFromPlan = false;
    overviewVars.settings.running = false;
    overviewVars.settings.ntTemplates = ntTemplates;
    overviewVars.settings.map.showAlly = true;
    overviewVars.settings.map.showEnemy = true;
  }
  objectReasign(settings, overviewVars.settings);
  if (!settings.currentCatapultTarget) {
    settings.currentCatapultTarget = "wall";
  }
  if (!templatesData[settings.currentAttackTemplate]) {
    settings.currentAttackTemplate = "default_attack";
  }
  if (!templatesData[settings.currentSupportTemplate]) {
    settings.currentSupportTemplate = "default_support";
  }
  if (settings.commandsPerPage != null) {
    loadPagination();
  }
  if (!settings.openTabDelay) {
    settings.openTabDelay = 60;
  }
  if (!settings.setMSWholePlane) {
    settings.setMSWholePlane = 0;
  }
  if (!settings.timing_offset) {
    settings.timing_offset = 0;
  }
  if (!settings.autoTimingOffsetMultiplier) {
    settings.autoTimingOffsetMultiplier = 0.25;
  }
  if (settings.autoTimingOffset === undefined) {
    settings.autoTimingOffset = true;
  }
  if (!settings.toUse) {
    settings.toUse = 100;
  }
  if (!settings.sigil) {
    settings.sigil = 0;
  }
  if (!settings.leaveCats) {
    settings.leaveCats = 0;
  }
  if (!settings.leaveSpies) {
    settings.leaveSpies = 0;
  }
  if (!settings.leaveRams) {
    settings.leaveRams = 0;
  }
  if (!settings.launchTime_offset) {
    settings.launchTime_offset = 0;
  }
  if (settings.autoFillNt === undefined) {
    settings.autoFillNt = true;
  }
  if (settings.autoSendInTime === undefined) {
    settings.autoSendInTime = true;
  }
  if (settings.autoSendNobles === undefined) {
    settings.autoSendNobles = true;
  }
  if (settings.readMSFromPlan === undefined) {
    settings.readMSFromPlan = false;
  }
  if (settings.running === undefined) {
    settings.running = false;
  }
  if (!settings.map) {
    settings.map = {
      'showAlly': true,
      'showEnemy': true
    };
  }
  if (!settings.ntTemplates) {
    settings.ntTemplates = ntTemplates;
  }
  loadBotSettings();
}
function saveOverviewVars() {
  overviewVars.commands = commands;
  saveToCache(overviewVarsName, overviewVars);
}
function saveFromImport() {
  saveOverviewVars();
  loadPagination();
  document.getElementById("commandsPerPageSetting").value = commandsPerPage;
  makeCommandsTable();
}
function load() {
  const overviewVarsCopy = loadFromCache(overviewVarsName);
  Object.assign(overviewVars, overviewVarsCopy);
  loadSettings();
  loadCommandsData();
  loadFocused();
  overviewVars.settings = settings;
  overviewVars.commands = commands;
}
function loadCommandsOnly() {
  const overviewVarsCopy = loadFromCache(overviewVarsName);
  overviewVars.commands = overviewVarsCopy.commands;
  loadCommandsData();
  sortCommands(commands);
}
function loadFromCache(_0x757fff) {
  const _0x208ddd = localStorage.getItem(_0x757fff);
  if (_0x208ddd != undefined && _0x208ddd != '') {
    return JSON.parse(_0x208ddd);
  }
  return null;
}
function saveToCache(_0x17a0f9, _0x4f0066) {
  if (typeof _0x4f0066 != "string") {
    localStorage.setItem(_0x17a0f9, JSON.stringify(_0x4f0066));
  } else {
    localStorage.setItem(_0x17a0f9, _0x4f0066);
  }
}
function exportConfigurations() {
  document.getElementById("importExportInput").style.display = "initial";
  document.getElementById("importExportInput").value = encrypt(JSON.stringify(overviewVars));
}
function exportConfigurationsToFile() {
  createFile(encrypt(JSON.stringify(overviewVars)), "commandsOverviewData.txt", "text/plain");
}
function importConfigurations() {
  const _0x5c95fe = document.getElementById("importExportInput").value;
  const _0x492110 = JSON.parse(decodeURI(_0x5c95fe));
  if (_0x492110.commands) {
    objectReasign(commands, _0x492110.commands);
  }
  if (_0x492110.settings) {
    objectReasign(settings, _0x492110.settings);
  }
  if (_0x492110.commandIdCounter) {
    overviewVars.commandIdCounter = _0x492110.commandIdCounter;
  }
  cancelImportConfigurations();
  saveFromImport();
}
function startImportConfigurations() {
  document.getElementById("importExportInput").style.display = "initial";
  document.getElementById("importDataButton").style.display = "initial";
  document.getElementById("cancelImportDataButton").style.display = "initial";
  document.getElementById("startImportDataButton").style.display = "none";
  document.getElementById("importExportInput").value = '';
  document.getElementById("exportDataButton").style.display = "none";
  document.getElementById("exportDataToFileButton").style.display = "none";
}
function cancelImportConfigurations() {
  document.getElementById("importExportInput").style.display = "none";
  document.getElementById("importDataButton").style.display = "none";
  document.getElementById("cancelImportDataButton").style.display = "none";
  document.getElementById("startImportDataButton").style.display = "initial";
  document.getElementById("exportDataButton").style.display = "initial";
  document.getElementById("exportDataToFileButton").style.display = "initial";
}
function setupAttack() {
  let _0x29f94d = JSON.parse(window.sessionStorage.getItem("commandsOverviewCommandData"));
  if (!_0x29f94d) {
    console.log("No attack programmed!");
    return;
  }
  if (verifyUserIdentity() && allowed && window.as) {
    if (!document.getElementById("unit_input_spear") && !$('#' + usersInfo.snipeScript.sendButton).is(":visible")) {
      printError("Something is wrong with TW code, and the script can be bannable ... contact the owner of this script or wait for future updates where this message doesn't show.");
    }
    if (document.getElementsByClassName("error_box")[0] != undefined) {
      let _0x460861 = document.getElementsByClassName("error_box");
      if (_0x460861 != null) {
        commands[_0x29f94d.id].done = true;
        saveOverviewVars();
        window.close();
      }
    }
    if (JSON.parse(window.sessionStorage.getItem("tabDone"))) {
      closeWindow();
      return;
    }
  }
  if (_0x29f94d.done) {
    console.log("Attack already sent!");
    return;
  }
  let _0x8dfc64 = loadFromCache(snipeScriptStorageId);
  if (!_0x8dfc64 && !autoSendInTime) {
    printError("Snipe/Schedule script is not configured!");
    return;
  }
  if ($('#' + usersInfo.snipeScript.sendButton).length > 0) {
    commands[_0x29f94d.id].done = true;
    saveOverviewVars();
    let _0x37a240 = new Date(_0x29f94d.launchTime).getTime();
    if (_0x29f94d.randomOffset > 0) {
      _0x37a240 = new Date(_0x29f94d.randomOffsetTime).getTime();
    }
    let _0x499fb8 = _0x37a240 % 1000;
    let _0x334493 = function (_0xe66b9c, _0x46e27a) {
      _0xe66b9c = _0xe66b9c + '';
      return _0xe66b9c.length >= _0x46e27a ? _0xe66b9c : new Array(_0x46e27a - _0xe66b9c.length + 1).join('0') + _0xe66b9c;
    };
    _0x499fb8 = _0x334493(_0x499fb8.toString(), 3);
    let _0xaa42fb = "<tr>\n            <td>Command <b>" + _0x29f94d.name + "</b> arrival:</td>\n            <td>" + convertDateToString(new Date(_0x29f94d.arrivalTime)).split(" ")[0] + " <b id=\"sendTimer\" class=\"overviewsTimer\" data-endtime=\"" + _0x37a240 + "\" data-format=\"%hh%:%mm%:%ss%:%msmsms%\"></b>\n        </tr>";
    $(".vis > tbody:eq(0)").append(_0xaa42fb);
    initiateTimers("#sendTimer", {
      'callback': _0x2944bb => {
        if (_0x2944bb != "end") {
          document.title = gameData.world + " - " + _0x2944bb;
        } else {
          document.title = gameData.world + " - " + "Command overdue";
        }
      },
      'htmlWrapper': _0xfce3f8 => {
        if (_0xfce3f8 != "end") {
          return "(<span style=\"color: green;\">" + _0xfce3f8 + "</span>)";
        } else {
          return "(<span style=\"color: red;\">Command overdue</span>)";
        }
      },
      'refreshTime': 0x64
    });
    if (settings.running && allowed) {
      if (!ntTemplates[_0x29f94d.ntTemplate].onlyNobles || autoSendNobles && autoFillNt && _0x29f94d.slowestUnit == "snob") {
        startNT(_0x29f94d);
      }
      setTimeout(function () {
        if (_0x29f94d.autoSend) {
          prepareToSend(_0x29f94d);
        }
      }, 3000);
    }
  } else {
    setupUnits(_0x29f94d, _0x29f94d.units, _0x29f94d.slowestUnit, _0x29f94d.toUse, _0x29f94d.ntTemplate);
    if (!autoSendNobles && _0x29f94d.slowestUnit == "snob") {
      document.getElementById("command-form-warning").previousElementSibling.innerHTML += "<span style=\"color: red\"> (Auto send nobles is turned off)</span> ";
      return;
    } else {
      if (!_0x29f94d.autoSend) {
        document.getElementById("command-form-warning").previousElementSibling.innerHTML += "<span style=\"color: red\"> (This command is excluded from auto send)</span> ";
        return;
      }
    }
    if (_0x29f94d.type == "Attack") {
      $("#target_support")[0].style.display = "none";
      if (settings.running && allowed) {
        setTimeout(function () {
          $("#target_attack")[0].click();
        }, 1000);
      }
    } else {
      if (_0x29f94d.type == "Support") {
        $("#target_attack")[0].style.display = "none";
        if (settings.running && allowed) {
          setTimeout(function () {
            $("#target_support")[0].click();
          }, 1000);
        }
      }
    }
  }
}
function prepareToSend(_0xd1101b) {
  if (!verifyUserIdentity() || !allowed || !window.as || window.console.ASAllowed) {
    return;
  }
  let _0x1e1de0 = getAverageTimingOffset(settings.autoTimingOffsetMultiplier);
  if (autoTimingOffset) {
    _0x1e1de0.start();
  }
  let _0x21c96d = loadFromCache(snipeScriptStorageId);
  if (autoSendInTime) {
    let _0x6503af = function (_0x250569) {
      window.sessionStorage.setItem("tabDone", true);
      let _0x346171 = autoTimingOffset ? _0x1e1de0.getAveragePing() : settings.timing_offset;
      const _0x38d27e = _0x250569 + _0x346171 - (Timing.getCurrentServerTime() - serverDateDiff);
      const _0x2ddfbb = performance.now();
      while (performance.now() - _0x2ddfbb < _0x38d27e) {}
      $('#' + usersInfo.snipeScript.sendButton)[0].click();
    };
    let _0x5a7218 = new Date(_0xd1101b.launchTime);
    if (_0xd1101b.randomOffset > 0) {
      _0x5a7218 = new Date(_0xd1101b.randomOffsetTime);
    }
    let _0x577276 = $("#place_confirm_catapult_target").find("select:eq(0)")[0];
    if (_0xd1101b.catapultTarget && _0x577276) {
      _0x577276.value = _0xd1101b.catapultTarget;
    }
    console.log(_0x5a7218.getTime());
    console.log("Timeout actual send", _0x5a7218.getTime() - (Timing.getCurrentServerTime() - serverDateDiff) - 2000);
    setTimeout(() => _0x6503af(_0x5a7218.getTime()), _0x5a7218.getTime() - (Timing.getCurrentServerTime() - serverDateDiff) - 2000);
  } else {
    waitForElementToDisplay(_0x21c96d.confirmButton, function () {
      setTimeout(function () {
        let _0x5c915a = new Date().getTimezoneOffset() * 60000;
        let _0x3637ba = new Date(_0xd1101b.arrivalTime);
        _0x3637ba = new Date(_0x3637ba - _0x5c915a);
        let _0xe378e3 = _0x3637ba.toISOString().slice(0, -1);
        let _0x376845 = $("#place_confirm_catapult_target").find("select:eq(0)")[0];
        if (_0xd1101b.catapultTarget && _0x376845) {
          _0x376845.value = _0xd1101b.catapultTarget;
        }
        document.getElementById(_0x21c96d.dateInput).value = _0xe378e3;
        document.getElementById(_0x21c96d.offsetInput).value = settings.timing_offset;
        window.sessionStorage.setItem("tabDone", true);
      }, 1000);
      if (_0xd1101b.autoSend) {
        setTimeout(function () {
          document.getElementById(_0x21c96d.confirmButton).click();
        }, 2000);
      }
    }, 500, 9000);
  }
}
function setupUnits(_0xb9da81, _0x238cfe, _0x1e71fb, _0x6c497e, _0x598709) {
  if (!_0x6c497e) {
    _0x6c497e = 100;
  }
  _0x6c497e = parseInt(_0x6c497e);
  if (ntTemplates[_0x598709] && ntTemplates[_0x598709].id.includes("NOBLE_RED") && settings.autoFillNt && _0x1e71fb == "snob" && allowed) {
    $.each(_0x238cfe, (_0x594f7e, _0x4227d5) => {
      if (gameData.units.includes(_0x594f7e)) {
        if (ntTemplates[_0x598709].id == "NT_1ST_NOBLE_RED" || ntTemplates[_0x598709].id == "NT_1ST_5NOBLE_RED") {
          let _0xc6047d = $("#unit_input_" + _0x594f7e)[0].dataset.allCount;
          let _0x486896 = _0x4227d5 == -1 ? _0xc6047d : Math.min(_0x4227d5, _0xc6047d);
          _0x486896 = Math.round(Math.min(_0x486896, _0x6c497e * _0xc6047d / 100));
          $("#unit_input_" + _0x594f7e)[0].value = _0x486896;
          if (_0x594f7e == "axe" && _0x486896 > 100) {
            $("#unit_input_" + _0x594f7e)[0].value = _0x486896 - 100;
          }
        } else {
          let _0x1b7552 = $("#unit_input_" + _0x594f7e)[0].dataset.allCount;
          let _0x2f3b69 = _0x4227d5 == -1 ? _0x1b7552 : Math.min(_0x4227d5, _0x1b7552);
          _0x2f3b69 = Math.round(Math.min(_0x2f3b69, _0x6c497e * _0x1b7552 / 100));
          $("#unit_input_" + _0x594f7e)[0].value = 0;
          if (_0x594f7e == "axe" && _0x2f3b69 > 100) {
            $("#unit_input_" + _0x594f7e)[0].value = 34;
          } else {
            if (_0x594f7e == "snob") {
              $("#unit_input_" + _0x594f7e)[0].value = 1;
            }
          }
        }
      }
    });
  } else {
    if (_0x1e71fb == "snob" && settings.autoFillNt && allowed && ntTemplates[_0x598709].brownNoble) {
      let _0x3f1e0b = document.getElementById("units_entry_all_ram").textContent.match(/\d+/)[0];
      let _0x5ae2fe = document.getElementById("units_entry_all_catapult").textContent.match(/\d+/)[0];
      let _0x2a067b = 1000 - _0x3f1e0b - _0x5ae2fe;
      if (_0x2a067b < 0) {
        _0x2a067b = 0;
      }
      $("#unit_input_ram")[0].value = _0x3f1e0b;
      $("#unit_input_catapult")[0].value = _0x5ae2fe;
      $("#unit_input_axe")[0].value = _0x2a067b;
      $("#unit_input_snob")[0].value = 1;
    } else {
      $.each(_0x238cfe, (_0x475ad1, _0x10e9f5) => {
        if (gameData.units.includes(_0x475ad1)) {
          let _0x3d575c = $("#unit_input_" + _0x475ad1)[0].dataset.allCount;
          let _0x7ac060 = _0x10e9f5 == -1 ? _0x3d575c : Math.min(_0x10e9f5, _0x3d575c);
          _0x7ac060 = Math.round(Math.min(_0x7ac060, _0x6c497e * _0x3d575c / 100));
          if ((_0x475ad1 == "catapult" || _0x475ad1 == 'ram') && ntTemplates[_0x598709].name.includes("/Rest") && settings.autoFillNt) {
            _0x7ac060 = _0x7ac060 <= 0 ? 0 : _0x3d575c;
          }
          if (_0x475ad1 == "catapult" && _0x10e9f5 == -1) {
            _0x7ac060 -= _0xb9da81.leaveCats;
            if (_0x7ac060 < 0) {
              _0x7ac060 = 0;
            }
          } else {
            if (_0x475ad1 == 'ram' && _0x10e9f5 == -1) {
              _0x7ac060 -= _0xb9da81.leaveRams;
              if (_0x7ac060 < 0) {
                _0x7ac060 = 0;
              }
            } else {
              if (_0x475ad1 == "spy" && _0x10e9f5 == -1) {
                _0x7ac060 -= _0xb9da81.leaveSpies;
                if (_0x7ac060 < 0) {
                  _0x7ac060 = 0;
                }
              }
            }
          }
          $("#unit_input_" + _0x475ad1)[0].value = _0x7ac060;
        }
      });
    }
  }
}
function checkIfBarbarian() {
  let _0x542efd = $(".vis > tbody > tr:nth-child(3) > td:nth-child(2) > a")[0];
  if (_0x542efd && _0x542efd.href) {
    return !_0x542efd.href.includes("info_player");
  } else {
    return true;
  }
}
function checkIfAlly(_0x17ea5d) {
  return !villageData[_0x17ea5d];
}
function printError(_0xbd96f5) {
  UI.ErrorMessage(_0xbd96f5);
}
function printSuccess(_0x482dd3) {
  UI.SuccessMessage(_0x482dd3);
}
function showAddPlanHelp() {
  openHelpPopup();
}
function createHelpPopup() {
  $("body").append("<div class=\"popup_box_container\" id=\"helpConfig_popup\" style=\"display:none;\">\n        <div class=\"popup_box show\" style=\"width: 600px;\">\n            <div class=\"popup_box_content\">\n                <a class=\"popup_box_close tooltip-delayed\" id=\"helpPopup_cross\" href=\"javascript:void(0)\"> </a>\n                <h1 style=\"text-align: center; color: purple\">Add Plan Help</h1>\n                <div>\n                    <h2>How to use:</h2>\n                    For now there are 2 tested planners that work with our parse system:\n                        <p></p>\n                        Â· Fodox Tribal Wars Utility\n                        <br>\n                        Â· TW AAP\n                    <p></p>\n                    <h3>Fodox Tribal Wars Utility</h3>\n                    In this tool, after you plan, you shall use \"Show only essential columns\", the other settings it is up to you since the result is the same.\n                    <p></p>\n                    <img src=\"https://i.postimg.cc/ydfh1Gzm/transferir-1.png\">\n                    <p></p>\n                    After clicking \"Plan\" you can copy either \"Plain Text\" or \"BB-code\" text box.\n                    <p></p>\n                    <img src=\"https://i.postimg.cc/zGnnbvrX/Webp-net-resizeimage-1.png\">\n                    <p></p>\n                    Now that you have copied either of the plans you can paste it in this script text box and click \"Add plan\".\n                    <p></p>\n                    <h3>TW AAP</h3>\n                    Feel free to use TW AAP without restrictions, both \"export\" and \"simple export\" work so you can just copy paste one of them into our script.\n                    <p></p>\n                    <h2>Any other planner</h2>\n                    <div style=\"font-size: 13px\">\n                        You can use any other planner if the lines of the plan respects the following rules:\n                        <p></p>\n                        Â· Source coordinate before Target coordinate\n                        <br>\n                        Â· 1 and only 1 date (The planner assumes this is the launch time of the command)\n                        <br>\n                        Â· The line needs to have the slowest unit written (spear,sword,...,ram,snob)\n                        <br>\n                        Â· The line can define the type of the command (\"Attack\",\"Support\"), otherwise it is considered that the command is an \"Attack\"\n                    </div>\n                </div>\n                <br>\n                <br>\n                <div>\n                    <h5 style=\"color: darkblue\">General information</h5>\n                    <div>\n                        Script made by Im Kumin and fmthemaster.\n                        <p></p>\n                        If you have any question feel free to join the discord: <a style=\"color: -webkit-link\" href=\"https://discord.gg/e2ZCtKURu8\">Discord</a> (<- click here)\n                        <p></p>\n                    </div>\n                </div>\n            </div>        </div>\n    </div>\n    <div class=\"fader\" id=\"helpPopup_fader\" style=\"display:none;\"></div>");
  $("#helpPopup_fader").off("click");
  $("#helpPopup_cross").off("click");
  $("#helpPopup_fader").on("click", function () {
    closeHelpPopup();
  });
  $("#helpPopup_cross").on("click", function () {
    closeHelpPopup();
  });
  closeHelpPopup();
}
function openHelpPopup() {
  $("#helpConfig_popup")[0].style.display = "block";
  $("#helpPopup_fader")[0].style.display = "block";
}
function closeHelpPopup() {
  $("#helpConfig_popup")[0].style.display = "none";
  $("#helpPopup_fader")[0].style.display = "none";
}
function startLoader() {
  loadTime = new Date().getTime();
  const _0x37d778 = document.getElementById("tab-bar");
  const _0x11b34a = document.createElement("div");
  _0x11b34a.setAttribute('id', "memoPlanner");
  _0x11b34a.setAttribute("class", "memo_container");
  _0x37d778.parentNode.insertBefore(_0x11b34a, _0x37d778.nextSibling.nextSibling.nextSibling.nextSibling);
  focusPlanner();
  setHTML("\n    <div id=\"loaderDiv\" class=\"memo_script\" style=\"vertical-align: middle; clear: both;width: 400px\">\n        <div class=\"forum-content\" style=\"grid-template-columns: 4fr 4fr;grid-gap: 10px;padding: 0;\">\n            <table class=\"vis nowrap\" style=\"width: 100%;\">\n                <thead>\n                    <tr>\n                        <th colspan=\"3\"><span class=\"column-title\" style=\"font-size:16px\">Loading screen</span></th>\n                    </tr>\n                </thead>\n                <tbody id=\"loadResourceDiv\">\n                </tbody>\n            </table>\n        </div>\n    </div>", "#memoPlanner", {
    'callback': noCall
  });
}
function noCall() {}
function endLoader() {
  document.getElementById("commandSenderDiv").style.display = "block";
  loadTime = new Date().getTime() - loadTime;
}
async function loadResource(_0x4f77e9, _0x166d4d, _0x4cd447) {
  const _0x40152b = new Date().getTime();
  const _0x1ec0e8 = {
    'description': _0x166d4d,
    'function': _0x4f77e9,
    'async': _0x4cd447
  };
  loaderArray.push(_0x1ec0e8);
  const _0x3d2750 = "loaderSlot" + (loaderArray.length - 1);
  document.getElementById("loadResourceDiv").innerHTML += "\n        <tr>\n            <td id=\"" + _0x3d2750 + "\" style=\"padding-left: 1em;height: 30px;\">\n                <a class=\"loader\" style=\"float: left\"></a>\n                <a href=\"javascript:void(0)\" style=\"display: flex;justify-content: center;align-items: center;color:red\">" + _0x166d4d + "</a>\n            </td>\n        </tr>";
  if (_0x4cd447) {
    _0x4f77e9();
  } else {
    await _0x4f77e9();
  }
  if (document.getElementById(_0x3d2750) != null) {
    document.getElementById(_0x3d2750).childNodes[1].classList.remove("loader");
    document.getElementById(_0x3d2750).childNodes[3].style.color = "green";
  }
  const _0x46763d = new Date().getTime();
  _0x1ec0e8.elapsedTime = _0x46763d - _0x40152b;
}
function setHTML(_0x4b269d, _0xd4acc3, {
  wrapper = (_0x29c760, _0x5dd5bb) => _0x5dd5bb.innerHTML = _0x29c760,
  callback = () => {
    return;
  }
}) {
  wrapper(_0x4b269d, $(_0xd4acc3)[0]);
  callback();
}
function objectReasign(_0x3af69e, _0x343938) {
  Object.keys(_0x3af69e).forEach(function (_0x6b0091) {
    delete _0x3af69e[_0x6b0091];
  });
  Object.assign(_0x3af69e, _0x343938);
}
function xmlToJson(_0x1d4523) {
  try {
    let _0x4e1ee7 = {};
    if (_0x1d4523.children.length > 0) {
      for (let _0x124266 = 0; _0x124266 < _0x1d4523.children.length; _0x124266++) {
        const _0x18bafe = _0x1d4523.children.item(_0x124266);
        const _0x21a320 = _0x18bafe.nodeName;
        if (typeof _0x4e1ee7[_0x21a320] == "undefined") {
          _0x4e1ee7[_0x21a320] = xmlToJson(_0x18bafe);
        } else {
          if (typeof _0x4e1ee7[_0x21a320].push == "undefined") {
            const _0x5bc238 = _0x4e1ee7[_0x21a320];
            _0x4e1ee7[_0x21a320] = [];
            _0x4e1ee7[_0x21a320].push(_0x5bc238);
          }
          _0x4e1ee7[_0x21a320].push(xmlToJson(_0x18bafe));
        }
      }
    } else {
      _0x4e1ee7 = _0x1d4523.textContent;
    }
    return _0x4e1ee7;
  } catch (_0x50950e) {
    console.log(_0x50950e.message);
  }
}
function encrypt(_0x2ec096) {
  let _0x498e07;
  if (typeof _0x2ec096 == "object") {
    _0x498e07 = JSON.stringify(_0x2ec096);
  } else {
    if (typeof _0x2ec096 == "string") {
      _0x498e07 = _0x2ec096;
    } else {
      return '';
    }
  }
  return encodeURI(_0x498e07);
}
function decrypt(_0x1e2440) {
  return decodeURI(_0x1e2440);
}
function arrayToObj(_0x1a1b9b) {
  return Object.assign({}, ..._0x1a1b9b);
}
function createFile(_0x2992b8, _0x5c5a96, _0x2ec37f) {
  const _0x161f44 = new Blob([_0x2992b8], {
    'type': _0x2ec37f
  });
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(_0x161f44, _0x5c5a96);
  } else {
    const _0x45075b = document.createElement('a');
    const _0x1f1b17 = URL.createObjectURL(_0x161f44);
    _0x45075b.href = _0x1f1b17;
    _0x45075b.download = _0x5c5a96;
    document.body.appendChild(_0x45075b);
    _0x45075b.click();
    setTimeout(function () {
      document.body.removeChild(_0x45075b);
      window.URL.revokeObjectURL(_0x1f1b17);
    }, 0);
  }
}
function grabVillagesData() {
  const _0x439f78 = "https://" + currentWorldUrl + "/map/village.txt";
  let _0x4fa0f7 = localStorage.getItem("globalVillageData" + currentWorldUrl.split('.')[0]);
  const _0x48d1be = new Date();
  if (_0x4fa0f7) {
    _0x4fa0f7 = JSON.parse(_0x4fa0f7);
    if (_0x4fa0f7.lastUpdate) {
      if (new Date(_0x4fa0f7.lastUpdate).getTime() + 3600000 > _0x48d1be.getTime()) {
        villageData = _0x4fa0f7.villageData;
        return;
      }
    }
  }
  $.get(_0x439f78, function (_0x24553f) {
    const _0x140241 = _0x24553f.split("\n");
    for (let _0x3aa02b = 0; _0x3aa02b < _0x140241.length; _0x3aa02b++) {
      const _0x16ba9d = _0x140241[_0x3aa02b].split(',');
      const _0x48a4ab = _0x16ba9d[0];
      const _0x557492 = _0x16ba9d[2];
      const _0x4f58ad = _0x16ba9d[3];
      const _0xc9ba59 = _0x16ba9d[4];
      villageData[_0x557492 + '|' + _0x4f58ad] = {
        'id': _0x48a4ab,
        'player_id': _0xc9ba59
      };
    }
  }).then(function () {
    const _0x229783 = {
      villageData: villageData,
      lastUpdate: _0x48d1be
    };
    localStorage.setItem("globalVillageData" + currentWorldUrl.split('.')[0], JSON.stringify(_0x229783));
  });
}
function getUnitsData() {
  let _0x453a72 = localStorage.getItem("unitsData" + currentWorldUrl.split('.')[0]);
  const _0x18e737 = new Date();
  if (_0x453a72) {
    _0x453a72 = JSON.parse(_0x453a72);
    if (_0x453a72.lastUpdate) {
      if (new Date(_0x453a72.lastUpdate).getTime() + 3600000 > _0x18e737.getTime()) {
        return _0x453a72.unitsData;
      }
    }
  }
  return new Promise(function (_0x4107de, _0x4f93fd) {
    let _0x109401 = {};
    $.get("/interface.php?func=get_unit_info").done(function (_0x1117c2) {
      $(_0x1117c2).find("config").children().each((_0xc38b40, _0x311606) => {
        _0x109401[$(_0x311606).prop("nodeName")] = {
          'speed': $(_0x311606).find("speed").text()
        };
      });
      if (_0x109401.militia) {
        delete _0x109401.militia;
      }
      const _0x585d52 = {
        unitsData: _0x109401,
        lastUpdate: _0x18e737
      };
      localStorage.setItem("unitsData" + currentWorldUrl.split('.')[0], JSON.stringify(_0x585d52));
      _0x4107de(_0x109401);
    }).fail(() => _0x4f93fd(printError("Error units data")));
  });
}
function beautifyTWBorders() {
  $(".maincell").css("width", "1200px");
  $("[class^='bg_left']").css("width", "24px");
  $("[class^='bg_right']").css("width", "0px");
  $("#SkyScraperAdCell").css("background", "transparent url('graphic/index/mainborder-right.png') scroll top repeat-y");
  $(".bg_bottomright").css("background", "transparent url('graphic/index/mainborder-corner-right.png') scroll top no-repeat");
}
function clearConstructionNotifications() {
  document.getElementById("side-notification-container").innerHTML = '';
}
function waitForElementToDisplay(_0x38a44d, _0x5e23e2, _0x35b653, _0xce53eb) {
  let _0x18a7ed = Date.now();
  (function _0x1e0d10() {
    if (document.getElementById(_0x38a44d) != null && $('#' + _0x38a44d).length > 0) {
      _0x5e23e2();
      return;
    } else {
      setTimeout(function () {
        if (_0xce53eb && Date.now() - _0x18a7ed > _0xce53eb) {
          return;
        }
        _0x1e0d10();
      }, _0x35b653);
    }
  })();
}
function initiateTimers(_0x8ed5ac, {
  htmlWrapper = _0x4489a0 => _0x4489a0,
  callback = noCall,
  refreshTime = 200
}) {
  setInterval(() => {
    $(_0x8ed5ac).html(function (_0x1d43e0, _0x5b6a22) {
      if (!this.classList.contains("overviewsTimer")) {
        return _0x5b6a22;
      }
      let _0xefa1ce = this.dataset.format;
      if (!_0xefa1ce) {
        _0xefa1ce = "%hh%:%mm%:%ss%";
      }
      let _0xdfbcb1 = formatDifferenceTime(this.dataset.randomtime, parseInt(this.dataset.endtime), Timing.getCurrentServerTime() - serverDateDiff, _0xefa1ce);
      callback(_0xdfbcb1);
      return htmlWrapper(_0xdfbcb1);
    });
  }, refreshTime);
}
function formatDifferenceTime(_0x45317b, _0x2e928d, _0x240c15, _0x46d491 = "%hh%:%mm%:%ss%:%msmsms%", _0x47c3ce = "end") {
  let _0x4bd9f5 = _0x2e928d;
  let _0x24792c = _0x240c15;
  let _0x271963 = _0x45317b;
  if (_0x45317b && !(_0x45317b instanceof Date)) {
    _0x271963 = new Date(parseInt(_0x45317b));
  }
  if (!(_0x2e928d instanceof Date)) {
    _0x4bd9f5 = new Date(_0x2e928d);
  }
  if (!(_0x2e928d instanceof Date)) {
    _0x24792c = new Date(_0x240c15);
  }
  const _0x24c171 = _0x4bd9f5 - _0x24792c;
  if (_0x24c171 < 0) {
    if (_0x271963 && _0x271963 - _0x24792c >= 0) {
      return "OnHold";
    }
    return _0x47c3ce;
  }
  let _0x193ba3 = Math.floor(_0x24c171 / 2592000000);
  let _0x1db82a = Math.floor(_0x24c171 % 2592000000 / 86400000);
  let _0x400254 = Math.floor(_0x24c171 % 86400000 / 3600000);
  let _0x244bda = Math.floor(_0x24c171 % 3600000 / 60000);
  let _0x325986 = Math.floor(_0x24c171 % 60000 / 1000);
  let _0x118ca7 = Math.floor(_0x24c171 % 1000);
  if (!_0x46d491.match(/%(M)+%/g)) {
    _0x1db82a += _0x193ba3 * 30;
  }
  if (!_0x46d491.match(/%(D)+%/g)) {
    _0x400254 += _0x1db82a * 24;
  }
  if (!_0x46d491.match(/%(h)+%/g)) {
    _0x244bda += _0x400254 * 60;
  }
  if (!_0x46d491.match(/%(m)+%/g)) {
    _0x325986 += _0x244bda * 60;
  }
  if (!_0x46d491.match(/%(s)+%/g)) {
    _0x118ca7 += _0x325986 * 1000;
  }
  let _0x45971e = _0x46d491;
  $.each({
    'M': _0x193ba3,
    'D': _0x1db82a,
    'h': _0x400254,
    'm': _0x244bda,
    's': _0x325986,
    'ms': _0x118ca7
  }, (_0x1595af, _0x1708c1) => {
    let _0x25f118 = RegExp('%(' + _0x1595af + ")+%", 'g');
    let _0x35776b = _0x46d491.match(_0x25f118);
    if (_0x35776b) {
      $.each(_0x35776b, (_0x13c6e2, _0x19c16f) => {
        let _0x5dbd4e = RegExp('' + _0x1595af, 'g');
        let _0xf8dcb9 = _0x19c16f.match(_0x5dbd4e).length;
        _0x45971e = _0x45971e.replace(_0x19c16f, _0x1708c1 < 10 ** _0xf8dcb9 ? ('' + '0'.repeat(_0xf8dcb9) + _0x1708c1).slice(-_0xf8dcb9) : '' + _0x1708c1);
      });
    }
  });
  return _0x45971e;
}
function showConsoleLogAuthorStats() {
  console.clear();
  console.log("%cPlease dont make this your own code.", "font-size: 40px; color: cyan");
}
function addAuthors(_0x14ede5) {}
function initBot() {
  if (!window.as) {
    printError("Nope :), you cannot use this bot without the source link. And why would you want to do that? You get bug fixes and updates...");
  }
  if (!verifyUserIdentity() || !allowed || !window.as || window.console.ASAllowed) {
    return;
  }
  runAdditionalCode();
  consoleLog("%cInitializing bot...", "font-size: 20px; color: #0099ff;");
  setTimeout(function () {
    consoleLog("%cBot initialized!", "font-size: 20px; color: Red;");
    startBotRoutine();
  }, 2000);
}
function startBotRoutine() {
  if (!verifyUserIdentity() || !allowed || !window.as || window.console.ASAllowed) {
    allowed = false;
    return;
  }
  setInterval(botRoutine, 1000);
}
function botRoutine() {
  if (!verifyUserIdentity() || !allowed || !window.as || window.console.ASAllowed) {
    allowed = false;
    return;
  }
  calculateTimezoneDifference();
  clearConstructionNotifications();
  loadCommandsOnly();
  if (settings.running) {
    let _0x3a3fe0 = nextInTimeCommands(settings.openTabDelay);
    $.each(_0x3a3fe0, (_0x2cf9f1, _0x15706f) => {
      if (!_0x3a3fe0[_0x2cf9f1].preparedByBot) {
        commands[_0x3a3fe0[_0x2cf9f1].id].preparedByBot = true;
        saveOverviewVars();
        setTimeout(() => {
          sendCommands(_0x15706f.id);
        }, 500);
      }
    });
  }
}
function startNT(_0x52e5af) {
  let _0xa641ca = 1;
  let _0x5ec770 = ntTemplates[_0x52e5af.ntTemplate];
  for (let _0x572412 = 0; document.getElementById("troop_confirm_train") && _0x572412 < _0x5ec770.noblesQnt - 1; _0x572412++) {
    setTimeout(function () {
      document.getElementById("troop_confirm_train").click();
    }, _0x572412 * 200);
    _0xa641ca++;
  }
  setTimeout(function () {
    eval(_0x5ec770.fillFunction)();
  }, 1200);
}
function fill2nd3rdNoblesNT() {
  let _0x30402d = document.getElementsByClassName("units-row")[0].childNodes;
  let _0x274220 = document.getElementsByClassName("units-row")[1].childNodes;
  let _0x385f97 = document.getElementsByClassName("units-row")[2].childNodes;
  let _0x99f930 = document.getElementsByClassName("units-row")[3].childNodes;
  for (let _0x1e9195 = 1; _0x1e9195 < _0x274220.length - 1; _0x1e9195++) {
    _0x274220[_0x1e9195].childNodes[0].value = '';
    _0x385f97[_0x1e9195].childNodes[0].value = '';
    _0x99f930[_0x1e9195].childNodes[0].value = '';
  }
  let _0x3e60e5 = 1;
  if (!document.getElementsByClassName("train-ui")[_0x3e60e5].childNodes[5]) {
    _0x3e60e5 = 2;
  }
  let _0x3795fc = gameData.units.includes("archer") ? 8 : 7;
  let _0x51939f = gameData.units.includes("archer") ? 1 : 0;
  let _0x26f8ad = gameData.units.includes("knight") ? 1 : 0;
  let _0x3870ba = gameData.units.includes("archer") ? parseInt(document.getElementsByClassName("train-ui")[_0x3e60e5].childNodes[_0x3795fc + 1].childNodes[0].textContent) : 0;
  let _0x5326a5 = parseInt(document.getElementsByClassName("train-ui")[_0x3e60e5].childNodes[_0x3795fc].childNodes[0].textContent);
  let _0x2cac60 = document.getElementsByClassName("train-ui")[_0x3e60e5].childNodes[5].childNodes[0].textContent;
  let _0x96c805 = parseInt(_0x2cac60) - parseInt(_0x30402d[5].childNodes[0].textContent) - 1000;
  let _0x29e3a5 = parseInt(_0x96c805 / 2);
  let _0x384a48 = _0x5326a5 - parseInt(_0x30402d[_0x3795fc].childNodes[0].textContent);
  let _0x584cf3 = parseInt(_0x384a48 / 2);
  let _0x3f1621 = gameData.units.includes("archer") ? 6 : 5;
  _0x274220[3].childNodes[0].value = _0x29e3a5;
  _0x274220[_0x3f1621].childNodes[0].value = _0x584cf3;
  if (_0x3870ba > 0) {
    _0x274220[_0x3f1621 + 1].childNodes[0].value = _0x3870ba;
  }
  _0x274220[_0x3f1621 + 4 + _0x51939f + _0x26f8ad].childNodes[0].value = 1;
  _0x385f97[3].childNodes[0].value = _0x29e3a5;
  _0x385f97[_0x3f1621].childNodes[0].value = _0x584cf3;
  _0x385f97[_0x3f1621 + 4 + _0x51939f + _0x26f8ad].childNodes[0].value = 1;
  _0x99f930[3].childNodes[0].value = 1000;
  _0x99f930[_0x3f1621 + 4 + _0x51939f + _0x26f8ad].childNodes[0].value = 1;
  Place.confirmScreen.updateUnitsSum();
}
function fill2ndNobleBuffNT() {
  let _0xc3f0f2 = document.getElementsByClassName("units-row")[1].childNodes;
  let _0x4d03d4 = document.getElementsByClassName("units-row")[2].childNodes;
  let _0x1b607c = document.getElementsByClassName("units-row")[3].childNodes;
  for (let _0x4a6f72 = 1; _0x4a6f72 < _0xc3f0f2.length - 1; _0x4a6f72++) {
    _0xc3f0f2[_0x4a6f72].childNodes[0].value = '';
    _0x4d03d4[_0x4a6f72].childNodes[0].value = '';
    _0x1b607c[_0x4a6f72].childNodes[0].value = '';
  }
  let _0x4db8ae = 1;
  if (!document.getElementsByClassName("train-ui")[_0x4db8ae].childNodes[5]) {
    _0x4db8ae = 2;
  }
  let _0x51e700 = gameData.units.includes("archer") ? 8 : 7;
  let _0x2fa26b = gameData.units.includes("archer") ? 1 : 0;
  let _0xf9116a = gameData.units.includes("knight") ? 1 : 0;
  let _0x598382 = gameData.units.includes("archer") ? parseInt(document.getElementsByClassName("train-ui")[_0x4db8ae].childNodes[_0x51e700 + 1].childNodes[0].textContent) : 0;
  let _0xc903c6 = parseInt(document.getElementsByClassName("train-ui")[_0x4db8ae].childNodes[_0x51e700].childNodes[0].textContent);
  let _0x132461 = document.getElementsByClassName("train-ui")[_0x4db8ae].childNodes[5].childNodes[0].textContent;
  let _0x400a0c = parseInt(document.getElementsByClassName("train-ui")[_0x4db8ae].childNodes[_0x51e700 + 2 + _0x2fa26b].childNodes[0].textContent);
  let _0x6bf55d = parseInt(document.getElementsByClassName("train-ui")[_0x4db8ae].childNodes[_0x51e700 + 3 + _0x2fa26b].childNodes[0].textContent);
  let _0x49e871 = 5000 - _0xc903c6 - _0x598382 - 1;
  let _0x274cc7 = 1000;
  let _0x47999c = 2000 + (1000 - (_0x400a0c + _0x6bf55d));
  if (_0x49e871 > _0x132461 - _0x47999c) {
    _0x49e871 = _0x132461 - _0x47999c;
  } else {
    if (_0x49e871 < _0x132461 - _0x47999c) {
      _0x274cc7 = _0x132461 - 2000 - _0x49e871;
    }
  }
  if (_0x49e871 < 0) {
    _0x49e871 = 0;
  }
  let _0x1582bf = gameData.units.includes("archer") ? 6 : 5;
  _0xc3f0f2[3].childNodes[0].value = _0x49e871;
  _0xc3f0f2[_0x1582bf].childNodes[0].value = _0xc903c6;
  if (_0x598382 > 0) {
    _0xc3f0f2[_0x1582bf + 1].childNodes[0].value = _0x598382;
  }
  _0xc3f0f2[_0x1582bf + 4 + _0x2fa26b + _0xf9116a].childNodes[0].value = 1;
  _0x4d03d4[3].childNodes[0].value = _0x274cc7;
  _0x4d03d4[_0x1582bf].childNodes[0].value = 0;
  _0x4d03d4[_0x1582bf + 4 + _0x2fa26b + _0xf9116a].childNodes[0].value = 1;
  _0x1b607c[3].childNodes[0].value = 1000;
  _0x1b607c[_0x1582bf + 4 + _0x2fa26b + _0xf9116a].childNodes[0].value = 1;
  Place.confirmScreen.updateUnitsSum();
}
function fill3rdNobleBuffNT() {
  let _0x3a03a8 = document.getElementsByClassName("units-row")[1].childNodes;
  let _0x3d4a12 = document.getElementsByClassName("units-row")[2].childNodes;
  let _0x4d973d = document.getElementsByClassName("units-row")[3].childNodes;
  for (let _0xe5030d = 1; _0xe5030d < _0x3a03a8.length - 1; _0xe5030d++) {
    _0x3a03a8[_0xe5030d].childNodes[0].value = '';
    _0x3d4a12[_0xe5030d].childNodes[0].value = '';
    _0x4d973d[_0xe5030d].childNodes[0].value = '';
  }
  let _0x109e6b = 1;
  if (!document.getElementsByClassName("train-ui")[_0x109e6b].childNodes[5]) {
    _0x109e6b = 2;
  }
  let _0x5d6620 = gameData.units.includes("archer") ? 8 : 7;
  let _0x3f3078 = gameData.units.includes("archer") ? 1 : 0;
  let _0xe86631 = gameData.units.includes("knight") ? 1 : 0;
  let _0x27da2 = gameData.units.includes("archer") ? parseInt(document.getElementsByClassName("train-ui")[_0x109e6b].childNodes[_0x5d6620 + 1].childNodes[0].textContent) : 0;
  let _0x59bb5f = parseInt(document.getElementsByClassName("train-ui")[_0x109e6b].childNodes[_0x5d6620].childNodes[0].textContent);
  let _0x4e008d = document.getElementsByClassName("train-ui")[_0x109e6b].childNodes[5].childNodes[0].textContent;
  let _0x5ae50d = parseInt(document.getElementsByClassName("train-ui")[_0x109e6b].childNodes[_0x5d6620 + 2 + _0x3f3078].childNodes[0].textContent);
  let _0xf88524 = parseInt(document.getElementsByClassName("train-ui")[_0x109e6b].childNodes[_0x5d6620 + 3 + _0x3f3078].childNodes[0].textContent);
  let _0xcecfe9 = 5000 - _0x59bb5f - _0x27da2 - 1;
  let _0x5afa66 = 1000;
  let _0x4f4bd3 = 2000 + (1000 - (_0x5ae50d + _0xf88524));
  if (_0xcecfe9 > _0x4e008d - _0x4f4bd3) {
    _0xcecfe9 = _0x4e008d - _0x4f4bd3;
  } else {
    if (_0xcecfe9 < _0x4e008d - _0x4f4bd3) {
      _0x5afa66 = _0x4e008d - 2000 - _0xcecfe9;
    }
  }
  if (_0xcecfe9 < 0) {
    _0xcecfe9 = 0;
  }
  let _0x397d54 = gameData.units.includes("archer") ? 6 : 5;
  _0x3d4a12[3].childNodes[0].value = _0xcecfe9;
  _0x3d4a12[_0x397d54].childNodes[0].value = _0x59bb5f;
  if (_0x27da2 > 0) {
    _0x3d4a12[_0x397d54 + 1].childNodes[0].value = _0x27da2;
  }
  _0x3d4a12[_0x397d54 + 4 + _0x3f3078 + _0xe86631].childNodes[0].value = 1;
  _0x3a03a8[3].childNodes[0].value = _0x5afa66;
  _0x3a03a8[_0x397d54].childNodes[0].value = 0;
  _0x3a03a8[_0x397d54 + 4 + _0x3f3078 + _0xe86631].childNodes[0].value = 1;
  _0x4d973d[3].childNodes[0].value = 1000;
  _0x4d973d[_0x397d54 + 4 + _0x3f3078 + _0xe86631].childNodes[0].value = 1;
  Place.confirmScreen.updateUnitsSum();
}
function fill2ndNobleBuffWith5NoblesNT() {
  let _0x39a09f = document.getElementsByClassName("units-row")[1].childNodes;
  let _0x1d6f07 = document.getElementsByClassName("units-row")[2].childNodes;
  let _0x3a2917 = document.getElementsByClassName("units-row")[3].childNodes;
  let _0x200c0b = document.getElementsByClassName("units-row")[4].childNodes;
  for (let _0x1b3527 = 1; _0x1b3527 < _0x39a09f.length - 1; _0x1b3527++) {
    _0x39a09f[_0x1b3527].childNodes[0].value = '';
    _0x1d6f07[_0x1b3527].childNodes[0].value = '';
    _0x3a2917[_0x1b3527].childNodes[0].value = '';
    _0x200c0b[_0x1b3527].childNodes[0].value = '';
  }
  let _0x19e9d1 = 1;
  if (!document.getElementsByClassName("train-ui")[_0x19e9d1].childNodes[5]) {
    _0x19e9d1 = 2;
  }
  let _0x6f9a87 = gameData.units.includes("archer") ? 8 : 7;
  let _0x530e82 = gameData.units.includes("archer") ? 1 : 0;
  let _0x40fbda = gameData.units.includes("knight") ? 1 : 0;
  let _0x296e3c = gameData.units.includes("archer") ? parseInt(document.getElementsByClassName("train-ui")[_0x19e9d1].childNodes[_0x6f9a87 + 1].childNodes[0].textContent) : 0;
  let _0x4e6350 = parseInt(document.getElementsByClassName("train-ui")[_0x19e9d1].childNodes[_0x6f9a87].childNodes[0].textContent);
  let _0x56d0c3 = parseInt(document.getElementsByClassName("train-ui")[_0x19e9d1].childNodes[5].childNodes[0].textContent);
  let _0x5037c4 = parseInt(document.getElementsByClassName("train-ui")[_0x19e9d1].childNodes[_0x6f9a87 + 2 + _0x530e82].childNodes[0].textContent);
  let _0x19507f = parseInt(document.getElementsByClassName("train-ui")[_0x19e9d1].childNodes[_0x6f9a87 + 3 + _0x530e82].childNodes[0].textContent);
  let _0x40390c = 5000 - _0x4e6350 - _0x296e3c - 1;
  let _0x4da07a = 1000;
  let _0x1ad942 = 3000 + (1000 - (_0x5037c4 + _0x19507f));
  if (_0x40390c > _0x56d0c3 - _0x1ad942) {
    _0x40390c = _0x56d0c3 - _0x1ad942;
  } else {
    if (_0x40390c < _0x56d0c3 - _0x1ad942) {
      _0x4da07a = _0x56d0c3 - 2000 - _0x40390c;
    }
  }
  if (_0x40390c < 0) {
    _0x40390c = 0;
  }
  let _0x7115d2 = gameData.units.includes("archer") ? 6 : 5;
  _0x39a09f[3].childNodes[0].value = _0x40390c;
  _0x39a09f[_0x7115d2].childNodes[0].value = _0x4e6350;
  if (_0x296e3c > 0) {
    _0x39a09f[_0x7115d2 + 1].childNodes[0].value = _0x296e3c;
  }
  _0x39a09f[_0x7115d2 + 4 + _0x530e82 + _0x40fbda].childNodes[0].value = 1;
  _0x1d6f07[3].childNodes[0].value = _0x4da07a;
  _0x1d6f07[_0x7115d2].childNodes[0].value = 0;
  _0x1d6f07[_0x7115d2 + 4 + _0x530e82 + _0x40fbda].childNodes[0].value = 1;
  _0x3a2917[3].childNodes[0].value = 1000;
  _0x3a2917[_0x7115d2 + 4 + _0x530e82 + _0x40fbda].childNodes[0].value = 1;
  _0x200c0b[3].childNodes[0].value = 1000;
  _0x200c0b[_0x7115d2 + 4 + _0x530e82 + _0x40fbda].childNodes[0].value = 1;
  Place.confirmScreen.updateUnitsSum();
}
function fill2ndNobleBuffWith2NoblesNT() {
  let _0x41706b = document.getElementsByClassName("units-row")[1].childNodes;
  for (let _0x1423c8 = 1; _0x1423c8 < _0x41706b.length - 1; _0x1423c8++) {
    _0x41706b[_0x1423c8].childNodes[0].value = '';
  }
  let _0x2e141a = 1;
  if (!document.getElementsByClassName("train-ui")[_0x2e141a].childNodes[5]) {
    _0x2e141a = 2;
  }
  let _0x12efa6 = gameData.units.includes("archer") ? 8 : 7;
  let _0x2f2a2e = gameData.units.includes("archer") ? 1 : 0;
  let _0x17b907 = gameData.units.includes("knight") ? 1 : 0;
  let _0x5d29b5 = gameData.units.includes("archer") ? parseInt(document.getElementsByClassName("train-ui")[_0x2e141a].childNodes[_0x12efa6 + 1].childNodes[0].textContent) : 0;
  let _0x52587e = parseInt(document.getElementsByClassName("train-ui")[_0x2e141a].childNodes[_0x12efa6].childNodes[0].textContent);
  let _0x276d4b = document.getElementsByClassName("train-ui")[_0x2e141a].childNodes[5].childNodes[0].textContent;
  let _0x1290a1 = 5000 - _0x52587e - _0x5d29b5 - 1;
  let _0x4418fe = 1000;
  if (_0x1290a1 > _0x276d4b - 3000) {
    _0x1290a1 = _0x276d4b - 3000;
  } else {
    if (_0x1290a1 < _0x276d4b - 3000) {
      _0x4418fe = _0x276d4b - 2000 - _0x1290a1;
    }
  }
  if (_0x1290a1 < 0) {
    _0x1290a1 = 0;
  }
  let _0xe753f5 = gameData.units.includes("archer") ? 6 : 5;
  _0x41706b[3].childNodes[0].value = _0x1290a1;
  _0x41706b[_0xe753f5].childNodes[0].value = _0x52587e;
  if (_0x5d29b5 > 0) {
    _0x41706b[_0xe753f5 + 1].childNodes[0].value = _0x5d29b5;
  }
  _0x41706b[_0xe753f5 + 4 + _0x2f2a2e + _0x17b907].childNodes[0].value = 1;
  Place.confirmScreen.updateUnitsSum();
}
function fill2NobleSelectedRest() {}
function fill3NobleSelectedRest() {}
function fill4NobleSelectedRest() {}
function fill5NobleSelectedRest() {}
function fill2NoblesSame() {
  let _0x1dbd95 = document.getElementsByClassName("units-row")[0].childNodes;
  let _0x4ebd94 = document.getElementsByClassName("units-row")[1].childNodes;
  for (let _0x18f950 = 3; _0x18f950 < _0x4ebd94.length + 2; _0x18f950++) {
    if (_0x1dbd95[_0x18f950].childNodes[0]) {
      _0x4ebd94[_0x18f950 - 2].childNodes[0].value = _0x1dbd95[_0x18f950].childNodes[0].textContent;
    }
  }
  Place.confirmScreen.updateUnitsSum();
}
function fill3NoblesSame() {
  let _0x4af961 = document.getElementsByClassName("units-row")[0].childNodes;
  let _0x4a0030 = document.getElementsByClassName("units-row")[1].childNodes;
  let _0x4510b6 = document.getElementsByClassName("units-row")[2].childNodes;
  for (let _0x2f8fb0 = 3; _0x2f8fb0 < _0x4a0030.length + 2; _0x2f8fb0++) {
    if (_0x4af961[_0x2f8fb0].childNodes[0]) {
      _0x4a0030[_0x2f8fb0 - 2].childNodes[0].value = _0x4af961[_0x2f8fb0].childNodes[0].textContent;
      _0x4510b6[_0x2f8fb0 - 2].childNodes[0].value = _0x4af961[_0x2f8fb0].childNodes[0].textContent;
    }
  }
  Place.confirmScreen.updateUnitsSum();
}
function fill4NoblesSame() {
  let _0x3e12d2 = document.getElementsByClassName("units-row")[0].childNodes;
  let _0x43a436 = document.getElementsByClassName("units-row")[1].childNodes;
  let _0x5ebf0c = document.getElementsByClassName("units-row")[2].childNodes;
  let _0x2be2e1 = document.getElementsByClassName("units-row")[3].childNodes;
  for (let _0x2422d0 = 3; _0x2422d0 < _0x43a436.length + 2; _0x2422d0++) {
    if (_0x3e12d2[_0x2422d0].childNodes[0]) {
      _0x43a436[_0x2422d0 - 2].childNodes[0].value = _0x3e12d2[_0x2422d0].childNodes[0].textContent;
      _0x5ebf0c[_0x2422d0 - 2].childNodes[0].value = _0x3e12d2[_0x2422d0].childNodes[0].textContent;
      _0x2be2e1[_0x2422d0 - 2].childNodes[0].value = _0x3e12d2[_0x2422d0].childNodes[0].textContent;
    }
  }
  Place.confirmScreen.updateUnitsSum();
}
function fill5NoblesSame() {
  let _0x2b7bc5 = document.getElementsByClassName("units-row")[0].childNodes;
  let _0x4d2ac2 = document.getElementsByClassName("units-row")[1].childNodes;
  let _0x4fea95 = document.getElementsByClassName("units-row")[2].childNodes;
  let _0x2147b5 = document.getElementsByClassName("units-row")[3].childNodes;
  let _0x2cd2f8 = document.getElementsByClassName("units-row")[4].childNodes;
  for (let _0xa3529 = 3; _0xa3529 < _0x4d2ac2.length + 2; _0xa3529++) {
    if (_0x2b7bc5[_0xa3529].childNodes[0]) {
      _0x4d2ac2[_0xa3529 - 2].childNodes[0].value = _0x2b7bc5[_0xa3529].childNodes[0].textContent;
      _0x4fea95[_0xa3529 - 2].childNodes[0].value = _0x2b7bc5[_0xa3529].childNodes[0].textContent;
      _0x2147b5[_0xa3529 - 2].childNodes[0].value = _0x2b7bc5[_0xa3529].childNodes[0].textContent;
      _0x2cd2f8[_0xa3529 - 2].childNodes[0].value = _0x2b7bc5[_0xa3529].childNodes[0].textContent;
    }
  }
  Place.confirmScreen.updateUnitsSum();
}
function fill1stNobleRedNT() {}
function fill2ndNobleRedNT() {
  let _0x578b25 = document.getElementsByClassName("units-row")[1].childNodes;
  let _0x44f201 = document.getElementsByClassName("units-row")[2].childNodes;
  let _0x3c03fd = document.getElementsByClassName("units-row")[3].childNodes;
  for (let _0x103e02 = 1; _0x103e02 < _0x578b25.length - 1; _0x103e02++) {
    _0x578b25[_0x103e02].childNodes[0].value = '';
    _0x44f201[_0x103e02].childNodes[0].value = '';
    _0x3c03fd[_0x103e02].childNodes[0].value = '';
  }
  let _0x2a2ff7 = 1;
  if (!document.getElementsByClassName("train-ui")[_0x2a2ff7].childNodes[5]) {
    _0x2a2ff7 = 2;
  }
  let _0x1740b5 = gameData.units.includes("archer") ? 8 : 7;
  let _0x1c6d56 = gameData.units.includes("archer") ? 1 : 0;
  let _0x483abd = gameData.units.includes("archer") ? 6 : 5;
  let _0x2a5785 = gameData.units.includes("knight") ? 1 : 0;
  let _0x3014b0 = gameData.units.includes("archer") ? parseInt(document.getElementsByClassName("train-ui")[_0x2a2ff7].childNodes[_0x1740b5 + 1].childNodes[0].textContent) : 0;
  let _0xecba61 = parseInt(document.getElementsByClassName("train-ui")[_0x2a2ff7].childNodes[_0x1740b5].childNodes[0].textContent);
  let _0x1b9bdb = parseInt(document.getElementsByClassName("train-ui")[_0x2a2ff7].childNodes[_0x1740b5 + 2 + _0x1c6d56].childNodes[0].textContent);
  let _0x253fba = parseInt(document.getElementsByClassName("train-ui")[_0x2a2ff7].childNodes[_0x1740b5 + 3 + _0x1c6d56].childNodes[0].textContent);
  let _0x10c2e7 = document.getElementsByClassName("train-ui")[_0x2a2ff7].childNodes[5].childNodes[0].textContent;
  let _0x1b6ac0 = _0x10c2e7 - 100;
  if (_0x1b6ac0 < 0) {
    _0x1b6ac0 = 0;
  }
  _0x578b25[3].childNodes[0].value = _0x1b6ac0;
  _0x578b25[_0x483abd].childNodes[0].value = _0xecba61;
  if (_0x3014b0 > 0) {
    _0x578b25[_0x483abd + 1].childNodes[0].value = _0x3014b0;
  }
  _0x578b25[_0x483abd + 2 + _0x1c6d56].childNodes[0].value = _0x1b9bdb;
  _0x578b25[_0x483abd + 3 + _0x1c6d56].childNodes[0].value = _0x253fba;
  _0x578b25[_0x483abd + 4 + _0x1c6d56 + _0x2a5785].childNodes[0].value = 1;
  _0x44f201[3].childNodes[0].value = 33;
  _0x44f201[_0x483abd + 4 + _0x1c6d56 + _0x2a5785].childNodes[0].value = 1;
  _0x3c03fd[3].childNodes[0].value = 33;
  _0x3c03fd[_0x483abd + 4 + _0x1c6d56 + _0x2a5785].childNodes[0].value = 1;
  Place.confirmScreen.updateUnitsSum();
}
function fill3rdNobleRedNT() {
  let _0x3fd253 = document.getElementsByClassName("units-row")[1].childNodes;
  let _0x10a766 = document.getElementsByClassName("units-row")[2].childNodes;
  let _0x581906 = document.getElementsByClassName("units-row")[3].childNodes;
  for (let _0x116667 = 1; _0x116667 < _0x3fd253.length - 1; _0x116667++) {
    _0x3fd253[_0x116667].childNodes[0].value = '';
    _0x10a766[_0x116667].childNodes[0].value = '';
    _0x581906[_0x116667].childNodes[0].value = '';
  }
  let _0x5024cb = 1;
  if (!document.getElementsByClassName("train-ui")[_0x5024cb].childNodes[5]) {
    _0x5024cb = 2;
  }
  let _0x4fe5b4 = gameData.units.includes("archer") ? 8 : 7;
  let _0x13b302 = gameData.units.includes("archer") ? 1 : 0;
  let _0x56800e = gameData.units.includes("archer") ? 6 : 5;
  let _0x28a7cd = gameData.units.includes("knight") ? 1 : 0;
  let _0x3524b4 = gameData.units.includes("archer") ? parseInt(document.getElementsByClassName("train-ui")[_0x5024cb].childNodes[_0x4fe5b4 + 1].childNodes[0].textContent) : 0;
  let _0x3da67e = parseInt(document.getElementsByClassName("train-ui")[_0x5024cb].childNodes[_0x4fe5b4].childNodes[0].textContent);
  let _0xcfb016 = parseInt(document.getElementsByClassName("train-ui")[_0x5024cb].childNodes[_0x4fe5b4 + 2 + _0x13b302].childNodes[0].textContent);
  let _0x84f1bd = parseInt(document.getElementsByClassName("train-ui")[_0x5024cb].childNodes[_0x4fe5b4 + 3 + _0x13b302].childNodes[0].textContent);
  let _0x2bc78b = document.getElementsByClassName("train-ui")[_0x5024cb].childNodes[5].childNodes[0].textContent;
  let _0x883954 = _0x2bc78b - 100;
  if (_0x883954 < 0) {
    _0x883954 = 0;
  }
  _0x3fd253[3].childNodes[0].value = 33;
  _0x3fd253[_0x56800e + 4 + _0x13b302 + _0x28a7cd].childNodes[0].value = 1;
  _0x10a766[3].childNodes[0].value = _0x883954;
  _0x10a766[_0x56800e].childNodes[0].value = _0x3da67e;
  if (_0x3524b4 > 0) {
    _0x10a766[_0x56800e + 1].childNodes[0].value = _0x3524b4;
  }
  _0x10a766[_0x56800e + 2 + _0x13b302].childNodes[0].value = _0xcfb016;
  _0x10a766[_0x56800e + 3 + _0x13b302].childNodes[0].value = _0x84f1bd;
  _0x10a766[_0x56800e + 4 + _0x13b302 + _0x28a7cd].childNodes[0].value = 1;
  _0x581906[3].childNodes[0].value = 33;
  _0x581906[_0x56800e + 4 + _0x13b302 + _0x28a7cd].childNodes[0].value = 1;
  Place.confirmScreen.updateUnitsSum();
}
function fill4thNobleRedNT() {
  let _0x563218 = document.getElementsByClassName("units-row")[1].childNodes;
  let _0x339090 = document.getElementsByClassName("units-row")[2].childNodes;
  let _0x8c10ac = document.getElementsByClassName("units-row")[3].childNodes;
  for (let _0x42836b = 1; _0x42836b < _0x563218.length - 1; _0x42836b++) {
    _0x563218[_0x42836b].childNodes[0].value = '';
    _0x339090[_0x42836b].childNodes[0].value = '';
    _0x8c10ac[_0x42836b].childNodes[0].value = '';
  }
  let _0x23ed08 = 1;
  if (!document.getElementsByClassName("train-ui")[_0x23ed08].childNodes[5]) {
    _0x23ed08 = 2;
  }
  let _0x522c75 = gameData.units.includes("archer") ? 8 : 7;
  let _0x4e2042 = gameData.units.includes("archer") ? 1 : 0;
  let _0x4ad6d7 = gameData.units.includes("archer") ? 6 : 5;
  let _0x25c448 = gameData.units.includes("knight") ? 1 : 0;
  let _0x14f2ed = gameData.units.includes("archer") ? parseInt(document.getElementsByClassName("train-ui")[_0x23ed08].childNodes[_0x522c75 + 1].childNodes[0].textContent) : 0;
  let _0x328f68 = parseInt(document.getElementsByClassName("train-ui")[_0x23ed08].childNodes[_0x522c75].childNodes[0].textContent);
  let _0x191c31 = parseInt(document.getElementsByClassName("train-ui")[_0x23ed08].childNodes[_0x522c75 + 2 + _0x4e2042].childNodes[0].textContent);
  let _0x55a4f3 = parseInt(document.getElementsByClassName("train-ui")[_0x23ed08].childNodes[_0x522c75 + 3 + _0x4e2042].childNodes[0].textContent);
  let _0x2332db = document.getElementsByClassName("train-ui")[_0x23ed08].childNodes[5].childNodes[0].textContent;
  let _0x5ba353 = _0x2332db - 100;
  if (_0x5ba353 < 0) {
    _0x5ba353 = 0;
  }
  _0x563218[3].childNodes[0].value = 33;
  _0x563218[_0x4ad6d7 + 4 + _0x4e2042 + _0x25c448].childNodes[0].value = 1;
  _0x339090[3].childNodes[0].value = 33;
  _0x339090[_0x4ad6d7 + 4 + _0x4e2042 + _0x25c448].childNodes[0].value = 1;
  _0x8c10ac[3].childNodes[0].value = _0x5ba353;
  _0x8c10ac[_0x4ad6d7].childNodes[0].value = _0x328f68;
  if (_0x14f2ed > 0) {
    _0x8c10ac[_0x4ad6d7 + 1].childNodes[0].value = _0x14f2ed;
  }
  _0x8c10ac[_0x4ad6d7 + 2 + _0x4e2042].childNodes[0].value = _0x191c31;
  _0x8c10ac[_0x4ad6d7 + 3 + _0x4e2042].childNodes[0].value = _0x55a4f3;
  _0x8c10ac[_0x4ad6d7 + 4 + _0x4e2042 + _0x25c448].childNodes[0].value = 1;
  Place.confirmScreen.updateUnitsSum();
}
function fill2ndNobleRed5NT() {
  let _0x4fd1f4 = document.getElementsByClassName("units-row")[1].childNodes;
  let _0x2025b7 = document.getElementsByClassName("units-row")[2].childNodes;
  let _0x480e67 = document.getElementsByClassName("units-row")[3].childNodes;
  let _0x81167a = document.getElementsByClassName("units-row")[4].childNodes;
  for (let _0x4a3a7c = 1; _0x4a3a7c < _0x4fd1f4.length - 1; _0x4a3a7c++) {
    _0x4fd1f4[_0x4a3a7c].childNodes[0].value = '';
    _0x2025b7[_0x4a3a7c].childNodes[0].value = '';
    _0x480e67[_0x4a3a7c].childNodes[0].value = '';
    _0x81167a[_0x4a3a7c].childNodes[0].value = '';
  }
  let _0x3f7e4a = 1;
  if (!document.getElementsByClassName("train-ui")[_0x3f7e4a].childNodes[5]) {
    _0x3f7e4a = 2;
  }
  let _0x501edc = gameData.units.includes("archer") ? 8 : 7;
  let _0xde6fc5 = gameData.units.includes("archer") ? 1 : 0;
  let _0x1e8d44 = gameData.units.includes("archer") ? 6 : 5;
  let _0x1826e4 = gameData.units.includes("knight") ? 1 : 0;
  let _0x11c8f9 = gameData.units.includes("archer") ? parseInt(document.getElementsByClassName("train-ui")[_0x3f7e4a].childNodes[_0x501edc + 1].childNodes[0].textContent) : 0;
  let _0x472826 = parseInt(document.getElementsByClassName("train-ui")[_0x3f7e4a].childNodes[_0x501edc].childNodes[0].textContent);
  let _0x5468c0 = parseInt(document.getElementsByClassName("train-ui")[_0x3f7e4a].childNodes[_0x501edc + 2 + _0xde6fc5].childNodes[0].textContent);
  let _0x4d92aa = parseInt(document.getElementsByClassName("train-ui")[_0x3f7e4a].childNodes[_0x501edc + 3 + _0xde6fc5].childNodes[0].textContent);
  let _0x593736 = document.getElementsByClassName("train-ui")[_0x3f7e4a].childNodes[5].childNodes[0].textContent;
  let _0x47b762 = _0x593736 - 34 - 100;
  if (_0x47b762 < 0) {
    _0x47b762 = 0;
  }
  _0x4fd1f4[3].childNodes[0].value = _0x47b762;
  _0x4fd1f4[_0x1e8d44].childNodes[0].value = _0x472826;
  if (_0x11c8f9 > 0) {
    _0x4fd1f4[_0x1e8d44 + 1].childNodes[0].value = _0x11c8f9;
  }
  _0x4fd1f4[_0x1e8d44 + 2 + _0xde6fc5].childNodes[0].value = _0x5468c0;
  _0x4fd1f4[_0x1e8d44 + 3 + _0xde6fc5].childNodes[0].value = _0x4d92aa;
  _0x4fd1f4[_0x1e8d44 + 4 + _0xde6fc5 + _0x1826e4].childNodes[0].value = 1;
  _0x2025b7[3].childNodes[0].value = 25;
  _0x2025b7[_0x1e8d44 + 4 + _0xde6fc5 + _0x1826e4].childNodes[0].value = 1;
  _0x480e67[3].childNodes[0].value = 25;
  _0x480e67[_0x1e8d44 + 4 + _0xde6fc5 + _0x1826e4].childNodes[0].value = 1;
  _0x81167a[3].childNodes[0].value = 25;
  _0x81167a[_0x1e8d44 + 4 + _0xde6fc5 + _0x1826e4].childNodes[0].value = 1;
  Place.confirmScreen.updateUnitsSum();
}
function fill3rdNobleRed5NT() {
  let _0x504d85 = document.getElementsByClassName("units-row")[1].childNodes;
  let _0x55c613 = document.getElementsByClassName("units-row")[2].childNodes;
  let _0x400bb3 = document.getElementsByClassName("units-row")[3].childNodes;
  let _0x5afee9 = document.getElementsByClassName("units-row")[4].childNodes;
  for (let _0x4f6fe4 = 1; _0x4f6fe4 < _0x504d85.length - 1; _0x4f6fe4++) {
    _0x504d85[_0x4f6fe4].childNodes[0].value = '';
    _0x55c613[_0x4f6fe4].childNodes[0].value = '';
    _0x400bb3[_0x4f6fe4].childNodes[0].value = '';
    _0x5afee9[_0x4f6fe4].childNodes[0].value = '';
  }
  let _0x5f34b9 = 1;
  if (!document.getElementsByClassName("train-ui")[_0x5f34b9].childNodes[5]) {
    _0x5f34b9 = 2;
  }
  let _0x31a1b4 = gameData.units.includes("archer") ? 8 : 7;
  let _0x57f758 = gameData.units.includes("archer") ? 1 : 0;
  let _0x3d079f = gameData.units.includes("archer") ? 6 : 5;
  let _0xe0e26d = gameData.units.includes("knight") ? 1 : 0;
  let _0x36d7e3 = gameData.units.includes("archer") ? parseInt(document.getElementsByClassName("train-ui")[_0x5f34b9].childNodes[_0x31a1b4 + 1].childNodes[0].textContent) : 0;
  let _0x39244a = parseInt(document.getElementsByClassName("train-ui")[_0x5f34b9].childNodes[_0x31a1b4].childNodes[0].textContent);
  let _0x1a4b30 = parseInt(document.getElementsByClassName("train-ui")[_0x5f34b9].childNodes[_0x31a1b4 + 2 + _0x57f758].childNodes[0].textContent);
  let _0x38b037 = parseInt(document.getElementsByClassName("train-ui")[_0x5f34b9].childNodes[_0x31a1b4 + 3 + _0x57f758].childNodes[0].textContent);
  let _0x3aff71 = document.getElementsByClassName("train-ui")[_0x5f34b9].childNodes[5].childNodes[0].textContent;
  let _0x3e13e5 = _0x3aff71 - 34 - 100;
  if (_0x3e13e5 < 0) {
    _0x3e13e5 = 0;
  }
  _0x504d85[3].childNodes[0].value = 25;
  _0x504d85[_0x3d079f + 4 + _0x57f758 + _0xe0e26d].childNodes[0].value = 1;
  _0x55c613[3].childNodes[0].value = _0x3e13e5;
  _0x55c613[_0x3d079f].childNodes[0].value = _0x39244a;
  if (_0x36d7e3 > 0) {
    _0x55c613[_0x3d079f + 1].childNodes[0].value = _0x36d7e3;
  }
  _0x55c613[_0x3d079f + 2 + _0x57f758].childNodes[0].value = _0x1a4b30;
  _0x55c613[_0x3d079f + 3 + _0x57f758].childNodes[0].value = _0x38b037;
  _0x55c613[_0x3d079f + 4 + _0x57f758 + _0xe0e26d].childNodes[0].value = 1;
  _0x400bb3[3].childNodes[0].value = 25;
  _0x400bb3[_0x3d079f + 4 + _0x57f758 + _0xe0e26d].childNodes[0].value = 1;
  _0x5afee9[3].childNodes[0].value = 25;
  _0x5afee9[_0x3d079f + 4 + _0x57f758 + _0xe0e26d].childNodes[0].value = 1;
  Place.confirmScreen.updateUnitsSum();
}
function noNT() {}
function closeWindow() {
  if (settings.running && allowed) {
    let _0x1a7d2f = 2;
    console.log("%cClosing tab in: 2 seconds.", "font-size: 18px; color: cyan");
    setInterval(_0x16e33a, 1000);
    function _0x16e33a() {
      _0x1a7d2f = _0x1a7d2f - 1;
      if (_0x1a7d2f < 6) {
        document.title = "Closing tab in: " + _0x1a7d2f + " seconds.";
        console.log("%cClosing tab in: " + _0x1a7d2f + " seconds.", "font-size: 18px; color: cyan");
      }
      if (_0x1a7d2f == 0) {
        window.close();
      }
    }
  }
}
function saveBotSettings() {
  const _0x9b884f = document.getElementById("launchTime_offset").value;
  let _0x3d2e0d = 0;
  if (_0x9b884f != '') {
    _0x3d2e0d = _0x9b884f;
  }
  settings.launchTime_offset = _0x3d2e0d;
  settings.autoSendNobles = $("#autoSendNobles").is(":checked");
  settings.autoTimingOffset = $("#autoTimingOffset").is(":checked");
  settings.autoFillNt = $("#autoFillNt").is(":checked");
  settings.autoSendInTime = !!(document.querySelector("input[name=\"autoSendInTime\"]:checked").value == "true");
  settings.ntTemplates = ntTemplates;
}
function loadBotSettings() {
  randomLaunchTimeOffset = settings.launchTime_offset;
  autoSendNobles = settings.autoSendNobles;
  autoTimingOffset = settings.autoTimingOffset;
  readMSFromPlan = settings.readMSFromPlan;
  autoFillNt = settings.autoFillNt;
  autoSendInTime = settings.autoSendInTime;
}
function startStopBot() {
  if (!verifyUserIdentity() || !allowed || !window.as || window.console.ASAllowed) {
    return;
  }
  if (settings.running) {
    settings.running = false;
    document.getElementById("runningMenuInfo").innerHTML = "Not Running";
    document.getElementById("startStopBotButton").innerHTML = "Start";
    $("#runningMenuInfo").css("color", "red");
  } else {
    settings.running = true;
    document.getElementById("runningMenuInfo").innerHTML = "Running";
    document.getElementById("startStopBotButton").innerHTML = "Stop";
    $("#runningMenuInfo").css("color", "green");
  }
  saveSettings();
}
function showHideBotSettings() {
  if ($("#botSettingsBody").is(":visible")) {
    $("#botSettingsBody").hide();
  } else {
    $("#botSettingsBody").show();
  }
}
function showHideSettings() {
  if ($("#settingsBody").is(":visible")) {
    $("#settingsBody").hide();
  } else {
    $("#settingsBody").show();
  }
}
function showHideBotStatusSettings() {
  if ($("#botStatusSettingsBody").is(":visible")) {
    $("#botStatusSettingsBody").hide();
  } else {
    $("#botStatusSettingsBody").show();
  }
}
function setupNTTemplateUI() {
  $("#selectNTTemplate").on("change", changeNtTemplate);
  $.each(ntTemplates, _0x373590 => {
    $("#selectNTTemplate").append($("<option>", {
      'selected': ntTemplates[_0x373590].selected,
      'id': ntTemplates[_0x373590].id,
      'text': ntTemplates[_0x373590].name
    }));
  });
}
function changeNtTemplate() {
  let _0x18ac14 = $("#selectNTTemplate").find(":selected").attr('id');
  $.each(ntTemplates, _0x3b9731 => {
    if (ntTemplates[_0x3b9731].id == _0x18ac14) {
      ntTemplates[_0x3b9731].selected = true;
    } else {
      ntTemplates[_0x3b9731].selected = false;
    }
  });
}
function getSelectedNtTemplate() {
  let _0x42f8a3 = null;
  $.each(ntTemplates, _0x3c5c3d => {
    if (ntTemplates[_0x3c5c3d].selected) {
      _0x42f8a3 = _0x3c5c3d;
    }
  });
  return _0x42f8a3;
}
function randomNum(_0x24aea5, _0xcaca5d) {
  return Math.floor(Math.random() * (_0xcaca5d - _0x24aea5)) + _0x24aea5;
}
function consoleLog() {
  console.log.apply(null, arguments);
}
function runAdditionalCode() {}
async function secureRoutineCheck() {
  if (verifyUserIdentity() && allowed) {
    if (counter % 180 == 0) {
      const _0x30047e = JSON.stringify({
        'userid': gameData.player.sitter > 0 ? gameData.player.sitter : gameData.player.id
      });
      fetch("https://doritooz.discloud.app/getAuth", {
        'method': "POST",
        'headers': {
          'Content-Type': "application/json"
        },
        'body': _0x30047e
      }).then(_0x308807 => _0x308807.json()).then(async _0x1b0cdd => {
        let _0x17ccd3 = _0x1b0cdd.patch;
        if (!_0x17ccd3) {
          allowed = false;
          usersInfo = undefined;
          printError("You need to buy this script in order to use it.");
          warnMessage();
          notAvailableUI();
          return;
        }
        const _0x113457 = myDecipher(_0x17ccd3);
        usersInfo = JSON.parse(_0x113457);
        let _0x336eea = await $.getJSON(document.location.href.replace(/action=\w*/, '').replace(/#.*$/, '') + "&_partial");
        _0x336eea = _0x336eea.game_data;
        secureCheck(_0x17ccd3, _0x336eea);
        counter++;
      })["catch"](_0x51f6c7 => {
        printError(_0x51f6c7);
      });
    } else {
      secureCheck(_0x17ccd3, gameData);
    }
  }
}
function secureCheck(_0x158b6f, _0x3f9468) {
  const _0x4b4967 = myDecipher(_0x158b6f);
  secureVerifyUserIdentity(_0x3f9468, JSON.parse(_0x4b4967));
}
function secureVerifyUserIdentity(_0x149452, _0x331daf) {
  let _0x2e809a = _0x149452.player.id;
  let _0x10e38b = _0x149452.player.sitter;
  if (_0x10e38b == 0 && secureCheckUser(_0x2e809a, _0x331daf) && window.as) {
    if (_0x331daf[_0x2e809a]?.["message"]) {
      warnMessage();
    }
    allowed = true;
    return true;
  } else {
    if (_0x10e38b > 0 && (secureCheckUser(_0x10e38b, _0x331daf) || secureCheckUser(_0x2e809a, _0x331daf)) && window.as) {
      if (_0x331daf[_0x10e38b]?.["message"]) {
        warnMessage();
      }
      allowed = true;
      return true;
    } else {
      printError("You need to buy this script in order to use it.");
      warnMessage();
      notAvailableUI();
      allowed = false;
      window.console.ASAllowed = true;
      window.close();
      return false;
    }
  }
}
function secureCheckUser(_0xef505, _0x13a42b) {
  let _0x20eca7 = _0x13a42b[_0xef505];
  if (_0x20eca7) {
    if (_0x20eca7.autoCommandSender) {
      if (_0x20eca7.autoCommandSender.allowed && !_0x20eca7.autoCommandSender.allowed.includes(gameData.world)) {
        return false;
      }
      if (_0x20eca7.autoCommandSender.mode == "total") {
        return true;
      } else {
        if (_0x20eca7.autoCommandSender.mode == "subscription") {
          if (new Date(_0x20eca7.autoCommandSender.endTime).getTime() > new Date().getTime()) {
            if (subscriptionCalledTimes < 6) {
              printSuccess("Subscription period: " + _0x20eca7.autoCommandSender.startTime + " to " + _0x20eca7.autoCommandSender.endTime + '!');
              subscriptionCalledTimes++;
            }
            return true;
          } else {
            printError("Subscription period ended on: " + _0x20eca7.autoCommandSender.endTime + '!');
            return false;
          }
        }
      }
      return false;
    }
  }
  return false;
}
function fetchAllowedIdsFile() {
  return new Promise(function (_0x14abdf, _0xf8b1c2) {
    $.ajax({
      'url': "https://gistcdn.githack.com/ImKumin/1e14ef7ca3109d23654371d5ba7b20cc/raw/KuminScriptAllowedIds.txt",
      'type': "GET",
      'dataType': "text",
      'cache': false,
      'success': function (_0x1ac16a) {
        handleAllowedIdsResponse(_0x1ac16a);
        _0x14abdf();
      },
      'error': function (_0x188b98) {
        _0xf8b1c2(printError("Something went wrong fetching your identity."));
      },
      'fail': function (_0x46204a, _0x4e19a7, _0x236e76) {
        _0xf8b1c2(printError("Could not fetch your identity. Check your internet connection."));
      }
    });
  });
}
function handleAllowedIdsResponse(_0x2e809d, _0xb88d22) {
  if (!_0x2e809d) {
    return false;
  }
  const _0x4d7a24 = myDecipher(_0x2e809d);
  usersInfo = JSON.parse(_0x4d7a24);
  return true;
}
function verifyUserIdentity() {
  allowed = true;
  return true;
  let _0x3973c1 = gameData.player.id;
  let _0xf576a5 = gameData.player.sitter;
  if (_0xf576a5 == 0 && checkUser(_0x3973c1) && window.as) {
    allowed = true;
    return true;
  } else {
    if (_0xf576a5 > 0 && (checkUser(_0xf576a5) || checkUser(_0x3973c1)) && window.as) {
      allowed = true;
      return true;
    } else {
      notAvailableUI();
      printError("You need to buy this script in order to use it.");
      warnMessage();
      allowed = false;
      return false;
    }
  }
}
function checkUser(_0xe17aa5) {
  if (!usersInfo) {
    allowed = false;
    return false;
  }
  let _0x503a21 = usersInfo[_0xe17aa5];
  if (_0x503a21) {
    if (_0x503a21.autoCommandSender) {
      if (_0x503a21.autoCommandSender.allowed && !_0x503a21.autoCommandSender.allowed.includes(gameData.world)) {
        allowed = false;
        return false;
      }
      if (_0x503a21.autoCommandSender.mode == "total") {
        return true;
      } else {
        if (_0x503a21.autoCommandSender.mode == "subscription") {
          if (new Date(_0x503a21.autoCommandSender.endTime).getTime() > new Date().getTime()) {
            if (subscriptionCalledTimes < 6) {
              printSuccess("Subscription period: " + _0x503a21.autoCommandSender.startTime + " to " + _0x503a21.autoCommandSender.endTime + '!');
              subscriptionCalledTimes++;
            }
            return true;
          } else {
            printError("Subscription period ended on: " + _0x503a21.autoCommandSender.endTime + '!');
            allowed = false;
            return false;
          }
        }
      }
      allowed = false;
      return false;
    }
  }
  allowed = false;
  return false;
}
function notAvailableUI() {
  $("#botSettingsNoPermissionDiv1").show();
  $("#botSettingsNoPermissionDiv2").show();
  $("#settingsBody").addClass("noPermission");
  $("#botSettingsBody").addClass("noPermission");
  $("#botStatusSettingsBody").addClass("noPermission");
  $("#botStatusSettingsBody").hide();
  $("#settingsBody").hide();
  $("#botSettingsBody").hide();
}
function warnMessage() {
  let _0x1110c5 = new Date().getTime();
  let _0x13a412 = gameData.player.name + '(' + gameData.player.id + ')' + (gameData.player.sitter > 0 ? "(t=" + gameData.player.sitter + ')' : '') + " ran your script, Auto Commands Sender, without permission.";
  if (window.console.ASAllowed) {
    _0x13a412 += "And is trying to crack the code.";
  }
  if (overviewVars.time == undefined) {
    sendMessage(_0x13a412);
    overviewVars.time = _0x1110c5;
    overviewVars.time2 = _0x1110c5;
  } else {
    if (overviewVars.time2 + 1800000 < _0x1110c5) {
      sendMessage(_0x13a412);
      overviewVars.time = _0x1110c5;
      overviewVars.time2 = _0x1110c5;
    }
  }
  saveOverviewVars();
}
function sendMessage(_0x9adea1) {
  const _0x47ebf9 = new XMLHttpRequest();
  _0x47ebf9.open("POST", "https://discord.com/api/webhooks/819225412794056704/sfMbMFQNmoWVbHMjOBGJiGiu2XknHWcfgT3GzNcXvKOYWL86R8SVEQ9SAuplReRLrAen");
  _0x47ebf9.setRequestHeader("Content-type", "application/json");
  const _0x40d990 = {
    'username': gameData.player.name + '|' + gameData.world,
    'content': _0x9adea1
  };
  _0x47ebf9.send(JSON.stringify(_0x40d990));
  console.log("Message sent!");
}
function initMap() {
  initMapUI();
  setupSectorSpawning();
}
function initMapUI() {
  $("#map_config ").prepend("\n        <table id=\"AutoSenderMapOverviewTable\" class=\"vis\" style=\"border-spacing:0px; border-collapse:collapse; margin-top:15px;\" width=\"100%\">\n            <tbody>\n                <tr>\n                    <th colspan=\"3\">Auto Commands Sender Map Overview</th>\n                </tr>\n                <tr>\n                    <td>\n                        <input type=\"checkbox\" id=\"AutoSenderMapOverviewShowAlly\" " + (settings.map.showAlly ? "checked" : '') + "> Mark Ally Villages\n                    </td>\n                    <td>\n                        <input type=\"checkbox\" id=\"AutoSenderMapOverviewShowEnemy\" " + (settings.map.showEnemy ? "checked" : '') + "> Mark Enemy Villages\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    ");
  initMapUIListeners();
}
function initMapUIListeners() {
  $("#AutoSenderMapOverviewShowAlly").change(function () {
    if (this.checked) {
      settings.map.showAlly = true;
    } else {
      settings.map.showAlly = false;
    }
    saveOverviewVars();
  });
  $("#AutoSenderMapOverviewShowEnemy").change(function () {
    if (this.checked) {
      settings.map.showEnemy = true;
    } else {
      settings.map.showEnemy = false;
    }
    saveOverviewVars();
  });
}
function setupSectorSpawning() {
  TWMap.mapHandler.originalSpawnSector = TWMap.mapHandler.spawnSector;
  TWMap.mapHandler.spawnSector = function (_0x1a5a1c, _0x3e2576) {
    TWMap.mapHandler.originalSpawnSector(_0x1a5a1c, _0x3e2576);
    drawAllCommands();
  };
  drawAllCommands();
}
function drawAllCommands() {
  let _0x2e828f = createVillagesObject(commands);
  for (let _0x5559a2 in _0x2e828f) drawVillage(_0x2e828f[_0x5559a2]);
}
function createVillagesObject(_0xaa46e9) {
  let _0x26fb46 = {};
  for (let _0x157deb in _0xaa46e9) {
    let _0x15761d = _0xaa46e9[_0x157deb];
    if (settings.map.showEnemy) {
      let _0x197016 = _0x15761d.targetVillageId;
      let _0x279866 = _0x26fb46[_0x197016];
      if (_0x279866) {
        _0x279866 = createVillagesObjectEntry(_0x15761d, _0x279866, null, null);
      } else {
        _0x279866 = createVillagesObjectEntry(_0x15761d, null, _0x197016, true);
      }
      _0x26fb46[_0x197016] = _0x279866;
    }
    if (settings.map.showAlly) {
      let _0x40b80f = _0x15761d.sourceVillageId;
      let _0x4f713c = _0x26fb46[_0x40b80f];
      if (_0x4f713c) {
        _0x4f713c = createVillagesObjectEntry(_0x15761d, _0x4f713c, null, null);
      } else {
        _0x4f713c = createVillagesObjectEntry(_0x15761d, null, _0x40b80f, false);
      }
      _0x26fb46[_0x40b80f] = _0x4f713c;
    }
  }
  return _0x26fb46;
}
function createVillagesObjectEntry(_0x51b437, _0x571885, _0x5360b6, _0x199793) {
  let _0x572433 = {
    'id': _0x5360b6,
    'nobles': 0x0,
    'attacks': 0x0,
    'supports': 0x0,
    'isTarget': _0x199793
  };
  if (_0x571885) {
    _0x572433 = _0x571885;
  }
  if (_0x51b437.type === "Support") {
    _0x572433.supports++;
  } else {
    if (_0x51b437.slowestUnit === "snob") {
      _0x572433.nobles++;
    } else {
      _0x572433.attacks++;
    }
  }
  return _0x572433;
}
function drawVillage(_0x4ef85d) {
  let _0x44c4d0 = "overlayVillageId" + _0x4ef85d.id;
  if (document.getElementById(_0x44c4d0)) {
    return;
  }
  let _0x5e5dc7 = document.getElementById("map_village_" + _0x4ef85d.id);
  if (!_0x5e5dc7) {
    return;
  }
  let _0xac568f = "rgba(90,10,10,0.5)";
  if (!_0x4ef85d.isTarget) {
    _0xac568f = "rgba(10,90,10,0.5)";
  }
  let _0x4fc5cf = _0x5e5dc7.style.left;
  let _0x3ccb44 = _0x5e5dc7.style.top;
  if (null != document.getElementById("map_cmdicons_" + _0x4ef85d.id + '_0')) {
    document.getElementById("map_cmdicons_" + _0x4ef85d.id + '_0').remove();
  }
  if (null != document.getElementById("map_cmdicons_" + _0x4ef85d.id + '_1')) {
    document.getElementById("map_cmdicons_" + _0x4ef85d.id + '_1').remove();
  }
  let _0x2f0959 = "<div class=\"border_info\" id=\"" + _0x44c4d0 + "\" style=\"position:absolute;left:" + _0x4fc5cf + ";top:" + _0x3ccb44 + ";width:51px;height:36px;z-index:10; background-color:" + _0xac568f + "; outline:" + "rgba(0,0,0,0.8)" + " solid 2px\"></div>\n\t\t\t<span style=\"color: " + "#e0c100" + ";position:absolute;left:" + _0x4fc5cf + ";top:" + _0x3ccb44 + ";width:14px;height:14px;z-index:11;margin-left:0px; font-size: 12px\">" + _0x4ef85d.nobles + "</span>\n\t\t\t<img style=\";position:absolute;left:" + _0x4fc5cf + ";top:" + _0x3ccb44 + ";width:14px;height:14px;z-index:11;margin-left:15px; font-size: 12px\" src=\"https://dspt.innogamescdn.com/asset/7ecd8bad/graphic/command/snob.png\">\n\t\t\t<span style=\"color: " + "#E80000" + ";position:absolute;left:" + _0x4fc5cf + ";top:" + _0x3ccb44 + ";width:14px;height:14px;z-index:11;margin-left:0px;margin-top:11px; font-size: 12px\">" + _0x4ef85d.attacks + "</span>\n\t\t\t<img style=\";position:absolute;left:" + _0x4fc5cf + ";top:" + _0x3ccb44 + ";width:14px;height:14px;z-index:11;margin-left:15px;margin-top:11px; font-size: 12px\" src=\"https://dspt.innogamescdn.com/asset/7ecd8bad/graphic/command/attack.png\">\n\t\t\t<span style=\"color: " + "#52ce00" + ";position:absolute;left:" + _0x4fc5cf + ";top:" + _0x3ccb44 + ";width:14px;height:14px;z-index:11;margin-left:0px;margin-top:23px; font-size: 12px\">" + _0x4ef85d.supports + "</span>\n\t\t\t<img style=\";position:absolute;left:" + _0x4fc5cf + ";top:" + _0x3ccb44 + ";width:14px;height:14px;z-index:11;margin-left:15px;margin-top:23px; font-size: 12px\" src=\"https://dspt.innogamescdn.com/asset/7ecd8bad/graphic/command/support.png\">";
  $(_0x2f0959).appendTo(_0x5e5dc7.parentElement);
}
function getAverageTimingOffset(_0xb40b58) {
  return {
    '_pingValues': [],
    '_interval': null,
    'start': function () {
      this._addPing();
      this._interval = setInterval(() => {
        this._addPing();
      }, 5000);
    },
    '_stop': function () {
      clearInterval(this._interval);
    },
    'getAveragePing': function () {
      this._stop();
      let _0x1447df = calculateAverageWithOutlierRemoval(this._pingValues, 0.8, 10);
      console.log("Final offset: " + _0x1447df);
      return _0x1447df;
    },
    '_addPing': async function () {
      let _0x1fb1e7 = await _calculatePing(window.location.hostname, _0xb40b58);
      this._pingValues.push(_0x1fb1e7);
      console.log("Added ping: " + _0x1fb1e7);
    }
  };
}
function _calculatePing(_0x3c6879, _0x27eff7) {
  return new Promise((_0x413f97, _0x1db0c9) => {
    const _0x52940b = performance.now();
    const _0x13d7b5 = () => {
      const _0x107db7 = performance.now() - _0x52940b;
      const _0xbece41 = _0x107db7 * (_0x27eff7 || 1);
      _0x413f97(_0xbece41);
    };
    const _0x31cab7 = setTimeout(() => {
      _0x1db0c9("Timeout");
    }, 5000);
    _requestImage(_0x3c6879).then(_0x13d7b5)["catch"](_0x13d7b5)["finally"](() => {
      clearTimeout(_0x31cab7);
    });
  });
}
function _requestImage(_0x529105) {
  return new Promise((_0x1d1821, _0x4a15f5) => {
    const _0x30237a = new Image();
    _0x30237a.onload = () => {
      _0x1d1821(_0x30237a);
    };
    _0x30237a.onerror = () => {
      _0x4a15f5(_0x529105);
    };
    _0x30237a.src = _0x529105 + "?random-no-cache=" + Math.floor((1 + Math.random()) * 65536).toString(32);
  });
}
function calculateAverageWithOutlierRemoval(_0x5c37f1, _0x635c5b, _0x262920) {
  const _0x3a76d5 = calculateMedian(_0x5c37f1);
  const _0x255780 = calculateMAD(_0x5c37f1, _0x3a76d5);
  const _0x2be7a0 = _0x5c37f1.filter(_0x5989a9 => Math.abs(_0x5989a9 - _0x3a76d5) <= _0x262920 * _0x255780);
  const _0xc9f5c3 = _0x2be7a0.map((_0x4082d9, _0x2c4c72) => _0x4082d9 * Math.pow(_0x635c5b, _0x2be7a0.length - 1 - _0x2c4c72));
  const _0x4b914e = _0xc9f5c3.reduce((_0x213795, _0x557ef0) => _0x213795 + _0x557ef0, 0);
  const _0x1e7bdf = _0xc9f5c3.reduce((_0x10b3b7, _0x3c8d7c, _0x5ac09e) => _0x10b3b7 + Math.pow(_0x635c5b, _0x2be7a0.length - 1 - _0x5ac09e), 0);
  return _0x4b914e / _0x1e7bdf;
}
function calculateMedian(_0x5241aa) {
  const _0x8363f4 = _0x5241aa.slice().sort((_0xfc64fb, _0x4d20fc) => _0xfc64fb - _0x4d20fc);
  const _0xc5071f = Math.floor(_0x8363f4.length / 2);
  if (_0x8363f4.length % 2 === 0) {
    return (_0x8363f4[_0xc5071f - 1] + _0x8363f4[_0xc5071f]) / 2;
  } else {
    return _0x8363f4[_0xc5071f];
  }
}
function calculateMAD(_0x4f3cdb, _0x1070df) {
  const _0x1dd0a2 = _0x4f3cdb.map(_0xaa1d8b => Math.abs(_0xaa1d8b - _0x1070df));
  return calculateMedian(_0x1dd0a2);
}
function initWorkerScript() {
  if (!/MSIE 10/i.test(navigator.userAgent)) {
    try {
      let _0x3c356d = new Blob(["var fakeIdToId = {};onmessage = function (event) {\tvar data = event.data,\t\tname = data.name,\t\tfakeId = data.fakeId,\t\ttime;\tif(data.hasOwnProperty('time')) {\t\ttime = data.time;\t}\tswitch (name) {\t\tcase 'setInterval':\t\t\tfakeIdToId[fakeId] = setInterval(function () {\t\t\t\tpostMessage({fakeId: fakeId});\t\t\t}, time);\t\t\tbreak;\t\tcase 'clearInterval':\t\t\tif (fakeIdToId.hasOwnProperty (fakeId)) {\t\t\t\tclearInterval(fakeIdToId[fakeId]);\t\t\t\tdelete fakeIdToId[fakeId];\t\t\t}\t\t\tbreak;\t\tcase 'setTimeout':\t\t\tfakeIdToId[fakeId] = setTimeout(function () {\t\t\t\tpostMessage({fakeId: fakeId});\t\t\t\tif (fakeIdToId.hasOwnProperty (fakeId)) {\t\t\t\t\tdelete fakeIdToId[fakeId];\t\t\t\t}\t\t\t}, time);\t\t\tbreak;\t\tcase 'clearTimeout':\t\t\tif (fakeIdToId.hasOwnProperty (fakeId)) {\t\t\t\tclearTimeout(fakeIdToId[fakeId]);\t\t\t\tdelete fakeIdToId[fakeId];\t\t\t}\t\t\tbreak;\t}}"]);
      workerScript = window.URL.createObjectURL(_0x3c356d);
    } catch (_0x22c63e) {
      printError("Error creating worker blob.");
    }
  }
  overwriteTimeouts();
}
function overwriteTimeouts() {
  if (typeof Worker) {
    try {
      worker = new Worker(workerScript);
      window.setInterval = function (_0x26b128, _0x29e983) {
        let _0x14ccf7 = getFakeId();
        fakeIdToCallback[_0x14ccf7] = {
          'callback': _0x26b128,
          'parameters': Array.prototype.slice.call(arguments, 2)
        };
        worker.postMessage({
          'name': "setInterval",
          'fakeId': _0x14ccf7,
          'time': _0x29e983
        });
        return _0x14ccf7;
      };
      window.clearInterval = function (_0x1b45be) {
        if (fakeIdToCallback.hasOwnProperty(_0x1b45be)) {
          delete fakeIdToCallback[_0x1b45be];
          worker.postMessage({
            'name': "clearInterval",
            'fakeId': _0x1b45be
          });
        }
      };
      window.setTimeout = function (_0x47b4e4, _0x5cbb09) {
        let _0x2b0a74 = getFakeId();
        fakeIdToCallback[_0x2b0a74] = {
          'callback': _0x47b4e4,
          'parameters': Array.prototype.slice.call(arguments, 2),
          'isTimeout': true
        };
        worker.postMessage({
          'name': "setTimeout",
          'fakeId': _0x2b0a74,
          'time': _0x5cbb09
        });
        return _0x2b0a74;
      };
      window.clearTimeout = function (_0x7fd49b) {
        if (fakeIdToCallback.hasOwnProperty(_0x7fd49b)) {
          delete fakeIdToCallback[_0x7fd49b];
          worker.postMessage({
            'name': "clearTimeout",
            'fakeId': _0x7fd49b
          });
        }
      };
      worker.onmessage = function (_0xb7844) {
        let _0x372ceb = _0xb7844.data;
        let _0x495eb8 = _0x372ceb.fakeId;
        let _0x29ccdd;
        let _0x4f55de;
        let _0x5a15c0;
        if (fakeIdToCallback.hasOwnProperty(_0x495eb8)) {
          _0x29ccdd = fakeIdToCallback[_0x495eb8];
          _0x5a15c0 = _0x29ccdd.callback;
          _0x4f55de = _0x29ccdd.parameters;
          if (_0x29ccdd.hasOwnProperty("isTimeout") && _0x29ccdd.isTimeout) {
            delete fakeIdToCallback[_0x495eb8];
          }
        }
        if (typeof _0x5a15c0 === "string") {
          try {
            _0x5a15c0 = new Function(_0x5a15c0);
          } catch (_0x121ee3) {
            printError("Error parsing callback code string:" + _0x121ee3);
          }
        }
        if (typeof _0x5a15c0 === "function") {
          _0x5a15c0.apply(window, _0x4f55de);
        }
      };
      worker.onerror = function (_0xe9549) {
        printError("Error in worker: " + _0xe9549);
      };
    } catch (_0x57440a) {
      printError("Error starting timeouts.");
    }
  } else {
    printError("Error starting timeouts - HTML5 Web Worker is not supported.");
  }
}
function getFakeId() {
  do {
    if (lastFakeId === 2147483647) {
      lastFakeId = 0;
    } else {
      lastFakeId++;
    }
  } while (fakeIdToCallback.hasOwnProperty(lastFakeId));
  return lastFakeId;
}
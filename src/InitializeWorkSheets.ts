
function initWorkSheets() {
    initLookupSheets();
    initBuilderSheets();
}

function initLookupSheets() {
    var sheetsLookups = [SHEET_TOONS, SHEET_SHIPS_REGULAR, SHEET_SHIPS_CAPITAL];
    SWGOHCoreFunctions.createSheets (sheetsLookups);
}

function initBuilderSheets() {
    var sheetsBuilders = [SHEET_SQUADS_3X3, SHEET_SQUADS_5X5, SHEET_SQUADS_SHIPS];
    SWGOHCoreFunctions.createSheets (sheetsBuilders);
}

// function createSheets(sheets: string[]) {
//     for (var i in sheets) {
//         var NAME_SHEET = sheets[i];
//         var sheet = ss.getSheetByName(NAME_SHEET);
//         if (!sheet) {
//             ss.insertSheet(NAME_SHEET);
//         }
//     }
// }

function updateGameData() {

}

function updateToonData() {

}

function updateShipData() {

}
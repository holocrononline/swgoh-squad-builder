/**
 * @OnlyCurrentDoc
 */
var ss = SpreadsheetApp.getActiveSpreadsheet();
function onOpen(e) {
    setupMenus(e);
}
function setupMenus(e) {
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('Config')
    .addItem('Create All Inital Sheets', 'initWorkSheets')
    .addItem('Create Inital Lookup Sheets', 'initLookupSheets')
        .addItem('Create Inital Builder Sheets', 'initBuilderSheets')
        .addSeparator()
        .addItem('Update All SWGOH Game Data', 'updateGameData')
        .addItem('Update Toons Data', 'updateToonData')
        .addItem('Update Ships Data', 'updateShipData')
        .addToUi();
}




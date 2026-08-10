const { app, BrowserWindow } = require('electron')

let mainWindow = null

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 860,
    minWidth: 900,
    minHeight: 600,
    title: "Ghvswebtpc Desktop",
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      webviewTag: true
    }
  })
  mainWindow.loadFile("WebSystem/Load.html")
  mainWindow.removeMenu();

  mainWindow.on('closed', () => {
    mainWindow = null;
  })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
})
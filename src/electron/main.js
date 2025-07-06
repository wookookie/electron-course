import path from "node:path";
import { app, BrowserWindow } from "electron";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({});
  // Windows에서도 경로에 문제가 없도록 하기 위해 path 사용
  mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
});

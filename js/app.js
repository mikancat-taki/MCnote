import { initCanvas } from "./canvas.js";
import { initNotes } from "./notes.js";
import { setupHistory } from "./history.js";
import { setupStorage } from "./storage.js";
import { setupUI } from "./ui.js";

window.addEventListener("DOMContentLoaded", () => {
  initCanvas();
  initNotes();
  setupHistory();
  setupStorage();
  setupUI();
});

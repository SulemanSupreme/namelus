import { resizeCanvas } from "./scripts/canvas.js";
import { randomQuote } from "./scripts/greeting.js";


document.addEventListener("DOMContentLoaded", () => {
    // Core JS functionality
    resizeCanvas()
    randomQuote()
});


var resizeTimeout
window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(()=>{
    resizeCanvas()
    }, 500)
})
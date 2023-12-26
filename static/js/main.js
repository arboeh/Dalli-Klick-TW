const HINT_TIMER = 3000;
var hintState = "solve";

function random_color() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

document.addEventListener("DOMContentLoaded", function () {

    const audio = new Audio("/static/audio/music.mp3");
    const img = new Image();

    img.addEventListener("load", function () {
        const elem = document.getElementById("canvas");
        elem.width = img.naturalWidth;
        elem.height = img.naturalHeight;
        const num_tiles = 15;
        const bounds = elem.getBoundingClientRect();
        const tile_width = Math.sqrt((bounds.width * bounds.height) / num_tiles);
        const cols = Math.ceil(elem.width / tile_width);
        const rows = Math.ceil(elem.height / tile_width);
        let num_cells = cols * rows;

        elem.classList.add("hide");
        const canvas = oCanvas.create({
            canvas: "#canvas"
        });

        const c_img = canvas.display.image({
            x: 0,
            y: 0,
            image: img
        });

        canvas.addChild(c_img, false);

        for (let j = 0; j < rows; ++j) {
            for (let i = 0; i < cols; ++i) {
                canvas.addChild(canvas.display.polygon({
                    x: (tile_width / 2) + i * tile_width,
                    y: tile_width / 2 + j * tile_width,
                    sides: 4,
                    rotation: 45,
                    side: tile_width,
                    fill: random_color()
                }), false);
            }
        }

        canvas.redraw();
        elem.classList.remove("hide");

        let timeout;

        document.getElementById("btn-hint").addEventListener("click", function () {
            if (num_cells > 0) {
                hintState = "hint";
                autoHint();
            }
        });

        document.getElementById("btn-pause").addEventListener("click", function () {
            hintState = "pause";
            clearTimeout(timeout);
            // We have to do the following here, because we cancel the timout! This avoids a lag!
            // Pause audio
            audio.pause();
            // Show hint button
            document.getElementById("btn-hint").classList.remove("hidden");
            // Remove pause button
            document.getElementById("btn-pause").classList.add("hidden");
            // Enable solve button
            document.getElementById("btn-sol").disabled = false;
        });

        document.getElementById("btn-sol").addEventListener("click", function () {
            hintState = "solve";
            autoHint();
        });

        function autoHint() {
            switch (hintState) {
                case "hint":
                    if (num_cells === 0) {
                        // Remove hint button
                        document.getElementById("btn-hint").classList.add("hidden");
                        // Remove pause button
                        document.getElementById("btn-pause").classList.add("hidden");
                        // Remove solve button
                        document.getElementById("btn-sol").classList.add("hidden");
                        break;
                    }
                    const rand_idx = 1 + Math.floor(Math.random() * num_cells);
                    canvas.removeChildAt(rand_idx, true);
                    num_cells -= 1;
                    timeout = setTimeout(autoHint, HINT_TIMER);
                    // Play audio
                    audio.play();
                    // Show pause button
                    document.getElementById("btn-pause").classList.remove("hidden");
                    // Remove hint button
                    document.getElementById("btn-hint").classList.add("hidden");
                    // Disable solve button
                    document.getElementById("btn-sol").disabled = true;
                    break;
                case "pause":
                    break;
                case "solve":
                    // Pause audio
                    audio.pause();
                    for (let i = 0; i < num_cells; ++i) {
                        canvas.removeChildAt(1, false);
                    }
                    canvas.redraw();
                    // Remove hint button
                    document.getElementById("btn-hint").classList.add("hidden");
                    // Remove pause button
                    document.getElementById("btn-pause").classList.add("hidden");
                    // Remove solve button
                    document.getElementById("btn-sol").classList.add("hidden");
                    num_cells = 0;
                    break;
            }
        };

    });
    img.src = window.dalli_cfg.img;
});

export function resizeCanvas() {
    const canvas = document.getElementById('canvas')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const stars = buildCanvas(100)
    renderCanvas(stars)
}

export function buildCanvas(divider = 100) {
    if(divider < 50) {
        throw new error('Divider too small')
        return
    }
    const width = window.innerWidth
    const height = window.innerHeight
    const x_count = (width / divider)
    const y_count = (height / divider) 
    let stars = []
    for (let i = 0; i < x_count; i++) {
        const x = (width / x_count) * i
        for (let p = 0; p < y_count; p++) {
            const salt = Math.random() * 0.8 + 0.5
            const y = (height / y_count) * p
            const size = 1
            const object = {
                x: x * salt,
                y: y * salt,
                size: size * salt,
                color: 128 * salt + 64,
                blur: Math.trunc(4 * salt + 2)
            }
            stars.push(object)
            
        }
    }
    return stars
}

export function renderCanvas(stars) {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, 2 * Math.PI)        
        ctx.fillStyle = `rgba(255,255,255,${star.color}`;
        ctx.fill();
        ctx.lineWidth = star.size;
        ctx.strokeStyle = `rgba(255,255,255,${star.color}`;
        ctx.shadowColor = `rgba(255,255,255,${star.color}`;


        //The following is proudly yoinked from StackOverflow
        // Horizontal distance of the shadow, in relation to the text.
        ctx.shadowOffsetX = 0; // integer
        // Vertical distance of the shadow, in relation to the text.
        ctx.shadowOffsetY = 0; // integer
        // Blurring effect to the shadow, the larger the value, the greater the blur.
        ctx.shadowBlur = star.blur; // integer
        ctx.stroke();
        
    });
}
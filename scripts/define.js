export function define() {
    const definables = document.getElementsByClassName('define')
    const divs = []
    for (let index = 0; index < definables.length; index++) {
        const element = definables[index]
        const dataText = element.getAttribute('data-define')
        if(dataText) {

            let div = document.createElement("div");
            div.append(dataText)
            div.style.padding = '15px'
            div.style.fontSize = '0.7em'
            div.style.borderRadius = '15px'
            div.style.backdropFilter = 'blur(8px)'
            div.style.backgroundColor = '#0c0d0faa'
            div.style.position = 'absolute'
            div.style.display = 'none'
            element.append(div)
            divs.push(div)
            element.addEventListener('click', () => {
                divs.forEach((div) => {
                    div.style.display = 'none'
                })
                div.style.display = 'block'   
            })

            // ts so vibe coded lmao
            div.addEventListener('click', () => {
                setTimeout(()=>{
                    div.style.display = 'none'
                }, 100)
            })
        }
    }
}
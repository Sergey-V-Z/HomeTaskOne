class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    makeDiv() {
        let div = document.createElement('div');
        div.className = 'task12';
        div.innerText = 'Hello it is inserted of the JS';
        document.body.appendChild(div);
        let parametrs = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
        div.style.cssText = parametrs;
    }

}

window.addEventListener('DOMContentLoaded', function () {
    const item = new Options(300, 350, "red", 14, "center");

    item.makeDiv();

});
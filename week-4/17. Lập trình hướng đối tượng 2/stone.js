class Stone {
    constructor(x,y,width,height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    drawStone(ctx){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.stroke();
        ctx.closePath();
    }
}
const canvas = document.querySelector("canvas");
const w = (canvas.width = window.innerWidth);
const h = (canvas.height = window.innerHeight - 5);
const ctx = canvas.getContext("2d");
let els =[]
ctx.beginPath();

class ellipse {
  constructor() {
    this.x = Math.floor(Math.random()*(w) )
    this.y = Math.floor(Math.random()*(h))
    this.ry = 100/Math.sqrt(Math.pow(this.x - w / 2, 2) + Math.pow(this.y - h / 2, 2));
    this.rx = Math.sqrt(Math.pow(this.x - w / 2, 2) + Math.pow(this.y - h / 2, 2))/100;
    this.draw("red")
    this.ch()
  }

  draw(color = "white") {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.lineWidth = "20px";
    ctx.ellipse(this.x, this.y, this.rx, this.ry, this.angle(), 0, 2 * Math.PI);
    ctx.fill();
  }
  ap(){
    this.ch()
    if(this.x >= w || this.x <= 0 || this.y >= h || this.y <= 0 ){
      this.x = Math.round(Math.random()*(w))
      this.y = Math.round(Math.random()*(h))
      this.ry = 90/Math.sqrt(Math.pow(this.x - w / 2, 2) + Math.pow(this.y - h / 2, 2));
      this.rx = Math.sqrt(Math.pow(this.x - w / 2, 2) + Math.pow(this.y - h / 2, 2))/90;
    }
  }
  ch(){
    this.ry =  100/Math.sqrt(Math.pow(this.x - w / 2, 2) + Math.pow(this.y - h / 2, 2)) 
    this.x=this.x>w/2 ? this.x+ 1000/Math.sqrt(Math.pow(this.x - w / 2, 2) + Math.pow(this.y - h / 2, 2)) : this.x- 1000/Math.sqrt(Math.pow(this.x - w / 2, 2) + Math.pow(this.y - h / 2, 2))
    this.y=this.y>h/2 ? this.y+ 900/Math.sqrt(Math.pow(this.x - w / 2, 2) + Math.pow(this.y - h / 2, 2)) :  this.y-900/Math.sqrt(Math.pow(this.x - w / 2, 2) + Math.pow(this.y - h / 2, 2))
  }
  angle() {
    let a = [this.x - this.rx, this.y];
    let b = [this.x + this.rx, this.y];
    let c = [w / 2, h / 2];
    let b1 = Math.sqrt(Math.pow(a[0] - c[0], 2) + Math.pow(a[1] - c[1], 2));
    let c1 = Math.sqrt(Math.pow(b[0] - a[0], 2) + Math.pow(b[1] - a[1], 2));
    let a1 = Math.sqrt(Math.pow(b[0] - c[0], 2) + Math.pow(b[1] - c[1], 2));
    let cosB = (a1 ** 2 + c1 ** 2 - b1 ** 2) / (2 * c1 * a1);
    let cosA = (b1 ** 2 + c1 ** 2 - a1 ** 2) / (2 * c1 * b1);
    return  this.y < h / 2  ? Math.acos(cosA) : Math.acos(cosB);
  }

}

for(let i=0 ;i<50 ; i++){
    let a=new ellipse()
    els.push(a)
}
c=0
function a(){
  requestAnimationFrame(a)
  for(i of els){
    i.ap()
  }
  ctx.clearRect(0,0,w,h)
  for(i of els){
    i.draw()
  }
}
a()
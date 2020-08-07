class pend {
  
  constructor(len, amp, mass)  {
    this.len = len;
    this.amp = amp;
    this.mass = mass;
    this.angVel = 0;
    this.angAcc = 0;
  }

  show() {
    strokeWeight(2);
    
    var v1 = createVector(width / 2, 0);
    var v2 = createVector((this.len) * (sin(this.amp)), (this.len) * (cos(this.amp)));
    var v3 = createVector((this.mass / 2) * (sin(this.amp)), (this.mass / 2) * (cos(this.amp)));
    var v4 = createVector(v1.x + v2.x, v1.y + v2.y);
    
    line(v1.x, v1.y, v4.x, v4.y);
    circle(v4.x + v3.x, v4.y + v3.y, this.mass);
  }
  
  move(bool) {
    if(bool == true) {
      this.angAcc = -0.1 * sin(this.amp);
      this.angVel += this.angAcc;
      this.amp += this.angVel; 
      
      this.amp *= 0.999;
    }
    if(bool == false) {      
      this.angAcc = -0.1 * sin(this.amp);
      this.angVel += this.angAcc;
      this.amp += this.angVel; 
    }
  }
}
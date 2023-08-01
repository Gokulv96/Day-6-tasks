class circle{
     constructor(radius,color)
     {
    this.radius=radius;
    this.color=color;
    }
    getRadius(){
      return this.radius;
    }
    setRadius(changeradius){
      this.radius=changeradius;
    }
    getColor(){
      return this.color;
    }
    setColor(changecolor){
      this.color=changecolor;
    }
    getArea(){
      return (3.14)*(this.radius)*(this.radius);
    }
    getCircumerence(){
      return 2*(3.14)*(this.radius);
    } 
    getString(){
       return [this.radius.toString(),this.color.toString()];
    }
}
var obj=new circle(5,"red");
console.log(obj.getRadius());
obj.setRadius(4);
console.log(obj.getColor());
obj.setColor("blue");
console.log(obj.getArea());
console.log(obj.getCircumerence());
console.log(obj.getString());

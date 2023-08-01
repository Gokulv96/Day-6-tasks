class Uber{
   constructor(from,to,distance){
     this.from=from;
     this.to=to;
     this.distance=distance;
   }
  getuberPrice(){
   return this.distance*12;
}
}
var obj=new Uber("salem","chennai",305);
console.log(obj.getuberPrice());

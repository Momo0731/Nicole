/**
 * Created by Nicole on 2017/8/27.
 */
(function(Game){
    function Bird(option){
      this.ctx = option.ctx;
      this.img = option.img;
      this.width = this.img.width/3;
      this.height = this.img.height;
      this.x =option.x||50;
      this.y = option.y||150;
      this.index = 0;

      //加速运动数据
      this.a =0.0005;
      this.speed =0;
      this.angle =0;
      this.maxSpeed = 0.5;
      this.maxAngle =45;
    }

  //原型
   Bird.prototype.render=function(Dvalue){
     //求小鸟在画布上y轴坐标和角度
       this.speed =this.speed+ this.a*Dvalue;
       this.speed = this.speed>this.maxSpeed?this.maxSpeed:this.speed;
       this.y = this.y+this.speed*Dvalue+this.a*Dvalue*Dvalue/2;
       this.angle = this.speed/this.maxSpeed*this.maxAngle;

        //绘制小鸟
       this.ctx.save();
       this.ctx.translate(this.x,this.y);
       this.ctx.rotate(this.angle*Math.PI/180);
       this.ctx.drawImage(this.img,this.index*this.width,0,this.width,this.height,-this.width/2,-this.height/2,this.width,this.height)
       this.ctx.restore();
       this.index++
       this.index%=3;
   }

  Game.Bird =Bird;
})(Game)
/**
 * Created by Nicole on 2017/8/27.
 */
(function(Game){
  function Sky(option){
    this.ctx = option.ctx;
    this.img = option.img;
    this.height =this.ctx.canvas.height;
    this.width =this.height/this.img.height*this.img.width;
    this.index =option.index||0;
    this.x = this.index*this.width;
    this.y = 0;
    this.offsetX =3;
  }

  //Ô­ÐÍ
   Sky.prototype.render=function(){
      this.x-=this.offsetX;
      if(this.x<(this.index-1)*this.width){
        this.x=this.index*this.width;
      }
     this.ctx.drawImage(this.img,0,0,this.img.width,this.img.height,this.x,0,this.width,this.height)
   }

  Game.Sky = Sky;
})(Game)
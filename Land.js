/**
 * Created by Nicole on 2017/8/27.
 */
(function(Game){
   function Land(option){
     this.ctx = option.ctx;
     this.img = option.img;
     this.width = this.img.width;
     this.height =this.img.height;
     this.index = option.index||0;
     this.x = this.index*this.width;
     this.y = this.ctx.canvas.height-this.height;
     this.offsetX = option.offsetX||5;
   }

  Land.prototype.render=function() {
    //¼ÆËãLandµÄx×ø±ê
    this.x -= this.offsetX;
    if (this.x < (this.index - 1) * this.width) {
      this.x = this.index*this.width;
    }
    this.ctx.drawImage(this.img,0,0,this.width,this.height,this.x,this.y,this.width,this.height)
    }

  Game.Land =Land;
})(Game)
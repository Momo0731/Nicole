/**
 * Created by Nicole on 2017/8/27.
 */
(function(Game){
  function Pipe(option){
    this.ctx = option.ctx;
    this.upImg =option.upImg;
    this.downImg = option.downImg;
    this.width = this.upImg.width;
    this.height = 100+parseInt(Math.random()*100);
    this.index = option.index||0;
    this.spaceX=200;
    this.spaceY=150;
    this.x= (this.index+1)*this.spaceX;
    this.y=0;
    this.index=6;
  }

  //ԭ��
   Pipe.prototype.render=function(){
     this.x-=this.index;
     if(this.x<-this.spaceX){
        this.x = 4*this.spaceX;
        this.height = 100+parseInt(Math.random()*100);
     }
     //upImg��ͼƬ��ȡ����ΪupY
     var upY = this.upImg.height-this.height;
     //�����������
     this.ctx.drawImage(this.upImg,0,upY,this.width,this.height,this.x,0,this.width,this.height)
     //downImg���Ӹ߶�
     var downHeight = this.ctx.canvas.height-this.height-this.spaceY;
     var downY = this.height+this.spaceY;
     //�����������
     this.ctx.drawImage(this.downImg,0,0,this.width,downHeight,this.x,downY,this.width,downHeight);

     //���ƹ���·�����Ա���ײ���
     this.ctx.rect(this.x,0,this.width,this.height);
     this.ctx.rect(this.x,downY,this.width,downHeight);
   }

  Game.Pipe = Pipe;
})(Game)
/**
 * Created by Nicole on 2017/8/27.
 */
(function(window){
   function Game(option){
     this.ctx = option.ctx;
     this.rolesArr=[];
     this.imgArr=['birds','land','sky','pipe1','pipe2'];
     this.timer =null;
     this.hero =null;
     this.startTime=new Date();
     this.endTime =0;
     this.Dvalue =0;

     this.start();
   }

  //原型
  Game.prototype={
    constructor:Game,
    start:function(){

      var that =this;

      this.loadImg(function(imgList){

        that.initGame(imgList);

        that.userControl();

        that.timer =setInterval(function(){
          that.endTime = new Date();
          that.Dvalue = that.endTime-that.startTime;
          console.log(that.Dvalue);
          that.startTime = that.endTime;
          that.ctx.clearRect(0,0,that.ctx.canvas.width,that.ctx.canvas.height);//清空画布
          that.ctx.beginPath();//开始新路径
          that.render(that.Dvalue); //不停渲染
          // 不停的碰撞检查
          that.impact();

        },30)
      })
    },
    //图片加载函数
    loadImg:function(callback){
      var imgList ={};
      var count=0;
      for (var i = 0; i < this.imgArr.length; i++) {
        var obj = this.imgArr[i];
        var img = new Image();
        img.src='imgs/'+obj+'.png';
        console.log(img);
        imgList[obj]=img;
        var that = this;
        img.onload=function(){
          count++;
          if(count>=that.imgArr.length){
            callback&&callback(imgList);
            console.log(imgList);
          }
        }
      }
    },
    //初始化游戏方法
    initGame:function(imgList){
      //创建天空
      for (var i = 0; i <3; i++) {
        var sky = new Game.Sky({
          ctx: this.ctx,
          img:imgList['sky'],
          index:i
        });
        this.rolesArr.push(sky);
      }
      //创建柱子
      for (var i = 0; i < 5; i++) {
       var pipe = new Game.Pipe({
         ctx: this.ctx,
         upImg: imgList['pipe2'],
         downImg:imgList['pipe1'],
         index:i
       })
        this.rolesArr.push(pipe);
      }
      //创建Land
      for (var i = 0; i <4; i++) {
        var land =new Game.Land({
          ctx: this.ctx,
          img: imgList['land'],
          index:i
        });
       this.rolesArr.push(land);
      }
      //创建鸟
      var bird =new Game.Bird({
        ctx:this.ctx,
        img:imgList['birds']
      })
      this.rolesArr.push(bird);
      this.hero =bird;

    },
    render:function(Dvalue){
      for (var i = 0; i < this.rolesArr.length; i++) {
        this.rolesArr[i].render(Dvalue);
      }
    },
    impact:function(){
      if(this.ctx.isPointInPath(this.hero.x,this.hero.y)||this.hero.y<0||this.hero.y>this.ctx.canvas.height-112){
        clearInterval(this.timer);
      }
    },
    userControl:function(){
      var that = this;
      window.onclick=function(){
        that.hero.speed =-0.3;
      }
    }

  }
   window.Game=Game;
})(window)
var content = document.getElementById('content');
var startPage = document.getElementById('startPage');
var scoreBox = document.getElementById('score');
var lose = document.getElementById('lose');  //结束界面。直接让它消失
var loserScore = document.getElementById('loserScore');
var close = document.getElementById('close');
var startP = document.getElementById('startP');
var startPage = document.getElementById('startPage');
var startBtn = document.getElementById('startBtn');
var rightside=document.getElementById('right-side');
var startGameBool = true;
var startPauseBool = true;
var snakeMove;
var speed = 200;
init();

function init() {
	//地图
	this.mapW = parseInt(getComputedStyle(content).width);
	this.mapH = parseInt(getComputedStyle(content).height);
	this.mapDiv = content;
	//食物
	this.foodW = 20;
	this.foodH = 20;
	this.foodX = 0;
	this.foodY = 0;
	//蛇 使用数组来表示一条蛇
	this.snakeW = 20;
	this.snakeH = 20;
	this.snakeBody = [
		[20, 1, 'head'],//[x,y, ]
		[19, 1, 'body'],
		[18, 1, 'body']
	];
	//游戏属性
	this.direct = 'right';
	this.left = false;//左右移动的时候不能上下
	this.right = false;//上下移动的时候不能左右
	this.up = true;
	this.down = true;
	this.score = 0;
	bindEvent();
}
//开始游戏
function startGame() {
	// rightside.innerHTML='abou,我问你。情人眼里出西施，那西施眼里出什么？输了告诉你';
	startPage.style.display = 'none';
	startP.style.display = 'block';
	food();
	snake();
}

function food() {//产生食物
	var food = document.createElement('div');
	food.style.width = this.foodW + 'px';
	food.style.height = this.foodH + 'px';
	food.style.position = 'absolute';
	this.foodX = Math.floor(Math.random() * (this.mapW / 20));//随机产生0·1 *width /20
	this.foodY = Math.floor(Math.random() * (this.mapH / 20));
	food.style.left = this.foodX * 20 + 'px';//控制位置，与整个HTML页面
	food.style.top = this.foodY * 20 + 'px';
	this.mapDiv.appendChild(food).setAttribute('class', 'food');//食物拼接到图上
}
//出现蛇
function snake() {
	for (var i = 0; i < this.snakeBody.length; i++) 
	{
		var snake = document.createElement('div');
		snake.style.width = this.snakeW + 'px';
		snake.style.height = this.snakeH + 'px';
		snake.style.position = 'absolute';
		snake.style.left = this.snakeBody[i][0] * 20 + 'px';//左边距，蛇身移动
		snake.style.top = this.snakeBody[i][1] * 20 + 'px';//上边距
		snake.classList.add(this.snakeBody[i][2]);
		this.mapDiv.appendChild(snake).classList.add('snake');
		// 将蛇加入图中 && 为snake对象 添加snake class
		switch (direct) {//图片是向右的
			case 'right':
				break;
			case 'up':
				snake.style.transform = 'rotate(270deg)';//旋转图片角度 顺 
				break;
			case 'down':
				snake.style.transform = 'rotate(90deg)';
				break;
			case 'left':
				snake.style.transform = 'rotate(180deg)';
				break;
			default:
				break;
		}
	}
}
//移动事件， 吃食物  撞墙，撞身体
function move() {
	for (var i = this.snakeBody.length - 1; i > 0; i--) {
		this.snakeBody[i][0] = this.snakeBody[i - 1][0];//蛇身位置移动，后面一个走到前面的位置上
		this.snakeBody[i][1] = this.snakeBody[i - 1][1];
	}
	//相对页面位置
	switch (this.direct) {//头部移动
		case 'right'://4 1    3 1    2 1  x,y
			this.snakeBody[0][0] += 1;//蛇头x++
			break;
		case 'up':
			this.snakeBody[0][1] -= 1;//y--;
			break;
		case 'left':
			this.snakeBody[0][0] -= 1;//x--;
			break;
		case 'down':
			this.snakeBody[0][1] += 1;//y++;
			break;
		default:
			break;
	}
	removeClass('snake');//消除原蛇 样式
	snake();//移动后的蛇出现
	//吃到食物，利用位置重叠
	if (this.snakeBody[0][0] == this.foodX && this.snakeBody[0][1] == this.foodY) {
		var snakeEndX = this.snakeBody[this.snakeBody.length - 1][0];
		var snakeEndY = this.snakeBody[this.snakeBody.length - 1][1];
		
		this.snakeBody.push([0, 0, 'body']);//数组++
		this.score += 1;//得分++
		scoreBox.innerHTML = this.score;//更新得分
		removeClass('food');//去除 食物
		food();// 新食物
		// speed-=10;
	}
	//游戏结束判定----出界
	if (this.snakeBody[0][0] < 0 || this.snakeBody[0][0] >= this.mapW / 20) {//mapN 需要注意！！
		reloadGame();
	}
	if (this.snakeBody[0][1] < 0 || this.snakeBody[0][1] >= this.mapH / 20) {
		reloadGame();
	}
	var snakeHX = this.snakeBody[0][0];
	var snakeHY = this.snakeBody[0][1];
	// 撞到自己的身体
	for (var i = 1; i < this.snakeBody.length; i++) {
		if (snakeHX == snakeBody[i][0] && snakeHY == snakeBody[i][1]) {
			reloadGame();
			break;
		}
	}
}

function reloadGame() {
	removeClass('snake');//全清楚 	
	removeClass('food');
	clearInterval(snakeMove);//取消移动
	this.snakeBody = [
		[20, 1, 'head'],
		[19, 1, 'body'],
		[18, 1, 'body']
	];
	this.direct = 'right';
	this.left = false;
	this.right = false;
	this.up = true;
	this.down = true;
	startPage.style.display = 'block';//结束界面出现
	loserScore.innerHTML = this.score;//显示分数
	this.score = 0;
	scoreBox.innerHTML = this.score;
	startGameBool = true;
    startPauseBool = true;
    startP.setAttribute('src', './img/start.png');//暂停按钮出现
}
//  ??????????????
function removeClass(className) {
	var ele = document.getElementsByClassName(className);
	while (ele.length > 0) {
		ele[0].parentNode.removeChild(ele[0]);
	}
}

function setDirect(code) {//设置方向
	switch (code) {
		case 37://a
		// case 97:
			if (this.left) {
				this.direct = 'left';
				this.left = false;
				this.right = false;
				this.up = true;
				this.down = true;
			}
			break;
		case 38://w
		// case 119:
			if (this.up) {
				this.direct = 'up';
				this.left = true;
				this.right = true;
				this.up = false;
				this.down = false;
			}
			break;
		case 39://d
		// case 100:
			if (this.right) {
				this.direct = 'right';
				this.left = false;
				this.right = false;
				this.up = true;
				this.down = true;
			}
			break;
		case 40://s
		// case 115:
			if (this.down) {
				this.direct = 'down';
				this.left = true;
				this.right = true;
				this.up = false;
				this.down = false;
			}
			break;
		case 32://space
		    // startPauseBool!=startPauseBool;
			//应该跳转过去
			// startAndPaush();
			// startPauseBool!=startPauseBool;
			startP.click();
			//  = function() {//暂停按钮起作用的？
			// 	startAndPaush();
			// }
			break;
		default:
			break;
	}
}

function bindEvent() {//事件处理
	close.onclick = function() {
		// lose.style.display = 'none';	  结束界面
	}
	startBtn.onclick = function() {//开始游戏的按钮
		startAndPaush();
	}
	startP.onclick = function() {//暂停按钮起作用的？
		startAndPaush();
	}
}

function startAndPaush() {//todo 开始，暂停,可以缩减！！ 这里就是往反方向运行
	if (startPauseBool) {//如果未按暂停
		if (startGameBool) {
			lose.style.display = 'none';
			startGame();
			startGameBool = false;
		}
		startP.setAttribute('src', './img/pause.png');//设置类型 ->这里把图片直接换掉了
		document.onkeydown = function(e) {//先后 onkeydown press up 按键按下
			e.preventDefault();//清除作用.防止上下移动
			var code = e.keyCode;//记录其编码
			setDirect(code);//改变方向
		}
		snakeMove = setInterval(function() {//重复执行，刷新速度
			move();
		}, speed);
		startPauseBool = false;
	} 
	else //按了暂停之后
	{// 出现开始按钮
		startP.setAttribute('src', './img/start.png');//依旧换图片
		clearInterval(snakeMove);//移动命令取消
		document.onkeydown = function(e) {	
			// if(e.keyCode!=32) 
			e.returnValue = false;//使暂停后的操作终止
			return false;
		};
		startPauseBool = true;
	}
}
//倒计时----防止刷新页面重新申请发送
function judgecode(flag,second,timer) {
	//获取本地存储的倒计时数据---秒和当前时间秒数
	let localDelay = localStorage.getItem(); 
	//新时间减去旧时间的秒数
	let secTime = parseInt((new Date().getTime() - localDelay.sec) / 1000);        
	console.log(localDelay);
	if(secTime <= 0) {
		flag = true;
		console.log("已过期");
	} else {
		flag = false;
		//second-已经过去的秒数
		let _delay = localDelay.delay - secTime;
		second = _delay;
		timer = setInterval(() => {
			if(_delay > 1) {
				_delay--;
				localStorage.setItem(_delay);
//				this.setStorage(_delay);
				second = _delay;
				flag = false;
			} else {
				flag = true;
				clearInterval(timer);
			}
		}, 1000);
	}
}
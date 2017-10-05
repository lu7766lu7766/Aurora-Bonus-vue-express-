Date.prototype.Format = function (fmt) {
	var o = {
		"Y": this.getFullYear(),
		"y+": this.getFullYear(),
		"m": this.getMonth() + 1,                 //
		"d": this.getDate(),                    //
		"H": this.getHours(),                   //
		"h": this.getHours() % 12,
		"i": this.getMinutes(),                 //
		"s": this.getSeconds(),                 //
		"S": this.getMilliseconds(),             //
		"DD": this.getDay(),
		"D": this.getDay(),
		"ap": this.getHours() > 12 ? 'PM' : 'AM',
		"z": (
			((this.getTimezoneOffset() / -60) > -1 ? '+' : '-') +
			((this.getTimezoneOffset() / -60).toString().length == 1 ? '0' : '') +
			(this.getTimezoneOffset() / -60) +
			'00'
		) //時區 (this.getTimezoneOffset()/-60)
	};

	var day_list = ['日', '一', '二', '三', '四', '五', '六'];
	var day_list_en = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1,
				RegExp.$1 == "DD" ? day_list[o[k]] :
					RegExp.$1 == "D" ? day_list_en[o[k]] :
						(RegExp.$1.length == 1) ?
							o[k].toString().length == 1 ? "0" + o[k] : o[k] :
							o[k].toString().substr(o[k].toString().length - RegExp.$1.length)
			);
	return fmt;
};

Date.prototype.AddDay = function (day) {
	return new Date(this.getTime() + 1000 * 60 * 60 * 24 * day);
};

String.prototype.GetMTime = function () {
	return new Date(this).getTime();
};

String.prototype.GetTime = function () {
	return new Date(this).getTime() / 1000;
};


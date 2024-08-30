// onswitch  是否开启职位不限
$(function() {

	var onswitch = false;
	var submitswitch = false;
	// 年份筛选
	var year_include = function(item, target) {
		if (item == "不限") {
			return true
		} else {
			if (target == item) {
				return true
			} else {
				return false
			}
		}
	}
	// 考试类型筛选
	var menuName_include = function(item, target) {
		if (item == "不限") {
			return true
		} else {
			if (target == item) {
				return true
			} else {
				return false
			}
		}
	}
	// 工作地点筛选 地市
	var address_include = function(item, target) {
		if (item == '不限') {
			return true
		} else {
			if (target == item) {
				return true
			} else {
				return false
			}
		}
	}
	// 工作地点筛选 地县
	var dixian_include = function(item, target) {
		if (item == '不限') {
			return true
		} else {
			if (target.indexOf(item) !== -1) {
				return true
			} else {
				return false
			}
		}
	}
	// 学历筛选
	var school_include = function(item, target) {
		if (item == '中专') {
			if (target.indexOf('中专') !== -1 || target.indexOf('不限') !== -1) {
				return true
			} else {
				return false
			}
		}
		if (item == '大专') {
			if (target.indexOf('中专') !== -1 || target.indexOf('大专') !== -1 || target.indexOf('专科') !== -1 || 
				target.indexOf('不限') !== -1) {
				return true
			} else {
				return false
			}
		} else if (item == '本科') {
			if (target.indexOf('中专') !== -1 || target.indexOf('大专') !== -1 || target.indexOf('专科') !== -1 ||
				target.indexOf('本科') !== -1 || target.indexOf('不限') !== -1) {
				return true
			} else {
				return false
			}
		} else if (item == '研究生') {
			return true
		}
	}
	// 专业筛选
	var professional_include = function(item, target) {
		// 若开启专业不限按钮
		if (onswitch) {
			// 若未填写专业 直接判断 json数据 专业是否为专业不限
			if (item == "") {
				if (target == "专业不限") {
					return true
				} else {
					return false
				}
				// 若已填写专业 直接判断 json数据的专业 是否包含已填写的专业名词 或此数据是否为专业不限
			} else {
				if (target.indexOf(item) !== -1 || target == "专业不限") {
					return true
				} else {
					return false
				}
			}
			// 若未开启专业不限按钮  则直接判断 json数据的专业 是否包含已填写的专业名词
		} else {
			if (item != "") {
				if (target.indexOf(item) !== -1) {
					return true
				} else {
					return false
				}
			}
		}
	}
	var clickfn = function() {
		var attr = [];
		var year = $('#year').val()
		var menuName = $('#menuName').val()
		var address = $('#address').val()
		var dixian = $('#dixian').val()
		var record = $('#xuel').val()
		var professional = $('#professional').val()
		if (year == "") {
			alert('请选择年份!')
			return;
		}
		if (menuName == "") {
			alert('请选择考试类型!')
			return;
		}
		if (address == "") {
			alert('请选择地市!')
			return;
		}
		if (dixian == "") {
			alert('请选择区县!')
			return;
		}
		if (professional == "") {
			alert('请输入自己的专业！');
			return false;
		}
		if (record == "") {
			alert('请选择学历!')
			return;
		}
		$.each(data_list, function(idx, obj) {
			if (year_include(year, obj.item12) &&
				menuName_include(menuName, obj.item19) &&
				address_include(address, obj.item02) &&
				dixian_include(dixian, obj.item03) &&
				professional_include(professional, obj.item10) &&
				school_include(record, obj.item09)) {
				attr.push(obj)
			}
		});
	templateDo(attr)
}
function templateDo(jsonData) {
	if (jsonData.length == 0) {
		var htmls = '<p class="result_tip">没有匹配的数据,请重新修改条件查询,或者换个专业关键词查询!</p>';
	} else {
		var htmls = '<table class="my_table">\
	                  <tr>\
						  <th class="th1">地市区县</th>\
	                      <th class="th2">专业</th>\
						  <th class="th3">学历</th>\
	                      <th class="th4">单位</th>\
	                      <th class="th5">岗位</th>\
	                      <th class="th6">人数</th>\
	                      <th class="th7">公告</th>\
	                      <th class="th8">进面最低分</th>\
						  <th class="th9">进面最高分</th>\
	                  </tr>';
		for (var j in jsonData) {
			var obj = jsonData[j];
			htmls += '<tr>'
			htmls += '<td>' + obj.item02 + obj.item03 +'</td>';
			htmls += '<td>' + obj.item10 + '</td>';
			htmls += '<td>' + obj.item09 + '</td>';
			htmls += '<td>' + obj.item04 + '</td>';
			htmls += '<td>' + obj.item05 + '</td>';
			htmls += '<td>' + obj.item08 + '</td>';
			htmls += '<td>' + obj.item13 + '</td>';
			htmls += '<td>' + obj.item15 + '</td>';
			htmls += '<td>' + obj.item16 + '</td>';
			htmls += '</tr>'
		}
		htmls += '</table>';
	}
	$('.homePage').addClass('active')
	$('.table_wrap').html('').append(htmls);
}
$('#submit').click(function() {
	clickfn()
})


// $('#submit').click(function() {
// 	if ($.cookie('cookiePhone')) {
// 		clickfn()
// 	} else {
// 		alert("请先注册或登录");
// 		$('.zg_cover').show();
// 		$('.container').show();
// 	}
// })

// $('.login_btn').click(function() {
// 	if (submitswitch) {
// 		alert('您已登陆!')
// 	} else {
// 		$('.zg_cover').show();
// 		$('.container').show();
// 		$('.bd_nav').find('span').removeClass('active').eq(0).addClass('active');
// 		$('.container').find('.agileits').hide().eq(0).show();
// 	}
// }) 
// $('.register_btn').click(function() {
// 	if (submitswitch) {
// 		alert('您已登陆!')
// 	} else {
// 		$('.zg_cover').show();
// 		$('.container').show();
// 		$('.bd_nav').find('span').removeClass('active').eq(1).addClass('active');
// 		$('.container').find('.agileits').hide().eq(1).show();
// 	}
// })

//点击专业不限按钮  切换 onswitch 布尔值  并触发查询函数
$(".item_check").click(function() {
	//  if(submitswitch){
	$(this).toggleClass('active');
	onswitch = !onswitch;
	clickfn()
	//  }else{
	//    alert("请先注册或登录");
	//    $('.zg_cover').show();
	//    $('.container').show();
	//  }
	//  
})

$('.bd_close').click(function() {
	$('.zg_cover').hide();
	$('.container').hide();
})
})
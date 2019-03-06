/*******my_ajax.js 网络请求部分开始******/
// 测试系统地址
var SERVER_URL = 'https://qsong.fun';
// 正式系统地址
// var SERVER_URL = getRootPath();
var IMG_URL = SERVER_URL + "/img/";

// 登录
var LOGIN_URL = SERVER_URL + '/user/login';
// 获取组图文章列表
var ARTICLE_LIST = SERVER_URL + '/article/getArticleList';
// 获取文章详情
var ARTICLE_DETAIL = SERVER_URL + '/article/getArticleDtl';
// 获取随机5篇文章
var GET_RANDARTICLE = SERVER_URL + '/article/getRandArticle';
// 获取最新5条公告++
var GET_NOTICE = SERVER_URL + '/article/getArticleList';
// 获取统计数据
var GET_COUNTINFO = SERVER_URL + '/article/getCountInfo';
// 获取文章搜索结果
var ARTICLE_SEARCH = SERVER_URL + '/article/getSearchList';
// 检查刷新token
var REFRESH_TOKEN = SERVER_URL + '/user/token/check';
// 文件操作
var SAVE_FILE = SERVER_URL + '/file/save';
// 批量上传图片
var SAVE_MTFILE = SERVER_URL + '/file/savemf';
// 点赞
var ADD_NICE = SERVER_URL + '/article/postAddNice';
var POST_IMG_ARTICLE = SERVER_URL + '/article/postNewImgArticle';
// 获取福利列表
var WELFARE_LIST = 'https://gank.io/api/data/福利/';

function getRootPath() {
	//获取当前网址  
	var curWwwPath = window.document.location.href;
	//获取主机地址之后的目录，
	var pathName = window.document.location.pathname;
	var pos = curWwwPath.indexOf(pathName);
	//获取主机地址，如： http://localhost:8081  
	var localhostPaht = curWwwPath.substring(0, pos);
	//获取带"/"的项目名，如：/chuchai 
	var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);

	return (localhostPaht);

}

/**
 * get请求
 */
var getData = function (url, dataParam, success, error) {
	console.log("getData:" + JSON.stringify(dataParam));

	jQuery.ajax(url, {
		data: dataParam,
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		timeout: 30000, //超时时间设置为30秒
		success: function (data) {
			success(data);
		},
		error: function (xhr, type, errorThrown) {
			console.log(xhr.status);
			console.log(xhr.responseText);
			//同一账号多设备登录处理
			if (xhr.status == 401) {
				hiddenSonicLadingItem();
			} else {
				error(xhr, type, errorThrown);
			}
		}
	});
}

/**
 * post请求
 */
var postData = function (url, dataParam, success, error) {
	console.log("postData:" + JSON.stringify(dataParam));

	jQuery.ajax(url, {
		data: dataParam,
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		timeout: 30000, //超时时间设置为30秒
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
		},
		success: function (data) {
			success(data);
		},
		error: function (xhr, type, errorThrown) {
			console.log(xhr.status);
			console.log(xhr.responseText);
			if (xhr.status == 200) {
				success(xhr.responseText);
			} else if (xhr.status == 401) { } else {
				error(xhr, type, errorThrown);
			}
		}
	});
}

/**
 * post请求
 */
var postFile = function (url, dataParam, success, error) {
	var xhr = new XMLHttpRequest();
	xhr.open("post", url, true);
	xhr.onload = function () {
		if (this.status == 200) {
			success(this.responseText);
		} else {
			console.log("文件上传失败...");
			error(this);
		}
	};
	xhr.send(dataParam);
}

function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = decodeURI(window.location.search).substr(1).match(reg);
	if (r != null)
		return unescape(r[2]);
	return null;
}

function convertHotList(arrlist) {
	var items = [];
	if (arrlist == null) {
		//					alert("没了更多了");
		return [];
	}
	var i = 1;
	if (arrlist.length > 0) {
		arrlist.forEach(function (item) {
			item.classname = "label label-" + i++;
			item.publishTime = item.publishTime.split(" ")[0];
			item.articleImg = getImgUrl(item.articleImg);
			if (item.typeName == "组图") {
				item.href = "ztdetail.html?id=" + item.articleId;
			} else if (item.typeName == "动图") {
				item.href = "gifdetail.html?id=" + item.articleId;
			} else if (item.typeName == "视频") {
				item.href = "videodetail.html?id=" + item.articleId;
			} else if (item.typeName == "公告") {
				item.href = "noticedetail.html?id=" + item.articleId;
			} else {
				item.href = "dzdetail.html?id=" + item.articleId;
			}
			items.push(item);
		});
	}
	return items;
}

function convertHotVideo(arrlist) {
	var items = [];
	if (arrlist == null) {
		alert("没了更多了");
		pn--;
		return [];
	}
	if (arrlist.length > 0) {
		arrlist.forEach(function (item) {
			item.publishTime = item.publishTime.split(" ")[0];
			item.articleImg = getImgUrl(item.articleImg);
			item.href = "videodetail.html?id=" + item.articleId;
			items.push(item);
		});
	}
	return items;
}

function convertDz(arrlist) {
	var items = [];
	if (arrlist == null) {
		alert("没了更多了");
		pn--;
		return [];
	}
	arrlist[0].href = "dzdetail.html?id=" + arrlist[0].articleId
	return arrlist;
}

function convert(arrlist) {
	var items = [];
	if (arrlist == null) {
		$('#nomore').attr('style', '');
		isloading = true;
		pn--;
		return [];
	}
	if (arrlist.length > 0) {
		arrlist.forEach(function (item) {
			item.publishTime = item.publishTime.split(" ")[0];
			item.articleImg = getImgUrl(item.articleImg);
			if (item.articleUrl) {
				item.articleUrl = getImgUrl(item.articleUrl);
			}
			if (item.typeName == "组图") {
				item.href = "ztdetail.html?id=" + item.articleId;
			} else if (item.typeName == "动图") {
				item.href = "gifdetail.html?id=" + item.articleId;
			} else if (item.typeName == "视频") {
				item.href = "videodetail.html?id=" + item.articleId;
			} else if (item.typeName == "公告") {
				item.href = "noticedetail.html?id=" + item.articleId;
			} else {
				item.href = "dzdetail.html?id=" + item.articleId;
			}
			items.push(item);
		});
	}
	return items;
}

function convertInit(data) {
	var items = [];
	var arrlist = data.article.itits;
	if (arrlist.length > 0) {
		arrlist.forEach(function (item) {
			item.imgId = getImgUrl(item.imgId);
			item.imgName = item.imgId;
			item.className = "";
			items.push(item);
		});
	}
	return items;
}

function convertRandList(arrlist) {
	var items = [];
	if (arrlist == null) {
		//					alert("没了更多了");
		return [];
	}
	var i = 1;
	if (arrlist.length > 0) {
		arrlist.forEach(function (item) {
			item.publishTime = item.publishTime.split(" ")[0];
			item.articleImg = getImgUrl(item.articleImg);
			if (item.typeName == "组图") {
				item.href = "ztdetail.html?id=" + item.articleId;
			} else if (item.typeName == "动图") {
				item.href = "gifdetail.html?id=" + item.articleId;
			} else if (item.typeName == "视频") {
				item.href = "videodetail.html?id=" + item.articleId;
			} else if (item.typeName == "公告") {
				item.href = "noticedetail.html?id=" + item.articleId;
			} else {
				item.href = "dzdetail.html?id=" + item.articleId;
			}
			items.push(item);
		});
	}
	return items;
}

function convertDetail(data) {
	if (!data) {
		//alert("没了更多了");
		return {};
	}
	if (data.article.articleUrl) {
		data.article.articleUrl = getImgUrl(data.article.articleUrl);
	}
	//	data.article.href = data.article.type+"detail.html?id=" + data.article.articleId;
	data.article.publishTime = data.article.publishTime.split(" ")[0];
	if (data.lastArticle.articleId) {
		data.lastArticle.publishTime = data.lastArticle.publishTime.split(" ")[0];
		data.lastArticle.href = data.lastArticle.type + "detail.html?id=" + data.lastArticle.articleId;
	}
	if (data.nextArticle.articleId) {
		data.nextArticle.publishTime = data.nextArticle.publishTime.split(" ")[0];
		data.nextArticle.href = data.nextArticle.type + "detail.html?id=" + data.nextArticle.articleId;
	}
	return data;
}

function convertVideoDetail(data) {
	if (!data) {
		//alert("没了更多了");
		return {};
	}
	//	data.article.href = data.article.type+"detail.html?id=" + data.article.articleId;
	data.article.publishTime = data.article.publishTime.split(" ")[0];
	if (data.lastArticle.articleId) {
		data.lastArticle.publishTime = data.lastArticle.publishTime.split(" ")[0];
		data.lastArticle.href = data.lastArticle.type + "detail.html?id=" + data.lastArticle.articleId;
	}
	if (data.nextArticle.articleId) {
		data.nextArticle.publishTime = data.nextArticle.publishTime.split(" ")[0];
		data.nextArticle.href = data.nextArticle.type + "detail.html?id=" + data.nextArticle.articleId;
	}
	return data;
}

function getImgUrl(url) {
	if (url.indexOf("http") == 0) {
		return url;
	} else {
		return IMG_URL + url;
	}
}
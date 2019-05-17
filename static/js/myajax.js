/*******my_ajax.js 网络请求部分开始******/
var SERVER_HOST = 'https://www.qsong.fun'

var mNetUtils = {
	// 登录
	LOGIN_URL: '/user/login',
	// 获取组图文章列表
	ARTICLE_LIST:  '/article/getArticleList',
	// 获取文章详情
	ARTICLE_DETAIL:  '/article/getArticleDtl',
	// 获取随机5篇文章
	GET_RANDARTICLE:  '/article/getRandArticle',
	// 获取最新5条公告++
	GET_NOTICE:  '/article/getArticleList',
	// 获取统计数据
	GET_COUNTINFO:  '/article/getCountInfo',
	// 获取文章搜索结果
	ARTICLE_SEARCH:  '/article/getSearchList',
	// 检查刷新token
	REFRESH_TOKEN:  '/user/token/check',
	// 点赞
	ADD_NICE:  '/article/postAddNice',
	POST_IMG_ARTICLE:  '/article/postNewImgArticle',
	// 获取福利列表
	WELFARE_LIST: 'https://gank.io/api/data/福利/',

	getRootPath: function() {
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

	},

	/**
	 * get请求
	 */
	getData: function(url, dataParam, success, error) {
		console.log("getData:" + JSON.stringify(dataParam));

		jQuery.ajax(url, {
			data: dataParam,
			dataType: 'json', //服务器返回json格式数据
			type: 'get', //HTTP请求类型
			timeout: 30000, //超时时间设置为30秒
			success: function(data) {
				success(data);
			},
			error: function(xhr, type, errorThrown) {
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
	},

	/**
	 * post请求
	 */
	postData: function(url, dataParam, success, error) {
		console.log("postData:" + JSON.stringify(dataParam));

		jQuery.ajax(url, {
			data: dataParam,
			dataType: 'json', //服务器返回json格式数据
			type: 'post', //HTTP请求类型
			timeout: 30000, //超时时间设置为30秒
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			},
			success: function(data) {
				success(data);
			},
			error: function(xhr, type, errorThrown) {
				console.log(xhr.status);
				console.log(xhr.responseText);
				if (xhr.status == 200) {
					success(xhr.responseText);
				} else if (xhr.status == 401) {} else {
					error(xhr, type, errorThrown);
				}
			}
		});
	},

	/**
	 * post请求
	 */
	postFile: function(url, dataParam, success, error) {
		var xhr = new XMLHttpRequest();
		xhr.open("post", url, true);
		xhr.onload = function() {
			if (this.status == 200) {
				success(this.responseText);
			} else {
				console.log("文件上传失败...");
				error(this);
			}
		};
		xhr.send(dataParam);
	},

	getQueryString: function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = decodeURI(window.location.search).substr(1).match(reg);
		if (r != null)
			return unescape(r[2]);
		return null;
	},

	convertHotList: function(arrlist) {
		var items = [];
		if (arrlist == null) {
			//					alert("没了更多了");
			return [];
		}
		var i = 1;
		if (arrlist.length > 0) {
			arrlist.forEach(function(item) {
				item.classname = "label label-" + i++;
				item.publishTime = item.publishTime.split(" ")[0];
				item.articleImg = mNetUtils.getImgUrl(item.articleImg);
				if (item.typeName == "组图") {
					item.href = SERVER_HOST + "/picture/detail/" + item.articleId;
				} else if (item.typeName == "动图") {
					item.href = SERVER_HOST + "/gif/detail/" + item.articleId;
				} else if (item.typeName == "视频") {
					item.href = SERVER_HOST + "/video/detail/" + item.articleId;
				} else if (item.typeName == "公告") {
					item.href = SERVER_HOST + "/notice/detail/" + item.articleId;
				} else {
					item.href = SERVER_HOST + "/jokes/detail/" + item.articleId;
				}
				items.push(item);
			});
		}
		return items;
	},

	convertHotVideo: function(arrlist) {
		var items = [];
		if (arrlist == null) {
			/* alert("没了更多了");
			pn--; */
			return [];
		}
		if (arrlist.length > 0) {
			arrlist.forEach(function(item) {
				item.publishTime = item.publishTime.split(" ")[0];
				item.articleImg = mNetUtils.getImgUrl(item.articleImg);
				item.href = SERVER_HOST + "/video/detail/" + item.articleId;
				items.push(item);
			});
		}
		return items;
	},

	convertDz: function(arrlist) {
		var items = [];
		if (arrlist == null) {
			/* alert("没了更多了");
			pn--; */
			return [];
		}
		arrlist[0].href = SERVER_HOST + "/jokes/detail/" + arrlist[0].articleId
		return arrlist;
	},
	
	convertCount: function(data) {
		var countInfo = {};
		countInfo = data;
		countInfo.publish_time = data.publish_time.split(" ")[0];
		return countInfo;
	},

	convert: function(arrlist) {
		var items = [];
		if (arrlist == null) {
			return [];
		}
		if (arrlist.length > 0) {
			arrlist.forEach(function(item) {
				item.publishTime = item.publishTime.split(" ")[0];
				item.articleImg = mNetUtils.getImgUrl(item.articleImg);
				if (item.articleUrl) {
					item.articleUrl = mNetUtils.getImgUrl(item.articleUrl);
				}
				if (item.typeName == "组图") {
					item.href = SERVER_HOST + "/picture/detail/" + item.articleId;
				} else if (item.typeName == "动图") {
					item.href = SERVER_HOST + "/gif/detail/" + item.articleId;
				} else if (item.typeName == "视频") {
					item.href = SERVER_HOST + "/video/detail/" + item.articleId;
				} else if (item.typeName == "公告") {
					item.href = SERVER_HOST + "/notice/detail/" + item.articleId;
				} else {
					item.href = SERVER_HOST + "/jokes/detail/" + item.articleId;
				}
				items.push(item);
			});
		}
		return items;
	},

	convertInit: function(data) {
		var items = [];
		var arrlist = data.article.itits;
		if (arrlist.length > 0) {
			arrlist.forEach(function(item) {
				item.imgId = mNetUtils.getImgUrl(item.imgId);
				item.imgName = item.imgId;
				item.className = "";
				items.push(item);
			});
		}
		return items;
	},

	convertRandList: function(arrlist) {
		var items = [];
		if (arrlist == null) {
			//					alert("没了更多了");
			return [];
		}
		var i = 1;
		if (arrlist.length > 0) {
			arrlist.forEach(function(item) {
				item.publishTime = item.publishTime.split(" ")[0];
				item.articleImg = mNetUtils.getImgUrl(item.articleImg);
				if (item.typeName == "组图") {
					item.href = SERVER_HOST + "/picture/detail/" + item.articleId;
				} else if (item.typeName == "动图") {
					item.href = SERVER_HOST + "/gif/detail/" + item.articleId;
				} else if (item.typeName == "视频") {
					item.href = SERVER_HOST + "/video/detail/" + item.articleId;
				} else if (item.typeName == "公告") {
					item.href = SERVER_HOST + "/notice/detail/" + item.articleId;
				} else {
					item.href = SERVER_HOST + "/jokes/detail/" + item.articleId;
				}
				items.push(item);
			});
		}
		return items;
	},
	convertDetail: function(data) {
		if (!data) {
			//alert("没了更多了");
			return {};
		}
		if (data.article.articleUrl) {
			data.article.articleUrl = mNetUtils.getImgUrl(data.article.articleUrl);
		}
		data.article.publishTime = data.article.publishTime.split(" ")[0];
		if (data.lastArticle.articleId) {
			data.lastArticle.publishTime = data.lastArticle.publishTime.split(" ")[0];
			data.lastArticle.href = SERVER_HOST + "/"+mNetUtils.getRoute(data.lastArticle.type) + "/detail/"  + data.lastArticle.articleId;
		}
		if (data.nextArticle.articleId) {
			data.nextArticle.publishTime = data.nextArticle.publishTime.split(" ")[0];
			data.nextArticle.href = SERVER_HOST + "/"+mNetUtils.getRoute(data.nextArticle.type) + "/detail/" + data.nextArticle.articleId;
		}
		return data;
	},

	convertVideoDetail: function(data) {
		if (!data) {
			//alert("没了更多了");
			return {};
		}
		data.article.publishTime = data.article.publishTime.split(" ")[0];
		if (data.lastArticle.articleId) {
			data.lastArticle.publishTime = data.lastArticle.publishTime.split(" ")[0];
			data.lastArticle.href = SERVER_HOST + "/"+mNetUtils.getRoute(data.lastArticle.type) + "/detail/" + data.lastArticle.articleId;
		}
		if (data.nextArticle.articleId) {
			data.nextArticle.publishTime = data.nextArticle.publishTime.split(" ")[0];
			data.nextArticle.href = SERVER_HOST + "/"+mNetUtils.getRoute(data.nextArticle.type) + "/detail/" + data.nextArticle.articleId;
		}
		return data;
	},
	
	getRoute: function(type){
		if(type == "gif"){
			return "gif";
		}else if(type == "zt"){
			return "picture";
		}else if(type == "dz"){
			return "jokes";
		}else if(type == "video"){
			return "video";
		}else{
			return "notice";
		}
	},

	getImgUrl: function(url) {
		if (url.indexOf("http") == 0) {
			return url;
		} else {
			return "https://www.qsong.fun/img/" + url;
		}
	},
	
	getContent: function(items){
		var contents = "";
		items.forEach(function(item) {
			contents += (item.text || item.articleTitle) +"|";
		});
		return contents;
	},
	
	convertWordList: function(data){
		if(!data){
			return;
		};
		
		console.log(data.length);
		// return mNetUtils.getItems();
		var map = new Map();
		var cMapEl = {};
		data.forEach(function(item) {
			map.set(item.code,{
				cid : 'wo_' + item.code,
				code : item.code,
				list : []
			});
		});
		
		data.forEach(function(item) {
			cMapEl = map.get(item.code);
			cMapEl.list.push({
				text: item.word,
				href: SERVER_HOST + '/geng/detail/'+item.id,
			});
			map.set(item.code,cMapEl);
		});
		
		return [...map.values()];
	},
}

export default mNetUtils

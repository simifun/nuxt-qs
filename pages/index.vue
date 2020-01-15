<template>
	<div id="body" class="m-excerpt-cat site-layout-2 rollbar-m-on">
		<header class="header">
			<div class="container">
				<h1 class="logo"><nuxt-link to="/" title="轻松一下"><img src="/image/logo.png" alt="轻松一下-抛开那烦恼">轻松一下</nuxt-link></h1>
				<div class="brand">QSONG.FUN
					<br>有事没事轻松一下</div>
				<ul class="site-nav site-navbar">
					<li id="menu-item-25" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-25">
						<a href="/"><i class="fa fa-home"></i> 首页</a>
					</li>
					<li id="menu-item-19" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-19">
						<a href="/geng"><i class="fa fa-bus"></i> 梗百科</a>
					</li>
					<li id="menu-item-19" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-19">
						<a href="/video"><i class="fa fa-youtube-play"></i> 视频</a>
					</li>
					<li id="menu-item-20" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-20">
						<a href="/gif"><i class="fa fa-file-movie-o"></i> 动图</a>
					</li>
					<li id="menu-item-18" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-18">
						<a href="/picture"><i class="fa fa-image"></i> 组图</a>
					</li>
					<li id="menu-item-13" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-13">
						<a href="/jokes"><i class="fa fa-flag"></i> 段子</a>
					</li>
					<li id="menu-item-17" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-17">
						<a href="/welfare"><i class="fa fa-fire"></i> 福利</a>
					</li>
					<li class="navto-search">
						<a to="javascript:;" class="search-show active"><i class="fa fa-search"></i></a>
					</li>
				</ul>
				<i class="fa fa-bars m-icon-nav"></i>
				<div class="topbar">
					<ul class="site-nav topmenu">
						<li class="menusns">
							<a href="javascript:;">微信小程序 <i class="fa fa-angle-down"></i></a>
							<ul class="sub-menu">
								<li>
									<a class="sns-wechat" href="javascript:;" title="微信小程序" data-src="/image/wxapp.jpg" data-alt="微信小程序码">扫码体验</a>
								</li>
							</ul>
						</li>
					</ul>

				</div>
			</div>
		</header>
		<div class="site-search">
			<div class="container">
				<form method="get" class="site-search-form" action="/result"><input class="search-input" name="keywords"
					 type="text" placeholder="输入关键字" value=""><button class="search-btn" type="submit"><i class="fa fa-search"></i></button></form>
			</div>
		</div>
		<section class="container">
			<div class="content-wrap">
				<div class="content">
					<!-- 首页滚动公告 -->
					<div id="focusslide" class="carousel slide" data-ride="carousel" style="touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
						<ol class="carousel-indicators">
							<li data-target="#focusslide" data-slide-to="0" class=""></li>
							<li data-target="#focusslide" data-slide-to="1" class="active"></li>
							<li data-target="#focusslide" data-slide-to="2" class=""></li>
						</ol>
						<div class="carousel-inner" role="listbox">
							<div class="item">
								<a target="_blank" href="https://www.qsong.fun"><img src="/image/Banner_woniu.jpg" alt="首页图片"></a>
							</div>
							<div class="item active">
								<a target="_blank" href="https://www.qsong.fun"><img src="/image/Banner_guangyingshuihua.jpg" alt="首页图片"></a>
							</div>
							<div class="item">
								<a target="_blank" href="https://www.qsong.fun"><img src="/image/Banner_weimei.jpg" alt="首页图片"></a>
							</div>
						</div>
						<a class="left carousel-control" href="#focusslide" role="button" data-slide="prev"><i class="fa fa-angle-left"></i></a>
						<a class="right carousel-control" href="#focusslide" role="button" data-slide="next"><i class="fa fa-angle-right"></i></a>
					</div>
					<div id="hotdz">
						<article class="excerpt-minic excerpt-minic-index" v-for="item in dzItems">
							<h2><a target="_blank" class="red" href="/jokes">【最新段子】</a> <a :href="item.href" v-cloak>{{item.articleTitle}}</a></h2>
							<p class="note myellipsis-3" v-cloak>{{item.articleContent}}</p>
						</article>
					</div>
					<!--热门文章排行-->
					<div class="most-comment-posts">
						<div class="title">
							<h3>热门TOP5</h3>
						</div>
						<div id="hotlist" class="mpc-bg">
							<ul>
								<li v-for="(item,index) in hotlist">
									<p class="text-muted"><span class="post-comments" v-cloak>&nbsp;阅读 ({{item.readTime}})</span></p><span
									 v-bind:class="item.classname" v-cloak>{{index+1}}</span>
									<a target="_blank" :href="item.href" v-bind:title="item.articleTitle" v-cloak>{{item.articleTitle}}</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="title">
						<h3>最新发布</h3>
					</div>
					<div id="uptodatelist">
						<article class="excerpt excerpt-1" v-for="(item,index) in uptodatelist">
							<a target="_blank" class="focus" :href="item.href"><img :src="item.articleImg" :alt="item.articleTitle" class="thumb" style="display: inline;"></a>
							<header>
								<a class="cat" v-cloak>{{item.typeName}}<i></i></a>
								<h2><a target="_blank" :href="item.href" :title="item.articleTitle" v-cloak>{{item.articleTitle}}</a></h2>
							</header>
							<p class="meta"><time v-cloak><i class="fa fa-clock-o"></i>{{item.publishTime}}</time><span class="pv" v-cloak><i
									 class="fa fa-eye"></i>阅读({{item.readTime}})</span>
								<a href="javascript:" onclick="postlike(event)" class="post-like" v-bind:pid="item.articleId"><i class="fa fa-thumbs-o-up"></i>赞(<span
									 v-cloak>{{item.niceNum}}</span>)</a>
							</p>
							<p class="note myellipsis-3" v-html="item.articleContent">{{item.articleContent}}</p>
						</article>
					</div>
					<div id="loader" class="ias_loader" style="display: none;">
						<div class="pagination-loading"><img src="/image/loading.gif" alt="加载中..."></div>
					</div>
					<div id="nomore" class="ias_loader" style="display: none;">
						<div class="alert alert-warning"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>没有更多啦！</strong></div>
					</div>
				</div>
			</div>
			<div id="sidebarInfo" class="sidebar">
				<div class="widget widget-tops">
					<ul class="widget-nav">
						<!--首页公告栏添加推荐与联系我们模块-->
						<li>网站公告</li>
						<li class="active">小程序版</li>
						<li>联系我们</li>
					</ul>

					<ul class="widget-navcontent">
						<!--首页公告栏添加推荐与联系我们模块-->
						<li class="item item-01">
							<ul>
								<li v-for="item in noticeList"><time>{{item.publishTime}}</time>
									<a target="_blank" v-bind:href="item.href">{{item.articleTitle}}</a>
								</li>
							</ul>
						</li>
						<li class="item item-03 active">
							<ul>
								<li style="float: left;width: 50%;padding: 32px 0;">
									<p>打开微信扫一扫<br>体验小程序版<br>内容同步更新!</p>
								</li>
								<li style="float: left;width: 50%;">
									<img src="/image/wxapp.jpg" style="width: 80%;">
								</li>
							</ul>
						</li>
						<li class="item item-03">
							<ul>
								<h2>如有疑问,请留言或邮箱咨询 <br>xiaoqs0707@qq.com</h2>
								<nuxt-link to="/" target="" class="btn btn-danger">给我留言</nuxt-link>
								<nuxt-link to="/" target="" class="btn btn-default">联系我们</nuxt-link>
							</ul>
						</li>
					</ul>
				</div>
				<div class="widget widget_ui_posts">
					<h3 @click="refRandList($event)">随机推荐&nbsp;&nbsp;<i class="fa fa-refresh"></i></h3>
					<ul class="nopic">
						<li v-for="(item,index) in randList">
							<a target="_blank" :href="item.href"><span class="text" v-cloak>{{item.articleTitle}}</span><span class="muted"
								 v-cloak>{{item.publishTime}}</span></a>
						</li>
					</ul>
				</div>
				<div class="widget widget_ui_asb" style="top: 0px;">
					<div class="item" v-for="item in videoItems">
						<a :href="item.href" target="_blank"><img :src="item.articleImg"></a>
						<div class="videoTitle"><i class="fa fa-play-circle-o"></i>{{item.articleTitle}}</div>
					</div>
				</div>
				<div id="" class="widget widget_ui_statistics" style="top: 0px;">
					<h3>网站统计</h3>
					<ul>
						<li v-cloak><strong>文章总数：</strong>{{countInfo.c_all}}</li>
						<li v-cloak><strong>视频总数：</strong>{{countInfo.c_video}}</li>
						<li v-cloak><strong>段子总数：</strong>{{countInfo.c_dz}}</li>
						<li v-cloak><strong>动图总数：</strong>{{countInfo.c_gif}}</li>
						<li v-cloak><strong>组图总数：</strong>{{countInfo.c_zt}}</li>
						<li v-cloak><strong>获赞总数：</strong>{{countInfo.c_nice}}</li>
						<li v-cloak><strong>最后更新：</strong>{{countInfo.publish_time}}</li>
					</ul>
				</div>
				<div class="widget widget_ui_tags">
					<h3>友情链接</h3>
					<div class="items">
						<a href="https://blog.qsong.fun" target="_blank" style="background:#3366FF; opacity: 0.6;">Simi</a>
					</div>
				</div>
			</div>
		</section>

		<footer class="footer">
			<div class="container">
				<p>©&nbsp;2020&nbsp;-&nbsp;2021&nbsp;&nbsp;</p>
				<nuxt-link to="/">轻松一下</nuxt-link> &nbsp;|
				<a href="http://www.miitbeian.gov.cn/">&nbsp;豫ICP备18031952号</a>
			</div>
		</footer>

		<div class="m-mask"></div>
		<div class="rollbar rollbar-rb">
			<ul>
				<li class="rollbar-qrcode">
					<a href="javascript:;"><i class="fa fa-qrcode"></i><span>微信咨询</span></a>
					<h6>微信咨询<img src="/image/wxqrcode.png" alt="扫我添加微信"><i></i></h6>
				</li>
				<li>
					<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=917437934&site=qq&menu=yes"><i class="fa fa-qq"></i><span>QQ咨询</span></a>
					<h6>QQ咨询<i></i></h6>
				</li>
				<li class="rollbar-totop">
					<a href="javascript:(scrollTo());"><i class="fa fa-angle-up"></i><span>回顶部</span></a>
					<h6>回顶部<i></i></h6>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import mNetUtils from "~/static/js/myajax.js"
	export default {
		head () {
			return {
				meta: [
					{ hid: 'description', name: 'description', content:mNetUtils.getContent(this.uptodatelist)}
				]
			}
		},
		data() {
			return {
				ps: 10,
				pn: 1,
				isloading: false,
				hotlist: [],
				randList: [],
				noticeList: [],
				countInfo: {},
				videoItems: [],
				dzItems: [],
				uptodatelist: []
			};
		},
		methods:{
			refRandList (e) {
				var $this = $(e.target);
				if($this.hasClass("refreshRotate")) { //点击箭头旋转180度
					$this.removeClass("refreshRotate"); 
				} else {   
					$this.addClass("refreshRotate");  
					this.$axios.$get(mNetUtils.GET_RANDARTICLE).then((res) => {
						this.randList = mNetUtils.convertRandList(res.data.list);
					});
					setTimeout(function() {
						$this.removeClass("refreshRotate");
					}, 1000);
				}
			},
			pullupRefresh(){
				$('#loader').attr('style','');
				this.isloading = true;
				var that = this;
				var params = {
					ps: this.ps,
					pn: ++this.pn,
				};
				this.$axios.$get(mNetUtils.ARTICLE_LIST,{params}).then((res) => {
					that.isloading = false;
					$('#loader').attr('style','display: none;');
					if(res.success === true && res.data.list != null) {
						that.uptodatelist = that.uptodatelist.concat(mNetUtils.convert(res.data.list));
					} else {
						$('#nomore').attr('style','');
					}
				});
			}
		},
		async asyncData ({ app,params}) {
			let [hotData, updateData,randData,vData,DzData,nData,cData] = await Promise.all([
			  app.$axios.$get('/article/getArticleList?ps=5&pn=1&sort=read'),
			  app.$axios.$get('/article/getArticleList?ps=10&pn=1'),
			  app.$axios.$get('/article/getRandArticle'),
			  app.$axios.$get('/article/getArticleList?ps=1&pn=1&type=video&sort=read'),
			  app.$axios.$get('/article/getArticleList?ps=1&pn=1&type=dz'),
			  app.$axios.$get('/article/getArticleList?ps=5&pn=1&type=notice'),
			  app.$axios.$get(mNetUtils.GET_COUNTINFO),
			])
			return {
				hotlist: mNetUtils.convertHotList(hotData.data.list),
				uptodatelist: mNetUtils.convert(updateData.data.list),
				randList: mNetUtils.convertRandList(randData.data.list),
				videoItems: mNetUtils.convertHotVideo(vData.data.list),
				dzItems: mNetUtils.convertDz(DzData.data.list),
				noticeList: mNetUtils.convertHotList(nData.data.list),
				countInfo: mNetUtils.convertCount(cData.data.countInfo)
			}
		 },
		 mounted() {
			let that = this;
		 	this.$nextTick(function(){
				that.uptodatelist = that.uptodatelist.concat([]);
		 		$(window).scroll(function() {
		 			var wScrollY = window.scrollY; // 当前滚动条top值  
		 			var wInnerH = window.innerHeight; // 设备窗口的高度
		 			var bScrollH = document.body.scrollHeight; // body总高度   
		 			if(!that.isloading && wScrollY + wInnerH >= bScrollH - 10) {
		 				that.pullupRefresh();
		 			}
		 		});
		 	})
		 }, 
	}
</script>

<style>

</style>

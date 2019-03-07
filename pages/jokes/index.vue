<template>
	<div id="body" class="m-excerpt-cat site-layout-2 rollbar-m-on">
		<header class="header">
			<div class="container">
				<h1 class="logo"><nuxt-link to="/" title="轻松一下"><img src="/img/logo.png" alt="轻松一下-抛开那烦恼">轻松一下</nuxt-link></h1>
				<div class="brand">QSONG.FUN
					<br>有事没事轻松一下</div>
				<ul class="site-nav site-navbar">
					<li id="menu-item-25" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-25">
						<a href="/"><i class="fa fa-home"></i> 首页</a>
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
					<li id="menu-item-13" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-13 current-menu-item">
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
									<a class="sns-wechat" href="javascript:;" title="微信小程序" data-src="/img/wxapp.jpg">扫码体验</a>
								</li>
							</ul>
						</li>
					</ul>

				</div>
			</div>
		</header>
		<div class="site-search">
			<div class="container">
				<form method="get" class="site-search-form" action="searchresult.html"><input class="search-input" name="keywords"
					 type="text" placeholder="输入关键字" value=""><button class="search-btn" type="submit"><i class="fa fa-search"></i></button></form>
			</div>
		</div>
		<section class="container">
			<div class="content-wrap">
				<div class="content">
					<div class="catleader">
						<h1>看段子</h1>
						<div class="catleader-desc">短笑话，文字带来的笑料，简单却不失深意！</div>
					</div>
					<div id='list'>
						<article class="excerpt-minic" v-for="(item,index) in items">
							<h2><a target="_blank" :href="item.href" :title="item.articleTitle" v-cloak>{{item.articleTitle}}</a></h2>
							<p class="meta"><time><i class="fa fa-clock-o"></i>{{item.publishTime}}</time><span class="pv"><i class="fa fa-eye"></i>阅读({{item.readTime}})</span><a href="javascript:;" onclick="postlike(event)" class="post-like" v-bind:pid="item.articleId"><i class="fa fa-thumbs-o-up"></i>赞(<span v-cloak>{{item.niceNum}}</span>)</a></p>
							<div class="article-content">
								<img v-if="item.articleUrl" :src="item.articleUrl"/>
								<p>{{item.articleContent}}</p>
							</div>
						</article>
					</div>
				</div>
				<div id="loader" class="ias_loader" style="display: none;">
					<div class="pagination-loading"><img src="/img/loading.gif"></div>
				</div>
				<div id="nomore" class="ias_loader" style="display: none;">
					<div class="alert alert-warning"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>没有更多啦！</strong></div>
				</div>
			</div>
			<div id="sidebarInfo" class="sidebar">
				<div class="widget widget-tops">
					<ul class="widget-nav">
						<li>网站公告</li>
						<li class="active">小程序版</li>
						<li>联系我们</li>
					</ul>
					<ul class="widget-navcontent">
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
									<img src="/img/wxapp.jpg" style="width: 80%;">
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
			</div>
		</section>

		<footer class="footer">
			<div class="container">
				<p>©&nbsp;2017&nbsp;-&nbsp;2018&nbsp;&nbsp;</p>
				<nuxt-link to="/">轻松一下</nuxt-link> &nbsp;|
				<a href="http://www.miitbeian.gov.cn/">&nbsp;豫ICP备18031952号</a>
			</div>
		</footer>

		<div class="m-mask"></div>
		<div class="rollbar rollbar-rb">
			<ul>
				<li class="rollbar-qrcode">
					<a href="javascript:;"><i class="fa fa-qrcode"></i><span>微信咨询</span></a>
					<h6>微信咨询<img src="/img/wxqrcode.png"><i></i></h6>
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
		data() {
			return {
				ps: 10,
				pn: 1,
				isloading: false,
				items: [],
				randList: [],
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
				if($('#nomore').is(':visible')){
					return;
				}
				$('#loader').attr('style','');
				this.isloading = true;
				var that = this;
				var params = {
					type: 'dz',
					ps: this.ps,
					pn: ++this.pn,
				};
				this.$axios.$get(mNetUtils.ARTICLE_LIST,{params}).then((res) => {
					that.isloading = false;
					$('#loader').attr('style','display: none;');
					if(res.success === true) {
						that.items = that.items.concat(mNetUtils.convert(res.data.list));
					} else {
						$('#nomore').attr('style','');
					}
				});
			}
		},
		async asyncData ({ app,params}) {
			let [itemsData,randData,nData] = await Promise.all([
				app.$axios.$get('/article/getArticleList?ps=10&pn=1&type=dz'),
				app.$axios.$get('/article/getRandArticle'),
				app.$axios.$get('/article/getArticleList?ps=5&pn=1&type=notice'),
			])
			return {
				items: mNetUtils.convert(itemsData.data.list),
				randList: mNetUtils.convertRandList(randData.data.list),
				noticeList: mNetUtils.convertHotList(nData.data.list),
			}
		 },
		 mounted() {
			let that = this;
		 	this.$nextTick(function(){
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

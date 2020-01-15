<template>
	<div id="body" class="m-excerpt-cat single site-layout-2 rollbar-m-on">
		<header class="header">
			<div class="container">
				<h1 class="logo"><nuxt-link to="/" title="轻松一下"><img src="/image/logo.png" alt="轻松一下-抛开那烦恼">轻松一下</nuxt-link></h1>
				<div class="brand">QSONG.FUN
					<br>有事没事轻松一下</div>
				<ul class="site-nav site-navbar">
					<li id="menu-item-25" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-25">
						<a href="/"><i class="fa fa-home"></i> 首页</a>
					</li>
					<li id="menu-item-19" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12">
						<a href="/geng"><i class="fa fa-bus"></i> 梗百科</a>
					</li>
					<li id="menu-item-19" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-19 current-menu-item">
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
									<a class="sns-wechat" href="javascript:;" title="微信小程序" data-src="/image/wxapp.jpg">扫码体验</a>
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
				<div id="dtContent" class="content">
					<header class="article-header">
						<h1 class="article-title"><a href="#">{{article.articleTitle}}</a></h1>
						<div class="article-meta">
							<span class="item"><time><i class="fa fa-clock-o"></i>{{article.publishTime}}</time></span>
							<span class="item"><span class="pv"><i class="fa fa-eye"></i>阅读({{article.readTime}})</span></span>
							<span class="item"><span class="pv"><i class="fa fa-thumbs-o-up"></i>赞({{article.niceNum}})</span></span>
						</div>
					</header>
					<article class="article-content">
						<p v-if="article.articleUrl">
							<a v-bind:href="article.articleUrl">
								<img class="aligncenter wp-image-3259 size-full" :src="article.articleUrl" :alt="article.articleTitle" data-tag="bdshare">
							</a>
						</p>
						<p class="dzpre">{{article.articleContent}}</p>
					</article>
					<div class="post-actions">
						<a href="javascript:;" onclick="postlike(event)" class="post-like action action-like" v-bind:pid="article.articleId">
							<i class="fa fa-thumbs-o-up"></i>赞(<span>{{article.niceNum}}</span>)
						</a>
					</div>
					<div class="action-share">
						<div class="bdsharebuttonbox bdshare-button-style0-24" data-bd-bind="1539754168197">
							<span>分享到：</span>
							<a class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
							<a class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
							<a class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
							<a class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a>
							<a class="bds_sqq" data-cmd="sqq" title="分享到QQ好友"></a>
							<a class="bds_bdhome" data-cmd="bdhome" title="分享到百度新首页"></a>
						</div>
					</div>
					<div class="post-copyright">未经允许不得转载：<a href="https://qsong.fun">轻松一下</a> » <a href="#">{{article.articleTitle}}</a></div>
	
					<nav class="article-nav">
						<span class="article-nav-prev">上一篇<br><a v-bind:href="lastArticle.href" rel="prev">{{lastArticle.articleTitle}}</a></span>
						<span class="article-nav-next">下一篇<br><a v-bind:href="nextArticle.href" rel="next">{{nextArticle.articleTitle}}</a></span>
					</nav>
					<!--PC和WAP自适应版-->
					<div id="SOHUCS" v-bind:sid="article.articleId"></div>
					<script charset="utf-8" type="text/javascript" src="https://changyan.sohu.com/upload/changyan.js"></script>
				</div>
			</div>
			<div id="sidebarInfo" class="sidebar">
				<div class="widget widget_ui_posts">
					<h3>随机推荐&nbsp;&nbsp;<i class="fa fa-refresh"></i></h3>
					<ul class="nopic">
						<li v-for="(item,index) in randList">
							<a target="_blank" :href="item.href"><span class="text" v-cloak>{{item.articleTitle}}</span><span class="muted"
								 v-cloak>{{item.publishTime}}</span></a>
						</li>
					</ul>
				</div>
			</div>
		</section>
		<div class="modal fade" id="modal-img" role="dialog">
			<div class="modal-dialog">
				<div class="modal-body" style="padding:0">
					<img id="imgId" style="width:100%;height: auto;" src="">
				</div>
			</div>
		</div>
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
					<h6>微信咨询<img src="/image/wxqrcode.png" alt="扫码加我微信"><i></i></h6>
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
		validate ({ params }) {
			return /^\d+$/.test(params.id)
		},
		head () {
			return {
				title: this.article.articleTitle  + " - 轻松一下soft",
				meta: [
					{ hid: 'keywords', name: 'keywords', content:mNetUtils.getContent(this.items)},
					{ hid: 'description', name: 'description', content:mNetUtils.getContent(this.items)}
				],
			  link: [
				{ rel: 'modulepreload', as: 'script', href: '/js/share.js' },
				{ rel: 'stylesheet', type: 'text/css', href: '/css/share.css' },
			  ]
			}
		},
		data() {
			return {
				ps: 10,
				pn: 1,
				isloading: false,
				items: [],
				randList: [],
				nowItem: {},
				article: {},
				lastArticle: {},
				nextArticle: {},
			};
		},
		methods:{
			refRandList(e) {
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
			}
		},
		async asyncData ({ app,params}) {
			var detailParams = {
				articleId: params.id,
				type: 'dz',
			}
			let [data,randData,nData] = await Promise.all([
				app.$axios.$get('/article/getArticleDtl',{params:detailParams}),
				app.$axios.$get('/article/getRandArticle'),
			])
			return {
				randList: mNetUtils.convertRandList(randData.data.list),
				items: mNetUtils.convertInit(data.data.article),
				nowItem : mNetUtils.convertInit(data.data.article)[0],
				article : mNetUtils.convertDetail(data.data.article).article,
				lastArticle : mNetUtils.convertDetail(data.data.article).lastArticle,
				nextArticle : mNetUtils.convertDetail(data.data.article).nextArticle,
			}
		 },
		 mounted() {
			let that = this;
		 	this.$nextTick(function(){
				/**			畅言配置		**/
				window.changyan.api.config({
					appid: 'cytNEHvD4',
					conf: 'prod_64b2c48f973a27674ff429798323a2c6'
				});
				window._bd_share_config = {
					common: {
						"bdText": "",
						"bdMini": "2",
						"bdMiniList": false,
						"bdPic": "",
						"bdStyle": "0",
						"bdSize": "24"
					},
					share: [{
						bdCustomStyle: "/css/share.css"
					}]
				};{0[(document.getElementsByTagName("head")[0] || body).appendChild(document.createElement("script")).src =
					"/js/share.js?cdnversion=" + ~(-new Date() / 36e5)];};
		 	});
		 }, 
	}
</script>

<style>

</style>

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
					<li id="menu-item-19" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12 current-menu-item">
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
						<h1 class="article-title"><a href="#">{{word.word}}</a></h1>
						<div class="article-meta">
							<span class="item"><time><i class="fa fa-clock-o"></i>{{word.createTime.split(" ")[0]}}</time></span>
							<span class="item"><span class="pv"><i class="fa fa-eye"></i>阅读({{word.readNum}})</span></span>
							<span class="item"><span class="pv"><i class="fa fa-thumbs-o-up"></i>赞({{word.niceNum}})</span></span>
						</div>
					</header>
					<article class="article-content">
						<div v-html="compiledMarkdown"></div>
					</article>
					<div class="post-actions">
						<a href="javascript:;" onclick="postlike(event)" class="post-like action action-like" :pid="word.id" ptype="word">
							<i class="fa fa-thumbs-o-up"></i>赞(<span>{{word.niceNum}}</span>)
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

					<!-- <nav class="article-nav">
						<span class="article-nav-prev">上一篇<br><a v-bind:href="lastArticle.href" rel="prev">{{lastArticle.articleTitle}}</a></span>
						<span class="article-nav-next">下一篇<br><a v-bind:href="nextArticle.href" rel="next">{{nextArticle.articleTitle}}</a></span>
					</nav> -->
					<!--PC和WAP自适应版-->
					<div id="SOHUCS" v-bind:sid="word.id"></div>
					<script charset="utf-8" type="text/javascript" src="https://changyan.sohu.com/upload/changyan.js"></script>
				</div>
			</div>
			<div id="sidebarInfo" class="sidebar">
				<div class="widget widget_ui_posts">
					<h3>随机推荐&nbsp;&nbsp;<i @click="refRandList($event)" class="fa fa-refresh"></i></h3>
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
	import marked from 'marked'
	var rendererMD = new marked.Renderer()
	marked.setOptions({
		renderer: rendererMD,
		gfm: true,
		tables: true,
		breaks: false,
		pedantic: false,
		sanitize: false,
		smartLists: true,
		smartypants: false
	})
	export default {
		validate ({ params }) {
			return /^\d+$/.test(params.id)
		},
		computed: {
			compiledMarkdown: function () {
				return marked(this.word.mdtext, { sanitize: true });
			}
		},
		head () {
			return {
				title: this.word.word + "是什么梗 - 梗百科 - 轻松一下soft",
				meta: [
					{ hid: 'description', name: 'description', content:this.word.word}
				],
			  link: [
				{ rel: 'modulepreload', as: 'script', href: '/js/share.js' },
				{ rel: 'stylesheet', type: 'text/css', href: '/css/share.css' },
				{ rel: 'stylesheet', type: 'text/css', href: '/css/baguetteBox.min.css' },
				{ rel: 'stylesheet', type: 'text/css', href: '/css/gallery-clean.css' },
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
					this.$axios.$get(mNetUtils.getRandArticle()).then((res) => {
						this.randList = mNetUtils.convertRandList(res.data.list);
					});
					setTimeout(function() {
						$this.removeClass("refreshRotate");
					}, 1000);
				}
			},
		},
		async asyncData ({ app,params}) {
			let [wordData,randData] = await Promise.all([
				app.$axios.$get('/word/getWord?id=' + params.id),
				app.$axios.$get('/article/getRandArticle'),
			]);
			return {
				randList: mNetUtils.convertRandList(randData.data.list),
				word: wordData.data.word,
			}
		 },
		 mounted() {
			let that = this;
		 	this.$nextTick(function(){
				/**		畅言配置		**/
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
					"/js/share.js?cdnversion=" + ~(-new Date() / 36e5)];}

					//点击放大图片，modal方式
					$(".lightbox").on("click", "img", function () {
						$('#modal-img').modal('toggle');
						document.getElementById("imgId").src = this.src;
					});

					$('#modal-img').on('show.bs.modal', function () {
						$(this).css('display', 'flex');
					})
		 	});
		 },
	}
</script>

<style>
	.thumbnail a>img{height: 250px!important;}
	.article-header {margin-bottom: -5px!important;}
	.mactive{background: #ddd!important;}
	.article-header {border-bottom:0;}
</style>

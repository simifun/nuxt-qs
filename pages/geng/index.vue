<template>
	<div id="body" class="m-excerpt-cat site-layout-2 rollbar-m-on">
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
				<div class="content">
					<div id="goto" class="catleader word-oder">
						<a href="#wo_A" class="goto">A</a>
						<a href="#wo_B" class="goto">B</a>
						<a href="#wo_C" class="goto">C</a>
						<a href="#wo_D" class="goto">D</a>
						<a href="#wo_E" class="goto">E</a>
						<a href="#wo_F" class="goto">F</a>
						<a href="#wo_G" class="goto">G</a>
						<a href="#wo_H" class="goto">H</a>
						<a href="#wo_J" class="goto">J</a>
						<a href="#wo_K" class="goto">K</a>
						<a href="#wo_L" class="goto">L</a>
						<a href="#wo_M" class="goto">M</a>
						<a href="#wo_N" class="goto">N</a>
						<a href="#wo_O" class="goto">O</a>
						<a href="#wo_P" class="goto">P</a>
						<a href="#wo_Q" class="goto">Q</a>
						<a href="#wo_R" class="goto">R</a>
						<a href="#wo_S" class="goto">S</a>
						<a href="#wo_T" class="goto">T</a>
						<a href="#wo_U" class="goto">U</a>
						<a href="#wo_W" class="goto">W</a>
						<a href="#wo_X" class="goto">X</a>
						<a href="#wo_Y" class="goto">Y</a>
						<a href="#wo_Z" class="goto">Z</a>
						<a href="#wo_~" class="goto">~</a>
					</div>
					<ul class="word-list">
						<li v-for="item in items">
							<a :id="item.cid" class="gotoOffset"></a>
							<dl class="clearfix">
								<dt class="fc-gblue">{{item.code}}</dt>
								<dd v-for="it in item.list"><a :href="it.href" target="_blank">{{it.text}}</a></dd>
							</dl>
						</li>
					</ul>
				</div>
			</div>
			<div id="sidebarInfo" class="sidebar">
				<div class="widget widget-tops">
					<ul class="widget-nav">
						<li class="active">网站公告</li>
						<li>小程序版</li>
						<li>联系我们</li>
					</ul>
					<ul class="widget-navcontent">
						<li class="item item-01 active">
							<ul>
								<li v-for="item in noticeList"><time>{{item.publishTime}}</time>
									<a target="_blank" v-bind:href="item.href">{{item.articleTitle}}</a>
								</li>
							</ul>
						</li>
						<li class="item item-03">
							<ul>
								<li style="float: left;width: 50%;padding: 32px 0;">
									<p>打开微信扫一扫<br>体验小程序版<br>内容同步更新!</p>
								</li>
								<li style="float: left;width: 50%;">
									<img src="/image/wxapp.jpg" style="width: 80%;" alt="小程序码">
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
		head () {
			return {
				title: "梗百科 - 轻松一下soft",
				meta: [
					{ hid: 'keywords', name: 'keywords', content:"文体两开花,养肥了再看,硬核,死亡芭比粉,人类的本质是复读机,是什么梗"},
					{ hid: 'description', name: 'description', content:"小轻松梗百科"}
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
			}
		},
		async asyncData ({ app,params}) {
			let [itemsData,randData,nData] = await Promise.all([
				app.$axios.$get('/word/getWords'),
				app.$axios.$get('/article/getRandArticle'),
				app.$axios.$get('/article/getArticleList?ps=5&pn=1&type=notice'),
			])
			return {
				items: mNetUtils.convertWordList(itemsData.data.list),
				randList: mNetUtils.convertRandList(randData.data.list),
				noticeList: mNetUtils.convertHotList(nData.data.list),
			}
		 },
		 mounted() {
			let that = this;
		 	this.$nextTick(function(){
				// that.items = that.items.concat([]);
				//主要修复锚点定位不准确的问题
				$('#goto a[href^=#][href!=#]').click(function() {
						var target = document.getElementById(this.hash.slice(1));
						if (!target) return;
						var targetOffset = $(target).offset().top - 100;
						$('html,body').animate({
								scrollTop: targetOffset
						},
						300);
						return false;
				}); 
		 	})
		 }, 
	}
</script>

<style>
.word-list li dl {
    padding: 15px;
    padding-left: 75px;
    position: relative;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 1px 1px 2px rgba(0,0,0,0.05);
}
.word-list li dl dt {
    position: absolute;
    left: 15px;
    top: 15px;
    font-size: 26px;
    line-height: 30px;
    font-weight: bold;
    width: 60px;
    text-align: center;
}
.fc-gblue {
    color: #819cb9;
}

.word-list li dl dd {
	float: left;
	width: 32%;
	line-height: 30px;
	margin-left: 1.33%;
	text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

@media (max-width:640px){
	.word-list li dl dd {
		float: left;
		width: 45%;
		line-height: 30px;
		margin-left: 2%;
	}
}
.clearfix {
    zoom: 1;
}
.word-list li {
    padding-top: 15px;
}
.catleader {
	margin-bottom: 0px;
}

.word-oder {
    line-height: 30px;
    overflow: hidden;
    padding: 5px;
    background-color: #45B6F7;
    border-radius: 4px;
    box-shadow: 1px 1px 2px rgba(0,0,0,0.05);
}

.word-oder a {
    display: block;
    float: left;
    width: 30px;
    text-align: center;
    color: #fff;
}

.nav-fixed .word-oder {
    position: fixed;
    top: 62px;
    left: 0;
    right: 0;
    padding: 0;
		opacity: 0.7;
		border-radius: 0;
    z-index: 998;
}
</style>

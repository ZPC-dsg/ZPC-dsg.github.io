import utils from"./utils";import Icons from"./icons";class Controller{constructor(t){this.player=t,this.initPlayButton(),this.initPlayBar(),this.initOrderButton(),this.initLoopButton(),this.initMenuButton(),utils.isMobile||this.initVolumeButton(),this.initMiniSwitcher(),this.initSkipButton(),this.initLrcButton()}initPlayButton(){this.player.template.pic.addEventListener("click",()=>{this.player.toggle()})}initPlayBar(){let e=t=>{t=((t.clientX||t.changedTouches[0].clientX)-this.player.template.barWrap.getBoundingClientRect().left)/this.player.template.barWrap.clientWidth,t=Math.max(t,0);t=Math.min(t,1),this.player.bar.set("played",t,"width"),this.player.lrc&&this.player.lrc.update(t*this.player.duration),this.player.template.ptime.innerHTML=utils.secondToTime(t*this.player.duration)},i=t=>{document.removeEventListener(utils.nameMap.dragEnd,i),document.removeEventListener(utils.nameMap.dragMove,e);t=((t.clientX||t.changedTouches[0].clientX)-this.player.template.barWrap.getBoundingClientRect().left)/this.player.template.barWrap.clientWidth,t=Math.max(t,0);t=Math.min(t,1),this.player.bar.set("played",t,"width"),this.player.seek(t*this.player.duration),this.player.disableTimeupdate=!1};this.player.template.barWrap.addEventListener(utils.nameMap.dragStart,()=>{this.player.disableTimeupdate=!0,document.addEventListener(utils.nameMap.dragMove,e),document.addEventListener(utils.nameMap.dragEnd,i)})}initVolumeButton(){this.player.template.volumeButton.addEventListener("click",()=>{this.player.audio.muted?this.player.volume(this.player.audio.volume,!0):(this.player.audio.muted=!0,this.player.switchVolumeIcon(),this.player.bar.set("volume",0,"height"))});let e=t=>{t=1-((t.clientY||t.changedTouches[0].clientY)-this.player.template.volumeBar.getBoundingClientRect().top)/this.player.template.volumeBar.clientHeight,t=Math.max(t,0);t=Math.min(t,1),this.player.volume(t)},i=t=>{this.player.template.volumeBarWrap.classList.remove("aplayer-volume-bar-wrap-active"),document.removeEventListener(utils.nameMap.dragEnd,i),document.removeEventListener(utils.nameMap.dragMove,e);t=1-((t.clientY||t.changedTouches[0].clientY)-this.player.template.volumeBar.getBoundingClientRect().top)/this.player.template.volumeBar.clientHeight,t=Math.max(t,0);t=Math.min(t,1),this.player.volume(t)};this.player.template.volumeBarWrap.addEventListener(utils.nameMap.dragStart,()=>{this.player.template.volumeBarWrap.classList.add("aplayer-volume-bar-wrap-active"),document.addEventListener(utils.nameMap.dragMove,e),document.addEventListener(utils.nameMap.dragEnd,i)})}initOrderButton(){this.player.template.order.addEventListener("click",()=>{"list"===this.player.options.order?(this.player.options.order="random",this.player.template.order.innerHTML=Icons.orderRandom):"random"===this.player.options.order&&(this.player.options.order="list",this.player.template.order.innerHTML=Icons.orderList)})}initLoopButton(){this.player.template.loop.addEventListener("click",()=>{1<this.player.list.audios.length?"one"===this.player.options.loop?(this.player.options.loop="none",this.player.template.loop.innerHTML=Icons.loopNone):"none"===this.player.options.loop?(this.player.options.loop="all",this.player.template.loop.innerHTML=Icons.loopAll):"all"===this.player.options.loop&&(this.player.options.loop="one",this.player.template.loop.innerHTML=Icons.loopOne):"one"===this.player.options.loop||"all"===this.player.options.loop?(this.player.options.loop="none",this.player.template.loop.innerHTML=Icons.loopNone):"none"===this.player.options.loop&&(this.player.options.loop="all",this.player.template.loop.innerHTML=Icons.loopAll)})}initMenuButton(){this.player.template.menu.addEventListener("click",()=>{this.player.list.toggle()})}initMiniSwitcher(){this.player.template.miniSwitcher.addEventListener("click",()=>{this.player.setMode("mini"===this.player.mode?"normal":"mini")})}initSkipButton(){this.player.template.skipBackButton.addEventListener("click",()=>{this.player.skipBack()}),this.player.template.skipForwardButton.addEventListener("click",()=>{this.player.skipForward()}),this.player.template.skipPlayButton.addEventListener("click",()=>{this.player.toggle()})}initLrcButton(){this.player.template.lrcButton.addEventListener("click",()=>{this.player.template.lrcButton.classList.contains("aplayer-icon-lrc-inactivity")?(this.player.template.lrcButton.classList.remove("aplayer-icon-lrc-inactivity"),this.player.lrc&&this.player.lrc.show()):(this.player.template.lrcButton.classList.add("aplayer-icon-lrc-inactivity"),this.player.lrc&&this.player.lrc.hide())})}}export default Controller;
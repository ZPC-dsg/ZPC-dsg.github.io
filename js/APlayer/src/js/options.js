export default e=>{var t,a={container:e.element||document.getElementsByClassName("aplayer")[0],mini:e.narrow||e.fixed||!1,fixed:!1,autoplay:!1,mutex:!0,lrcType:e.showlrc||e.lrc||0,preload:"metadata",theme:"#b7daff",loop:"all",order:"list",volume:.7,listFolded:e.fixed,listMaxHeight:e.listmaxheight||250,audio:e.music||[],storageName:"aplayer-setting"};for(t in a)a.hasOwnProperty(t)&&!e.hasOwnProperty(t)&&(e[t]=a[t]);return e.listMaxHeight=parseFloat(e.listMaxHeight),"[object Array]"!==Object.prototype.toString.call(e.audio)&&(e.audio=[e.audio]),e.audio.map(e=>(e.name=e.name||e.title||"Audio name",e.artist=e.artist||e.author||"Audio artist",e.cover=e.cover||e.pic,e.type=e.type||"normal",e)),e.audio.length<=1&&"one"===e.loop&&(e.loop="all"),e};
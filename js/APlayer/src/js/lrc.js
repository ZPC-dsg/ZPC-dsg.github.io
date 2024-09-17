import tplLrc from"../template/lrc.art";class Lrc{constructor(t){this.container=t.container,this.async=t.async,this.player=t.player,this.parsed=[],this.index=0,this.current=[]}show(){this.player.events.trigger("lrcshow"),this.player.template.lrcWrap.classList.remove("aplayer-lrc-hide")}hide(){this.player.events.trigger("lrchide"),this.player.template.lrcWrap.classList.add("aplayer-lrc-hide")}toggle(){this.player.template.lrcWrap.classList.contains("aplayer-lrc-hide")?this.show():this.hide()}update(e=this.player.audio.currentTime){if(this.index>this.current.length-1||e<this.current[this.index][0]||!this.current[this.index+1]||e>=this.current[this.index+1][0])for(let t=0;t<this.current.length;t++)e>=this.current[t][0]&&(!this.current[t+1]||e<this.current[t+1][0])&&(this.index=t,this.container.style.transform=`translateY(${16*-this.index}px)`,this.container.style.webkitTransform=`translateY(${16*-this.index}px)`,this.container.getElementsByClassName("aplayer-lrc-current")[0].classList.remove("aplayer-lrc-current"),this.container.getElementsByTagName("p")[t].classList.add("aplayer-lrc-current"))}switch(e){if(!this.parsed[e])if(this.async){this.parsed[e]=[["00:00","Loading"]];let t=new XMLHttpRequest;t.onreadystatechange=()=>{e===this.player.list.index&&4===t.readyState&&(200<=t.status&&t.status<300||304===t.status?this.parsed[e]=this.parse(t.responseText):(this.player.notice("LRC file request fails: status "+t.status),this.parsed[e]=[["00:00","Not available"]]),this.container.innerHTML=tplLrc({lyrics:this.parsed[e]}),this.update(0),this.current=this.parsed[e])};var s=this.player.list.audios[e].lrc;t.open("get",s,!0),t.send(null)}else this.player.list.audios[e].lrc?this.parsed[e]=this.parse(this.player.list.audios[e].lrc):this.parsed[e]=[["00:00","Not available"]];this.container.innerHTML=tplLrc({lyrics:this.parsed[e]}),this.current=this.parsed[e],this.update(0)}parse(t){if(t){var s=(t=t.replace(/([^\]^\n])\[/g,(t,e)=>e+"\n[")).split("\n");let e=[];var r=s.length;for(let t=0;t<r;t++){var i=s[t].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g),a=s[t].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g,"").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g,"").replace(/^\s+|\s+$/g,"");if(i){var l=i.length;for(let t=0;t<l;t++){var n=/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(i[t]),h=60*n[1],c=parseInt(n[2]),n=n[4]?parseInt(n[4])/(2===(n[4]+"").length?100:1e3):0;e.push([h+c+n,a])}}}return(e=e.filter(t=>t[1])).sort((t,e)=>t[0]-e[0]),e}return[]}remove(t){this.parsed.splice(t,1)}clear(){this.parsed=[],this.container.innerHTML=""}}export default Lrc;
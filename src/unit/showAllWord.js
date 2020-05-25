window.onload = function() {
  let showAllWordList = document.getElementsByClassName('showAllWord')
  for (let i = 0; i < showAllWordList.length; i++) {
    showAllWordList[i].onmouseenter = function (event) {
      let x = event.screenX - event.offsetX
      let y = event.screenY - event.offsetY
      if (this.scrollWidth > this.clientWidth) {
        let content = this.innerText;
        let btn=document.createElement("p");
        btn.id = 'showAllWord';
        let t=document.createTextNode(content);
        btn.appendChild(t);
        document.getElementsByTagName('body')[0].appendChild(btn)
        btn.style.position = 'absolute'
        btn.style.top = y-110 + 'px'
        // 设置宽度
        btn.style.left = x-((btn.clientWidth - this.clientWidth)/2) + 'px'
      }
    }
    showAllWordList[i].onmouseleave = function (event) {
      if (document.getElementById('showAllWord')) {
        document.getElementById('showAllWord').remove()
      }
    }
  }
}

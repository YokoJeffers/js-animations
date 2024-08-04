document.addEventListener('DOMContentLoaded', function () {
  // 交際イベントが発生した時に呼び出される関数
  function onIntersect(items) {
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (item.isIntersecting) {
        item.target.classList.add('displayed');
      } else {
        item.target.classList.remove('displayed');
      }
    }
  }

  // IntersectionObserverのオプション
  var observerConfig = {
    threshold: 1
  };

  // IntersectionObserverの作成
  var observerInstance = new IntersectionObserver(onIntersect, observerConfig);

  // boxクラスを持つすべての要素を監視
  var targetElements = document.querySelectorAll(".box");
  for (var i = 0; i < targetElements.length; i++) {
    observerInstance.observe(targetElements[i]);
  }
});
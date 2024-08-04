document.addEventListener("DOMContentLoaded", function () {
  var actions = document.querySelectorAll('.list-item');

  //各list-item要素に行う処理
  for (var i = 0; i < actions.length; i++) {
    // 現在のlist-item要素を取得
    var action = actions[i];

    // クイックイベントリスナー追加
    action.addEventListener('click', function () {
      // クリックされたlist-itemの中のlist-contentを取得
      var content = this.querySelector('.list-content');

      //activeクラスを追加or削除
      if (content.classList.contains('active')) {
        content.classList.remove('active');
        content.style.height = '0px'; // 高さ０
      } else {
        content.classList.add('active');
        content.style.height = content.scrollHeight + 'px'; // 高さをコンテンツの高さに設定
      }
    });
  }
});
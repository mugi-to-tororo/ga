$(function(){$("nav div.panel").hide();$(".menu").click(function(){$(this).toggleClass("menuOpen").next().slideToggle();});})

// ラッキーアイテムをランダムで表示する
// ページを読み込んだあとに実行する
onload = function(){
//ラッキーアイテムを選ぶ
let lucky_item = {
    items: ["雷おこし","温泉まんじゅう","信玄餅","パイの実","プリッツ"],
    getItem: function() {
        let items = this.items;
        return items[Math.floor(Math.random() * items.length)];
    }
}

result = document.getElementById('result');
transactionId = document.getElementById('transactionId');
result.innerHTML = lucky_item.getItem(); 
transactionId.innerHTML = 'No:' + Date.now();

}

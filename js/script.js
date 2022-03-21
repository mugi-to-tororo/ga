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
// ラッキーアイテムと抽選日時（トランザクションIDとして使用する）を挿入する位置を取得
let result = document.getElementById('result');
let transactionId = document.getElementById('transactionId');

// ラッキーアイテムと抽選日時をグローバル変数に格納（GTMに渡す用にも使うので）
Lucky_Item = lucky_item.getItem(); 
TransactionId =  'No:' + Date.now();

result.innerHTML = Lucky_Item; 
transactionId.innerHTML = TransactionId;

}

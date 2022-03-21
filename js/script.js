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

let ResultItem =  lucky_item.getItem();
let TransactionID =  'No:' + Date.now();

result.innerHTML =  ResultItem;
transactionId.innerHTML = TransactionID;

// Google Tag Manager dataLayer
window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'transactionId': TransactionID,
    'transactionTotal': 1,
    'name': ResultItem,
    'sku': ResultItem,
    'price': 1000,
    'quantity': 1
})

}

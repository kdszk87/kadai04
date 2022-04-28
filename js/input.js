//1.Save クリックイベント
//両方のフォームに文字があるときのみ押せるようにする
$(function(){
    $("#save").prop("disabled", true); // 初期状態のボタンは無効
    $("#key").on("input", function() {
        const input = $("#key").val();
        // console.log(input);
        if(input){ //もし文字が入っていれば
            $("#save").prop('disabled', false); 
        }else{
            $("#save").prop('disabled', true); 
        }
    });
});

$("#save").on("click", function (){
    let label = `<p>Saved the followed Record</p>`
    $("#explain").html(label);

    let html = `
    <tr>
        <p>Save Record</p>
        <th>${key}</th>
        <td>${flow}</td>
    </tr>
    `
    // #list内に変数html内の情報を表示
    $("#list").html(html);

    //Saveしたら入力フォームをクリアする
    $('input').val("");
    $('textarea').val("");

});


// 画面遷移
$("#move").on("click",function(){
    window.location.href = "storage.html";
    //上でJSONに変換したものをstorage.htmlのローカルストレージに持っていきたい
});
// alert("move");



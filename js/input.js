// やりたいこと
// 1 ローカルストレージにデータがないときは「no data」的な文を表示する
// 2 すでに保存されている鍵と同じ名前で保存しようとしたらエラーが表示される
// 3 消したいものを選んで消せるようにする
// 4 消す前に「本当に削除しますか？」のダイアログ？ポップアップ？が出るようにする→OK
// 5 入力フォームに文字がないときはセーブを押せないようにする/両方に何かしらの入力があるときセーブが押せるようにする→半分OK
// 6 入力ページのローカルストレージデータをオブジェクトにして、JSONに変換して、セーブデータ一覧ページでgetJSONで持ってこれないか(GLS JS-03-03 getJSON関数より)


//1.Save クリックイベント
//両方のフォームに文字があるときのみ押せるようにする
$(function(){
    $("#save").prop("disabled", true); // 初期状態のボタンは無効
    $("#key").on("input", function() {
        const input = $("#key").val(); //input に入力された文字を取得
        // console.log(input);
        if(input){ //もし文字が入っていれば
            $("#save").prop('disabled', false); 
            //disabled を無効にする＝ボタンが押せる
        }else{
            $("#save").prop('disabled', true); 
            //disabled を有効にする＝ボタンが押せない
        }
    });
});

$("#save").on("click", function (){

    let label = `<p>Saved the followed Record</p>`
    $("#explain").html(label);
    //appendだと見出しもどんどん増えるので、ここはhtmlで。


    let key = $("#key").val();
    // valでkeyに入力された中身を持ってきている
    console.log(key);
    let flow = $("#flow").val();
    // valでflowに入力された中身を持ってきている
    console.log(flow);
    // ↓local storageという保存場所にデータを保存する
    localStorage.setItem(key, flow);

    let html = `
    <tr>
        <p>Save Record</p>
        <th>${key}</th>
        <td>${flow}</td>
    </tr>
    `
    // #list内に変数html内の情報を表示
    $("#list").append(html);

    //Saveしたら入力フォームをクリアする
    $('input').val("");
    $('textarea').val("");

})
    

    for(let i=0; i < localStorage.length; i++) {
    // ローカルストレージ内のデータをオブジェクトにしたい
    let data = localStorage.key(i);
    //オブジェクトにしたものをJSONに変換したい
    // let data_JSON = JSON.parse(data);
    // console.log(data_JSON);

    // let data = localStorage.getItem(key);
    // let data_JSON = JSON.parse(data);
    // console.log(data_JSON);
}
// alert("Change");


// 画面遷移
$("#move").on("click",function(){
    window.location.href = "storage.html";
    //上でJSONに変換したものをstorage.htmlのローカルストレージに持っていきたい
});
// alert("move");

// 画面遷移時にオブジェクトにしたローカルストレージ内のデータを一覧ページに渡す関数
//→同じ階層？だからかローカルストレージのデータが共有されている


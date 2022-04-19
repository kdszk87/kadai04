// やりたいこと
// ローカルストレージにデータがないときは「no data」的な文を表示する
// すでに保存されている鍵と同じ名前で保存しようとしたらエラーが表示される
// 消したいものを選んで消せるようにする
// 消す前に「本当に削除しますか？」のダイアログ？ポップアップ？が出るようにする
// 入力フォームに文字がないときはセーブを押せないようにする/両方に何かしらの入力があるときセーブが押せるようにする

// 入力ページのローカルストレージデータをオブジェクトにして、JSONに変換して、セーブデータ一覧ページでgetJSONで持ってこれないか(GLS JS-03-03 getJSON関数より)


//1.Save クリックイベント
$("#save").on("click", function (){
    let key = $("#key").val();
    // valでkeyに入力された中身を持ってきている
    console.log(key);
    let flow = $("#flow").val();
    // valでflowに入力された中身を持ってきている
    console.log(flow);

    // ↓local storageという保存場所にデータを保存する
    localStorage.setItem(key, flow);

    // 下はテンプレートリテラル
    // 教材の書き方を楽にしたもの
    // 斜めの「`」はShift + ＠
    let html = `
    <tr>
        <td><input type="checkbox" /></td>
        <th>${key}</th>
        <td>${flow}</td>
        </tr>
    `
    // 画面に表示
    $("#list").append(html);
    // メモパッドの下に変数html内の情報を表示
})


//2.clear クリックイベント
$("#clear").on("click",function(){
    // alert("clear");
    localStorage.clear();
    // ローカルストレージを空にする
    $("#list").empty();
    // listに表示されているhtml(メモパッドの下)を削除する
    // →ローカルストレージに保存されているものを消すこととhtmlに表示されているものを消すことは別物
});


//3.ページ読み込み：保存データ取得表示
// ページのリロードをしたときにローカルストレージにデータがあったら表示する
// 繰り返し処理と配列を組み合わせて、登録されているデータがあったら表示する
for(let i=0; i < localStorage.length; i++) { //←なんかエラー出てる「Assignment to constant variable」←constをletにしたら直った。constは再代入、再宣言ができないのにkeyを上でもここでも宣言していたからエラーが出ていた模様。
    let key = localStorage.key(i); 
    let value = localStorage.getItem(key);
    // 下はテンプレートリテラル
    // 斜めの「`」はShift + ＠
        let html = `
        <tr> 
            <td><input type="checkbox" /></td>
            <th>${key}</th>
            <td>${value}</td>
        </tr>
        `
        // 画面に表示
        $("#list").append(html);
        // #listの先頭に変数htmlを追加
    }
    // alert("for");

    for(let i=0; i < localStorage.length; i++) {
    // ローカルストレージ内のデータをオブジェクトにしたい
    let data = localStorage.key(i);
    //オブジェクトにしたものをJSONに変換したい
    let data_JSON = JSON.parse(data);
    console.log(data_JSON);
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
alert("move");

// 画面遷移時にオブジェクトにしたローカルストレージ内のデータを一覧ページに渡す関数


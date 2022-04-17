// やりたいこと
// ローカルストレージにデータがないときは「no data」的な文を表示する
// すでに保存されている鍵と同じ名前で保存しようとしたらエラーが表示される
// 消したいものを選んで消せるようにする
// 消す前に「本当に削除しますか？」のダイアログ？ポップアップ？が出るようにする
// 入力フォームに文字がないときはセーブを押せないようにする/両方に何かしらの入力があるときセーブが押せるようにする



//1.Save クリックイベント
$("#save").on("click", function (){
    // alert(1);
    const title = $("#title").val();
    // valでtitleに入力された中身を持ってきている
    console.log(title);
    const flow = $("#flow").val();
    // valでflowに入力された中身を持ってきている
    console.log(flow);

    // ↓local storageという保存場所にデータを保存する
    localStorage.setItem(title, flow);

    // 下はテンプレートリテラル
    // 教材の書き方を楽にしたもの
    // 斜めの「`」はShift + ＠
    const html = `
    <tr>
        <td><input type="checkbox" /></td>
        <th>${title}</th>
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
for(let i=0; i < localStorage.length; i++) {
    const title = localStorage.title(i);
    const value = localStorage.getItem(title);
    // 下はテンプレートリテラル
    // 斜めの「`」はShift + ＠
        const html = `
        <tr> 
            <th>${title}</th>
            <td>${value}</td>
        </tr>
        `
        // 画面に表示
        $("#list").append(html);
        // #listの先頭に変数htmlを追加

}

// 画面遷移
$("#move").on("click",function(){
    window.location.href = "storage.html";
    // listに表示されているhtml(メモパッドの下)を削除する
    // →ローカルストレージに保存されているものを消すこととhtmlに表示されているものを消すことは別物
});


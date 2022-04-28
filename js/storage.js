// 入力ページのローカルストレージデータをオブジェクトにして、JSONに変換して、セーブデータ一覧ページでgetJSONで持ってこれないか(GLS JS-03-03 getJSON関数より)→そんなことしなくてもローカルストレージが共有されていた

//ページ読み込み：保存データ取得表示
// 繰り返し処理と配列を組み合わせて、ページのリロードをしたときに登録されているデータがあったら表示する

for(let i=0; i < localStorage.length; i++) { //←エラー「Assignment to constant variable」が出ていた  ←constをletにしたら直った。constは再代入、再宣言ができないのにforで何度も代入、宣言していたからエラーが出ていた？？
    let key = localStorage.key(i); 
    let value = localStorage.getItem(key);
    // テンプレートリテラル
    // 斜めの「`」はShift + ＠
        let html = `
        <tr> 
        <td><input type="checkbox" id="#check"/></td>
        <th>${key}</th>
        <td>${value}</td>
        </tr>
        `
        // 画面に表示
        $("#list").append(html);
        // #listの先頭に変数htmlを追加
    }


//clear クリックイベント
$("#clear").on("click",function(){
    // 削除前に確認分を入れる
    if(!confirm('全てのデータを削除します。よろしいですか？')){
        return false;
    }else{
        localStorage.clear();
        // ローカルストレージを空にする
        $("#list").empty();
        // listに表示されているhtml(メモパッドの下)を削除する
    }
    // alert("clear");
});


//クリックイベント 選択したもののみ削除→未完成
$(function(){
    $("#delete").prop("disabled", true); // 初期状態のボタンは無効
    $("input[type='checkbox']").on('change', function () {
        // チェックされているチェックボックスの数
        if ($(".chk:checked").length > 0) {
        } else {
        }
        // alert("delete");
    });
});

$("#delete").prop("disabled", true); // 初期状態のボタンは無効
$("input[type='checkbox']").on('change', function () {
    $('input[name="#check"]').prop("checked",true);
    const count = $("#check input:checkbox:checked").length;
    console.log(count);
    
    if($("#check").prop('checked')){
        // ボタン有効
        $("#delete").prop("disabled", false);
    }else{
        // ボタン無効
        $("#delete").prop("disabled", true);        
    }
    });
     

//入力画面に戻る
$("#back").on("click",function(){
    window.location.href = "input.html";
});


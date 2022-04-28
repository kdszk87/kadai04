//clear クリックイベント
$("#clear").on("click",function(){
    // 削除前に確認分を入れる
    if(!confirm('全てのデータを削除します。よろしいですか？')){
        return false;
    }else{
        localStorage.clear();
        $("#list").empty();
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

$("#delete").prop("disabled", true);
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
    window.location.href = "index.html";
});


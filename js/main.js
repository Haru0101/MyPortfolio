opa=0; //透明度　0は透明
opacnt=3; //透明度の増減の間隔
timer=50; //setTimeout関数の実行間隔　ミリ秒

// フェードイン
function FadeInstr()
{
    gazouId = "gazou1";
    MyIMG = document.getElementById(gazouId);
    MyIMG.style.visibility = "visible";
    FadeIn1(gazouId,opa);
}
//透明度を増加していきます。
function FadeIn1(gazouId,opa)
{
    if (opa <= 100)
    {
        MyIMG.style.filter = "alpha(opacity:"+opa+")"; // IE のソース
        MyIMG.style.opacity = opa/100; //Mozilla Firefoxのソース
        opa += opacnt;
        setTimeout("FadeIn1('"+gazouId+"',"+opa+")", timer);
    }
}

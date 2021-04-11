var menulist=["chicken tandoori pizza",
"veg supreme pizza",
"panneer tikka pizza",
"deluxe veggie pizza",
"veg extravaganza pizza"];
function getmenu()
{
    var htmldata;
    htmldata="<ol class='menulist'>";
    menulist.sort();
    for(var i =0;i<menulist.length;i++)
    {
        htmldata=htmldata+'<li>'+menulist[i]+'</li>'
    }
    htmldata=htmldata+'</ol>';
    document.getElementById("displaymenu").innerHTML=htmldata;
}
function add_item()
{
    var htmldata;
    var item=document.getElementById("add_item").value ;
    menulist.push(item);
    menulist.sort();
    htmldata="<section class='cards'>"
    for(var i =0;i<menulist.length;i++)
    {
        htmldata=htmldata+'<div class="card">'+'<img src="pizzaImg.png"/>'+'<br>'+menulist[i]+'</div>'
    }
    htmldata=htmldata+'</section>';
    document.getElementById("display_addedmenu").innerHTML=htmldata;
    console.log(htmldata);
    console.log(menulist);
}
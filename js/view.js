const fs = require('fs');
var $_GET = {},
    args = location.search.substr(1).split(/&/);
for (var i=0; i<args.length; ++i) {
    var tmp = args[i].split(/=/);
    if (tmp[0] != "") {
        $_GET[decodeURIComponent(tmp[0])] = decodeURIComponent(tmp.slice(1).join("").replace("+", " "));
    }
}
let id = $_GET["id"];
let epi = $_GET["epi"];
let dir = $_GET["dir"];


if(fs.existsSync(`${dir}/${id}/${parseInt(epi) - 1}/${parseInt(epi) - 1}.html`)){
    document.getElementById("leftBtnLink").href = `./view.html?id=${encodeURIComponent(id)}&epi=${encodeURIComponent(parseInt(epi) - 1)}&dir=${encodeURIComponent(dir)}`;
}else{
    document.getElementById("leftBtnLink").style.color = "gray"
}
document.getElementById("iframes").src = `${(dir)}/${(id)}/${(epi)}/${(epi)}.html`;
document.getElementById("middleBtnLink").href = `./list.html?id=${encodeURIComponent(id)}&dir=${encodeURIComponent(dir)}`;
if(fs.existsSync(`${dir}/${id}/${parseInt(epi) + 1}/${parseInt(epi) + 1}.html`)){
    document.getElementById("rightBtnLink").href = `./view.html?id=${encodeURIComponent(id)}&epi=${encodeURIComponent(parseInt(epi) + 1)}&dir=${encodeURIComponent(dir)}`;
}else{
    document.getElementById("rightBtnLink").style.color = "gray"
}
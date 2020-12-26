const $_GET = {},
    args = location.search.substr(1).split(/&/);
for (var i=0; i<args.length; ++i) {
    var tmp = args[i].split(/=/);
    if (tmp[0] != "") {
        $_GET[decodeURIComponent(tmp[0])] = decodeURIComponent(tmp.slice(1).join("").replace("+", " "));
    }
}
const fs = require('fs');

let dir = $_GET.dir;
console.log(dir)
fs.readdir(dir+"/"+$_GET.id, (err, files) => {
    if (err) {
        document.write(err);
    }
    files.map(a=>{return parseInt(a)});
    files.sort(function(a, b){return a - b}); 
    files.forEach(file => {
        let wtLink = document.createElement("a");
        wtLink.innerHTML = file;
        wtLink.href = `view.html?id=${$_GET.id}&epi=${encodeURIComponent(file)}&dir=${$_GET.dir}`;
        let wtList = document.createElement("li")
        wtList.appendChild(wtLink)
        document.getElementById("wt-list").appendChild(wtList);
    });
});
const fs = require('fs');

let dataJsonDir = "C:\\Program Files (x86)\\Jcop Webtoon Downloader"

fs.readFile(dataJsonDir + '\\data.json', 'utf8', function (err,data) {
   let dir = JSON.parse(data).defaultDirectory;
   console.log(dir)
   fs.readdir(dir, (err, files) => {
       if (err) {
           document.write(err);
       }
       files.map(a=>{return parseInt(a)});
       files.sort(function(a, b){return a - b}); 
       files.forEach(file => {
          let wtLink = document.createElement("a");
          wtLink.innerHTML = file;
          wtLink.href = `list.html?id=${encodeURIComponent(file)}&dir=${encodeURIComponent(dir)}`;
          let wtList = document.createElement("li")
          wtList.appendChild(wtLink)
          document.getElementById("wt-list").appendChild(wtList);
       });
   });
  if (err) {
   document.write(err);
  }
});
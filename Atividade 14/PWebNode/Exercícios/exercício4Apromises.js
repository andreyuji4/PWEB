const fs = require('fs').promises;
fs.readFile('file.txt','utf8')
.then(data=>{
    const registros = data.split('\n');
    registros.forEach((registro, index)=>{
        console.log("segunda parte:" + registro + " " + index);
    });
})
.catch(err=>{
    console.error("Erro ao ler o arquivo:", err);
});
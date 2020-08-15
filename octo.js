// O SCRIPT POR ENQUANTO ESTA APENAS COM A PARTE DE VISUALIZAÇÃO FUNCIONAL!
const low = require("lowdb");
var fs = require('fs');
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("list.json");
var request = require("request");
const db = low(adapter);
var myArgs = process.argv.slice(2);

switch (myArgs[0]) {
case '-s':
    const ada = new FileSync(myArgs[1]);
    const bd = low(ada);
    let repo = bd.get('server').find({nochange: "octorrent"}).value()
      if(repo.isweb = 0){
request({
  uri: "http://www.sitepoint.com",
}, function(error, response, body) {
  console.log(body);
});
	  }else{
	console.log("")
	console.log(`➤ Repository-Title: ${repo.title}`)
	console.log("")
	console.log(repo.txt)
}
    break;
case '-up':
//EM DESENVOLVIMENTO!
    console.log(myArgs[1], 'Update Mode');
    break;
case '-i':
    console.log(myArgs[1], 'Info Mode');
// EM DESENVOLVIMENTO!
    break;

default:
console.log("╔═════════════════════════════════════════════════════════════════╗")
console.log("║                        Octorrent Manager                        ║")
console.log("╠═══════════════════════╦═════════════════════════════════════════╣")
console.log("║                       ║                                         ║")
console.log("║   ╱▔▔▔▔╲ ╭━━━━━━━━━╮  ║    -s [file.json] | Show                ║")
console.log("║  ▕▂▂▂▂▂▂▏┃PIRACY IS┃  ║    -i  | Info                           ║")
console.log("║  ▕▔▇▔▔┳▔▏╰┳╮COOL   ┃  ║    -u  | Upload                         ║")
console.log("║  ▕╭━╰╯━╮▏━╯╰━━━━━━━╯  ║    -h  | Help                           ║")
console.log("║╱▔▔▏▅▅▅▅▕▔▔╲           ║                                         ║")
console.log("║▏┈┈╲▂▂▂▂╱┈┈┈           ║                                 V 0.1   ║")
console.log("╚═══════════════════════╩═════════════════════════════════════════╝")
}

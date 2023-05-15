const url = require('url');

const address  = 'http://www.emreweb.rf.gd/blogpage.php?item=9';

let result = url.parse(address, true);

console.log(result); // ->
// Url {
//     protocol: 'http:',
//     slashes: true,    
//     auth: null,       
//     host: 'www.emreweb.rf.gd',
//     port: null,
//     hostname: 'www.emreweb.rf.gd',
//     hash: null,
//     search: '?item=9',
//     query: [Object: null prototype] { item: '9' },
//     pathname: '/blogpage.php',
//     path: '/blogpage.php?item=9',
//     href: 'http://www.emreweb.rf.gd/blogpage.php?item=9'
//   }

console.log(result.query.item); // 9
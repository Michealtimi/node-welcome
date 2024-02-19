const fs = require ('fs');
const path = require ('path');


// // Create Folder
// fs.mkdir(path.join(__dirname, '/text'), {}, err => { 
//      if(err) throw err;
//      console.log('Folder created...');
// });


// Create File
// fs.writeFile(path.join(__dirname, '/text', 'hello.txt'), 'Hello World', err => { 
//     if(err) throw err;
//     console.log('File written to...');

//     // File Append
//     fs.appendFile(path.join(__dirname, '/text', 'hello.txt'), 'I love Node.js', err => { 
//         if(err) throw err;
//         console.log('File written to...');
//     });
// });


// Create File
// fs.writeFile(
//     path.join(__dirname, '/test', 'hello.txt'), 
//     'Hello World!', 
//     err =>{
//         if (err) throw err;
//         console.log('File written to....');
//     }
// )

// Read file
//     fs.readFile(path.join(__dirname, '/text', 'hello.txt'), 'utf8', (err, data) => { 
//          if(err) throw err;
//          console.log(data);
//     }); 

// rename file
    fs.rename(
     path.join(__dirname, '/text', 'hello.txt'), 
     path.join(__dirname, '/text', 'helloWorld.txt'), 
    err => {
     if(err) throw err; 
     console.log('File Renamed.....');
});  
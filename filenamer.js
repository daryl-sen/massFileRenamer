// feel free to alter
const targetFolderName = 'testfolder';
const toReplace = 'a';

// do not alter
const path = require('path')
const fs = require('fs');
const rootFolder = process.cwd();
const targetFolder = path.join(rootFolder, targetFolderName);

fs.readdirSync(targetFolder).forEach(file => {
  let fileString = file.split('.')
  let fileName = fileString[0]
  let fileExt = fileString[1]
  if (fileName.includes(toReplace)) {
    // console.log
  }
  console.log(path.join(targetFolder, `${fileName}.${fileExt}`))
  // if fileName.includes(toReplace) {
  //   fs.rename('/path/to/Afghanistan.png', '/path/to/AF.png', function(err) {
  //     if ( err ) console.log('ERROR: ' + err);
  //   });
  // }
});
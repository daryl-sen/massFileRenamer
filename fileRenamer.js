// alter to your needs
const targetFolderName = 'testfolder';
const toReplace = 'a';
const replaceWith = ''; // leave as empty string to remove a specific string
const prefix = 'pre';
const suffix = 'suff';

// do not alter
const path = require('path')
const fs = require('fs');
const rootFolder = process.cwd();
const targetFolderPath = path.join(rootFolder, targetFolderName);

fs.readdirSync(targetFolderPath).forEach(file => {
  const fileString = file.split('.')
  const fileName = fileString[0]
  const fileExt = fileString[1]

  const newFileName = prefix + fileName.replace(toReplace, replaceWith) + suffix;
  const newFilePath = path.join(targetFolderPath, `${newFileName}.${fileExt}`);

  // console.log(file);

  fs.rename(path.join(targetFolderPath, file), newFilePath, function(err) {
    if ( err ) console.log('ERROR: ' + err);
  });
});
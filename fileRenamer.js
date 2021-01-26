// alter to your needs
const targetFolderName = 'testfolder'; // the name of the folder RELATIVE to this directory
const toReplace = ''; // the undesired part of the name
const replaceWith = ''; // what to replace the undesired part with; leave as empty string to just remove it
const prefix = ''; // add in front of the file name
const suffix = ''; // add behind the file name

// do not alter
const path = require('path')
const fs = require('fs');
const rootFolder = process.cwd();
const targetFolderPath = path.join(rootFolder, targetFolderName);

// find all the files in the target directory
fs.readdirSync(targetFolderPath).forEach(file => {
  const fileString = file.split('.');
  const fileName = fileString[0];
  const fileExt = fileString[1];
  const newFileName = prefix + fileName.replace(toReplace, replaceWith) + suffix;
  const newFilePath = path.join(targetFolderPath, `${newFileName}.${fileExt}`);

  // rename the file
  fs.rename(path.join(targetFolderPath, file), newFilePath, function(err) {
    if ( err ) console.log('ERROR: ' + err);
  });
});
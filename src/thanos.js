const fs = require('fs');
const path = require('path');
const walkSync = require('walk-sync');
const Confirm = require('prompt-confirm');

const thanos = async (thePath, confirmation) => {
  if (!confirmation) {
    const prompt = new Confirm({
      message: `Do you really wish to randomly delete 50% of the files on '${thePath}' and its subdirectories?`,
      default: false,
    });
    const answer = await prompt.run();

    if (!answer) {
      return;
    }
  }

  console.log(`Randomly deleting 50% of the files on ${thePath}...`);

  const files = walkSync(thePath, {
    directories: false,
    ignore: ['node_modules', 'vendor'],
  });

  const randomFiles = files.sort(() => 0.5 - Math.random());
  const randomArray = randomFiles.slice(0, files.length / 2);

  randomArray.forEach((file) => {
    console.log(`Deleting ${file}...`);

    fs.unlinkSync(path.join(thePath, file));
  });
};

module.exports = thanos;

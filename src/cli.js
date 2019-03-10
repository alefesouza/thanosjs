#!/usr/bin/env node

'use strict';

const fs = require('fs');
const meow = require('meow');
const globalDirs = require('global-dirs');
const thanos = require('./thanos');

const cli = meow(`
    Usage
      After install globally the reality, mind, space, time and soul packages from npm, just run:

      $ thanos snap-fingers
 
    Options
      --with-glove  You need the glove to delete the files.
      --path, -p  The path to randomly delete including its subdirectories, otherwise will run on current directory.
      --force, -f  Skip the process and remove the files without installing the Infinity Gems packages.
      --no-ask, -y  Run it without confirmation (use it with caution, I'm not responsible for anything).
 
    Examples
      $ thanos snap-fingers --with-glove
      $ thanos snap-fingers --with-glove --path "/path/to/delete"
`, {
  flags: {
    withGlove: {
      type: 'boolean',
    },
    force: {
      type: 'boolean',
      alias: 'f',
    },
    path: {
      type: 'string',
      alias: 'p',
      default: process.cwd(),
    },
    noAsk: {
      type: 'boolean',
      alias: 'y',
    },
  },
});

const {
  withGlove,
  force,
  path,
  noAsk,
} = cli.flags;

if (!cli.input.includes('snap-fingers')) {
  console.log('You need to snap your fingers.');
  process.exit();
}

if (force) {
  thanos(path, noAsk);
  return;
}

const gems = ['reality', 'mind', 'space', 'time', 'soul'];
const globalPackages = fs.readdirSync(globalDirs.npm.packages);

const notInstalledGems = gems.filter(gem => {
  return !globalPackages.includes(gem);
});

if (notInstalledGems.length > 0) {
  console.log('You have not installed all Thanos packages, to install it just run: \n');

  notInstalledGems.forEach(gem => {
    console.log(`$ npm install -g ${gem}`);
  });

  process.exit();
}

if (!withGlove) {
  console.log('You need the Infinity Gauntlet, to add it just rerun the command with `--with-glove` argument.');

  process.exit();
}

thanos(path, noAsk);

#!/usr/bin/env node

'use strict';

const zip = require('cross-zip');
const path = require('path');
const fs = require('fs');

const pack = require('./package.json');
const { program  } = require('commander');

const args = program.version(pack.version)
    .requiredOption('-p, --path <path to input file or directory>', "Input file or directory path")
    .requiredOption('-o, --output <path to zip that will be created>', "Path to the output directory")
    .parse(process.argv);

const source = path.resolve(args.path);
if (!fs.existsSync(source)) {
    console.error(`Nothing found at ${path.resolve(source)}`)
    process.exit(1);
}

const targetFile = path.resolve(args.output);
const targetDir = path.dirname(targetFile);

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

zip.zipSync(source, targetFile);
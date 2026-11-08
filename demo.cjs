#!/usr/bin/env node
'use strict';
// Loupe & Lettres — créé avec l'aide de l'IA
const { readFileSync, statSync } = require('node:fs');
const { normalizeStatement } = require('./src/normalize.cjs');

if (process.argv.length !== 4) {
  console.error('Usage: node demo.cjs PROFILE FILE.csv');
  process.exitCode = 2;
} else {
  const [, , profile, file] = process.argv;
  try {
    const info = statSync(file);
    if (!info.isFile() || info.size > 4000000) throw new Error('Invalid input file');
    const csv = readFileSync(file, 'utf8');
    const result = normalizeStatement({ profile, csv });
    process.stdout.write(JSON.stringify(result, null, 2) + '\n');
  } catch {
    console.error('Input rejected. Check the profile, readable file, size and CSV format against README.md.');
    process.exitCode = 1;
  }
}

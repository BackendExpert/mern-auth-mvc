#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const argv = require('yargs').argv;
const inquirer = require('inquirer');


const Loginsource = argv.source || path.join(__dirname, '../temps/Auth/Default/Login.jsx');
const Logindestination = argv.destination || path.join(process.cwd(), 'src/pages/Auth');

const SignUpsource = argv.source || path.join(__dirname, '../temps/Auth/Default/SignUp.jsx');
const SignUpdestination = argv.destination || path.join(process.cwd(), 'src/pages/Auth');
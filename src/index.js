#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const argv = require('yargs').argv;
const inquirer = require('inquirer');


const Loginsource = argv.source || path.join(__dirname, '../temps/Auth/Default/Login.jsx');
const Logindestination = argv.destination || path.join(process.cwd(), 'src/pages/Auth');

const SignUpsource = argv.source || path.join(__dirname, '../temps/Auth/Default/SignUp.jsx');
const SignUpdestination = argv.destination || path.join(process.cwd(), 'src/pages/Auth');

const Componentsource = argv.source || path.join(__dirname, '../temps/components');
const Componentdestination = argv.destination || path.join(process.cwd(), 'src/components');

const Assestssource = argv.source || path.join(__dirname, '../temps/assets');
const Assestsdestination = argv.destination || path.join(process.cwd(), 'src/assets');


async function CreateDefaultFrontEndLoginSignUp (){
    try {
        await fs.copy(Loginsource, Logindestination);
        await fs.copy(SignUpsource, SignUpdestination);
        await fs.copy(Componentsource, Componentdestination);
        await fs.copy(Assestssource, Assestsdestination);
        console.log('Default Login and SignUp Templates Created Successful..');
    }
    catch (error) {
        console.log(error)
    }
}


async function main(){
    try {
        const answers = await inquirer.prompt([
            {
                type: 'list',
                name: 'selection1',
                message: 'Select Frontend Templates for Login and SignUp :',
                choices: ['Default Template', 'will in Future Update'],
            },
        ]);
      
        const { selection1 } = answers;

        switch (selection1) {
            case 'Default Template':
                await CreateDefaultFrontEndLoginSignUp();
                break;
    
            case 'will in Future Update':
                await CreateDefaultFrontEndLoginSignUp();       
                break;
    
            default:
              console.log('Invalid selection.');
        }
    }
    catch (error) {
        console.log(error)
    }
}

main()
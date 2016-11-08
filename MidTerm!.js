/**
 * Created by Katlyn on 11/7/2016.
 */
/**
 *   @author Bates, Howard (hbates@northmen.org)
 *   @version 0.0.3
 *   @summary Project 2 demo code || created: 03.16.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let cardFirstName, cardLastName;
let cardNumber, cardPin;
let checking = 1000;
let savings = 1000;
let transferFunds;


function main() {
    setcardFirstName();
    setcardLastName();
    setcardNumber();
    setcardPin();
    setChecking();
    setSavings();
    setTransferFunds();

}

main();

function setcardFirstName() {
    while (typeof cardFirstName === 'undefined' || !/(^[a-z]+$){1,30}/i.test(cardFirstName))
        cardFirstName = PROMPT.question(`\nPlease enter first name: `);
}

function setcardLastName() {
    while (typeof cardLastName === 'undefined' || !/(^[a-z]+$){1,30}/i.test(cardLastName))
        cardLastName = PROMPT.question(`\nPlease enter last name: `);
}

function setcardNumber() {
    let i = 0;
    let answered = 0;
    let counter = 0;
    const MAX_TRIES = 3;{
        cardNumber = PROMPT.question(`\nPlease enter card number: `);
        if (cardNumber == 1234567890000001) {
        } else {
            console.log(`\nPlease try again: `);

            answered = 1;

        }
    }
}

function setcardPin() {
    let j = 0;
    let answered = 0;
    let counter = 0;
    const MAX_TRIES = 3;
    cardPin = PROMPT.question(`\nPlease enter four digit pin number: `);
    if (cardPin != 1965){
        console.log(`\nPlease try again: `);

    }

}

function setChecking() {
    let action;
    let withdrawChecking;
    let depositChecking;
    action = PROMPT.question(`\nDo you want to withdraw or deposit money from your checking? (to withdraw = 0, to deposit = 1) `); {

        if (action === 'withdraw') {
            do_transaction(`\nHow much money would you like to withdraw?`);
        } else if (action === 'deposit') {
            do_transaction(action);
        }

    }
}

function setSavings() {
    let action;
    let withdrawSavings;
    let depositSavings;
    action = PROMPT.question(`\nDo you want to withdraw or deposit money from your savings? (to withdraw = 0, to deposit = 1) `); {

        if (action === 'withdraw') {
            withdrawSavings(action);
        } else if (action === 'deposit') {
            depositSavings(action);
        }
    }
}

function setTransferFunds() {
    let action;
    let transferFunds;
    action = PROMPT.question(`\nDo you want to transfer money from your checking or savings? (to transfer to different account = 0, to transfer to one account to another = 1) `); {

        if (transferFunds === '0') {
            transferFunds(`\nTransfer $ from my account to another member`);
        } else if (transferFunds === '1') {
            transferFunds(`\nTransfer $ from one of my accounts to another: `);
        }
    }
}

function printGoodbye() {

}

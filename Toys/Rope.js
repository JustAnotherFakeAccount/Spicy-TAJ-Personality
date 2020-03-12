function hasBallsTied() {
    return isVar(VARIABLE.IS_BALLS_TIED) && getVar(VARIABLE.IS_BALLS_TIED);
}

function wantsToTieBalls() {
    //Prevent tieing balls over and over again
    if(isVar(VARIABLE.LAST_BALLS_UNTIE) && !getDate(VARIABLE.LAST_BALLS_UNTIE).addMinute(5).hasPassed()) {
        return false;
    }

    return true;
}

function wantsToUntieBalls() {
    //Prevent untieing balls over and over again
    if(isVar(VARIABLE.LAST_BALLS_TIE) && !getDate(VARIABLE.LAST_BALLS_TIE).addMinute(5).hasPassed()) {
        return false;
    }

    return true;
}

function tieBalls(force = false) {
    if(!force && !wantsToTieBalls()) {
        return false;
    }

    if(!hasBallsTied() && !isInChastity() && fetchToy("shoelace")) {
        setTempVar(VARIABLE.IS_BALLS_TIED, true);
        setTempVar(VARIABLE.LAST_BALLS_TIE, setDate());


        let removedClampsFromBalls = false;
        if(BODY_PART_BALLS.currentClamps > 0) {
            putClampsOff(BODY_PART_BALLS.currentClamps, BODY_PART_BALLS, false, true);
            removedClampsFromBalls = true;
        }

        //TODO: Show tutorials etc. and tell the sub what exactly to do
        sendMessage("Now take that rope and tie up your balls");
        sendMessage("Do it real nice and tight");
        sendMessage('But don\'t cut the blood flow');
        sendMessage("Tell me when you are ready to continue");
        waitForDone();

        //TODO: Check if clamps were just applied to balls so then definitely put them back on after otherwise chance to not
        if(removedClampsFromBalls) {
            sendAlreadyKnowWhatsNext('clamps', 'clothespins', 'clothespin');
            sendMessage('Now put the clamps back on your %balls% %Grin%');

            let answer = sendYesOrNoQuestionTimeout('You didn\'t really think that you would be allowed to remove them permanently did you? %Lol%', 5);

            if(answer === ANSWER_YES) {
                sendMessage('Poor %SlaveName%');
                sendMessage('Seems like you don\'t know me well enough yet %Grin%');
            } else if(answer === ANSWER_NO) {
                sendMessage('%EmoteHappy%');
            }
        }
    } else {
        return false;
    }

    return true;
}

function untieBalls(force = false) {
    //Prevent tieing balls over and over again
    if(!force && !wantsToUntieBalls()) {
        return false;
    }

    sendMessage('Untie your balls %SlaveName%');
    sendMessage('Tell me when you are done...');

    const answer = createInput();

    while(true) {
        if (answer.isLike('done', 'yes', 'ready')) {
            sendMessage('%Good%');
            setTempVar(VARIABLE.LAST_BALLS_UNTIE, setDate());
            break;
        } else {
            sendMessage('Have you untied your balls yet %SlaveName%?');
            answer.loop();
        }
    }

    setTempVar(VARIABLE.IS_BALLS_TIED, false);
}
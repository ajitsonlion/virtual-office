let isFirstTimeTuto = !window.localStorage.getItem('isFirstTimeTuto');
let textFirstPopup = 'Hey ! This is how to start a discussion with someone ! You can be 4 max in a bubble.';
let textSecondPopup = 'You can also use the chat to communicate ! Also notice the Teams and Jitsi Logo throughout the map ;)';
let targetObjectTutoBubble ='Tutobubble';
let targetObjectTutoChat ='tutoChat';
let targetObjectTutoExplanation ='tutoExplanation';
let popUpExplanation = undefined;
function launchTuto (){
    WA.openPopup(targetObjectTutoBubble, textFirstPopup, [
        {
            label: "Next",
            className: "popUpElement",
            callback: (popup) => {
                popup.close();

                WA.openPopup(targetObjectTutoChat, textSecondPopup, [
                    {
                        label: "Open Chat",
                        className: "popUpElement",
                        callback: (popup1) => {
                            WA.sendChatMessage("Hey you can talk here too!", 'WA Guide');
                            popup1.close();
                            WA.openPopup("TutoFinal","You are good to go! Go through the gate to meet the dev team and discover the features !",[
                                {
                                    label: "Got it!",
                                    className : "success",callback:(popup2 => {
                                        popup2.close();
                                        WA.restorePlayerControl();
                                    })
                                }
                            ])
                        }
                    }

                ])
            }
        }
    ]);
    WA.disablePlayerControl();

}


WA.onEnterZone('popupZone', () => {
    WA.displayBubble();
    if (!isFirstTimeTuto) {
        isFirstTimeTuto = true;
        window.localStorage.setItem('isFirstTimeTuto','done')
        launchTuto();
    }
    else {
        popUpExplanation = WA.openPopup(targetObjectTutoExplanation, 'Do you want to review the explanation?', [
            {
                label: "No",
                className: "error",
                callback: (popup) => {
                    popup.close();
                }
            },
            {
                label: "Yes",
                className: "success",
                callback: (popup) => {
                    popup.close();
                    launchTuto();
                }
            }
        ])
    }
});

WA.onLeaveZone('popupZone', () => {
    if (popUpExplanation !== undefined) popUpExplanation.close();
    WA.removeBubble();
})

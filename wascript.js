const TEAMS_LINK_JAKARTA='https://teams.microsoft.com/l/meetup-join/19%3ameeting_MzJiZjMzOGQtYzgwNy00YjA1LTg4ODEtMjcwYTc3ODg5ZWYx%40thread.v2/0?context=%7b%22Tid%22%3a%22e6dbe219-77ef-4b6a-af83-f9de7de08923%22%2c%22Oid%22%3a%22b71d33a2-274e-42c3-9b8b-701b5da73544%22%7d';

WA.onEnterZone('jakarta', (e) => {
  setTimeout(()=>WA.openTab(TEAMS_LINK_JAKARTA),1000);

});

console.log(WA);

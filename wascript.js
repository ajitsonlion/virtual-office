const teamsLinks={
  jakarta:'https://teams.microsoft.com/l/meetup-join/19%3ameeting_NTk3ZWJlMGMtNDhlMi00Y2EyLWIxYzYtNzRhNGM3MWQ1MzIx%40thread.v2/0?context=%7b%22Tid%22%3a%22e6dbe219-77ef-4b6a-af83-f9de7de08923%22%2c%22Oid%22%3a%22b71d33a2-274e-42c3-9b8b-701b5da73544%22%7d',
  medan:'https://teams.microsoft.com/l/meetup-join/19%3ameeting_NzU4OTkxZjAtZmVjMy00ZDJkLTk5MTYtMTcyYTI4ZTljY2U3%40thread.v2/0?context=%7b%22Tid%22%3a%22e6dbe219-77ef-4b6a-af83-f9de7de08923%22%2c%22Oid%22%3a%22b71d33a2-274e-42c3-9b8b-701b5da73544%22%7d',
  team1:'https://teams.microsoft.com/l/meetup-join/19%3ameeting_N2ZlMjc1NzYtMzg3MS00ZjBkLWFjZmQtZTMxZWQwZmI2N2Yy%40thread.v2/0?context=%7b%22Tid%22%3a%22e6dbe219-77ef-4b6a-af83-f9de7de08923%22%2c%22Oid%22%3a%22b71d33a2-274e-42c3-9b8b-701b5da73544%22%7d',
  team2:'https://teams.microsoft.com/l/meetup-join/19%3ameeting_MDc3ZTg2OTAtZmVlOC00ZmZhLWFhMDYtZDhhZDIzZTFiYjA5%40thread.v2/0?context=%7b%22Tid%22%3a%22e6dbe219-77ef-4b6a-af83-f9de7de08923%22%2c%22Oid%22%3a%22b71d33a2-274e-42c3-9b8b-701b5da73544%22%7d',
  team3:'https://teams.microsoft.com/l/meetup-join/19%3ameeting_OTQ3YjMwZjgtOTMyMS00ZDJhLTljYTYtODEzODg4YjliYmE1%40thread.v2/0?context=%7b%22Tid%22%3a%22e6dbe219-77ef-4b6a-af83-f9de7de08923%22%2c%22Oid%22%3a%22b71d33a2-274e-42c3-9b8b-701b5da73544%22%7d',
  team4:'https://teams.microsoft.com/l/meetup-join/19%3ameeting_MDc1YTRkZGUtMWMzMy00MDIyLTkxNjYtNjE3YmZhZTE4MDFj%40thread.v2/0?context=%7b%22Tid%22%3a%22e6dbe219-77ef-4b6a-af83-f9de7de08923%22%2c%22Oid%22%3a%22b71d33a2-274e-42c3-9b8b-701b5da73544%22%7d',
};


(()=>{

  Object.keys(teamsLinks).forEach(team=>{
    let timeOut='';

    WA.onEnterZone(team, (e) => {
      timeOut=setTimeout(()=>WA.openTab(teamsLinks[team]),2000);
    });

    WA.onLeaveZone(team, (e) => {
      clearTimeout(timeOut);
    });
  });

})();

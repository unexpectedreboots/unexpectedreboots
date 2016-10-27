  //   function cookieinfo(){
  //       chrome.cookies.getAll({},function (cookie){
  //           console.log(cookie.length);
  //           for(i=0;i<cookie.length;i++){
  //               console.log(JSON.stringify(cookie[i]));
  //           }
  //       });
  //       chrome.cookies.get({url: '127.0.0.1', name: 'connect.sid'}, function(ourCookie) {
  //           console.log(ourCookie);
  //       } )
  //       chrome.cookies.getAllCookieStores(function (cookiestores){
  //           for(i=0;i<cookiestores.length;i++){
  //               console.log(JSON.stringify(cookiestores[i]));
  //           }
  //       });
  //       chrome.cookies.onChanged.addListener(function (changeInfo){
  //               console.log(JSON.stringify(changeInfo));
  //       });
  //   };
  // cookieinfo();
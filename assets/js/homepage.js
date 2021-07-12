var getUserRepos = function(user){
   //format github api url
   var apiUrl = "https://api.github.com/users/" + user + "/repos";

   //make fetch request
   fetch(apiUrl).then(function(response){
       response.json().then(function(data){
           console.log(data);
       });
   });
};

getUserRepos("");

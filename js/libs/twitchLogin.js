$('.twitch-connect').click( function() {
   Twitch.init({clientId: 'lthdupwglh0epkjmqo93smokw2agfdl'}, function(error, status) {
      if (error) {
         // error encountered while loading
         console.log(error);
      }
      // the sdk is now loaded
      Twitch.login({
   		scope: ['user_read', 'channel_read', 'channel_editor', 'chat_login']
   	});

      if (status.authenticated) {
         // user is currently logged in
         $('.twitch-connect').hide();
      }
   });

   Twitch.api({method: 'channel'}, function(error, channel) {
      sessionStorage.twitch = JSON.stringify(channel);
   });
});
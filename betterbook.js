newsFeedWarning();
hideTrending();
getOffFacebookTimer();
blockDuringTimePeriod();
hideHomepageRightSideFooter();

function newsFeedWarning()
{
  var warningMessage = document.createElement('h1');
  warningMessage.textContent = "Don't spend too much time on social media!"

  placeholderElement = document.getElementById("contentArea");
  placeholderElement.prepend(warningMessage);
}

function hideTrending()
{
  var trendingSection = document.getElementById("pagelet_trending_tags_and_topics");
  trendingSection.textContent = "";
}

function getOffFacebookTimer()
{
  var firstTimerMinutes = 5;

  setTimeout(function()
  {
    alert("You have spent enough time on Facebook. You will be kicked off in 1 minute!"); 

  }, firstTimerMinutes * 60 * 1000);

  setTimeout(function()
  {
    document.body.textContent = "Enough Facebook. Go do something else.";
  }, (firstTimerMinutes + 1) * 60 * 1000); 
}

function blockDuringTimePeriod()
{
  var hours = new Date().getHours();

  if ((hours >= 22) || (hours < 6))
  {
    var message = document.createElement('h1');
    message.textContent =  "Facebook went to bed and you should too.";

    document.body.textContent = "";
    document.body.appendChild(message);
  }
}

function hideHomepageRightSideFooter()
{
  var footer = document.getElementById("pagelet_rhc_footer");
  footer.textContent = "";
}

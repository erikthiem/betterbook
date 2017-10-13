newsFeedWarning();


function newsFeedWarning()
{
  var warningMessage = document.createElement('h1');
  warningMessage.textContent = "Don't spend too much time on social media!"

  placeholderElement = document.getElementById("contentArea");
  placeholderElement.prepend(warningMessage);
}

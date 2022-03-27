const path = require('path');

//changing it here from arrow function to name function to get later more info from node about
//that function in case of an error
function getMessages(req, res) {
  //__dirname points to the controller folder
  //Also here Express sets our content type based on the extesion of our file name
  res.sendFile(
    path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg')
  );
  /* res.send('<ul><li>Hellolu Micky!</li></lu>'); */
}

function postMessages(req, res) {
  console.log('Updating messages...');
}

module.exports = {
  getMessages,
  postMessages,
};

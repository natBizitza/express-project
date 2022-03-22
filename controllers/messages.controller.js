//changing it here from arrow function to name function to get later more info from node about
//that function in case of an error
function getMessages(req, res) {
  res.send('<ul><li>Hellolu Micky!</li></lu>');
}

function postMessages(req, res) {
  console.log('Updating messages...');
}

module.exports = {
  getMessages,
  postMessages,
};

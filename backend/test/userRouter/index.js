const config = require('../testConfig');
const axios = require('axios');
const login = require('./login');
const signup = require('./signup');
const passwordReset = require('./password_reset');
const needingToken = require('./needingToken');
const needingTokenAndEmailVerified = require('./needingTokenAndEmailVerified');

describe('Test starts', function () {

  // signup initial user
  before(async function() {

    console.log('Base URL: ', config.BASEURL);
    
    // TODO: clean the database
    await axios.post(`${config.BASEURL}/user/signup`, {
      email: `${config.EMAIL_RECEIVING_VERIFICATION}`,
      name: `tim`,
      password: '123',
    }).then((res) => {
      console.log('before message:', res.data);
    }).catch((err) => {
      console.log('before message:', err.response.data);
      // throw res;
    });
  });

  login();
  signup();
  passwordReset();
  needingToken();
  needingTokenAndEmailVerified();
});

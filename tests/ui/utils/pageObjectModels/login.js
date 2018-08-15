/**
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * tests/ui/utils/pageObjectModels/login.js
 */

const loginErrorLabelId = 'errorInfo';

module.exports = {
  loginErrorLabelId,
  title: 'h1',
  usernameInput: 'input[name=username]',
  passwordInput: 'input[name=password]',
  loginButton: 'button[type=submit]',
  loginErrorLabel: `label[id=${loginErrorLabelId}]`
}

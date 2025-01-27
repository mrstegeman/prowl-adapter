/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */

'use strict';

const ProwlAdapter = require('./prowl-adapter');

module.exports = (addonManager, manifest) => {
  new ProwlAdapter(addonManager, manifest);

  try {
    const ProwlNotifier = require('./prowl-notifier');
    new ProwlNotifier(addonManager, manifest);
  } catch (e) {
    if (!(e instanceof TypeError)) {
      console.error(e);
    }
  }
};

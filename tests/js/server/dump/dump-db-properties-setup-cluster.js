/*jshint globalstrict:false, strict:false, maxlen : 4000 */

////////////////////////////////////////////////////////////////////////////////
/// @brief setup collections for dump/reload tests
///
/// @file
///
/// DISCLAIMER
///
/// Copyright 2010-2012 triagens GmbH, Cologne, Germany
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///
/// Copyright holder is triAGENS GmbH, Cologne, Germany
///
/// @author Jan Steemann
/// @author Copyright 2012, triAGENS GmbH, Cologne, Germany
////////////////////////////////////////////////////////////////////////////////

'use strict';
const db = require("@arangodb").db;
const isEnterprise = require("internal").isEnterprise();

const setupSmartGraph = function () {
  if (!isEnterprise) {
    return;
  }
}


(function () {
  var analyzers = require("@arangodb/analyzers");
  var i, c;

  // test properties /////////////////////////////////////////////
  try {
    db._dropDatabase("UnitTestsDumpProperties1Src");
  } catch (err1) {
  }
  db._createDatabase("UnitTestsDumpProperties1Src", {
    "minReplicationFactor": 2,
    "replicationFactor": 3,
    "sharding": "flexible",
  });

  try {
    db._dropDatabase("UnitTestsDumpProperties1Dst");
  } catch (err2) {
  }
  //db._createDatabase("UnitTestsDumpProperties1Dst");
  // test properties - end ///////////////////////////////////////


  try {
    db._dropDatabase("UnitTestsDumpSrc");
  } catch (err1) {
  }
  db._createDatabase("UnitTestsDumpSrc");

  try {
    db._dropDatabase("UnitTestsDumpDst");
  } catch (err2) {
  }
  db._createDatabase("UnitTestsDumpDst");

  db._useDatabase("UnitTestsDumpSrc");

})();

return {
  status: true
};


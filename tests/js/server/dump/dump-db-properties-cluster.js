/*jshint globalstrict:false, strict:false, maxlen : 4000 */
/*global assertEqual, assertNotEqual, assertTrue, assertFalse */

////////////////////////////////////////////////////////////////////////////////
/// @brief tests for dump/reload
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

const fs = require('fs');
const internal = require("internal");
const jsunity = require("jsunity");
var analyzers = require("@arangodb/analyzers");
const isEnterprise = internal.isEnterprise();
const db = internal.db;

////////////////////////////////////////////////////////////////////////////////
/// @brief test suite
////////////////////////////////////////////////////////////////////////////////

function dumpTestSuite () {
  'use strict';
  let dbName;

  return {

////////////////////////////////////////////////////////////////////////////////
/// @brief set up
////////////////////////////////////////////////////////////////////////////////

    setUp : function () {
      let dbName = db._name();
    },

////////////////////////////////////////////////////////////////////////////////
/// @brief tear down
////////////////////////////////////////////////////////////////////////////////

    tearDown : function () {
      db._name(dbName);
    },


    testDatabaseProperties : function () {
      db._useDatabase("UnitTestsDumpProperties1Dst");
      let props = db._properties();
      assertEqual("flexible", props.sharding);
      assertEqual(2, props.minReplicationFactor);
      assertEqual(3, props.replicationFactor);
    },

  };
}

jsunity.run(dumpTestSuite);

if (isEnterprise) {
  jsunity.run(dumpTestEnterpriseSuite);
}

return jsunity.done();

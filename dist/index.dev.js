#!/usr/bin/env node

/**
 * maid-cli
 * Assistant to keep you on track and productive
 *
 * @author Nelson <github.com/neneWang>
 */
"use strict";

var init = require('./utils/init');

var cli = require('./utils/cli');

var log = require('./utils/log');

var utils = require('./utils/utils');

var constants = require('./utils/constants');

var axios = require('axios');

var chalk = require('chalk');

var flags = cli.flags;
var input = cli.input;
var clear = flags.clear,
    debug = flags.debug;
var getMaidHeader = utils.getMaidHeader,
    getTalk = utils.getTalk;
var MAID_NAME = constants.MAID_NAME;

(function _callee() {
  var message;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          init({
            clear: clear
          });
          input.includes("help") && cli.showHelp(0);
          debug && log(flags);

          if (!input.includes('talk')) {
            _context.next = 8;
            break;
          }

          _context.next = 6;
          return regeneratorRuntime.awrap(getTalk(flags));

        case 6:
          message = _context.sent;
          console.log("".concat(getMaidHeader(), " ").concat(chalk(message)));

        case 8:
          if (input.includes('coa')) {
            utils.commitpush();
          }

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
})();
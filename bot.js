/**
 * PTKDev Skype Bot
 * =====================
 * My personal bot @ptkdev_bot
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @file:       bot.js
 * @version:    0.1
 *
 * @license:    Code and contributions have 'GNU General Public License v3'
 *              This program is free software: you can redistribute it and/or modify
 *              it under the terms of the GNU General Public License as published by
 *              the Free Software Foundation, either version 3 of the License, or
 *              (at your option) any later version.
 *              This program is distributed in the hope that it will be useful,
 *              but WITHOUT ANY WARRANTY; without even the implied warranty of
 *              MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *              GNU General Public License for more details.
 *              You should have received a copy of the GNU General Public License
 *              along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @link        Homepage:     https://bot-skype.ptkdev.io
 *              GitHub Repo:  https://github.com/ptkdev/ptkdev-skype-bot
 */

/**
 * Libs
 * =====================
 * botbuilder and other open source library
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @link :      https://dev.botframework.com/
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */
const botbuilder = require('botbuilder');
const restify = require('restify');
const config = require(__dirname + '/config');
const path = require('path');
const request = require('request');

/**
 * Init
 * =====================
 * Get appid and password of bot from /config.js
 * If not exist rename config.js.tmpl to config.js and change strings
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */
const server = restify.createServer();
server.listen(process.env.PORT || config.port, function() {
    console.log('%s listening to %s', server.name, server.url);
});
const connector = new builder.ChatConnector({ appId: config.bot_appid, appPassword: config.bot_password });
const bot = new builder.UniversalBot(connector);

/**
 * Router
 * =====================
 * Commands and hears (reply message). Core of bot.
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */
require(__dirname + '/routes/hears')(bot, config, request);
require(__dirname + '/routes/command')(bot, config, request);
/**
 * Message
 * =====================
 * Botbuilder Socket.
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */
server.post('/api/messages', connector.listen());
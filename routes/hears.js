/**
 * Hears
 * =====================
 * If i write "hi" bot response "hello"
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */
module.exports = function(bot, config, request, intents) {
    intents.matches(/^chi ci pensa/i, [function(session) {
        session.send('Ci pensa Patryk!');
    }]);

    intents.matches(/^chi lo fa/i, [function(session) {
        session.send('Lo può fare Patryk!');
    }]);

    intents.matches(/^chi lo può fare/i, [function(session) {
        session.send('Lo può fare Patryk!');
    }]);

    intents.matches(/^roku/i, [function(session) {
        session.send('È una merda!');
    }]);

    intents.matches(/^incidente/i, [function(session) {
        session.send('Se vuoi ti do 20€');
    }]);

    intents.matches(/^iphone x/i, [function(session) {
        session.send('Oh Filippo ma l\'hai preso sto iphone?! Daje stì 1359euri! #NoPovery');
    }]);

    intents.matches(/^da spostare una macchina/i, [function(session) {
        session.send('Chiamate Petrucci!!!');
    }]);

    intents.matches(/^angelica losi/i, [function(session) {
        session.send('Ti amo!');
    }]);

    intents.matches(/^postazioni/i, [function(session) {
        session.send('Se è un progetto di merda sicuramente non in sede');
    }]);

    intents.matches(/^mozzarelle/i, [function(session) {
        session.send('Raga avete già ordinato le mozzarelle da Bruno?! Sbrigatevi entro le 13:00!!!');
    }]);
};
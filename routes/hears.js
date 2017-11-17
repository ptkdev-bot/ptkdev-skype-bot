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
module.exports = function (bot, config, request) {
	bot.dialog(/chi ci pensa/i, (session) => session.send('Ci pensa Patryk!'));
	bot.dialog(/chi lo fa/i, (session) => session.send('Lo può fare Patryk!'));
	bot.dialog(/chi lo può fare/i, (session) => session.send('Lo può fare Patryk!'));
	bot.dialog(/roku/i, (session) => session.send('È una merda!'));
	bot.dialog(/incidente/i, (session) => session.send('Se vuoi ti do 20€'));
	bot.dialog(/iphone x/i, (session) => session.send('Oh Filippo ma l\'hai preso sto iphone?! Daje stì 1359euri! #NoPovery'));
	bot.dialog(/da spostare una macchina/i, (session) => session.send('Chiamate Petrucci!!!'));
	bot.dialog(/angelica losi/i, (session) => session.send('Ti amo!'));
	bot.dialog(/postazioni/i, (session) => session.send('Se è un progetto di merda sicuramente non in sede'));
	bot.dialog(/mozzarelle/i, (session) => session.send('Raga avete già ordinato le mozzarelle da Bruno?! Sbrigatevi entro le 13:00!!!'));
};

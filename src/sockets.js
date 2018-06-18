function sockets(io) {
	// Sockets start
	io.on('connection', socket => {
		console.log('CONNECTED SOCK');

		socket.on('testFunc', testFunc);

		// ==========================
		// === Socket (helper)function
		// ===========================

		function testFunc() {}
	});
}

module.exports = sockets;

ws = new WebSocket("https://nodejsws-pfnq.onrender.com/");
const message = { msg: "Hello Server", time: Date.now() * 1000000 };
ws.send(JSON.stringify(message));

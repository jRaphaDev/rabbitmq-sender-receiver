var amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost', (err, conn) => {

  conn.createChannel((err, ch) => {
    let q = 'hello';
    let msg = 'Hello World!';
    ch.assertQueue(q, { durable: true });
    ch.sendToQueue(q, new Buffer(msg));
    console.log(`[x] Sent %s ${msg}`);
  })

  setTimeout(() => {
    conn.close()
    process.exit(0)
  }, 500);
});
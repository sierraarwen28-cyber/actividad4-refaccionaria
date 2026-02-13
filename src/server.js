const mongoose = require('mongoose');
require('dotenv').config();

const app = require('./app');

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB conectado correctamente");

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en puerto ${PORT}`);
    });

  } catch (error) {
    console.error("Error conectando a Mongo:", error);
  }
}

startServer();

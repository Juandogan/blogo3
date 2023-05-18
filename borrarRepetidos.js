const MongoClient = require('mongodb').MongoClient;

async function eliminarTitulosRepetidos(url, dbName, collectionName) {
   const client = await MongoClient.connect(url);
   const db = client.db(dbName);

   // Agregación para encontrar los títulos repetidos y seleccionar el valor máximo de "vistas"
   const pipeline = [
      { $group: {
            _id: "$titulo",
            max_vistas: { $max: "$vistas" },
            count: { $sum: 1 }
         }
      },
      { $match: {
            count: { $gt: 1 }
         }
      },
      { $group: {
            _id: "$_id",
            max_vistas: { $max: "$max_vistas" }
         }
      },
      { $project: {
            _id: 0,
            titulo: "$_id",
            vistas: "$max_vistas"
         }
      }
   ];

   const results = await db.collection(collectionName).aggregate(pipeline).toArray();

   // Eliminación de documentos con títulos repetidos
   for (const doc of results) {
      await db.collection(collectionName).deleteMany({ titulo: doc.titulo, vistas: { $lt: doc.vistas } });
   }

   console.log(`Se eliminaron ${results.length} documentos con títulos repetidos`);

   client.close();
}

// Ejemplo de uso
eliminarTitulosRepetidos('mongodb+srv://ccamAdmin:UNdianuevo.12@ccam.qpdpzqh.mongodb.net/?retryWrites=true&w=majority', 'test', 'articuloschemas');

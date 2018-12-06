const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// probando conexion
var oracledb = require("oracledb");
oracledb.getConnection(
  {
    user: "JOVS",
    password: "oracle",
    connectString: "localhost/XE"
  },
  function(err, connection) {
    if (err) {
      console.error(err);
      return;
    }
    connection.execute("SELECT * FROM TBL_USUARIOS", function(err, result) {
      if (err) {
        console.error(err);
        return;
      }
      console.log(result.rows);
    });
  }
);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// ruta temporal del UI
app.use(express.static("./aplicativo"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/aplicativo/index.html"));
});

require("./server/routes/index")(app);
module.exports = app;

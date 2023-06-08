const http = require("http");
const PORT = 3000;
const html = require("fs").readFileSync("./index.html");
const app = express();

//webサーバー作成
const server = http.createServer((req, res) => {
  //ブラウザからアクセスが来た時の処理
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(html);
  res.end();
});

server.listen(PORT, () => {
  console.log("server running!");
});

//'link'の部分はファイルをしている。
app.use(express.static("assets"));

app.get("/", (req, res) => {
  res.render(html);
});

app.listen(3000);

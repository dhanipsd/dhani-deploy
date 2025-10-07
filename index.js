// Load .env file
require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;

// Fungsi handler utama untuk / dan /api
function mainHandler(req, res) {
  const html = `
  <!DOCTYPE html>
  <html lang="id">
  <head>
    <meta charset="UTF-8">
    <title>Sikube API</title>
    <style>
      body { margin:0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background:#f4f4f5; color:#111827;}
      header { background:#1f2937; color:#f9fafb; padding:20px; text-align:center; font-size:32px; font-weight:bold; }
      .container { max-width:900px; margin:30px auto; padding:0 20px; }
      h2 { color:#1e40af; border-bottom:2px solid #3b82f6; padding-bottom:5px; }
      pre { background:#111827; color:#f9fafb; padding:15px; border-radius:8px; overflow-x:auto; }
      code { font-family: 'Fira Code', monospace; }
      .endpoint { margin-bottom:30px; }
      .method { display:inline-block; background:#3b82f6; color:white; padding:2px 8px; border-radius:4px; font-weight:bold; margin-right:10px; }
      footer { text-align:center; color:#6b7280; padding:20px; border-top:1px solid #d1d5db; }
    </style>
  </head>
  <body>
    <header>Sikube API</header>
    <div class="container">
      <section class="endpoint">
        <h2>GET /pods</h2>
        <span class="method">GET</span> Daftar semua Pod
        <pre><code>{
  "pods": [
    {"name": "pod-1", "status": "Running"},
    {"name": "pod-2", "status": "Pending"}
  ]
}</code></pre>
      </section>
      <section class="endpoint">
        <h2>POST /deployments</h2>
        <span class="method">POST</span> Membuat deployment baru
        <pre><code>{
  "name": "my-app",
  "replicas": 3,
  "image": "my-app:latest"
}</code></pre>
        <p>Response:</p>
        <pre><code>{
  "status": "success",
  "deployment": "my-app"
}</code></pre>
      </section>
      <section class="endpoint">
        <h2>GET /services</h2>
        <span class="method">GET</span> Daftar semua service
        <pre><code>{
  "services": [
    {"name": "frontend", "type": "ClusterIP"},
    {"name": "backend", "type": "LoadBalancer"}
  ]
}</code></pre>
      </section>
    </div>
    <footer>© 2025 Sikube API</footer>
  </body>
  </html>
  `;
  res.send(html);
}

// Route asli /
app.get('/', mainHandler);

// Tambahkan route /api yang memanggil handler sama
app.get('/api', mainHandler);

app.listen(port, '0.0.0.0', () => {
  console.log("Server berjalan di http://0.0.0.0:" + port);
});


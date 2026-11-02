import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const root = process.cwd();
const mime = {'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.png':'image/png','.webp':'image/webp','.jpg':'image/jpeg','.svg':'image/svg+xml','.webmanifest':'application/manifest+json'};
http.createServer((req,res)=>{
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url,'http://localhost').pathname); } catch { res.writeHead(400).end(); return; }
  const file = path.resolve(root,'.'+(pathname==='/'?'/index.html':pathname));
  if (!file.startsWith(root+path.sep) || pathname.split('/').some(p=>p.startsWith('.')) || !mime[path.extname(file)]) { res.writeHead(403).end(); return; }
  fs.readFile(file,(err,data)=> { if(err){res.writeHead(404).end('Tidak ditemukan');return;} res.writeHead(200,{'Content-Type':mime[path.extname(file)],'Cache-Control':'no-cache'});res.end(data); });
}).listen(4173,'127.0.0.1',()=>console.log('Rental Kalbar: http://localhost:4173'));

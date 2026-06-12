# Inventory Manager

Aplikasi manajemen inventori berbasis web dengan REST API. Dibangun sebagai proyek portofolio untuk mendemonstrasikan kemampuan full-stack development dengan Node.js dan Express.

## Fitur

- **CRUD lengkap** — tambah, lihat, edit, dan hapus produk
- **Filter & pencarian** — cari produk berdasarkan nama atau kategori
- **Dashboard statistik** — ringkasan total produk, stok, dan nilai inventori
- **Peringatan stok menipis** — notifikasi otomatis ketika stok ≤ 5 unit
- **REST API** — endpoint JSON yang clean dan terstruktur

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: Vanilla HTML/CSS/JavaScript
- **API**: RESTful dengan JSON response

## Cara Menjalankan

```bash
# Install dependencies
npm install

# Jalankan server
node server.js

# Buka di browser
http://localhost:3000
```

## API Endpoints

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/api/products` | Ambil semua produk |
| GET | `/api/products?search=laptop` | Cari produk |
| GET | `/api/products?category=Elektronik` | Filter by kategori |
| GET | `/api/products/:id` | Ambil satu produk |
| POST | `/api/products` | Tambah produk baru |
| PUT | `/api/products/:id` | Update produk |
| DELETE | `/api/products/:id` | Hapus produk |

## Contoh Request

```bash
# Tambah produk baru
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Monitor LG 27 inch","category":"Elektronik","stock":10,"price":3500000}'

# Update stok
curl -X PUT http://localhost:3000/api/products/:id \
  -H "Content-Type: application/json" \
  -d '{"name":"Monitor LG 27 inch","category":"Elektronik","stock":8,"price":3500000}'
```

## Struktur Proyek

```
inventory-app/
├── server.js          # Entry point & Express config
├── routes/
│   └── products.js    # CRUD routes untuk produk
├── public/
│   └── index.html     # Frontend UI
└── package.json
```

## Catatan

Data disimpan di memori (in-memory). Untuk production, koneksikan ke database seperti PostgreSQL atau MongoDB.
"# Inventory-app" 

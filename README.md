# 🚀 Performance Testing - Restful Booker API dengan K6  

Repositori ini berisi pengujian kinerja API **Restful Booker** menggunakan **K6**. Pengujian ini mencakup berbagai skenario seperti **Load Test, Stress Test, Spike Test, Endurance Test**, dan **Breakpoint Test**.  

## 📌 Deskripsi Proyek  

Tujuan dari proyek ini adalah untuk mengevaluasi performa API **Restful Booker** dengan berbagai skenario pengujian. K6 digunakan untuk mengukur responsivitas, stabilitas, dan kehandalan API dalam berbagai kondisi beban.  

### 🔍 Jenis Pengujian yang Dilakukan  

| Jenis Pengujian  | Deskripsi |
|------------------|-----------|
| **Load Test**    | Menguji API dengan beban normal hingga tinggi dalam waktu tertentu. |
| **Stress Test**  | Meningkatkan jumlah pengguna hingga API mencapai batasnya. |
| **Spike Test**   | Menguji API dengan lonjakan trafik tiba-tiba. |
| **Endurance Test** | Menguji API dengan beban konstan dalam waktu lama. |
| **Breakpoint Test** | Menentukan titik di mana API mulai mengalami degradasi performa. |

## 📂 Struktur Proyek  

```
📂 k6-performance-testing  
│   ├── 📄 loadTest.js         # Pengujian beban  
│   ├── 📄 stressTest.js       # Pengujian stres  
│   ├── 📄 spikeTest.js        # Pengujian lonjakan trafik  
│   ├── 📄 enduranceTest.js    # Pengujian ketahanan  
│   ├── 📄 breakPoint.js       # Pengujian batas performa  
│   ├── 📄 README.md           # Dokumentasi proyek  
└── 📂 reports                 # Folder hasil laporan pengujian  
    ├── 📄 loadTest.html  
    ├── 📄 stressTest.html  
    ├── 📄 spikeTest.html  
    ├── 📄 enduranceTest.html  
    ├── 📄 breakPoint.html  
```

## ⚙️ Cara Menjalankan Pengujian  

### 1️⃣ Persiapan  
Pastikan **K6** sudah terinstal di sistem lokal: 
https://grafana.com/docs/k6/latest/set-up/install-k6/

- **Windows**:  
  ```sh
  choco install k6
  ```
  atau
  ```sh
 winget install k6 --source winget
  ```
- **MacOS**:  
  ```sh
  brew install k6
  ```
- **Linux**:  
  ```sh
  sudo apt install k6
  ```

### 2️⃣ Clone Repositori  
Clone repositori ke sistem lokal:  
```sh
git clone https://github.com/username/k6-performance-testing.git
cd k6-performance-testing
```

### 3️⃣ Jalankan Pengujian  
Gunakan perintah berikut untuk menjalankan pengujian:  

- **Load Test**  
  ```sh
  k6 run loadTest.js
  ```
- **Stress Test**  
  ```sh
  k6 run stressTest.js
  ```
- **Spike Test**  
  ```sh
  k6 run spikeTest.js
  ```
- **Endurance Test**  
  ```sh
  k6 run enduranceTest.js
  ```
- **Breakpoint Test**  
  ```sh
  k6 run breakPoint.js
  ```

## 📊 Laporan Hasil Pengujian  

Setelah pengujian selesai, laporan dalam format **HTML** akan tersedia di folder `reports/`.  

| Jenis Pengujian  | Lokasi Laporan |
|------------------|----------------|
| **Load Test**    | `reports/loadTest.html` |
| **Stress Test**  | `reports/stressTest.html` |
| **Spike Test**   | `reports/spikeTest.html` |
| **Endurance Test** | `reports/enduranceTest.html` |
| **Breakpoint Test** | `reports/breakPoint.html` |

Untuk membuka laporan, cukup buka file HTML dengan browser.  

## 📌 Catatan Tambahan  
- Pastikan koneksi internet stabil untuk menjalankan pengujian terhadap API.  
- Kustomisasi jumlah pengguna virtual dan durasi pengujian dapat dilakukan di dalam setiap file `.js`.  
- Jika ingin menyimpan hasil pengujian dalam format JSON, gunakan perintah:  
  ```sh
  k6 run loadTest.js --out json=reports/loadTest.json
  ```

# 🚀 **Performance Testing - _Restful Booker API_ dengan K6**  

Repositori ini berisi pengujian kinerja **_Restful Booker API_** menggunakan **K6**. Pengujian ini mencakup berbagai skenario seperti **_Load Test, Stress Test, Spike Test, Endurance Test,_** dan **_Breakpoint Test_**.  

🔗 **API Contract**: [_Restful Booker API Documentation_](https://restful-booker.herokuapp.com/apidoc/index.html)  

## 📌 **Deskripsi Proyek**  

Tujuan dari proyek ini adalah untuk mengevaluasi performa **_Restful Booker API_** dengan berbagai skenario pengujian. **K6** digunakan untuk mengukur **responsivitas, stabilitas, dan kehandalan API** dalam berbagai kondisi beban.  

### 🔍 **Jenis Pengujian yang Dilakukan**  

| **Jenis Pengujian**  | **Deskripsi** |
|----------------------|--------------|
| **_Load Test_**      | Menguji API dengan beban normal hingga tinggi dalam waktu tertentu. |
| **_Stress Test_**    | Meningkatkan jumlah pengguna hingga API mencapai batasnya. |
| **_Spike Test_**     | Menguji API dengan lonjakan trafik tiba-tiba. |
| **_Endurance Test_** | Menguji API dengan beban konstan dalam waktu lama. |
| **_Breakpoint Test_** | Menentukan titik di mana API mulai mengalami degradasi performa. |

## 📂 **Struktur Proyek**  

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

## ⚙️ **Cara Menjalankan Pengujian**  

### 1️⃣ **Persiapan**  
Pastikan **K6** sudah terinstal di sistem lokal:  
🔗 [Panduan Instalasi K6](https://grafana.com/docs/k6/latest/set-up/install-k6/)  

- **Windows**:  
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

### 2️⃣ **Clone Repositori**  
Clone repositori ke sistem lokal:  
```sh
git clone https://github.com/username/k6-performance-testing.git
cd k6-performance-testing
```

### 3️⃣ **Jalankan Pengujian**  
Gunakan perintah berikut untuk menjalankan pengujian:  

- **_Load Test_**  
  ```sh
  k6 run loadTest.js
  ```
- **_Stress Test_**  
  ```sh
  k6 run stressTest.js
  ```
- **_Spike Test_**  
  ```sh
  k6 run spikeTest.js
  ```
- **_Endurance Test_**  
  ```sh
  k6 run enduranceTest.js
  ```
- **_Breakpoint Test_**  
  ```sh
  k6 run breakPoint.js
  ```

## 📊 **Laporan Hasil Pengujian**  

Setelah pengujian selesai, laporan dalam format **HTML** akan tersedia di folder `reports/`.  

| **Jenis Pengujian**  | **Lokasi Laporan** |
|----------------------|------------------|
| **_Load Test_**      | `reports/loadTest.html` |
| **_Stress Test_**    | `reports/stressTest.html` |
| **_Spike Test_**     | `reports/spikeTest.html` |
| **_Endurance Test_** | `reports/enduranceTest.html` |
| **_Breakpoint Test_** | `reports/breakPoint.html` |

Untuk membuka laporan, cukup buka file **HTML** dengan browser.  

## 📌 **Catatan Tambahan**  
- Pastikan koneksi internet stabil untuk menjalankan pengujian terhadap **_Restful Booker API_**.  
- Kustomisasi jumlah **_Virtual Users (VUs)_** dan durasi pengujian dapat dilakukan di dalam setiap file `.js`.  

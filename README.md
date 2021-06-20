# Ekspor-Impor Dashboard

## Project Apa Ini?

Project ini adalah project untuk membangun sebuah dasboard untuk menampilkan data ekspor dan impor Indonesia. Data yang digunakan adalah data sekunder dari website [Badan Pusat Statistik](https://www.bps.go.id/subject/8/ekspor-impor.html) dengan rincian data yang digunakan yaitu data ekspor dan impor secara keseluruhan pada tahun 2012-2019, serta data ekspor dan impor untuk setiap komoditas dari tahun 2012-2019.

## Preprocessing data

Data yang diperoleh dari website BPS kemudian dioalah dengan tahapan sebagai berikut.

1. Melakukan pengelompokkan data berdasarkan benua. Terdapat 6 benua yaitu benua Amerika Utara, Amerika Selatan, Afrika, Eropa, Asia dan Oceania & Australia
2. Melakukan integrasi data, yaitu menggabungkan beberapa data kemudian pada proses penggabungan dilakukan perubahan penamaan variabel (nama kolom) sesuai dengan kebutuhan dan kemudahan dalam melakukan visualisasi.
3. Melakukan penyamaan satuan dari nilai CIF, FOB dan juga berat bersih pada data komoditas ekspor dan impor.

## Perancangan dan Implementasi

### Jenis Visualisasi

Berdasarkan data yang diperoleh, kami menggunakan 3 jenis visualisasi data, yaitu

1. **Barchart**
2. **Linechart**
3. **Peta Tematik Dunia**

### Rancangan Dashboard

Agar pengaturan datanya lebih baik, kami memisahnya menjadi 3 jenis dashboard, yaitu sebagai berikut.

1. **Dashboard utama**, yaitu dashboard yang menjelaskan perkembangan ekspor dan impor Indonesia tahun 2012 – 2019 berdasarkan benua
2. **Dashboard ekspor**, yaitu dashboard yang menjelaskan perkembangan ekspor Indonesia tahun 2012 – 2019 dari sisi setiap komoditas. Terdapat 24 komoditas yang tersedia
3. **Dashboard impor**, yaitu dashboard yang menjelaskan perkembangan impor Indonesia tahun 2012 – 2019 dari sisi setiap komoditas. Terdapat 18 komoditas yan tersedia.

Setiap dashboard tersebut kemudian akan disatukan dalam satu website yang sama dan disertai dengan halaman landing page yang menjelaskan secara singkat ketiga jenis dashboard tersebut.

### Teknologi yang digunakan

Berikut Teknologi yang kami gunakan

1. **Tableau**. Dalam pembuatan dashboard ini kami memilih tableau sebagai teknologi utama. Visualisasi pada 3 jenis dashboard semuanya dibuat menggunakan tableau. Hasil dari tableau kemudian di publish melalui tableau public dan kemudian di embbed di website yang kami bangun menggunakan JavaScript Tableau API.

2. **Chart js**. Library JavaScript ini kami gunakan untuk membuat 4 line chart pada landing page. Line chart tersebut menampilkan data nilai dan volume ekspor dan impor secara keseluruhan.

3. **React js**. Library ini kami gunakan untuk membangun website yaitu untuk mengatur tampilan dari webiste dan routing yang memisahkan 3 jenis dashboard yang dibuat. Dengan library ini juga, website kami menjadi Single-Page Application sehingga dapat meningkatkan performa disisi pengguna.

4. **Netlify**. Netlify adalah suatu platform cloud computing yang menyediakan cara yang mudah untuk hosting website. Kami memilih netlify karena fiturnya yang mudah, gratis, dan memiliki fitur continuous deployment yang dapat diintegrasikan dengan GitHub.

## Hasil

Hasil dari project ini dapat dilihat secara langsung di website [Ekspor-Impor Dashboard](https://ekspor-impor-dashboard.netlify.app/)

Berikut juga link dari Tableau Public

1. [Dashboard Utama](https://public.tableau.com/views/Dashboard_16210059831350/Dashboard?:language=en-US&:display_count=n&:origin=viz_share_link)

2. [Dashboard Ekspor](https://public.tableau.com/views/DashboardEkspordariIndonesia/Dashboard?:language=en-US&:display_count=n&:origin=viz_share_link)

3. [Dahsboard Impor](https://public.tableau.com/views/DashboardImporkeIndonesia_2/Dashboard?:language=en-US&:display_count=n&:origin=viz_share_link)

4. [Tableau Public Profil Team](https://public.tableau.com/profile/tim.4.visualisasi.data)

## Cara Menggunakan

Untuk menggunakan project ini dibutuhkan [Node Js](https://nodejs.org/en/). Setelah itu ikuti langkah berikut

### Clone Repository

```git
git clone https://github.com/ekoptra/ekspor-impor-dashboard.git
```

### Install Depedency

```npm
npm install
```

### Jalankan Aplikasi

```npm
npm run start
```

## Team

Kelompok 4 - 3SD1 - Angkatan 60

1. Almira Diva Sanya (221810155)
2. Cynthia As Bahri (221810227)
3. Eko Putra Wahyuddin (221810259)
4. Fahmi Reza Nugraha (221810280)
5. I Putu Juni Adi Widianata (221810333)
6. Nensi Fitriani (221810499)

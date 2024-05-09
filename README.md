# Taskify
Taskify adalah aplikasi manajer tugas sederhana yang dapat membuat, melihat, memperbarui, dan menghapus daftar tugas dengan mudah.

### Fitur Utama:
1. **Membuat Tugas Baru:**
   - Buat tugas baru dengan judul dan deskripsi.
   - Setiap tugas memiliki status awal "belum selesai".

2. **Melihat Daftar Tugas:**
   - Lihat semua tugas yang Anda buat.
   - Setiap tugas ditampilkan dengan judul, deskripsi, dan statusnya.

3. **Memperbarui Tugas:**
   - Tandai tugas sebagai selesai atau perbarui judul/deskripsi tugas.

4. **Menghapus Tugas:**
   - Hapus tugas yang tidak diperlukan lagi.

### Penggunaan:
- Clone repositori ini ke lokal Anda.
- Instal dependensi dengan perintah `npm install`.
- Jalankan server dengan perintah `node index.js` atau `nodemon`.
  
### Struktur Data Tugas:
```json
{
  "id": "unique_task_id",
  "title": "Task Title",
  "description": "Task Description",
  "status": "pending/complete"
}

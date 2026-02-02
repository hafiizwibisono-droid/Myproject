const riwayat = document.getElementById("riwayat");

function absen() {
  const nama = document.getElementById("nama").value;
  const status = document.getElementById("status").value;
  const waktu = new Date().toLocaleString();

  if (nama === "") {
    alert("Nama harus diisi!");
    return;
  }

  const data = { nama, status, waktu };

  let absensi = JSON.parse(localStorage.getItem("absensi")) || [];
  absensi.push(data);
  localStorage.setItem("absensi", JSON.stringify(absensi));

  tampilkan();
}

function tampilkan() {
  riwayat.innerHTML = "";
  let absensi = JSON.parse(localStorage.getItem("absensi")) || [];

  absensi.forEach(item => {
    riwayat.innerHTML += `
      <tr>
        <td>${item.nama}</td>
        <td>${item.status}</td>
        <td>${item.waktu}</td>
      </tr>
    `;
  });
}

tampilkan();

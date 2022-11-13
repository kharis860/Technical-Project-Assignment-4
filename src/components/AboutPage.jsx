import Navbar from "./Navbar";

function AboutPage() {
  return (
    <div>
      <Navbar />
      <section>
        <div className="containerAbout">
          <div className="text">
            <h1>About me</h1>
            <br />
            <br />
            <p>
              Saya sudah tertarik dengan segala hal yang berhubungan dengan IT sejak duduk di bangku SMA, sehingga ketika mendaftar kuliah saya memilih jurusan sistem informasi dan mulai mengenal pemrograman atau bahasa keren nya adalah
              "coding"
            </p>
            <br />
            <p>
              Namun, ketika memasuki dunia perkuliahan saya tidak menerima banyak pembelajaran tentang pemrograman yang disampaikan secara live coding. justru sebaliknya, banyak materi pemrograman yang disampaikan hanya secara teori saja
              sehingga banyak bagian yang tidak paham
            </p>
            <br />
            <p>
              Pada akhirnya saya mencari media belajar lain dan akhirnya bertemu dengan Studi Independen Batch 3 pada Mitra Skilvul track Front-end Web Development. Saya senang karena akhirnya menemukan media pembelajaran yang menyampaikan
              materi beserta live coding sehingga mudah untuk dipahami dan bisa mempraktekannya kembali dengan mudah
            </p>
            <br />
            <p>oiya...di sela-sela melakukan aktivitas di dunia coding dan banyaknya tugas perkuliahan biasanya saya juga melakukan refreshing menghabiskan waktu luang untuk mendaki gunung ketika jenuh hehe~ (っ＾▿＾)💨</p>
          </div>
          <div className="pict">
            <img className="mount" src={require("../components/img/mount1.jpg")} alt="gambar" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;

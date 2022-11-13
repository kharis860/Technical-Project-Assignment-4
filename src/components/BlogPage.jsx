import Navbar from "./Navbar";

function BlogPage() {
  return (
    <div>
      <Navbar />
      <section>
        <div className="containerBlog">
          <div className="header">
            <h1>Blog</h1>
            <br />
            <h2>Semua yang telah saya tulis ada di sini.</h2>
          </div>
          <div className="main">
            <ul>
              <li className="list">
                <a className="article" href="https://drive.google.com/file/d/1PbRax9eFJtW3WSO8dSdx61IWjuf8FgEo/view?usp=sharing">
                  <p>18 Juli 2022</p>
                  <h2>Manfaat Ruang Terbuka Biru dalam Upaya Konservasi dan Efisiensi Ketersediaan Air</h2>
                </a>
              </li>
              <li className="list">
                <a className="article" href="https://drive.google.com/file/d/19Tf2ScBpR_Vvufip5WSlnzmRqDAYu_y-/view?usp=sharing">
                  <p>08 Juli 2021</p>
                  <h2>The Potential and Various Obstacles in Use of Information Technology and Information Systems</h2>
                </a>
              </li>
              <li className="list">
                <a className="article" href="https://drive.google.com/file/d/1Ji0Q7H2MOjzclmUicWip-7VIPzGelsli/view?usp=sharing">
                  <p>15 Desember 2021</p>
                  <h2>Business Process Re-engineering to Support Cake Shop Business Sustainability</h2>
                </a>
              </li>
              <li className="list">
                <a className="article" href="https://drive.google.com/file/d/1pvVzpfXctVi4xd0SJAvlR-Y6YD_otinX/view?usp=sharing">
                  <p>16 Juni 2022</p>
                  <h2>Pengamanan File Audio Kode Morse menggunakan Algoritma Advanced Encryption Standard</h2>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;

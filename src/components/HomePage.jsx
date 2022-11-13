import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <section className="container">
        <div className="banner">
          <h2>Kharis Rahmat Hidayat.</h2>
          <div className="funFact">
            <p>Seorang mahasiswa studi independen batch 3 skilvul</p>
          </div>
          <div className="socialMedia">
            <a href="https://github.com/kharis860" className="fa fa-github"></a>
            <a href="https://www.facebook.com/kharis.rahmat/" className="fa fa-facebook"></a>
            <a href="https://www.instagram.com/kharis_rahmat/?next=%2F&hl=id" className="fa fa-instagram"></a>
            <a href="https://www.youtube.com/channel/UCe6IaxG3uxSsJEzpd1D7psg" className="fa fa-youtube"></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

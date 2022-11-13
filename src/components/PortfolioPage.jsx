import Navbar from "./Navbar";
import GridItem from "./GridItem";

function PortfolioPage() {
  return (
    <div>
      <Navbar />
      <section>
        <div className="tittle">
          <h1>Portfolio Saya</h1>
        </div>
        <div className="grid-container">
          {/* <!-- grid 1 --> */}
          <div className="grid-item"></div>
          {/* <!-- grid 2 --> */}
          <GridItem
            gambar={require("../components/img/felvy.png")}
            url="https://drive.google.com/file/d/1h6dT3Z683TQgQ0OGnF4Pt6z4aeqs9zXq/view?usp=sharing"
            judul="Felvy | Aplikasi berbasis web"
            keterangan="Aplikasi berbasis web yang berfokus untuk reservasi kucing yang kurang beruntung"
          />
          {/* <!-- grid 3 --> */}
          <GridItem
            gambar={require("../components/img/pocari e-commerce.png")}
            url="https://www.figma.com/file/KBkaNi9wXlXemresqIopGB/Latihan-1?node-id=0%3A1"
            judul="Pocari Sweat E-Comemerce | UI Design"
            keterangan="Landing page yang berisi produk-produk dari PT Otsuka"
          />
          {/* <!-- grid 4 --> */}
          <GridItem
            gambar={require("../components/img/Medtech.png")}
            url="https://www.figma.com/file/rJMAIiZeJqMiYPHxht3nua/FEBE-19?node-id=98%3A13"
            judul="MedTech | UI Design"
            keterangan="Aplikasi rekam medis sebagai penugasan Product Development Bootcamp"
          />
          {/* <!-- grid 5 --> */}
          <div className="grid-item"></div>
          {/* <!-- grid 6 --> */}
          <div className="grid-item"></div>
          {/* <!-- grid 7 --> */}
          <GridItem
            gambar={require("../components/img/gemi vista.png")}
            url="https://www.figma.com/file/Bb2STHqkUKWWKsoYOwWfGr/TIM-DEDLEN-%7C-ICON-2022?node-id=0%3A1"
            judul="Gemi Vista | UI/UX Design"
            keterangan="Rancangan UI/UX aplikasi mobile pemesanan destinasi wisata"
          />
          {/* <!-- grid 8 --> */}
          <GridItem
            gambar={require("../components/img/rani music app.png")}
            url="https://www.figma.com/file/fRfZLgPnWFg5xNRLlYTgKe/(Mobile)-Music-E-Commerce?node-id=0%3A1"
            judul="Rani Music | UI Design"
            keterangan="Aplikasi streaming musik, podcast maupun konten audio lainnya"
          />
          {/* <!-- grid 9 --> */}
          <div className="grid-item"></div>
        </div>
      </section>
    </div>
  );
}

export default PortfolioPage;

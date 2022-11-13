function GridItem({ gambar, url, judul, keterangan }) {
  console.log(gambar);
  return (
    <div className="grid-item">
      <div className="card">
        <a href={url}>
          <img src={gambar} alt="Avatar" className="folioCard" />
          <div className="container">
            <h4>
              <b>{judul}</b>
            </h4>
            <br />
            <p>{keterangan}</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default GridItem;



export const CancionCrear = () => {
  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-8">
          <form className="row g-3 needs-validation">
            <div className="col-md-6 position-relative">
              <label htmlFor="title" className="form-label">
                Título
              </label>
              <input
                type="text"
                className="form-control border border-dark"
                id="title"
                name="title"
                required
              />
            </div>
            <div className="col-md-6 position-relative">
              <label htmlFor="artist" className="form-label">
                Artista
              </label>
              <input
                type="text"
                className="form-control border border-dark"
                id="artist"
                name="artist"
                required
              />
            </div>

            <div className="col-md-6 position-relative">
              <label htmlFor="album" className="form-label">
                Álbum
              </label>
              <input
                type="text"
                className="form-control border border-dark"
                id="album"
                name="album"
                required
              />
            </div>
            <div className="col-md-6 position-relative">
              <label htmlFor="genre" className="form-label">
                Género
              </label>
              <select className="form-select border border-dark" id="genre" name="genre" required>
                <option selected disabled value="">
                  Seleccione el género
                </option>
                <option>Rock</option>
                <option>Pop</option>
                <option>Rap</option>
                <option>Electrónica</option>
                <option>Indie</option>
              </select>
            </div>

            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Agregar Canción
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
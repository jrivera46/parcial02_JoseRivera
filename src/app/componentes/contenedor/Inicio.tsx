export const Inicio = () => {
  return (
    <div id="carouselControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-6">
              <div className="h-100 p-5 rounded-3 text-center">
                <h2 className="text-dark">Bienvenido al mejor sitio</h2>
                <p className="text-dark">Estas son las mejores canciones</p>
                <button className="btn btn-outline-dark btn-dark text-white" type="button">
                  Ver detalles
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-6">
              <div className="h-100 p-5 rounded-3 text-center">
                <h2 className="text-dark">Bienvenido al mejor sitio</h2>
                <p className="text-dark">Estas son las mejores canciones</p>
                <button className="btn btn-outline-dark btn-dark text-white" type="button">
                  Ver detalles
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-6">
              <div className="h-100 p-5 rounded-3 text-center">
                <h2 className="text-dark">Bienvenido al mejor sitio</h2>
                <p className="text-dark">Estas son las mejores canciones</p>
                <button className="btn btn-outline-dark btn-dark text-white" type="button">
                  Ver detalles
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Inicio;
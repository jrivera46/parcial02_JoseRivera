export const CancionesAdmin = () => {
    return (
      <>
        <div className="pt-3 d-flex justify-content-center">
          <div className="col-md-8">
            <table className="table table-bordered border border-dark">
              <thead>
                <tr>
                  <th style={{ width: "10%" }}>ID</th>
                  <th style={{ width: "30%" }}>Título</th>
                  <th style={{ width: "20%" }}>Artista</th>
                  <th style={{ width: "20%" }}>Álbum</th>
                  <th style={{ width: "10%" }}>Género</th>
                  <th style={{ width: "10%" }}>Opciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Bohemian Rhapsody</td>
                  <td>Queen</td>
                  <td>A Night at the Opera</td>
                  <td>Rock</td>
                  <td>
                    <button className="btn btn-primary me-2">
                      <i className="fa-solid fa-pen-to-square" style={{color:"#ff00ff"}}></i>
                    </button>
                    <button className="btn btn-danger">
                      <i className="fa-solid fa-trash"  style={{color:"#ff00ff"}}></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Smells Like Teen Spirit</td>
                  <td>Nirvana</td>
                  <td>Nevermind</td>
                  <td>Grunge</td>
                  <td>
                    <button className="btn btn-primary me-2">
                      <i className="fa-solid fa-pen-to-square" style={{color:"#ff00ff"}}></i>
                    </button>
                    <button className="btn btn-danger">
                      <i className="fa-solid fa-trash"  style={{color:"#ff00ff"}}></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Shape of You</td>
                  <td>Ed Sheeran</td>
                  <td>÷</td>
                  <td>Pop</td>
                  <td>
                    <button className="btn btn-primary me-2">
                      <i className="fa-solid fa-pen-to-square" style={{color:"#ff00ff"}}></i>
                    </button>
                    <button className="btn btn-danger">
                      <i className="fa-solid fa-trash"  style={{color:"#ff00ff"}}></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  };
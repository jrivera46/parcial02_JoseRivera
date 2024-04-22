

export const CancionListar = () => {
  return (
    <>
      <div className="pt-3 d-flex justify-content-center">
        <div className="col-md-8">
          <table className="table table-bordered border border-dark">
            <thead>
              <tr>
                <th style={{width:"10%"}}>ID</th>
                <th style={{width:"30%"}}>Título</th>
                <th style={{width:"20%"}}>Artista</th>
                <th style={{width:"20%"}}>Álbum</th>
                <th style={{width:"20%"}}>Género</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Bohemian Rhapsody</td>
                <td>Queen</td>
                <td>A Night at the Opera</td>
                <td>Rock</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Smells Like Teen Spirit</td>
                <td>Nirvana</td>
                <td>Nevermind</td>
                <td>Grunge</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Shape of You</td>
                <td>Ed Sheeran</td>
                <td>÷</td>
                <td>Pop</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
import React, { Component } from "react";
import Genre from "./Genre";

// let genres = [
//   { genre: "Acción" },
//   { genre: "Animación" },
//   { genre: "Aventura" },
//   { genre: "Ciencia Ficción" },
//   { genre: "Comedia" },
//   { genre: "Documental" },
//   { genre: "Drama" },
//   { genre: "Fantasia" },
//   { genre: "Infantiles" },
//   { genre: "Musical" },
// ];

class GenresInDb extends Component {
  constructor() {
    super();
    this.state = {
      genresList: [],
    };
  }
  componentDidMount() {
    fetch("/api/genres")
      .then((respuesta) => {
        // console.log(respuesta);
        return respuesta.json();
      })
      .then((genres) => {
        // console.log("generos");
        console.log(genres.data);
        this.setState({ genresList: genres.data });
        // console.log(genres);
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  }
  cambiaFondo() {
    document.querySelector(".fondoCaja").classList.toggle("bg-secondary");
  }

  render() {
    return (
      <React.Fragment>
        {/*<!-- Categories in DB -->*/}
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6
                className="m-0 font-weight-bold text-gray-800"
                onMouseOver={this.cambiaFondo}
                onMouseOut={this.cambiaFondo}
              >
                Genres in Data Base
              </h6>
            </div>
            <div className="card-body fondoCaja">
              <div className="row">
                {
                  // genres.map((genre, index) => {
                  //   return <Genre {...genre} key={index} />;
                  // })
                  this.state.genresList.map((genre, index) => {
                    return <Genre {...genre} key={index} />;
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default GenresInDb;

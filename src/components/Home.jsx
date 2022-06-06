import React from "react";
import { Carousel } from "react-bootstrap";
import canape from "../images/canape.png";
import salon from "../images/salon.png";
import chambre from "../images/chambre.png";
import chaise1 from "../images/Chaise1.png";
import chaise2 from "../images/Chaise2.png";
import etagere2 from "../images/Etagere2.png";
import etagere1 from "../images/Etagere1.png";
import canape2 from "../images/Canape2.png";
import Range from "./Range.jsx";
function Home() {
  return (
    <>
      <div
        className="mx-auto d-block border border-dark"
        style={{ display: "block", width: 700, margin: 60 }}
        d-flex
      >
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={canape} alt="First slide" />
            <Carousel.Caption>
              <h3>SUD WATASHI</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={salon} alt="Second slide" />

            <Carousel.Caption>
              <h3>NORD WATASHI</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={chambre} alt="Third slide" />

            <Carousel.Caption>
              <h3>WATASHI</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <Range />
      <div>
        <div className="container my-5 py-5">
          <div className="rom">
            <div className="col-12">
              <h1 className="display-6 fw-bolder">Produits populaires</h1>
              <hr />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="col-md-2 mb-2  border border-dark">
            <div className="card h-80 text-center p-3">
              <img
                src={chaise1}
                style={{
                  width: 150,
                  alignSelf: "center",
                }}
              />
              <div className="card-body">
                <h5 className="card-title"> Une chaise confortable</h5>
                <p className="card-text lead">200$</p>
                <div>
                  <span className="fa fa-star text-secondary"></span>
                  <span className="fa fa-star  text-secondary"></span>
                  <span className="fa fa-star  text-secondary"></span>
                  <span className="fa fa-star  text-secondary"></span>
                  <span className="fa fa-star">(60)</span>
                </div>
                <a href="/chair" className="btn btn-dark">
                  Acheter
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-2 ms-4 border border-dark">
            <div className="card h-80 text-center p-3">
              <img
                src={chaise2}
                style={{
                  width: 200,
                  alignSelf: "center",
                }}
              />
              <div className="card-body">
                <h5 className="card-title"> Une chaise en bois d'accajou</h5>

                <p className="card-text lead">250$</p>
                <link rel="stylesheet" />
                <div>
                  <span className="fa fa-star text-secondary"></span>
                  <span className="fa fa-star text-secondary"></span>
                  <span className="fa fa-star text-secondary"></span>
                  <span className="fa fa-star text-secondary"></span>
                  <span className="fa fa-star"> (12)</span>
                </div>
                <a href="chairaccajou" className="btn btn-dark">
                  Acheter
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-2 ms-4  border border-dark">
            <div className="card h-80 text-center p-3">
              <img
                src={etagere2}
                style={{
                  width: 160,
                  alignSelf: "center",
                }}
              />
              <div className="card-body">
                <h5 className="card-title"> Une étagère en bois blanc</h5>
                <p className="card-text lead">150$</p>

                <div>
                  <span className="fa fa-star text-secondary"></span>
                  <span className="fa fa-star text-secondary"></span>
                  <span className="fa fa-star text-secondary"></span>
                  <span className="fa fa-star text-secondary"></span>
                  <span className="fa fa-star"> (30)</span>
                </div>
                <a href="etagerewhite" className="btn btn-dark">
                  Acheter
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="col-md-2 mb-2  border border-dark">
            <div className="card h-80 text-center p-3">
              <img
                src={etagere1}
                style={{
                  width: 150,
                  alignSelf: "center",
                }}
              />
              <div className="card-body">
                <h5 className="card-title"> Une étagère en bois de chaine</h5>
                <p className="card-text lead">100$</p>
                <div>
                  <span className="fa fa-star text-secondary"></span>
                  <span className="fa fa-star text-secondary"></span>
                  <span className="fa fa-star text-secondary"></span>
                  <span className="fa fa-star "></span>
                  <span className="fa fa-star "> (18)</span>
                </div>
                <a href="etagerechene" className="btn btn-dark">
                  Acheter
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-2 ms-4  border border-dark">
            <div className="card h-80 text-center p-3">
              <img
                src={canape}
                style={{
                  width: 210,
                  alignSelf: "center",
                }}
              />
              <div className="card-body">
                <h5 className="card-title"> Un canapé en cuire</h5>
                <p className="card-text lead">1200$</p>
                <div>
                  <span className="fa fa-star text-secondary"></span>
                  <span className="fa fa-star text-secondary"></span>
                  <span className="fa fa-star text-secondary"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"> (15)</span>
                </div>
                <a href="canape" className="btn btn-dark">
                  Acheter
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-2 ms-4  border border-dark">
            <div className="card h-80 text-center p-3">
              <img
                src={canape2}
                style={{
                  width: 210,
                  alignSelf: "center",
                  marginTop: 20,
                }}
              />
              <div className="card-body">
                <h5 className="card-title">Un canapé en tissu</h5>
                <p className="card-text lead">1000$</p>
                <div>
                  <span className="fa fa-star text-secondary"></span>
                  <span className="fa fa-star text-secondary"></span>
                  <span className="fa fa-star text-secondary"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"> (20)</span>
                </div>
                <a href="canapetissu" className="btn btn-dark">
                  Acheter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul className="pagination d-flex justify-content-center  ">
        <li className="page-item  border border-dark ">
          <a className="page-link text-dark" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li className="page-item  border border-dark">
          <a className="page-link text-dark" href="/products">
            1
          </a>
        </li>
        <li className="page-item  border border-dark">
          <a className="page-link text-dark" href="alaune">
            2
          </a>
        </li>
        <li className="page-item  border border-dark">
          <a className="page-link text-dark" href="news">
            3
          </a>
        </li>
        <li className="page-item  border border-dark">
          <a className="page-link text-dark" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
      <footer>
        <div class="bg-dark py-4 bg-black">
          <div class="container text-center">
            <p class="text-white mb-0 py-2">Copyright © 2022</p>
            <p className="text-white mb-0 py-2">Mentions légales | Contact</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;

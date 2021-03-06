import React, { useState, useEffect } from "react";
import chaise1 from "../images/Chaise1.png";
import chaise2 from "../images/Chaise2.png";
import canape from "../images/canape.png";
import etagere1 from "../images/Etagere1.png";
import etagere2 from "../images/Etagere2.png";
import canape2 from "../images/Canape2.png";

const Products = () => {
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="rom">
          <div className="col-12">
            <h1 className="display-6 fw-bolder">Nos Produits </h1>
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
              <h5 className="card-title"> Une ??tag??re en bois blanc</h5>
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
              <h5 className="card-title"> Une ??tag??re en bois de chaine</h5>
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
              <h5 className="card-title"> Un canap?? en cuire</h5>
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
              <h5 className="card-title">Un canap?? en tissu</h5>
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
      <footer>
        <div class="bg-dark py-4 bg-black">
          <div class="container text-center ">
            <p class="text-white mb-0 py-2">Copyright ?? 2022</p>
            <p className="text-white mb-0 py-2">Mentions l??gales | Contact</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Products;

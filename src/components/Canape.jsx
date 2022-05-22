import canape from "../images/canape.png";

function Chair() {
  return (
    <div>
      <div className="container">
        <h1 className="my-4">Un canapé en cuire</h1>

        <div className="row border border-dark">
          <div className="col-md-5">
            <img className="img-fluid " src={canape} alt="" />
          </div>

          <div className="col-md-4">
            <h3 className="my-3">Détails du produit</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              viverra euismod odio, gravida pellentesque urna varius vitae. Sed
              dui lorem.
            </p>
            <h2 className="">1200€</h2>
            <div>
              <span className="fa fa-star text-secondary"></span>
              <span className="fa fa-star text-secondary"></span>
              <span className="fa fa-star text-secondary"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"> (20)</span>
            </div>
            <p>10 en stocks</p>
            <button className="my-2 bg-dark text-white">
              Ajouter au panier
            </button>
          </div>
        </div>

        <div className="row my-4 ">
          <div className="col-md-3 col-sm-6 mb-4">
            <a href="#">
              <img
                className="img-fluid border border-dark"
                src={canape}
                alt=""
              />
            </a>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <a href="#">
              <img
                className="img-fluid border border-dark"
                src={canape}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <footer>
        <div class="bg-dark py-4 bg-black">
          <div class="container text-center ">
            <p class="text-white mb-0 py-2">Copyright © 2022</p>
            <p className="text-white mb-0 py-2">Mentions légales | Contact</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Chair;

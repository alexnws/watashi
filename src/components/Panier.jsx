import Panier from "../images/Panier.PNG";

const panier = () => {
  return (
    <div>
      <img className="mx-auto d-block  " src={Panier}></img>
      <footer>
        <div class="bg-dark py-4 bg-black">
          <div class="container text-center">
            <p class="text-white mb-0 py-2">Copyright © 2022</p>
            <p className="text-white mb-0 py-2">Mentions légales | Contact</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default panier;

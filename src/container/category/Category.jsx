import { images } from "../../constant";

const Category = () => {
  return (
    <section className="py-5 overflow-hidden">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header d-flex flex-wrap justify-content-between mb-5">
              <h2 className="section-title">Category</h2>

              <div className="d-flex align-items-center">
                <a href="#" className="btn-link text-decoration-none">
                  View All Categories →
                </a>
                <div className="swiper-buttons">
                  <button className="swiper-prev category-carousel-prev btn btn-yellow">
                    ❮
                  </button>
                  <button className="swiper-next category-carousel-next btn btn-yellow">
                    ❯
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="category-carousel swiper">
              <div className="swiper-wrapper">
                <a
                  href="category.html"
                  className="nav-link category-item swiper-slide"
                >
                  <img
                    src={images.iconVegetablesBroccoli}
                    alt="Category Thumbnail"
                  />
                  <h3 className="category-title">Fruits & Veges</h3>
                </a>
                <a
                  href="category.html"
                  className="nav-link category-item swiper-slide"
                >
                  <img
                    src={images.iconBreadBaguette}
                    alt="Category Thumbnail"
                  />
                  <h3 className="category-title">Breads & Sweets</h3>
                </a>
                <a
                  href="category.html"
                  className="nav-link category-item swiper-slide"
                >
                  <img
                    src={images.iconSoftDrinksBottle}
                    alt="Category Thumbnail"
                  />
                  <h3 className="category-title">Fruits & Veges</h3>
                </a>
                <a
                  href="category.html"
                  className="nav-link category-item swiper-slide"
                >
                  <img
                    src={images.iconWineGlassBottle}
                    alt="Category Thumbnail"
                  />
                  <h3 className="category-title">Fruits & Veges</h3>
                </a>
                <a
                  href="category.html"
                  className="nav-link category-item swiper-slide"
                >
                  <img
                    src={images.iconAnimalProductsDrumsticks}
                    alt="Category Thumbnail"
                  />
                  <h3 className="category-title">Fruits & Veges</h3>
                </a>
                <a
                  href="category.html"
                  className="nav-link category-item swiper-slide"
                >
                  <img
                    src={images.iconBreadHerbFlour}
                    alt="Category Thumbnail"
                  />
                  <h3 className="category-title">Fruits & Veges</h3>
                </a>
                <a
                  href="category.html"
                  className="nav-link category-item swiper-slide"
                >
                  <img
                    src={images.iconVegetablesBroccoli}
                    alt="Category Thumbnail"
                  />
                  <h3 className="category-title">Fruits & Veges</h3>
                </a>
                <a
                  href="category.html"
                  className="nav-link category-item swiper-slide"
                >
                  <img
                    src={images.iconVegetablesBroccoli}
                    alt="Category Thumbnail"
                  />
                  <h3 className="category-title">Fruits & Veges</h3>
                </a>
                <a
                  href="category.html"
                  className="nav-link category-item swiper-slide"
                >
                  <img
                    src={images.iconVegetablesBroccoli}
                    alt="Category Thumbnail"
                  />
                  <h3 className="category-title">Fruits & Veges</h3>
                </a>
                <a
                  href="category.html"
                  className="nav-link category-item swiper-slide"
                >
                  <img
                    src={images.iconVegetablesBroccoli}
                    alt="Category Thumbnail"
                  />
                  <h3 className="category-title">Fruits & Veges</h3>
                </a>
                <a
                  href="category.html"
                  className="nav-link category-item swiper-slide"
                >
                  <img
                    src={images.iconVegetablesBroccoli}
                    alt="Category Thumbnail"
                  />
                  <h3 className="category-title">Fruits & Veges</h3>
                </a>
                <a
                  href="category.html"
                  className="nav-link category-item swiper-slide"
                >
                  <img
                    src={images.iconVegetablesBroccoli}
                    alt="Category Thumbnail"
                  />
                  <h3 className="category-title">Fruits & Veges</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;

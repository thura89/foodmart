import {
  BestSellingProduct,
  Blog,
  Discount,
  FreeDelivery,
  JustArrive,
  MostPopularProduct,
  MyCard,
  TrendingProduct,
} from "./components";

import {
  Banner,
  Category,
  Footer,
  Header,
  Search,
  NewArrivalCategories,
  SubScribePurchase,
  FooterBottom,
  FootMartApp,
  LookingFor,
} from "./container";

const App = () => {
  return (
    <>
      <MyCard />
      <Search />
      <Header />
      <Banner />
      <Category />
      <NewArrivalCategories />
      <TrendingProduct />
      <Discount />
      <BestSellingProduct />
      <SubScribePurchase />
      <MostPopularProduct />
      <JustArrive />
      <Blog />
      <FootMartApp />
      <LookingFor />
      <FreeDelivery />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default App;

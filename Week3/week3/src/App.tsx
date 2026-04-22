import UserDirectory from "./components/UserDirectory";
import ProductCatalog from "./Productcatalog";

export default function App() {
  return (
    <div>
      <UserDirectory />   {/* ← tämä näyttää nimet */}
      <ProductCatalog />
    </div>
  );
}
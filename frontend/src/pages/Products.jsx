import Container from "@mui/material/Container";
import HeroSection from "../components/Products/HeroSection";
import ProductsCardSection from "../components/Products/ProductsCardSection";
function Products() {
  return (
    <>
      <Container maxWidth="xl">
        <HeroSection></HeroSection>
        <ProductsCardSection></ProductsCardSection>
      </Container>
    </>
  );
}

export default Products;

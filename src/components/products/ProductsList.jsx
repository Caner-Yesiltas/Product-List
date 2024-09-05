import { Container, Form, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import "./Products.scss";
import { products, categories } from "../../helper/data";
import { Header } from "../header/Header";
import { useState } from "react";

const ProductsList = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const handleCategories = (e) => {
    setFilter(e.target.textContent.toLowerCase());
  };

  const handSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  // const filteredProducts = products.filter((item) =>
  //   item.title.toLowerCase().includes(search.toLowerCase())
  // ); vs

  const filtered = products.filter(
    (item) =>
      (filter === "all" || item.category.toLowerCase() === filter) &&
      item.title.toLowerCase().includes(search)
  );

  return (
    <>
      <Header categories={categories} handleCategories={handleCategories} />
      <Form.Control
        placeholder="Search Product..."
        type="search"
        className="w-50 m-auto"
        onChange={handSearch}
      />
      <Container className="product-list rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">
          {filtered.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductsList;

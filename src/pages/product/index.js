import React, { useState, useEffect } from "react";
import { auth } from "../../services";
import styled from "styled-components";
import { Card } from "../../components/molecules";

const Product = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [isShowModal, setShowModal] = useState(true);

  const getAllProduk = () => {
    auth
      .getAllProduk()
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getAllProduk();
  }, []);

  return (
    <Pages>
      {isShowModal && (
        <Banner>
          <BannerTitle>Selamat Datang, Selamat Berbelanja</BannerTitle>
          <BannerButton onClick={() => setShowModal(false)}>X</BannerButton>
        </Banner>
      )}
      <ProductWrapper>
        {products.map((product) => {
          return (
            <Card key={product.id}>
              {/* <img src={product.variants.images.mini_url} alt="brand image" /> */}
              <Description>{product.description}</Description>
              <div>
                <Price>{product.display_normal_price}</Price>

                <DiscountWrapper>
                  <DiscountPercentage>
                    {product.display_promo_price_percentage}
                  </DiscountPercentage>
                  <DiscountPrice>{product.display_price}</DiscountPrice>
                </DiscountWrapper>
                <Unit>Berat Bersih : {product.display_unit}</Unit>
                <AddCart>Add to Cart</AddCart>
              </div>
            </Card>
          );
        })}
      </ProductWrapper>
    </Pages>
  );
};

const Pages = styled.div`
  padding: 10px 120px;
`;

const Banner = styled.div`
  background-color: #f8f7de;
  padding: 10px 25px;
  display: flex;
  flex-direction: row;
  max-width: 100%;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const BannerTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #03506f;
`;

const BannerButton = styled.button`
  text-decoration: none;
  background-color: #f8f7de;
  border: none;
  font-size: 16px;
  font-weight: bold;
  color: #4e8d7c;
  &:hover {
    color: #fff;
  }
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Description = styled.p`
  font-weight: bold;
  font-size: 21px;
  color: #045762;
`;

const Price = styled.p`
  color: #d35d6e;
  font-size: 16px;
  font-weight: bold;
  border-radius: 10px;
  flex: 1;
`;

const DiscountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: -15px 0px;
`;

const DiscountPercentage = styled.p`
  padding: 5px;
  background-color: #dff3e3;
  color: #5aa469;
  font-size: 16px;
  font-weight: bold;
  border-radius: 10px;
`;

const DiscountPrice = styled.p`
  color: #045762;
  font-size: 24px;
  font-weight: bold;
`;

const Unit = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: #045762;
`;

const AddCart = styled.button`
  text-decoration: none;
  border: none;
  margin-top: 20px;
  background-color: #bedbbb;
  padding: 10px;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  border-radius: 10px;
  color: #4e8d7c;
  &:hover {
    background-color: #5aa469;
    color: #fff;
  }
`;

export default Product;

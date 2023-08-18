import { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getProducts } from "../../helpers/product";
import ProductGridSingle from "../../components/product/ProductGridSingle";
import axios from "axios";
import baseurl from "../../assets/baseurl/baseurl";

const ProductGrid = ({
  spaceBottomClass,
  category,
  type,
  limit
}) => {
  const { products } = useSelector((state) => state.product);
  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);
  const prods = getProducts(products, category, type, limit)
  const [areas,setareas] = useState();

  const getData = () => {
    // setLoader(true);
    var config = {
      method: "Get",
      url: `${baseurl.baseurl}allgetarea`,
    };
    axios(config)
      .then(function (response) {
        console.log(response);
       setareas(response?.data)
    
       
       
      })
      .catch(function (error) {
        console.log(error);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        
      });
  };

  useEffect(() => {
    getData();
  }, []);



  
  
  return (
    <Fragment>

      {areas?.length !== 0 ? areas?.map(areas => {
        return (
          <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6" key={areas.id}>
            <ProductGridSingle
              spaceBottomClass={spaceBottomClass}
              product={areas}
              currency={currency}
              cartItem={
                cartItems.find((cartItem) => cartItem.id === areas.id)
              }
              wishlistItem={
                wishlistItems.find(
                  (wishlistItem) => wishlistItem.id === areas.id
                )
              }
              compareItem={
                compareItems.find(
                  (compareItem) => compareItem.id === areas.id
                )
              }
            />
          </div>
        );
      }):null}
    </Fragment>
  );
};

ProductGrid.propTypes = {
  spaceBottomClass: PropTypes.string,
  category: PropTypes.string,
  type: PropTypes.string,
  limit: PropTypes.number
};



export default ProductGrid;

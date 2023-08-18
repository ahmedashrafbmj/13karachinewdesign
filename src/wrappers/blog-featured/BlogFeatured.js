import PropTypes from "prop-types";
import clsx from "clsx";
// import blogFeaturedData from "../../data/blog-featured/blog-featured.json";
import BlogFeaturedSingle from "../../components/blog-featured/BlogFeaturedSingle";
import SectionTitle from "../../components/section-title/SectionTitle";
import { useEffect, useState } from "react";
import baseurl from "../../assets/baseurl/baseurl";
import axios from "axios";

const BlogFeatured = ({ spaceTopClass, spaceBottomClass }) => {
  const [products,setProduct] = useState();

  const getData = () => {
    // setLoader(true);
    var config = {
      method: "Get",
      url: `${baseurl.baseurl}allpostdata`,
    };
    axios(config)
      .then(function (response) {
        console.log(response);
        setProduct(response?.data)
    
       
       
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
console.log(products,"products")

  return (
    <div className={clsx("blog-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <SectionTitle
          titleText="OUR BLOG"
          positionClass="text-center"
          spaceClass="mb-55"
        />
        <div className="row">
          {products?.map(singlePost => (
            <div className="col-lg-4 col-sm-6" key={singlePost.id}>
              <BlogFeaturedSingle singlePost={singlePost} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

BlogFeatured.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BlogFeatured;

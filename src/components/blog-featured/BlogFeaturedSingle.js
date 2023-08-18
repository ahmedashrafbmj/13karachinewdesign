import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

const BlogFeaturedSingle = ({ singlePost }) => {
  return (
    <div className="blog-wrap mb-30 scroll-zoom">
      <div className="blog-img">
        {/* <Link to={process.env.PUBLIC_URL + singlePost?.url}> */}
          <img src={process.env.PUBLIC_URL + singlePost?.imageURL} alt=""  height="250vh"/>
        {/* </Link> */}
        <div className="blog-category-names">
      
              <span className="purple">
                {singlePost?.category}
              </span>
              <span className="purple">
                {singlePost?.prodarea}
              </span>
           
        </div>
      </div>
      <div className="blog-content-wrap">
        <div className="blog-content text-center">
          <h3>
            {/* <Link to={process.env.PUBLIC_URL + singlePost?.url}> */}
              {singlePost?.productTitle}
            {/* </Link> */}
          </h3>
          <span>
            By{" "}
            {/* <Link to={process.env.PUBLIC_URL + singlePost?.authorUrl}> */}
              {singlePost?.hotelname}
            {/* </Link> */}
          </span>
        </div>
      </div>
    </div>
  );
};

BlogFeaturedSingle.propTypes = {
  singlePost: PropTypes.shape({})
};

export default BlogFeaturedSingle;

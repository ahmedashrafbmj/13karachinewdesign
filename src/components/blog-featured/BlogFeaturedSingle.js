import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

const BlogFeaturedSingle = ({ singlePost }) => {
  console.log(singlePost,"zain")
  return (
    // <div className="blog-wrap mb-30 scroll-zoom">
    //   <div className="blog-img">
    //     {/* <Link to={process.env.PUBLIC_URL + singlePost?.url}> */}
    //       <img src={process.env.PUBLIC_URL + singlePost?.imageURL} alt=""  height="250vh"/>
    //     {/* </Link> */}
    //     <div className="blog-category-names">
      
    //           <span className="purple">
    //             {singlePost?.category}
    //           </span>
    //           <span className="purple">
    //             {singlePost?.prodarea}
    //           </span>
           
    //     </div>
    //   </div>
    //   <div className="blog-content-wrap">
    //     <div className="blog-content text-center">
    //       <h3>
    //         {/* <Link to={process.env.PUBLIC_URL + singlePost?.url}> */}
    //           {singlePost?.productTitle}
    //         {/* </Link> */}
    //       </h3>
    //       <span>
    //         By{" "}
    //         {/* <Link to={process.env.PUBLIC_URL + singlePost?.authorUrl}> */}
    //           {singlePost?.hotelname}
    //         {/* </Link> */}
    //       </span>
    //     </div>
    //   </div>
    // </div>

    <>
  <div className="blog-wrap mb-30 scroll-zoom"
    style={{
      border:"1px solid black",
      display: "flex",
      justifyContent: "center", // Center horizontally
      alignItems: "center",
      cursor:"pointer"     // Center vertically
    
  
    }}
  >
    <div className="blog-img " 
    style={{cursor:"pointer"}}>
      <img
        src={process.env.PUBLIC_URL + singlePost?.imageURL}
        alt=""
        height="250vh"
        
      />
    </div>
    <div className="">
    <div className="">
    <div>azain</div>
    <div>b</div>
    <div>c</div>

    </div>
    </div>
  </div>
</>


  );
};

BlogFeaturedSingle.propTypes = {
  singlePost: PropTypes.shape({})
};

export default BlogFeaturedSingle;

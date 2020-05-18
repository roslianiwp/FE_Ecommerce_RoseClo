// import React, { Fragment } from "react";
// import Navigation from "../components/NavBar";
// import Footer from "../components/Footer";
// import { connect } from "react-redux";
// import { doSignOut } from "../store/action/actionUser";
// import { getAllTrans } from "../store/action/actionTransaction";
// import { Link } from "react-router-dom";
// import { MDBBtn } from "mdbreact";

// class Admin extends React.Component {
//   render() {
//     return (
//       <Fragment>
//         <Navigation {...this.props} />

//         <Footer />
//       </Fragment>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     login: state.user.is_login,
//     data: state.product.data,
//     dataCart: state.trans.dataCart,
//   };
// };

// const mapDispatchToProps = {
//   doSignOut,
//   getAllTrans,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Admin);

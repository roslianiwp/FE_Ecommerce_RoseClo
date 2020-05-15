import React, { Fragment } from "react";
import Navigation from "../components/NavBar";
import Footer from "../components/Footer";
import ItemDetailComp from "../components/ItemDetailComp";
import { doSignOut } from "../store/action/actionUser";
import { getDetail } from "../store/action/actionProduct";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import $ from "jquery";

class ItemDetail extends React.Component {
  componentDidMount = async () => {
    const paramCategory = await this.props.match.params.id;
    if (paramCategory) {
      this.props.getDetail(paramCategory);
    }
    // $(function () {
    //   let native_width = 0;
    //   let native_height = 0;
    //   let mouse = { x: 0, y: 0 };
    //   let magnify;
    //   let cur_img;

    //   let ui = {
    //     magniflier: $(".magniflier"),
    //   };
    //   if (ui.magniflier.length) {
    //     let div = document.createElement("div");
    //     div.setAttribute("class", "glass");
    //     ui.glass = $(div);

    //     $("body").append(div);
    //   }
    //   let mouseMove = function (e) {
    //     let $el = $(this);
    //     let magnify_offset = cur_img.offset();
    //     mouse.y = e.pageY - magnify_offset.top;
    //     if (
    //       mouse.x < cur_img.width() &&
    //       mouse.y < cur_img.height() &&
    //       mouse.x > 0 &&
    //       mouse.y > 0
    //     ) {
    //       magnify(e);
    //     } else {
    //       ui.glass.fadeOut(100);
    //     }

    //     return;
    //   };

    //   magnify = function (e) {
    //     let rx =
    //       Math.round(
    //         (mouse.x / cur_img.width()) * native_width - ui.glass.width() / 2
    //       ) * -1;
    //     let ry =
    //       Math.round(
    //         (mouse.y / cur_img.height()) * native_height - ui.glass.height() / 2
    //       ) * -1;
    //     let bg_pos = rx + "px " + ry + "px";
    //     let glass_left = e.pageX - ui.glass.width() / 2;
    //     let glass_top = e.pageY - ui.glass.height() / 2;
    //     ui.glass.css({
    //       left: glass_left,
    //       top: glass_top,
    //       backgroundPosition: bg_pos,
    //     });

    //     return;
    //   };

    //   $(".magniflier").on("mousemove", function () {
    //     ui.glass.fadeIn(200);

    //     cur_img = $(this);

    //     let large_img_loaded = cur_img.data("large-img-loaded");
    //     let src = cur_img.data("large") || cur_img.attr("src");
    //     if (src) {
    //       ui.glass.css({
    //         "background-image": "url(" + src + ")",
    //         "background-repeat": "no-repeat",
    //       });
    //     }
    //     if (!cur_img.data("native_width")) {
    //       let image_object = new Image();

    //       image_object.onload = function () {
    //         native_width = image_object.width;
    //         native_height = image_object.height;
    //         cur_img.data("native_width", native_width);
    //         cur_img.data("native_height", native_height);
    //         mouseMove.apply(this, arguments);
    //         ui.glass.on("mousemove", mouseMove);
    //       };

    //       image_object.src = src;

    //       return;
    //     } else {
    //       native_width = cur_img.data("native_width");
    //       native_height = cur_img.data("native_height");
    //     }
    //     mouseMove.apply(this, arguments);

    //     ui.glass.on("mousemove", mouseMove);
    //   });

    //   ui.glass.on("mouseout", function () {
    //     ui.glass.off("mousemove", mouseMove);
    //   });
    // });
  };
  render() {
    return (
      <Fragment>
        <Navigation {...this.props} />

        <ItemDetailComp
          gambar={this.props.dataDetail.image}
          harga={this.props.dataDetail.price}
          nama={this.props.dataDetail.name}
          warna={this.props.dataDetail.color}
          size={this.props.dataDetail.size}
        />
        {/* <div className="container">
          <div className="row">
            <div className="col-sm-5 mt-5 justify-content-end text-right">
              <img
                className="magniflier"
                // width="200"
                src={this.props.dataDetail.image}
                alt="baju"
                id="baju-utama"
              />
            </div>
            <div className="col-sm-7 mt-5 text-center justify-content-start">
              <h4>{this.props.dataDetail.name}</h4>
              <br />
              <span>Rp.{this.props.dataDetail.price}.-</span>
              <br />
              <span>Warna: {this.props.dataDetail.color}</span>
              <br />
              <span>Size: {this.props.dataDetail.size}</span>
              <div className="row mt-4 justify-content-center">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: "#D9BB5E",
                    borderRadius: "50px",
                    fontWeight: "bold",
                  }}
                >
                  Add to Cart
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: "red",
                    borderRadius: "50px",
                    fontWeight: "bold",
                  }}
                >
                  Beli Sekarang!
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-5 mt-5">
              <div className="row" style={{ marginLeft: "100px" }}>
                <div className="col-3">
                  <img
                    src={this.props.dataDetail.image}
                    alt="baju"
                    id="gambar-detail"
                  />
                </div>
                <div className="col-3">
                  <img
                    src={this.props.dataDetail.image}
                    alt="baju"
                    id="gambar-detail"
                  />
                </div>
                <div className="col-3">
                  <img
                    src={this.props.dataDetail.image}
                    alt="baju"
                    id="gambar-detail"
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <Footer />
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    login: state.user.is_login,
    dataDetail: state.product.dataDetail,
  };
};

const mapDispatchToProps = {
  doSignOut,
  getDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);

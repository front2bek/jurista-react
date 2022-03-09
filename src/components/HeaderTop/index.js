import React from "react";
import "./style.scss";
import { useTranslation } from "react-i18next";
const HeaderTop = (props) => {
  const { t, i18n } = useTranslation();
  return (
    <div className={props.className}>
      <div className="container">
        <div className="headerTopMainWrapper">
          <div className="row">
            <div className="col-md-3 col-sm-12 col-12 col-lg-5">
              <ul className="d-flex accountLoginArea">
                <li>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>121
                  King Street, Melbourne , Australia
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-12 col-12 col-lg-5">
              <ul className="headerContact">
                <li>
                  <i className="fa fa-phone"></i> 3164-5456854
                </li>
                <li>
                  <i className="fa fa-clock-o"></i> 9AM - PM
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-12">
              <div className="btnStyle btnStyle2 text-right">
                <a href="#">{t("test.label")}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderTop;

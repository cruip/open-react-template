import React, { useState, useEffect, useRef } from "react";
import className from "classnames";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

export default function ThirdSection({ t }) {
  const [current, setCurrent] = useState("accordion1");

  const getCurrent = (item) => {
    current === item ? setCurrent("") : setCurrent(item);
  };

  return (
    <section className="section-padding-l">
      <div className="container reveal-from-bottom" data-reveal-delay="200">
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="0"
              className="fl fl-ju-co-sp-be fl-al-it-ce"
              onClick={() => {
                getCurrent("accordion1");
              }}
            >
              {t("levels_section_3_item1_header")}
              <img
                className={className(
                  "accordion1" === current && "chevron-rotate",
                  "transform"
                )}
                src={require("../../../assets/images/arrow-down.svg")}
                width="17px"
              />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="text-align-start">
                <div
                  style={{
                    width: "32px",
                    height: "2px",
                    display: "inline-block",
                  }}
                ></div>
                {t("levels_section_3_item1_content")}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="1"
              className="fl fl-ju-co-sp-be fl-al-it-ce"
              onClick={() => {
                getCurrent("accordion2");
              }}
            >
              {t("levels_section_3_item2_header")}

              <img
                className={className(
                  "accordion2" === current && "chevron-rotate",
                  "transform"
                )}
                src={require("../../../assets/images/arrow-down.svg")}
                width="17px"
              />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="text-align-start">
                <div
                  style={{
                    width: "32px",
                    height: "2px",
                    display: "inline-block",
                  }}
                ></div>
                {t("levels_section_3_item2_content")}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="2"
              className="fl fl-ju-co-sp-be fl-al-it-ce"
              onClick={() => {
                getCurrent("accordion3");
              }}
            >
              {t("levels_section_3_item3_header")}
              <img
                className={className(
                  "accordion3" === current && "chevron-rotate",
                  "transform"
                )}
                src={require("../../../assets/images/arrow-down.svg")}
                width="17px"
              />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body className="text-align-start">
                <div
                  style={{
                    width: "32px",
                    height: "2px",
                    display: "inline-block",
                  }}
                ></div>
                {t("levels_section_3_item3_content")}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="3"
              className="fl fl-ju-co-sp-be fl-al-it-ce"
              onClick={() => {
                getCurrent("accordion4");
              }}
            >
              {t("levels_section_3_item4_header")}
              <img
                src={require("../../../assets/images/arrow-down.svg")}
                width="17px"
                className={className(
                  "accordion4" === current && "chevron-rotate",
                  "transform"
                )}
              />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body className="text-align-start">
                <div
                  style={{
                    width: "32px",
                    height: "2px",
                    display: "inline-block",
                  }}
                ></div>
                {t("levels_section_3_item4_content")}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="4"
              className="fl fl-ju-co-sp-be fl-al-it-ce"
              onClick={() => {
                getCurrent("accordion5");
              }}
            >
              {t("levels_section_3_item5_header")}

              <img
                src={require("../../../assets/images/arrow-down.svg")}
                width="17px"
                className={className(
                  "accordion5" === current && "chevron-rotate",
                  "transform"
                )}
              />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body className="text-align-start">
                <div
                  style={{
                    width: "32px",
                    height: "2px",
                    display: "inline-block",
                  }}
                ></div>
                {t("levels_section_3_item5_content")}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="5"
              className="fl fl-ju-co-sp-be fl-al-it-ce"
              onClick={() => {
                getCurrent("accordion6");
              }}
            >
              {t("levels_section_3_item6_header")}

              <img
                src={require("../../../assets/images/arrow-down.svg")}
                width="17px"
                className={className(
                  "accordion6" === current && "chevron-rotate",
                  "transform"
                )}
              />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <Card.Body className="text-align-start">
                <div
                  style={{
                    width: "32px",
                    height: "2px",
                    display: "inline-block",
                  }}
                ></div>
                {t("levels_section_3_item6_content")}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </section>
  );
}

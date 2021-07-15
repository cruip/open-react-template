import React, { useContext } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import Image from "../../../elements/Image";

const UnitSection = (props) => {
  const { unitData, unitContent, unitTitle } = props;

  const router = useRouter();

  const { id } = router.query;

   console.log(id)

  return (
    <>
      <section className='pt-64' style={{ color: "whitesmoke" }}>
        <div className='fl-co-ce'>
          <div className='fl'>
            <div style={{ position: "absolute", left: 40 }}>
              <a href='/'>
                <Image type='icon' image='left-white_icon.svg' alt='Go back' />
              </a>
            </div>
            <h2 className='m-8 txt-al-ce' style={{ color: "whitesmoke" }}>
              {unitTitle}
            </h2>
          </div>
          <div>
            <p className='txt-al-ce'> {unitContent}</p>
          </div>
        </div>
      </section>
      <div
        className='fl fl-co fl-al-it-ce'
        style={{
          width: "max-content",
          margin: "auto",
          padding: "50px 0 100px 0",
        }}
      >
        {unitData.map(({ link, title, content, icon, finished }, index) => (
      <a  key={index} href={`/unit/${id}/practice` + link}>
            <div className='mb-32'>
           
                <div
                  className='card-transparent fl fl-al-it-ce fl-ju-co-sp-be practise-card-item'
                  style={{ cursor: "pointer" }}
                >
                  <div className='fl fl-al-it-ce'>
                    <Image
                      className='mr-24'
                      type='icon'
                      image={icon}
                      width={57}
                    />
                    <div>
                      <span>{title}</span>
                      <p className='m-0'>{content}</p>
                    </div>
                  </div>
                  <div>
                    <Image
                      type='icon'
                      image={
                        finished ? "checked_icon.svg" : "unchecked_icon.svg"
                      }
                      width={25}
                    />
                  </div>
                </div>
            </div>
            </a>
        ))}
            <Link
            key={}
            as={`/unit//practice`}
            href={`/unit/[id]/practice$`}
          >
            <div className='mb-32'>
              <a>
                <div
                  className='card-transparent fl fl-al-it-ce fl-ju-co-sp-be practise-card-item'
                  style={{ cursor: "pointer" }}
                >
                  <div className='fl fl-al-it-ce'>
                    <Image
                      className='mr-24'
                      type='icon'
                      image='write_icon.svg'
                      width={57}
                    />
                    <div>
                      <span>Write</span>
                      <p className='m-0'>Writing</p>
                    </div>
                  </div>
                  <div>
                    <Image
                      type='icon'
                      image={
                        false ? "checked_icon.svg" : "unchecked_icon.svg"
                      }
                      width={25}
                    />
                  </div>
                </div>
              </a>
            </div>
          </Link>
      </div>
    </>
  );
};

const mapState = (state) => ({
  unitData: state.UnitData.unitData,
  unitContent: state.UnitData.unitContent,
  unitTitle: state.UnitData.unitTitle,
});

export default connect(mapState)(UnitSection);

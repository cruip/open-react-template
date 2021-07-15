import React from "react";
import { connect } from "react-redux";
import FooterWrapp from "../Footer";
import Sidebar from "../Sidebar";
import PracticeLayout from "./Practice/PracticeLayout";
import PracticeFinished from "./Practice/PracticeFinished";
import Header from "../Header";
import UnitLayout from "./Unit";

const AppLayout = ({ children, currentLayout, practiceFinished }) => {
  return (
    // <>
    //   {{
    //     practice: <PracticeLayout children={children} />,
    //     practiceFinished: <PracticeFinished children={children} />,
    //     unit: <UnitLayout children={children} />,
    //   }[practiceFinished ? "practiceFinished" : currentLayout] || (
    <>
      <Sidebar />
      <div className='wrapper'>
        <Header />
        {children}
        {/* <FooterWrapp /> */}
      </div>
    </>
    //   )}
    // </>
  );
};

const mapState = (state) => ({
  practiceFinished: state.PracticeState.practiceFinished,
});

export default connect(mapState)(AppLayout);

import React from "react";
// import layout
import Layout from "../layout/Layout";
// import components
import Main from "../components/Main";
import Slider from "../components/Slider";
//import styles
import styles from "./styles/home.module.css";

function Home(props) {
  return (
    <Layout>
      <Main />
    </Layout>
  );
}

export default Home;

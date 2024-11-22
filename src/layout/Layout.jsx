import React from 'react';
// import components
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Time from '../components/Time';

// import styles
import styles from "./layout.module.css"

function Layout({children}) {
    return (
        <div className={styles.container}>
            <Time />
            <Navbar />
            <Banner />
            <div className={styles.childContainer}>
            {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
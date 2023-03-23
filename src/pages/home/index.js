import React from 'react';
import Cards from '../../components/cards';
import Footer from '../../components/footer';
import Header from '../../components/header/header';
import Video from '../../components/trailer';
import './styles.css';

function Home(){
    

    return(
        <>
            <Header />
            <div id='banner'></div>
            <Video />
            <Cards />
            <Footer />
        </>
        
    )
}

export default Home;
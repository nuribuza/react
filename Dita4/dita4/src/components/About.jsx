import React from 'react';

const About = () => {
    const x="Shkolla Digjitale Prizren";
    const arr= [1,2,3,4,5];
    const obj= {
        emri: 'Nuri',
        mbiemri: 'Buza',
        mosha: 17
    }
    const style = {
        color: '#00004e',
        backgroundColor: 'white',
        fontWeight: 900,
    }
    return (
        <>
            <section className='about'>
                <h2>Shkolla Digjitale</h2>
                <h2 style={style}>{ x }</h2>
                <h2> {arr} </h2>
                <h2> {obj.emri} </h2>
                <h2> {obj.mbiemri} </h2>
                <h2> {obj.mosha} </h2>
            </section>
        </>
    );
};

export default About;
import React from 'react';
import Container from '../Container';

const CountBox = ({ selectData, removeData}) => {

    return (
        <div>
            <Container >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-5">
                    <div className="count-box p-8 rounded-lg text-white text-center flex flex-col justify-center items-center h-64">
                        <p className="text-2xl font-light mb-2">In-Progress</p>
                        <p className="text-6xl font-bold">{selectData.length}</p>
                    </div>
                    <div className="count-box2  p-8 rounded-lg text-white text-center flex flex-col justify-center items-center h-64">
                        <p className="text-2xl font-light mb-2">Resolved</p>
                        <p className="text-6xl font-bold">{removeData.length}</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CountBox;
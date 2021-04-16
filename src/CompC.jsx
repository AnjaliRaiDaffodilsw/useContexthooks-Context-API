import React from 'react'
import { FirstName, LastName } from './App';
// use context API
const CompC = () => {
    return (
        <>
            <FirstName.Consumer>
                {(fname,) => {
                return (
                    <LastName.Consumer>
                    {(lname) => {
                        return (
                        <h1>
                             My name is {fname} {lname}
                        </h1>
                    );
                    }}
                </LastName.Consumer>
            );
                             
            }}
            </FirstName.Consumer>
        </>
    );
};

export default CompC;

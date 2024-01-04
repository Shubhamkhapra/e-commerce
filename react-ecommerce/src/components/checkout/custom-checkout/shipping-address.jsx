import React from "react";
import { Formik } from 'formik';


const validate = values=> {
    const {name, email, address, city, postal_code, state} = values;
    const errors = {};
    if(!name){
        errors.name = 'Required';
    }
    if(!email){
        errors.email = 'Required';
    }
    if(!address){
        errors.address = 'Required';
    }
    if(!city){
        errors.city = 'Required';
    }
    if(!postal_code){
        errors.postal_code = 'Required';
    }
    if(!state){
        errors.state = 'Required';
    }

    return errors;
}

const ShippingAddress = ({setShipping}) => {
    const initialValues = {
        name: '',
        email: '',
        address: ''
    };
    return (
        <div>
        <h4>Shipping Address</h4>
        <Formik 
        initialValues={initialValues}
        validate= {validate}
        onSubmit={(values) => {
            console.log(values);
            setShipping(values);
        }}
        >
            {
                ({values, errors, handleChange, handleSubmit}) => {
                    const {name, email, address} = errors;
                    return(
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input 
                                type="text" name="name" 
                                onChange={handleChange} 
                                value={values.name} 
                                placeholder="Name"
                                className={'nomad-input' + (name ? ' error' : '')}
                                />
                            </div>
                            <div>
                                <input 
                                type="email" name="email" 
                                onChange={handleChange} 
                                value={values.email} 
                                placeholder="Email"
                                className={'nomad-input' + (email ? ' error' : '')}
                                />
                            </div>
                            <div>
                                <input 
                                type="text" name="address" 
                                onChange={handleChange} 
                                value={values.address} 
                                placeholder="Address"
                                className={'nomad-input' + (address ? ' error' : '')}
                                />
                            </div>
                            <div>
                                <input 
                                type="text" name="city" 
                                onChange={handleChange} 
                                value={values.city}
                                placeholder="City"
                                className={'nomad-input' + (address ? ' error' : '')}
                                />
                            </div>
                            <div>
                                <input 
                                type="text" name="state" 
                                onChange={handleChange} 
                                value={values.state}
                                placeholder="State"
                                className={'nomad-input' + (address ? ' error' : '')}
                                />
                            </div>
                            <div>
                                <input 
                                type="text" name="postal_code" 
                                onChange={handleChange} 
                                value={values.postal_code}
                                placeholder="Postal Code"
                                className={'nomad-input' + (address ? ' error' : '')}
                                />
                            </div>
                            <div className="submit-btn">
                                <button type="submit"
                                className="nomad-btn button is-black submit"
                                >Continue</button>
                            </div>
                            </form>
                    )
                }
            }
        </Formik>
        </div>
    );
}


export default ShippingAddress;
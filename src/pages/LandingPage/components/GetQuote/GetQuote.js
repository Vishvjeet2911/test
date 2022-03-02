import React, { useState, useRef } from "react";
import {
  FormikControl
} from "../../../../components";
import { Formik, Form, Field } from "formik";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Autocomplete from '@mui/material/Autocomplete';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import * as Yup from "yup";
import axios from "axios";
import {
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

// const jsonp = require("jsonp");



const GetQuote = ({ getCategoryValue, setIsGetQuote }) => {

  const [quoteSubmitted, setQuoteSubmitted] = React.useState(false);

  const handleGetQuoteSubmit = async (values, { resetForm }) => {
    try {
      const result = await axios.post(
        "https://ig.oneconnectweb.com/api/v1/process/getquote",
        values
      );
      setQuoteSubmitted(true);
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [distance, setDistance] = useState('0');
  const [error, setError] = useState('');
  const [cost, setCost] = useState('');
  const ref = useRef(null);
   
  const adds = [];
  const [initialValues, setInitialValue]= useState({
    pickupLocation: "",
    dropoffLocation: "",
    shippingDate: "",
    weight: "",
    describeYourLoad: "",
    email: "",
    phoneNumber: ""
  });
  
  const validationSchema = Yup.object({
    pickupLocation: Yup.string().required("This Field is Required"),
    dropoffLocation: Yup.string().required("This Field is Required"),
    shippingDate: Yup.date().required("This Field is Required"),
    weight: Yup.number().required("This Field is Required"),
    describeYourLoad: Yup.string(),
    email: Yup.string().required("This Field is Required"),
    phoneNumber: Yup.string().required("This Field is Required")
  });
 const placeSearch = (e, value) =>{
    setAddresses([]);
    const params = {
      input : e.target.value,
      key: 'AIzaSyBXXOFHmWBvlsSWBms-N7lK1pIgOkByBC0',
    }
  
    var axios = require('axios');
    var url = new URL("https://maps.googleapis.com/maps/api/place/autocomplete/json?");
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    axios({
      method: 'post',
      url : 'https://adfreskdfhdsu.herokuapp.com/play/map',
      data: {url: url}
    }).then(function (response) {
      response.data.data.predictions.map((arrayItem) => (
        adds.push(arrayItem.description) 
        ));
        setAddresses(adds);
    })
    .catch(function (error) {
      console.log(error);
    });
 }

  const calculate = () => {
    const params = {
      origins : [initialValues.pickupLocation],
      destinations : [initialValues.dropoffLocation],
      key: 'AIzaSyBXXOFHmWBvlsSWBms-N7lK1pIgOkByBC0',
      mode: 'driving'
    }
    var axios = require('axios');
    var url = new URL("https://maps.googleapis.com/maps/api/distancematrix/json?");
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    if(initialValues.pickupLocation && initialValues.dropoffLocation){
      axios({
        method: 'post',
        url : 'https://adfreskdfhdsu.herokuapp.com/play/map',
        data: {url: url}
      }).then(function (response) {
        if(response.data.data.rows[0].elements[0].status !== 'OK') {
          setDistance('error');
        } else {
          var dis = response.data.data.rows[0].elements[0].distance.value; 
          dis = dis/1000;
          setDistance(dis)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    var price = null;
    if(distance > 0 && ref.current.values.weight){
      initialValues.weight =ref.current.values.weight
      var weight =ref.current.values.weight
      if(weight <= 15) {
        price = distance * 50;
      } else if(weight > 15 && weight <= 18) {
        price = distance * 55;
      } else {
        price = distance * 70;
      }
      setCost(price);
      setError('');
      setOpen2(true)
    } else {
      setCost('');
      setDistance('0');
      setError('');
      setError('Please fill pickup location, dropoff location and weight.');
      setOpen2(true)

    }
    
  }
  const handleChange = () => {
    setOpen(!open)
  }
  const handleClick2 = () => {
    setOpen2(!open2)
  }


  return (
    <div>
    
      <div className="bg-yellow py-2 rounded-lg">
        <div className="text-gray-dark text-center capitalize">
          <h2>Get Quote Here</h2>
        </div>
        <Formik
          innerRef={ref}
          enableReinitialize={true}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleGetQuoteSubmit}

        >
          {(formik) => {
            return (
              <Form>
                <div className="grid md:grid-cols-5 gap-4 p-4 place-items-start">
                  <div className="w-full">
                    <Field name="pickupLocation">
                      {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                      }) => {
                        return (
                          <React.Fragment>
                            <div className="muiSelect">
                              <FormControl fullWidth size="small">
                                  <Autocomplete
                                    options={addresses}
                                    onInputChange={(event, value) => {
                                      placeSearch(event, value)
                                    }}
                                    renderInput={(params) => <TextField {...params}  label="Pickeup Location"/>}
                                    onChange={(event, value) => {
                                      initialValues.pickupLocation= value
                                    }}
                                    size="small"
                                  />
                                {meta.touched && (
                                  <FormHelperText
                                    style={{
                                      color: "#D84949",
                                      marginLeft: 2,
                                      textTransform: "capitalize",
                                    }}
                                    className="text-red"
                                  >
                                    {meta.error}
                                  </FormHelperText>
                                )}
                              </FormControl>
                            </div>
                            </React.Fragment>
                        );
                      }}
                    </Field>
                  </div>
                  <div className="w-full">
                    <Field name="dropoffLocation">
                      {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                      }) => {
                        return (
                          <React.Fragment>
                            <div className="muiSelect">
                              <FormControl fullWidth size="small">
                                  <Autocomplete
                                    options={addresses}
                                    onInputChange={(event, value) => {
                                      placeSearch(event, value)
                                    }}
                                    renderInput={(params) => <TextField {...params}  label="Dropoff Location"/>}
                                    onChange={(event, value) => {
                                      initialValues.dropoffLocation= value
                                    }}
                                    size="small"
                                  />
                                {meta.touched && (
                                  <FormHelperText
                                    style={{
                                      color: "#D84949",
                                      marginLeft: 2,
                                      textTransform: "capitalize",
                                    }}
                                    className="text-red"
                                  >
                                    {meta.error}
                                  </FormHelperText>
                                )}
                              </FormControl>
                            </div>
                            </React.Fragment>
                        );
                      }}
                    </Field>
                  </div>
                  <div className="w-full">
                    <FormikControl
                      control="date"
                      label="Shipping Date"
                      name="shippingDate"
                    />
                  </div>
                  <div className="w-full">
                    <FormikControl
                      control="input"
                      type="number"
                      label="Weight (In Tons)"
                      name="weight"
                    />
                  </div>
                  
                  <div className="w-full">
                    <FormikControl
                      control="select"
                      label="Size of Fleet"
                      name="describeYourLoad"
                    />
                  </div>
                  <div className="w-full">
                    <FormikControl
                      control="input"
                      type="email"
                      label="Email"
                      name="email"
                    />
                  </div>
                  <div className="w-full">
                    <FormikControl
                      control="input"
                      type="number"
                      label="Phone Number"
                      name="phoneNumber"
                    />
                  </div>
                  
                  
                  <button
                    className="w-full bg-red rounded-md text-white px-4 py-1"
                    type="button"
                    onClick={calculate}
                  >
                    Get Quote
                  </button>
                  <button
                    className="w-full bg-red rounded-md text-white px-4 py-1"
                    type="submit"
                  >
                    Submit
                  </button>
                  <Dialog
                    open={open2}
                    onClose={handleClick2}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                  
                    <DialogContent>
                      {error? <Typography sx={{p:1}}>{error}</Typography>: <>
                      <Typography sx={{p:1}}>Total Weight : {initialValues.weight} Ton</Typography>
                      <Typography sx={{p:1}}>Total Distance : {distance} km.</Typography>
                      <Typography sx={{p:1}}>Total Cost : ₹ {cost}</Typography></>}
                    </DialogContent>
                    <DialogActions>
                      <Button color="error" onClick={handleClick2}>Cancel</Button>
                    </DialogActions>
                  </Dialog>
                </div>
               
              </Form>
              
            );
            
          }}
          
        </Formik>
        
        
        {quoteSubmitted && (
          <div className="text-center " style={{ fontWeight: 700 }}>
            Quote Submitted, We'll shortly connect
          </div>
        )}
        
      </div>
     
    </div>
  );
};

export default GetQuote;

// https://github.com/MapmyIndia/mapmyindia-places-n-directions-web-sdk/tree/main/getDistance%20Method
// https://github.com/MapmyIndia/mapmyindia-places-n-directions-web-sdk/tree/main/placeSearch-plugin

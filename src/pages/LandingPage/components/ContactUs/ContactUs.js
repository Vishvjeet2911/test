import React from "react";
import axios from "axios";
import { InputField, FormikControl } from "../../../../components";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const ContactUs = () => {
  const [message, setMessage] = React.useState("");
  const [formSubmitted, setFormSubmitted] = React.useState(false);

  let initialValues = {
    name: "",
    companyName: "",
    email: "",
    phoneNumber: ""
  };

  const formValidations = {
    name: Yup.string().required("Required"),
    companyName: Yup.string().required("Required"),
    email: Yup.string().email().required("Required"),
    phoneNumber: Yup.number().required("Required")
  };

  let validationSchema = Yup.object(formValidations);

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleOnFormSubmit = async (values, { resetForm }) => {
    try {
      const result = await axios.post(
        "https://ig.oneconnectweb.com/api/v1/process/enquiry",
        { ...values, message }
      );

      console.log(result);
      setFormSubmitted(true);
      resetForm()
      setMessage("")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section class="text-gray-600 body-font relative">
        <div class="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="map"
            scrolling="no"
            src="https://maps.google.com/maps?q=Opposite%20Digha%20Talav,%20Thane%20Belapur%20Road,%20Digha%20Airoli,%20Navi%20Mumbai-%20400708,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"
            style={{ filter: "grayscale(0) contrast(0.8) opacity(0.8)" }}
          ></iframe>
        </div>
        <div class="container px-5 py-24 mx-auto flex">
          <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            {formSubmitted && (
              <div className="py-4 bg-blue-100 rounded-md text-center fonmt-bold">
                Message Sent
              </div>
            )}
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
              Contact Us
            </h2>
            <p class="leading-relaxed py-2 text-gray-600 capitalize">
              Are you Looking for Logistics Solutions ?
            </p>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleOnFormSubmit}
            >
              <Form id="form-submit">
                <div class="relative mb-4 space-y-4">
                  <div className="w-full">
                    <FormikControl
                      control="input"
                      type="text"
                      label="name"
                      name="name"
                    />
                  </div>
                  <div className="w-full">
                    <FormikControl
                      control="input"
                      type="text"
                      label="company name"
                      name="companyName"
                    />
                  </div>
                  <div className="w-full">
                    <FormikControl
                      control="input"
                      type="email"
                      label="email"
                      name="email"
                    />
                  </div>
                  <div className="w-full">
                    <FormikControl
                      control="input"
                      type="number"
                      label="phone number"
                      name="phoneNumber"
                    />
                  </div>
                  <div className="w-full">
                    <label
                      for="message"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      onChange={handleMessage}
                      value={message}
                      name="message"
                      class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  class="text-white bg-red border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Send
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;

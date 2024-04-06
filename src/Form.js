import { useFormik } from "formik";
import * as Yup from "yup";

function FormOne() {
  const submitEdit = async (values) => {
    // await axios
    //   .put(`${process.env.REACT_APP_API}/api/employee`, {
    //     email: values.email,
    //     enabled: values.enableStatus,
    //     employee_id,
    //   })
    //   .then((response) => {
    //     if (response?.data?.status == (200 || 201)) {
    //       ToastSuccess(response?.data?.msg);
    //       getDetails();
    //       handleClose();
    //     } else {
    //       ToastFailure("Something went wrong.");
    //     }
    //   })
    //   .catch((error) => {
    //     ToastFailure("Something went wrong.");
    //   });
  };
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const formik = useFormik({
    initialValues: {
      email: "",
      // password: "",
      contact: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("invalid Email Address").required("Required!"),
      contact: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Required!"),
      // password: Yup.string().required("Required!"),
    }),
    onSubmit: (values) => {
      console.log("values");
    },
  });

  return (
    <>
      <center>
        <h1>Login</h1>
      </center>
      <div>
        <form
          className="row g-3 CardDetailsSec order_summary_boxshadow"
          onSubmit={formik.handleSubmit}
          noValidate
        >
          <div className="col-md-6">
            <div className="inputdiv">
              <label htmlFor="inputEmail4" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="Name"
                autoFocus
                name="email"
                onBlur={formik.handleBlur}
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email ? (
                <p style={{ color: "red" }}>{formik.errors.email}</p>
              ) : null}
              <i className="fa-solid fa-user"></i>
            </div>
          </div>
          <div className="col-md-6">
            <div className="inputdiv">
              <label htmlFor="inputPassword4" className="form-label">
                Card No:
              </label>
              <input
                type="number"
                className="form-control"
                // id="inputPassword4"
                // name="contact"
                placeholder="Card Number"
                onBlur={formik.handleBlur}
                value={formik.values.contact}
                onChange={formik.handleChange}
                required
                fullWidth
                id="contact"
                label="Contact number"
                name="contact"
                autoComplete="contact"
              />
              {formik.touched.contact && formik.errors.contact ? (
                <p style={{ color: "red" }}>{formik.errors.contact}</p>
              ) : null}
            </div>
          </div>
          <div className="col-md-6">
            <div className="inputdiv">
              <label htmlFor="inputEmail4" className="form-label">
                Expiry Date:
              </label>
              <input
                type="Number"
                className="form-control"
                id="inputEmail4"
                placeholder="Expiry Date"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="inputdiv">
              <label htmlFor="inputPassword4" className="form-label">
                CVC:
              </label>
              <input
                type="number"
                className="form-control"
                id="inputPassword4"
                placeholder="CVC"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="text-end">
              <button type="submit" className="SubmitBtn">
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormOne;

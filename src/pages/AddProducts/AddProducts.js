import React from "react";
import { withFormik } from "formik";
import Yup from "yup";
import { withStyles } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Grid from "react-fast-grid/lib/Grid";
// import Form from 'react-bootstrap/Form';
// import { Col } from "react-bootstrap";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
const styles = () => ({
  card: {
    maxWidth: 1000,
    marginTop: 50
  },
  container: {
    display: "Flex",
    justifyContent: "center"
  },
  actions: {
    float: "right"
  }
});

const productCategory = [
  {
    value: "Rice",
    label: "Rice"
  },
  {
    value: "Fruits",
    label: "Fruits"
  },
  {
    value: "Vegetables",
    label: "Vegetables"
  }
];
const FILE_SIZE = 160 * 1024;
const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/gif",
  "image/png"
];
const productSubCategory = [
    {
      value: "sambhaRice",
      label: "SambhaRice"
    },
    {
        value: "ponni Rice",
        label: "PonniRice"
    },
    {
        value: "biriyaniRice",
        label: "BiriyaniRice"
    }
  ];
  
  const taxCategory = [
    {
      value: "GST",
      label: "GST"
    },
    {
        value: "IGST",
        label: "IGST"
    },
    {
        value: "CGST",
        label: "CGST"
    }
  ];
  
  const unit = [
    {
      value: "centimeter",
      label: "centimeter"
    },
    {
        value: "meter",
        label: "meter"
      },
    {
        value: "kilogram",
        label: "Kilogram"
    },
    {
        value: "litre",
        label: "litre"
    }
  ];
const addProducts = props => {
  const {
    classes,
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset
  } = props;

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit}>
        {/* <Card className={classes.card}>
          <CardContent> */}
          <h2>Add Products</h2>
          <Grid container spacing={2} direction="row">
      <Grid item sm={6} xs={12}>
          <TextField
              id="productCode"
              label="Product Code"
              value={values.productCode}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.productCode ? errors.productCode : ""}
              error={touched.productCode && Boolean(errors.productCode)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            </Grid>
            <Grid item sm={6} xs={12}>
            <TextField
              id="productName"
              label="Product Name"
              value={values.productName}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.productName ? errors.productName : ""}
              error={touched.productName && Boolean(errors.productName)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              id="barCode"
              label="Product Bar Code"
              value={values.barCode}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.barCode ? errors.barCode : ""}
              error={touched.barCode && Boolean(errors.barCode)}
              margin="dense"
              variant="outlined"
              fullWidth
              />
              </Grid>
           <Grid item sm={6} xs={12}>
            <TextField
              id="qrCode"
              label="Product QR Code"
              value={values.qrCode}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.qrCode ? errors.qrCode : ""}
              error={touched.qrCode && Boolean(errors.qrCode)}
              margin="10px"
              variant="outlined"
              fullWidth
             />
             </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              select
              id="productCategory"
              label="Product Category"
              value={values.productCategory}
              onChange={handleChange("productCategory")}
              helperText={touched.productCategory ? errors.productCategory : ""}
              error={touched.productCategory && Boolean(errors.productCategory)}
              margin="dense"
              variant="outlined"
              fullWidth
            >
              {productCategory.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            </Grid>
            <Grid item sm={6} xs={12}>
            {/* <Autocomplete
              id="combo-box-demo"
              options={taxCategory}
             getOptionLabel={(option) => option.title}
             style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
/> */}
          <TextField
              select
              id="productSubCategory"
              label="Product Sub Category"
              value={values.productSubCategory}
              onChange={handleChange("productSubCategory")}
              helperText={touched.productSubCategory ? errors.productSubCategory : ""}
              error={touched.productSubCategory && Boolean(errors.productSubCategory)}
              margin="dense"
              variant="outlined"
              fullWidth
            >
              {productSubCategory.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            </Grid>
            <Grid item sm={6} xs={12}>
             <TextField
              select
              id="taxCategory"
              label="Tax Category"
              value={values.taxCategory}
              onChange={handleChange("taxCategory")}
              helperText={touched.taxCategory ? errors.taxCategory : ""}
              error={touched.taxCategory && Boolean(errors.taxCategory)}
              margin="dense"
              variant="outlined"
              fullWidth
            >
              {taxCategory.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            </Grid>
            <Grid item sm={6} xs={12}>
            <TextField
              select
              id="unit"
              label="Unit"
              value={values.unit}
              onChange={handleChange("unit")}
              helperText={touched.unit ? errors.unit : ""}
              error={touched.unit && Boolean(errors.unit)}
              margin="dense"
              variant="outlined"
              fullWidth
            >
              {unit.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            </Grid>
            <Grid item sm={6} xs={12}>
            <TextField
              id="productDescription"
              label="Product Description"
              value={values.productDescription}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.productDescription ? errors.productDescription : ""}
              error={touched.productDescription && Boolean(errors.productDescription)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            </Grid>
            <Grid item sm={6} xs={12}>
            <TextField
              id="manufacturedby"
              label="Manufactured by "
              value={values.manufacturedby}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.manufacturedby ? errors.manufacturedby : ""}
              error={touched.manufacturedby && Boolean(errors.manufacturedby)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            </Grid>
            <Grid item sm={6} xs={12}>
             <TextField
              id="marketby"
              label="Market by "
              value={values.marketby}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.marketby ? errors.marketby : ""}
              error={touched.marketby && Boolean(errors.marketby)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            </Grid>
            <Grid item sm={6} xs={12}>
             <TextField
              id="fileupload"
              type="file"
              value={values.fileupload}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.fileupload ? errors.fileupload : ""}
              error={touched.fileupload && Boolean(errors.fileupload)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            </Grid>
            </Grid>
          {/* </CardContent> */}
          
          <CardActions className={classes.actions}>
            <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
              SUBMIT
            </Button>
            <Button variant="contained" color="secondary" onClick={handleReset}>
              CLEAR
            </Button>
          </CardActions>
        {/* </Card> */}
      </form>
    </div>
  );
};

const AddProducts = withFormik({
  mapPropsToValues: ({
    productName,
    productDescription,
    productCode,
    barCode,
    qrCode,
    productCategory,
    productSubCategory,
    manufacturedby,
    marketby,
    taxCategory,
    fileupload
    
   
  }) => {
    return {
      productName: productName || "",
      productDescription:productDescription || "",
      productCode: productCode || "",
      barCode: barCode || "",
      qrCode: qrCode || "",
      productCategory: productCategory || "",
      productSubCategory: productSubCategory || "",
      manufacturedby: manufacturedby || "",
      marketby: marketby || "",
      taxCategory:taxCategory || "",
      fileupload:fileupload || ""
    };
  },
 
  validationSchema: Yup.object().shape({
    productName: Yup.string().required("Required"),
    productDescription: Yup.string().required("Required"),
    productCode: Yup.number().required("Required"),
    barCode: Yup.string().required("Required"),
    qrCode: Yup.string().required(""),
    productCategory: Yup.string().required("Select any Product category"),
    productSubCategory: Yup.string().required("Select any Product category"),
    manufacturedby: Yup.string().required("Required"),
    marketby: Yup.string().required("Required"),
    taxCategory: Yup.string().required("Required"),
    fileupload: Yup
      .mixed()
      .required("A file is required")
      .test(
        "fileSize",
        "File too large",
        (value) => value && value.size <= FILE_SIZE
      )
      .test(
        "fileFormat",
        "Unsupported Format",
        (value) => value && SUPPORTED_FORMATS.includes(value.type)
      )
 
    
  }),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      // submit to the server
      alert(JSON.stringify(values, null, 2));
      // alert(
      //   JSON.stringify(
      //     { 
      //       fileName: values.file.name, 
      //       type: values.file.type,
      //       size: `${values.file.size} bytes`
      //     },
      //     null,
      //     2
      //   ));
      setSubmitting(false);
    }, 1000);
  }
})(addProducts);

export default withStyles(styles)(AddProducts);

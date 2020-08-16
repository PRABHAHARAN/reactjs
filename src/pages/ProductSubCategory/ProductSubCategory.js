import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { withStyles } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "react-fast-grid/lib/Grid";
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



const productSubCategoryForm = props => {
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
              <h2>Product Sub Category</h2>
              <Grid container spacing={2} direction="row">
              <Grid item sm={6} xs={12}>
            <TextField
              id="categoryName"
              label="Category Name"
              value={values.categoryName}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.categoryName ? errors.categoryName : ""}
              error={touched.categoryName && Boolean(errors.categoryName)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            </Grid>
            <Grid item sm={6} xs={12}>
            <TextField
              id="subCategoryId"
              label="SubCategoryId"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.subCategoryId ? errors.subCategoryId : ""}
              error={touched.subCategoryId && Boolean(errors.subCategoryId)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            </Grid>
            <Grid item sm={6} xs={12}>
            <TextField
              id="subcategoryName"
              label="Sub Category Name"
              value={values.subcategoryName}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.subcategoryName ? errors.subcategoryName : ""}
              error={touched.subcategoryName && Boolean(errors.subcategoryName)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            </Grid>
            <Grid item sm={6} xs={12}>
            <label> Upload Product Sub category Image </label>
            <TextField
              id="subcategoryFileUpload"
              type="file"
              value={values.subcategoryFileUpload}
              
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.subcategoryFileUpload ? errors.subcategoryFileUpload : ""}
              error={touched.subcategoryFileUpload && Boolean(errors.subcategoryFileUpload)}
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
            <Button color="secondary" variant="contained" onClick={handleReset}>
              CLEAR
            </Button>
          </CardActions>
        {/* </Card> */}
      </form>
    </div>
  );
};

const ProductSubCategoryForm = withFormik({
  mapPropsToValues: ({
    categoryName,
    subCategoryId,
    subcategoryName,
    subcategoryFileUpload
   
  }) => {
    return {
      categoryName: categoryName || "",
      categoryId: subCategoryId || "",
      subcategoryName: subcategoryName || "",
      subcategoryFileUpload: subcategoryFileUpload || ""
      
    };
  },

  validationSchema: Yup.object().shape({
    categoryName: Yup.string().required("Required"),
    subCategoryId: Yup.string().required("Required"),
    subcategoryName: Yup.string().required("Required"),
    subcategoryFileUpload: Yup.string().required("Required")
   
    
  }),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      // submit to the server
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  }
})(productSubCategoryForm);

export default withStyles(styles)(ProductSubCategoryForm);

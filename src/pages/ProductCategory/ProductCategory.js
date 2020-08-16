import React from "react";
import { withFormik } from "formik";
import Yup from "yup";
import { withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "react-fast-grid/lib/Grid";
import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
//import Card from "@material-ui/core/Card";


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



const productCategoryForm = props => {
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
              <h2>Product Category</h2>
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
              id="categoryId"
              label="CategoryId"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.categoryId ? errors.categoryId : ""}
              error={touched.categoryId && Boolean(errors.categoryId)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            </Grid>
            <Grid item sm={6} xs={12}>
              <label> Upload Product category Image </label>
            <TextField
              id="categoryfileupload"
              type="file"
              value={values.categoryfileupload}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.categoryfileupload ? errors.categoryfileupload : ""}
              error={touched.categoryfileupload && Boolean(errors.categoryfileupload)}
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

const ProductCategoryForm = withFormik({
  mapPropsToValues: ({
    categoryName,
    categoryId,
    categoryfileupload
   
  }) => {
    return {
      categoryName: categoryName || "",
      categoryId: categoryId || "",
      categoryfileupload: categoryfileupload || ""
      
    };
  },

  validationSchema: Yup.object().shape({
    categoryName: Yup.string().required("Required"),
    categoryId: Yup.string().required("Required"),
    categoryfileupload: Yup.string().required("Required"),
  }),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      // submit to the server
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  }
})(productCategoryForm);

export default withStyles(styles)(ProductCategoryForm);

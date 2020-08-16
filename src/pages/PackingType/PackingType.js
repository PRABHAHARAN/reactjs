import React from "react";
import { withFormik } from "formik";
import Yup from "yup";
import { withStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "react-fast-grid/lib/Grid";
import MaterialTableDemo from "../Table/MaterialTableDemo"
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



const packingType = props => {
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
        <Card className={classes.card}>
          <CardContent> 
              <h2>Packing Type details</h2>
              <Grid container spacing={2} direction="row">
              <Grid item sm={6} xs={12}>
            <TextField
              id="packingTypeName"
              label="Unit Name"
              value={values.packingTypeName}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.packingTypeName ? errors.packingTypeName : ""}
              error={touched.packingTypeName && Boolean(errors.packingTypeName)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            </Grid>
            <Grid item sm={6} xs={12}>
            <TextField
              id="packingTypeCode"
              label="Packing Type Code"
              value={values.packingTypeCode}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.packingTypeCode ? errors.packingTypeCode : ""}
              error={touched.packingTypeCode && Boolean(errors.packingTypeCode)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            </Grid>
            <Grid item sm={6} xs={12}>
            <TextField
              id="unitCode"
              label="Unit Code"
              value={values.unitCode}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.unitCode ? errors.unitCode : ""}
              error={touched.unitCode && Boolean(errors.unitCode)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            </Grid>
         </Grid>
          </CardContent> 
          <CardActions className={classes.actions}>
            <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
              SUBMIT
            </Button>
            <Button color="secondary" variant="contained" onClick={handleReset}>
              CLEAR
            </Button>
          </CardActions>
        </Card> 
        <Card>
        <MaterialTableDemo/>
        </Card>
      </form>
    </div>
  );
};

const PackingType = withFormik({
  mapPropsToValues: ({
    packingTypeName,
    packingTypeCode,
    unitCode,
   
  }) => {
    return {
        packingTypeName: packingTypeName || "",
        packingTypeCode:packingTypeCode || "",
        unitCode: unitCode || ""
      
    };
  },

  validationSchema: Yup.object().shape({
    packingTypeName: Yup.string().required("Required"),
    packingTypeCode: Yup.string().required("Required"),
    unitCode: Yup.string().required("Required"),
    
  }),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      // submit to the server
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  }
  
})(packingType);

export default withStyles(styles)(PackingType);

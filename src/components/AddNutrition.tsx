import { gql, useMutation } from '@apollo/client';
import React from 'react';
import { Grid, TextField, List, ListItem, Button } from '@material-ui/core';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { ADD_NUTRITION } from '../graphql/mutations';


export function AddNutrition(props:{
  onUpdate: () => void
}) {
  const [addNutrition, { data }] = useMutation(ADD_NUTRITION);
  const addNewNutritionItem = async (values: any) => {
    await addNutrition({
      variables: {
        input: {
          Dessert: values.Dessert,
          calories: parseInt(values.calories),
          fat: parseInt(values.fat),
          carb: parseInt(values.carb),
          protein: parseInt(values.protein),
        }
      }
    });
    props.onUpdate();
  }
  const formikState = useFormik({
    initialValues: {
      Dessert: '',
      calories: 90,
      carb: 90,
      fat: 90,
      protein: 90
    },
    validationSchema: Yup.object({
      Dessert: Yup.string().required('Required'),
      calories: Yup.number().required('Required'),
      carb: Yup.number().required('Required'),
      fat: Yup.number().required('Required'),
      protein: Yup.number().required('Required'),
    }),
    onSubmit: addNewNutritionItem
  });
  return (
    <div>
      <form
        onSubmit={formikState.handleSubmit}
      >
        <Grid container justify="center">
          <List>
          <ListItem>
              <h2>Add Nutrition</h2>
            </ListItem>
            <ListItem>
              <label>Dessert Name</label>
            </ListItem>
            <ListItem>
              <TextField
                id='Dessert'
                name='Dessert'
                variant="outlined"
                type='text'
                value={formikState.values.Dessert}
                onChange={formikState.handleChange}
                onBlur={formikState.handleChange}
                error={formikState.touched.Dessert && !!formikState.errors.Dessert}
                helperText={formikState.touched.Dessert && formikState.errors.Dessert}
              />
            </ListItem>
            <ListItem>
              <label>Calories</label>
            </ListItem>
            <ListItem>
              <TextField
                variant="outlined"
                id='calories'
                name='calories'
                type='text'
                value={formikState.values.calories === NaN ? '' : formikState.values.calories}
                onChange={formikState.handleChange}
                onBlur={formikState.handleChange}
                error = {formikState.touched.calories && !!formikState.errors.calories}
                helperText={formikState.touched.calories && formikState.errors.calories}
              />
            </ListItem>
            <ListItem>
              <label>Fat</label>
            </ListItem>
            <ListItem>
              <TextField
                variant="outlined"
                id='fat'
                name='fat'
                value={formikState.values.fat === NaN ? '' : formikState.values.fat}
                onChange={formikState.handleChange}
                onBlur={formikState.handleChange}
                error={formikState.touched.fat && !!formikState.errors.fat}
                helperText={formikState.touched.fat && formikState.errors.fat}
              />
            </ListItem>
            <ListItem>
              <label>Carbs</label>
            </ListItem>
            <ListItem>
              <TextField
                variant="outlined"
                id='carb'
                name='carb'
                value={formikState.values.carb === NaN ? '' : formikState.values.carb}
                onChange={formikState.handleChange}
                onBlur={formikState.handleChange}
                error={formikState.touched.carb && !!formikState.errors.carb}
                helperText={formikState.touched.carb && formikState.errors.carb}
              />
            </ListItem>
            <ListItem>
              <label>Protein</label>
            </ListItem>
            <ListItem>
              <TextField
                variant="outlined"
                id='protein'
                name='protein'
                value={formikState.values.protein === NaN ? '' : formikState.values.protein}
                onChange={formikState.handleChange}
                onBlur={formikState.handleChange}
                error={formikState.touched.protein && !!formikState.errors.protein}
                helperText={formikState.touched.protein && formikState.errors.protein}
              />
            </ListItem>
            <ListItem>
              <Button type="submit" color="primary" variant="contained">Add Nutrition</Button>
            </ListItem>
          </List>
        </Grid>

      </form>
    </div>
  );
}

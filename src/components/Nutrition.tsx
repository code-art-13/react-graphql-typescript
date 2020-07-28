import * as React from "react";
import './Nutrition.css';
import NutritionGrid from './Nutrition-grid'
import { gql, useQuery } from "@apollo/client";
import { NutritionData } from "../types";
import { AddNutrition } from './AddNutrition'

import { Get_Nutritions } from "../graphql/queries";
import { useEffect, useState } from "react";
import { Paper, ListItem, List, Grid } from "@material-ui/core";

export interface Props {
  getNutritions?: () => void;
  addNutrition?: () => void;
}

function Nutrition({ getNutritions, addNutrition }: Props) {
  const [nutritions, setNutritions] = useState([]);
  const [refresh, setRefresh] = useState(false);


  const { loading, error, data } = useQuery(Get_Nutritions)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Grid container justify="space-between" >
      <Grid item md={7} >
        <Paper elevation={3} style={{margin: 2, height:600}}>
          <NutritionGrid data={data.nutritions} />
        </Paper>
      </Grid>
      <Grid item md={5} >
        <Paper elevation={3} style={{margin: 2}}>
          <AddNutrition  onUpdate={() => {
            window.location.reload();
          }} />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Nutrition;



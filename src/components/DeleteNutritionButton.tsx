import { useMutation } from "@apollo/client";
import React from "react";
import { DELETE_NUTRITION } from "../graphql/mutations";
import { IconButton, Tooltip } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';


export function DeleteNutritionButton(props: {
    selectedItemIds: number[],
    onDelete: (id: number) => void
}) {
    const [deleteNutrition, { loading, error, data }] = useMutation(DELETE_NUTRITION);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;
    if (data) return <p>Deleted!</p>;

    return (
        <Tooltip title="Delete"
            onClick={(e: any) => {
                props.selectedItemIds.forEach(async (id: number) => {
                    await deleteNutrition({
                        variables: {
                            id: id
                        }
                    })
                    props.onDelete(id);
                });
            }} >
            <IconButton aria-label="delete" >
                <DeleteIcon />
            </IconButton>
        </Tooltip>
    );
}
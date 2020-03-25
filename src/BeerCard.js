import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 100,
    width: 50
  }
});
export function BeerCard({ beer }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader>{beer.name}</CardHeader>
      <CardMedia
        className={classes.media}
        component="img"
        title={beer.name}
        image={beer.image_url}
      />

      <CardContent>
        <p>{beer.description}</p>
      </CardContent>
    </Card>
  );
}

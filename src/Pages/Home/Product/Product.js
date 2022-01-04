import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { title, description, type, budget, _id } = props.job;

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const card = (
    <React.Fragment>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                </Typography> */}
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {type}
        </Typography>
        <Typography variant="body2">
          {description}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Link style={{ textDecoration: "none" }} to={`/bidding/${_id}`}>
          <Button size="small">Bid for job</Button>
        </Link>
        <Link style={{ textDecoration: "none" }} to={`/buyerDetails/${_id}`}>
          <Button size="small" style={{ color: "#984AE8" }}>
            Buyer Details
          </Button>
        </Link>
      </CardActions>
    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 320, mx: "10px", mt: "30px", ml: "50px" }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};

export default Product;

{
  /* <Grid item xs={4} sm={4} md={4}>
<Card sx={{ minWidth: 275, boxShadow: 0, textAlign: 'center' }} style={{ border: '1px solid #E1E1E1', borderRadius: '13px' }}>
    <Typography variant="h5" component="div" style={{ marginRight: '290px', backgroundColor: '#EB3E32', color: 'white' }}>
        ${budget}


    </Typography>

    <CardContent>
        <Typography variant="h5" component="div">
            {title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
            {description}

        </Typography>
        <Typography variant="body2" color="text.secondary">
            {type}

        </Typography>
        <Link to={`/products/${_id}`}><Button variant="contained">Bid for job</Button></Link>

    </CardContent>


    <Link to={`/buyerDetails/${_id}`}><Button>Buyer Details</Button></Link>
</Card>



{/* <Button variant="outlined">add to cart</Button> */
}
// </Grid> */}

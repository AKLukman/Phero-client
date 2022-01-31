import { Container, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [jobs, setJobs] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/jobs?type=${searchText}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [searchText]);
  const handleSearchField = (e) => {
    const searchValue = e.target.value;
    setSearchText(searchValue);
  };

  return (
    <div>
      <input
        style={{ marginLeft: "177px", marginBottom: "30px", marginTop: "30px" }}
        onChange={handleSearchField}
        type="text"
        className="form-control w-75 "
        placeholder="Search Jobs"
      />
      {/* sx={{ flexGrow: 1, mb: 5 }} */}
      <Box sx={{ flexGrow: 1, mb: 5 }}>
        <Container>
          {/* <Typography
            variant="h4"
            component="div"
            style={{ paddingTop: "60px", paddingBottom: "20px" }}
            sx={{
              textAlign: "center",
              fontWeight: "700",
              color: "#454545",
              m: 2,
            }}
          >
            JOBS
          </Typography> */}

          <Grid
            // container
            // item
            // xs={2}
            // sm={4}
            // md={4}
            // spacing={{ xs: 2, md: 3 }}
            // columns={{ xs: 4, sm: 8, md: 12 }}
            container
            spacing={{ xs: 0, md: 0 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {/* {jobs.map((job) => (
              <Product key={job._id} job={job}></Product>
            ))} */}
            {jobs.map((job) => (
              <Grid item xs={2} sm={4} md={4}>
                <Product key={job._id} job={job}></Product>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Products;

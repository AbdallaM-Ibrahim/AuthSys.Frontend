import { Container, Box, Typography } from "@mui/material";
import { useAppSelector } from "../hooks/store.hooks";
import { selectUser } from "../store/features/user.slice";
import { useEffect } from "react";


const Home: React.FC = () => {
  const user = useAppSelector(selectUser);
  
  useEffect(() => { }, [user.token, user.firstName]);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 16,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Home Page
        </Typography>
        <Typography component="h1" variant="h5">
          Hello, {user.firstName}!
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;

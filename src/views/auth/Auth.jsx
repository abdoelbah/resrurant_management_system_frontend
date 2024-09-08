import  { useState } from "react";
import {
  Card,
  Input,
  Button,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { userState } from "../../atoms/userAtom";
import axios from "axios";
import FoodImage from '../../assets/food_1.jpg';

const API_URL = import.meta.env.VITE_URL;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post(`${API_URL}/admin/login`, {email, password}, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      
      if (response.status === 200) {
        const userData = response.data;
        console.log("Login Successful:", userData);
        setUser(userData);  // Set user in Recoil state
        localStorage.setItem("user", JSON.stringify(userData));  // Store user in local storage
        
        // Redirect to dashboard
        navigate('/dashboard');
      }
    } catch (error) {
      // Extract the error message from the Axios error response
      const errorMessage = error.response && error.response.data
        ? error.response.data.message
        : "An error occurred during login";

      // Display the error message in an alert
      alert(`Login failed: ${errorMessage}`);
    }
  };

  // Use useEffect to navigate when the user state updates in Recoil
 

  return (
    <div className="flex flex-col lg:flex-row-reverse h-screen">
      {/* Image Section */}
      <div className="h-64 lg:h-auto w-full lg:w-2/5">
        <img
          className="w-full h-full object-cover"
          src={FoodImage}
          alt="Food"
        />
      </div>

      {/* Card Section */}
      <div className="flex justify-center items-center w-full lg:w-3/5">
        <Card className="w-full max-w-lg p-8 lg:p-14 border border-orange-300 shadow-md">
          <CardHeader shadow={false} floated={false} className="text-center">
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-4 text-3xl lg:text-4xl"
            >
              Login
            </Typography>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
              <div>
                <label htmlFor="email">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="block font-medium mb-2"
                  >
                    Your Email
                  </Typography>
                </label>
                <Input
                  id="email"
                  color="gray"
                  size="lg"
                  type="email"
                  name="email"
                  placeholder="name@mail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full placeholder-opacity-100 focus:border-t-primary border-t-blue-gray-200"
                  labelProps={{ className: "hidden" }}
                />
              </div>
              <div>
                <label htmlFor="password">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="block font-medium mb-2"
                  >
                    Your Password
                  </Typography>
                </label>
                <Input
                  id="password"
                  color="gray"
                  size="lg"
                  type="password"
                  name="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full placeholder-opacity-100 focus:border-t-primary border-t-blue-gray-200"
                  labelProps={{ className: "hidden" }}
                />
              </div>
              <Button size="lg" color="orange" fullWidth type="submit">
                Continue
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Login;

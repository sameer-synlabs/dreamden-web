import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { BsGoogle } from "react-icons/bs";

const CreateAccount = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    localStorage.setItem("token", "abc");
    navigate("/");
  };

  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription>
          Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Button variant="outline">
          <BsGoogle className="mr-2" />
          Google
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="px-2 bg-background text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email / Mobile</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter email or mobile number"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={() => handleCreateAccount()}>
          Create account
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CreateAccount;

import CreateAccount from "@/components/CreateAccount";

const AuthPage = () => {
  return (
    <div className="flex items-center justify-center h-screen px-4">
      <div className="w-full md:w-2/3 lg:w-1/3">
        <CreateAccount />
      </div>
    </div>
  );
};

export default AuthPage;

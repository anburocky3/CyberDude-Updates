import Button from "@components/commons/buttons/Button";
import InputGroup from "@components/commons/forms/InputGroup";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputEvent, LoginCredentials } from "types/Global";
import Image from "../../assets/img/login-banner.svg";
import { loginWithEmail } from "../../firebase/functions";

type props = {
  setIsAuthenticated: CallableFunction;
  isAuthenticated: Boolean;
  loading: Boolean;
};

export default function Login({
  isAuthenticated,
  setIsAuthenticated,
  loading,
}: props) {
  const [data, setData] = useState<LoginCredentials>({
    user: "",
    pass: "",
  });

  const navigate = useNavigate();
  function handleChange(e: InputEvent): void {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: { preventDefault: CallableFunction }) {
    e.preventDefault();
    loginWithEmail(data).then((e) => {
      setIsAuthenticated(true);
      navigate("/sessions");
    });
  }

  useEffect(() => {
    isAuthenticated ? navigate("/sessions") : "";
  }, [isAuthenticated]);
  return (
    <div className=" ">
      {!loading ? (
        <div className="min-h-[calc(100vh-82px)] -my-[41px] p-5 flex container mx-auto">
          <div className="m-auto h-full w-full 2xl:w-3/4 2xl:h-hull bg-white rounded overflow-hidden shadow-lg">
            <div className="md:grid grid-cols-2 h-full">
              <div className="bg-gradient-to-b from-red-500 to-orange-500 md:flex h-full w-full hidden">
                <img src={Image} className="h-1/2 m-auto" alt="Login Banner" />
              </div>
              <div className="xl:p-10 md:p-5 px-5 py-10">
                <p className="font-bold xl:text-3xl 2xl:text-4xl text-xl">
                  Who is this?
                </p>
                <p className="text-gray-500 text-md mt-2 2xl:mt-4">
                  Didn't know before?
                  <span className="ml-1 text-blue-800 cursor-not-allowed">
                    Sign up
                  </span>
                </p>
                <form
                  action=""
                  className="mt-8 spay-8 space-y-4"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <InputGroup
                    id={"email"}
                    name="user"
                    type="email"
                    label="Email Address"
                    value={data.user}
                    placeholder="Email Address"
                    onChange={(e) => handleChange(e as InputEvent)}
                    required
                  />

                  <InputGroup
                    id={"password"}
                    name="pass"
                    type="password"
                    label="Password"
                    value={data.pass}
                    placeholder="Password"
                    onChange={(e) => handleChange(e as InputEvent)}
                    required
                  />
                  <div className="grid grid-cols-3 mt-20">
                    <div className="col-span-2 mt-auto">
                      <p className="text-gray-500 text-xs md:text-sm 2xl:mt-4">
                        Forgot password
                        <span className="ml-2 text-blue-800 cursor-not-allowed inline md:block lg:inline">
                          Reset password
                        </span>
                      </p>
                    </div>
                    <div className="flex">
                      <div className="ml-auto">
                        <Button label="Login" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

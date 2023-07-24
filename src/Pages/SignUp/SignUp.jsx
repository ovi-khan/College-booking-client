import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { createUser, googleSignUp } = useContext(AuthContext);

  const onSubmit = (data) => {
    // Handle sign-up logic using the form data
    const { email, password } = data; // Extract email and password from the form data
    console.log(data);

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.log(error));
  };

  const googleSignUpHandler = () => {
    googleSignUp(auth, googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="bg-blue-500 w-[30%] py-10 px-10 mx-0 mx-auto mt-40 mb-[350px] rounded-xl">
      <h2 className="text-center text-4xl font-bold mb-10 text-green-500">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <input className="bg-slate-300 mb-2 px-6 py-2 rounded-lg" type="name" name="name" placeholder="Name" {...register("name", { required: true })} />
          {errors.name && <span>Name is required</span>}
        </div>
        <div>
          <label>Email</label>
          <input className="bg-slate-300 mb-2 px-6 py-2 rounded-lg" type="email" name="email" placeholder="Email" {...register("email", { required: true })} />
          {errors.email && <span>Email is required</span>}
        </div>
        <div>
          <label>Password</label>
          <input className="bg-slate-300 mb-2 px-6 py-2 rounded-lg" type="password" name="password" placeholder="Password" {...register("password", { required: true })} />
          {errors.password && <span>Password is required</span>}
        </div>
        <div className="text-center">
          <button className="bg-red-700 px-10 py-2 rounded-lg mt-2" type="submit">Sign Up</button>
        </div>
        <div className="text-center">
          <button onClick={googleSignUpHandler} className="bg-red-700 px-10 py-2 rounded-lg mt-2" type="button">Google Sign Up</button>
        </div>
      </form>
      <p>If you already signed up on this website, please <Link to='/login' className="text-red-700">Login</Link></p>
    </div>
  );
};

export default SignUp;

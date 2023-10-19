import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../api/api';
import { MyContext } from '../Context';

function LoginPage() {
  const { setTokenAuth } = useContext(MyContext);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica de autenticación o enviar los datos a un servidor si es necesario.
    console.log(e.target.username.value);
    console.log(e.target.password.value);
    loginUser({username: e.target.username.value, password: e.target.password.value})
      .then((res) => {
        console.log(res.data);
        setTokenAuth(res.data);
        localStorage.setItem('token', JSON.stringify(res.data));
        history.push('/');
      }).catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen bg-stone-800 py-6 flex flex-col justify-center sm:py-12 text-white">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-stone-300 to-stone-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        </div>
        <div className="relative px-4 py-10 bg-stone-700 shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Login Form with Floating Labels</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4  sm:text-lg sm:leading-7">
                <form onSubmit={handleSubmit}>
                  <div className="relative border-2 rounded-md my-2 px-2 border-gray-300">
                    <input
                      id='username'
                      type="text"
                      className="bg-transparent  h-10 w-full placeholder-white focus:outline-none focus:border-rose-600"
                      placeholder="Email Address"
                    /> 
                  </div>
                  <div className="relative border-2 rounded-md my-2 px-2 border-gray-300">
                    <input
                      autoComplete="off"
                      id='password'
                      type="password"
                      className="bg-transparent  h-10 w-full placeholder-white focus:outline-none focus:border-rose-600"
                      placeholder="Password"
                    /> 
                  </div>
                  <div className="relative">
                    <button type="submit" className="bg-white text-black rounded-md px-2 py-1">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

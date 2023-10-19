import React, { useState } from 'react';

function LoginPage() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleEmailChange = (e) => {
    setUser({...user, email: e.target.value});
  };

  const handlePasswordChange = (e) => {
    setUser({...user, password: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica de autenticación o enviar los datos a un servidor si es necesario.
    console.log('Email:', user.email);
    console.log('Password:', user.password);
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
                  <div className="relative border-2 rounded-md my-2 border-gray-300">
                    <input
                      autoComplete="off"
                      id="email"
                      name="email"
                      type="text"
                      className="bg-transparent peer placeholder-transparent h-10 w-full  focus:outline-none focus:border-rose-600"
                      placeholder="Email address"
                      value={user.email}
                      onChange={handleEmailChange}
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5  text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Password"
                      value={user.password}
                      onChange={handlePasswordChange}
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5  text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <button type="submit" className="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
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

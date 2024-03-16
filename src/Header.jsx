






const Header = () => {
    return (
        <div className=" mt-5 ml-5 mr-5">
               

            <div>
                
            <div className="navbar bg-base-100 ">
            <div className="flex-1">
              <a className="btn btn-ghost text-2xl">Recipe Calories</a>
            </div>
             <div className=" flex justify-center gap-5 mr-40">

                 <h1 className=" btn text-xl">Home</h1>
                 <h1 className=" btn text-xl">Recipes</h1>
                 
                 <h1 className=" btn text-xl">About</h1>
                 <h1 className=" btn text-xl">Search</h1>

             </div> 

            <div className="flex-none gap-2">
              <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
              </div>
              <div className="dropdown dropdown-end ">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>

              </div>
            </div>
            </div>

            </div>


        {/* --------banner */}

          





        </div>
    );
};

export default Header;
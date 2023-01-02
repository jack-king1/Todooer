const Home = () => {
  return (
    <>
      <flex class="flex align-middle w-1/2 mx-auto">
        {/* //example todo*/}
        <div class="flex justify-center items-center w-128 mx-auto">
          {/* //todoItemInformation*/}
          <div class="">
            <h1>Temp ToDo Item Text</h1>
          </div>
          {/* //Div close/completed buttons*/}

          <div class="flex mx-8">
            <div class="flex space-x-2 justify-center pl-4">
              <button
                type="button"
                class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                X
              </button>
            </div>
            <div class="flex space-x-2 justify-center pl-4">
              <button
                type="button"
                class="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Completed
              </button>
            </div>
          </div>
        </div>
      </flex>
    </>
  );
};

export default Home;

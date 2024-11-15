const Input = ({setSearchParam, hanleSearch, searchParam,loader}) => {
    return (
        <nav className="p-3">
            <form className="flex items-center max-w-lg mx-auto p-4" onSubmit={hanleSearch}>
            <label className="sr-only" htmlFor="voice-search">Search</label>
            <div className="relative w-full">
                <input onChange={(e) => setSearchParam(e.target.value)} required placeholder="Search..." className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="voice-search" type="text" />
            </div>
            <button disabled={!searchParam || loader} style={ !searchParam ? {opacity:"0.8", cursor:"no-drop"} : {}} onClick={hanleSearch} className="v inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit">
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-4 me-2 bg-inherit">
                <path d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" /></svg>Search
            </button>
            </form>
            <p className="text-white align-middle w-full text-center" style={loader ? {} : {opacity:"0"}}>Fetching ...</p>
        </nav>
  );
}

export default Input;

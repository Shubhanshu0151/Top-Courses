import './App.css';
import Navbar from './Components/Navbar';
import Filter from './Components/Filter';
import Cards from './Components/Cards';
import { apiUrl, filterData } from './data';
import { useEffect, useState } from 'react';
import Spinner from './Components/Spinner';
import { toast } from 'react-toastify';

function App() {

  const [courses, serCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      //output contain all ulr data
      serCourses(output.data);
    }
    catch (error) {
      toast.error("Network Error");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-800 flex flex-col">
      <div>
        <Navbar />
      </div>
      <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory} />
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner />) : (<Cards courses={courses} category={category} />)
        }
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { AppDispatch, RootState } from './store';
import { fetchNews } from './store/feature/newsSlice';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Main from './components/Main';
import DetailsPage from './components/DetailsPage';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [domainName, setDomainName] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState<string[]>([]);
 
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    async function fetchNewsData() {
    dispatch(fetchNews({q:searchQuery, c:filterCategory, d:selectedDomain}));
    }
    fetchNewsData();
  }, [dispatch, searchQuery, filterCategory, selectedDomain]);

  const feed = useSelector((state: RootState) => state.news);

  
 useEffect(() => {
  const domains = feed.news.map((domain) => domain['source']['name']);
  const uniqueDomains = [...new Set(domains)];
    setDomainName(uniqueDomains);
  }, [feed]);

  const [prevNum, setVisible] = useState(3);
  const handleLoadMore = () => {
    setVisible(prevNum=>prevNum + 3);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main searchQuery={searchQuery} setSearchQuery={setSearchQuery} feed={feed} prevNum={prevNum} handleLoadMore={handleLoadMore} filterCategory={filterCategory} setFilterCategory={setFilterCategory} domainName={domainName} selectedDomain={selectedDomain} setSelectedDomain={setSelectedDomain}/>}/>
        <Route path="/news/:id" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

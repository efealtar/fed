import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Title from './Title';
import Search from './Search';
import Feed from './Feed';
import TopicsArea from './TopicsArea';
import DomainsArea from './DomainsArea';
import { SingleNewsProps } from "./interface";

interface MainProps {
    searchQuery: string;
    setSearchQuery: (searchQuery: string) => void;
    feed: {
        status: string;
        news: SingleNewsProps[];
    };
    prevNum: number;
    handleLoadMore: () => void;
    filterCategory: string;
    setFilterCategory: (filterCategory: string) => void;
    domainName: string[];
    selectedDomain: string[];
    setSelectedDomain: (selectedDomain: string[]) => void;
}


const Main = ({searchQuery, setSearchQuery, setFilterCategory, domainName, selectedDomain, setSelectedDomain, feed, prevNum, handleLoadMore}:MainProps) => {
  return (
    <Container>
      <Title/>
    <Box sx={{ flexGrow: 1 }}>
    <Grid container>
        <Grid item xs={12} container flexDirection='row-reverse'>
        <Grid item xs={8}>
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        </Grid>
        </Grid>
        <Grid item xs={4} container>
        <TopicsArea setFilterCategory={setFilterCategory} setSearchQuery={setSearchQuery}/>
        <DomainsArea domainName={domainName} selectedDomain={selectedDomain} setSelectedDomain={setSelectedDomain} setSearchQuery={setSearchQuery}/>
        </Grid>
        <Feed feed={feed} prevNum={prevNum} handleLoadMore={handleLoadMore}/>
    </Grid>
    </Box>
    </Container>
  )
}

export default Main
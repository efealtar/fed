import Grid from '@mui/material/Grid';
import List from "@mui/material/List";
import Paper from '@mui/material/Paper';
import SingleNews from './SingleNews';
import { Box, Button } from '@mui/material';
import { SingleNewsProps } from './interface';



const Feed = ({feed, prevNum, handleLoadMore}:{ feed:{status:string, news:SingleNewsProps[]}, prevNum:number, handleLoadMore:() => void}) => {
  return (
    
    <Grid item xs={8}>
        <Paper style={{ maxHeight: "70vh", overflow: "auto" }}>
			  <List>
    {feed.news.slice(0,prevNum).map((item:SingleNewsProps) => (
        <SingleNews item={item} key={item.url}/>
    ))}
    <Box textAlign='center'>
     <Button variant='contained' onClick={handleLoadMore}>Load More</Button>
     </Box>
     </List>
        </Paper>
   
    </Grid>   
  )
}

export default Feed
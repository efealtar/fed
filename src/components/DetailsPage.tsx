import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import { SingleNewsProps } from "./interface";
import { Button, Divider, Typography } from '@mui/material';


const DetailsPage = () => {
    const id = useParams<{id:string}>();
    const SingleNews = useSelector((state:any) => state.news.news.find((item:SingleNewsProps) => item.publishedAt === id.id));
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
        <Typography variant='h3' style={{margin:'20px', textAlign:'center'}} >{SingleNews.title}</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img src={SingleNews.urlToImage} alt={SingleNews.title} style={{width:'100%'}}/>
        </Grid>
        <Grid item xs={6}>
            <Typography variant='caption' textAlign={'center'}>{SingleNews.description}</Typography>
            <Divider />
          {SingleNews.content}
            <Divider />
          Author: {SingleNews.author} / {SingleNews.source.name}
            <Divider />
            Source: 
            <Link to={SingleNews.url} style={{textDecoration:'none', color:'grey'}}>{SingleNews.url}</Link>
        </Grid>
        </Grid>
        </Box>
        <Box textAlign='center'>
    <Link to ="/"><Button>Back</Button></Link>
    </Box>
    </>
  )
}

export default DetailsPage
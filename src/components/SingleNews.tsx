import { Box, Divider, Typography } from '@mui/material';
import { SingleNewsProps } from './interface';
import { Link } from "react-router-dom";

const SingleNews = ({item}:{item:SingleNewsProps}) => {
  return (
    <Link to={`/news/${item.publishedAt}`} style={{textDecoration:'none', color:'black'}}>
    <Box m={'10px'} sx={{ borderColor: 'grey.500', backgroundColor: 'grey.100',
    '&:hover': {
      backgroundColor: 'white',
      cursor:'pointer' }}} key={item.url}>
    <Typography variant='h5'>{item.title}</Typography>
    <Typography variant='body1'>{item.description}</Typography>
    <Typography variant='body2'>{item.source.name}</Typography>
    <Divider />
    </Box>
    </Link>
  )
}

export default SingleNews
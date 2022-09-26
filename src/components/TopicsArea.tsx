import Grid from '@mui/material/Grid';
import TopicSingle from './TopicSingle';
import Typography from '@mui/material/Typography'

const TopicsArea = ({setFilterCategory, setSearchQuery}:{setFilterCategory:(topic:string)=>void, setSearchQuery:(query:string)=>void}) => {
    
  return (
    <Grid item>
            <Typography variant="h6" component="h2" gutterBottom>Choose Topic</Typography>
            <TopicSingle setFilterCategory={setFilterCategory} setSearchQuery={setSearchQuery} />
    </Grid>
  )
}

export default TopicsArea
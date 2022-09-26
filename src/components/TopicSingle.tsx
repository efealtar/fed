import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

const TopicSingle = ({setSearchQuery, setFilterCategory}:{ setSearchQuery:(topic:string)=>void, setFilterCategory:(topic:string)=>any} ) => {
  const topics = ['All', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];  
  const handleTopic = (topic:string) => {
        setSearchQuery('');
        topic === 'All' ? setFilterCategory('general') : setFilterCategory(topic);
    }
  return (
    
          <FormControl required sx={{ minWidth: 200 }}>
          <InputLabel>Categories</InputLabel>
          
          <Select
            label="Select Topic"
            variant="outlined"
            defaultValue = ''
            onChange={(e)=>handleTopic(e.target.value as string)}>
              {
            topics.map((topic) => (
            <MenuItem key={topic} value={topic}>{topic}</MenuItem>
            ))
        }
          </Select>
        </FormControl>
      
  )
}

export default TopicSingle
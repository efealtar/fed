import { IconButton, TextField, Typography } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useState } from 'react';

const DomainsArea = ({domainName, selectedDomain, setSelectedDomain, setSearchQuery }:{domainName:any, selectedDomain:string[], setSelectedDomain:(domain:string[])=>void, setSearchQuery:(query:string)=>void}) => {
  const [domain, setDomain] = useState('');
  const handleDomainSearch = (domain:string) => {
    setSearchQuery('');
    if(selectedDomain.includes(domain)) {
      return;
    } else {
      setSelectedDomain([...selectedDomain, domain]);
    }
    setDomain('');
  }

  return (
    <>
    <Grid2>
    <Typography variant="h6" component="h2" gutterBottom>Select Domain/s</Typography>
    <TextField
    id="standard-name"
    label="Example: bbc.com"
    value={domain}
    onChange={(e)=>setDomain(e.target.value)}
    InputProps={{endAdornment:
    <IconButton onClick={()=>handleDomainSearch(domain)}>
      <SearchOutlinedIcon/>
    </IconButton>
    }}
    
  />
    </Grid2>
    </>
  )
}

export default DomainsArea

import TextField from "@mui/material/TextField";

const Search = (props:any) => {

  return (
    <>
    <TextField
        autoComplete='off'
        variant='outlined'
        label='Search news'
        fullWidth
        autoFocus
        value={props.searchQuery}
        onChange={(e) => props.setSearchQuery(e.target.value)}
    />
    </>
            
  )
}

export default Search;

import * as React from 'react';

import { Searchbar } from 'react-native-paper';
import Library from '../Component/home_screens/Library';



const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search for novels"     
    />
    
    
  )
};
export default Search;
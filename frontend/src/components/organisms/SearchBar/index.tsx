import {
  Icon,
  Input,
  IconProps,
  TextField,
  InputAdornment,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import react, { useState } from 'react';
import Chips from '../../atoms/Chip';
import ClearIcon from '@mui/icons-material/Clear';
import theme from '../../../theme';

interface SearchBarProps extends IconProps {
  InputPlaceholder: string;
  IconChildren: any;
  sxIcon?: any;
  sxInput?: any;
  callback: (searchResults: any) => void;
}

const useStyles = makeStyles({
  iconStyle: {
    height: '5px',
    width: '5px',
    color: 'grey',
    left: '9.5px',
  },
  chipStyle: {
    marginRight: '5px',
  },
});

const SearchBar = (props: SearchBarProps) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchInputArray, setSearchInputArray] = useState<string[]>(
    [],
  );

  const handleSearchInput = (event: any) => {
    if (searchInputArray.length < 2) {
      setSearchInput(event.target.value);
    }
  };

  const handleEnterPress = (e: any) => {
    if (e.key === 'Enter') {
      let temp = searchInputArray;
      if (searchInput !== '') {
        let str =
          searchInput.charAt(0).toUpperCase() + searchInput.slice(1);
        temp.push(str);
      }
      setSearchInputArray(temp);
      setSearchInput('');
      searchInputArray.length !== 0 &&
        props.callback(searchInputArray);
    }
  };
  const deleteChip = (index: any) => {
    const reducedArr = searchInputArray.filter((item) => {
      return item !== searchInputArray[index];
    });
    setSearchInputArray(reducedArr);
  };
  const classes = useStyles();
  return (
    <div>
      <TextField
        value={searchInput}
        InputProps={{
          style: {
            width: '500px',
            height: '60px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            border: `1px solid ${theme.palette.grey[300]}`,
            boxSizing: 'border-box',
            color: theme.palette.grey[700],
            fontSize: '16px',
          },
          startAdornment: (
            <>
              <InputAdornment
                style={{
                  height: '5px',
                  width: '5px',
                  color: 'grey',
                  left: '9.5px',
                  marginRight: '18px',
                }}
                position="start"
              >
                {props.IconChildren}
              </InputAdornment>
              <InputAdornment position="start">
                {searchInputArray.length > 0 &&
                  searchInputArray.map((searchInput, index) => (
                    <Chips
                      className={classes.chipStyle}
                      style={{
                        margin: '0px 5px',
                        fontSize: '16px',
                        fontWeight: '500',
                      }}
                      key={index}
                      label={searchInput}
                      deleteIcon={<ClearIcon />}
                      onDelete={() => deleteChip(index)}
                      variant="outlined"
                      size="small"
                      onClick={() => {}}
                    />
                  ))}
              </InputAdornment>
            </>
          ),
        }}
        placeholder={
          searchInputArray.length < 1 ? props.InputPlaceholder : ''
        }
        onChange={handleSearchInput}
        onKeyPress={handleEnterPress}
      />
    </div>
  );
};

export default SearchBar;

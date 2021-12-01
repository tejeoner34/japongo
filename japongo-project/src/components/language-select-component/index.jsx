import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next';

export default function LanguageSelect() {
  
    const [t, i18n] = useTranslation('global');


  

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Language"
          onChange={(e)=>i18n.changeLanguage(e.target.value)}
        >
          <MenuItem value={'es'}>ES</MenuItem>
          <MenuItem value={'en'}>EN</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
  );
}
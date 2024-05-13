import * as React from 'react';
import Radio from '@mui/material/Radio';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ResponsiveAppBar from './ResponsiveAppBar';
import RadioButtons from './RadioButtons';
import CustomBreadcrumbs from './CustomBreadcrumbs'; 
import RecipeReviewCard from './RecipeReviewCard';
import './App.css'



import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };


  return (
    
  <div>
    
    <div>
      <ResponsiveAppBar />
      {/* 다른 컴포넌트들을 여기에 추가 */}
    </div>

  <div >
   <RadioButtons />
  </div>
  <div className="App">
      {/* CustomBreadcrumbs 컴포넌트를 사용 */}
      <CustomBreadcrumbs />
    </div>
    <div className="App">
      {/* RecipeReviewCard 컴포넌트를 사용 */}
      <RecipeReviewCard />
    </div>
  
    <Box sx={{ position: 'fixed', bottom: '20px', right: '20px', '& > :not(style)': { m: 1 } }}>
    <Fab color="primary" aria-label="add">
      <AddIcon />
    </Fab>
  </Box>
  
</div>
  )
}

export default App

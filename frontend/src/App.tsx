import { CssBaseline, ThemeProvider } from '@mui/material';
import JobListPage from './components/pages/JobListPage';
import theme from './theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchJob from './components/pages/SearchJob';
import SavedJobs from './components/pages/SavedJobs';
import UserLocation from './components/pages/UserLocation';
import JobLocation from './components/pages/JobLocation';
import JobSkills from './components/pages/JobSkills';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Routes>
            <Route path="/" element={<UserLocation />} />
            <Route path="/jobLocation" element={<JobLocation />} />
            <Route path="/jobSkills" element={<JobSkills />} />
            <Route path="/searchJob" element={<SearchJob />} />
            <Route
              path="/jobList?skill=:skill&location=:location"
              element={<JobListPage />}
            />
            <Route path="/jobList" element={<JobListPage />} />
            <Route path="/savedJobs" element={<SavedJobs />} />
            <Route path="*" element={<UserLocation />} />
          </Routes>
        </CssBaseline>
      </ThemeProvider>
    </BrowserRouter>
  );
};
// path="jobList?skill=:skill&city=:location"

export default App;

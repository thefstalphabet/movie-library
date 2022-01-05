import Register from './Pages/Register/Register';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import List from './Pages/List/List';
import Dashboard from './Pages/Dashboard/Dashboard';

export default function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route exact path="/" element={<Register/>}/>
          <Route path="/lists" element={<List/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </Router>
    </Container>
  );
}
// Styling
const Container = styled.div`

`;
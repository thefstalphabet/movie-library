import Register from './Pages/Register/Register';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';

export default function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route exact path="/" element={<Register/>}/>
        </Routes>
      </Router>
    </Container>
  );
}
// Styling
const Container = styled.div`

`;
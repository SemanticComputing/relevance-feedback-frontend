import React  from 'react';
import '../App.css';
import InnovationSearch from '../containers/InnovationSearch';
import HelpModal from './HelpModal';
import { Container} from 'reactstrap';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Toffee &ndash; Topical Feedback Search</h1>
      <HelpModal />
      </header>
      <Container>
        <InnovationSearch />
      </Container>
    </div>
  );
};

export default App;

import Navbar from './Navbar';
import Description from './Description';
import UploadMEME from './UploadMEME'

function App() {

  return (
    <div className="App">
      <div className="container-fluid p-0">
        <Navbar />
        <Description />
        <UploadMEME />
      </div>
    </div>
  );
}

export default App;

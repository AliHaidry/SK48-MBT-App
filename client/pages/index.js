import axios from 'axios';

const LandingPage = ({currentUser}) => {
  //console.log(currentUser);
  //axios.get('/api/users/currentuser');
  return <h1>Landing Page</h1>;
};


LandingPage.getInitialProps = async () => {

  if(typeof window === 'undefined') {
    // we are on the server side
  }
  else
  {
    // we are on the browser
  }
  return {};

}


export default LandingPage;

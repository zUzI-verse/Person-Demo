import React, {Component} from "react"

class App extends Component {
 constructor(props){
  super(props)
  this.state = {
    Person: {
      fullName: 'Okarun',
      bio:'An 8th grade japanese student who loves the supernatural and the transient world.',
      imgSrc:'https://images.app.goo.gl/9yVhkNLA7ALVpsEeA',
      profession: 'Student',
    },
    shows:true,timeInterval:0, 

  };
  this.intervalId = null;
 }

 componentDidMount(){
  this.intervalId = setInterval(() => {
    this.setState((prevState) => ({
      timeInterval:prevState.timeInterval + 1,
    }));
  }, 1000);
 }
 componentWillMount() {
  clearInterval(this.intervalId);
 }
 toggleShow = () => {
  this.setState((prevState) => ({
    shows: !prevState.shows,
  }));
 };

 render() {
  const {Person, shows, timeInterval } = this.state;
  return(
    <div className="App">
      <header className="App-header">
        <button onClick={this.toggleShow}>
        {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
            <div>
              <img
                src={Person.imgSrc}
                alt={`${Person.fullName}'s avatar  `}
                style={{ borderRadius: '50%', width: '150px', height: '150px' }}
              />
               <h1>{Person.fullName}</h1>
              <p>{Person.bio}</p>
              <h2>{Person.profession}</h2>
            </div>
          )}
          <div>
            <h3>Time since component mounted: {timeInterval} seconds</h3>
           </div>
      </header>
    </div>
  )
 }
}

export default App;
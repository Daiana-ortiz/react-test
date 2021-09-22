import React from 'react';
import house from './assets/house.jpeg'
import Check from './assets/check.png'


function App() {
  return (
    <div className="App">
      <div className="Title-container">
        <h1 className='first-title'>10 terraced houses in Höör in Sweden</h1>
            <div className="subtitles">
              <div className="sub-title-1">
                <h5>Construction financing - Funding goals reached</h5>
              </div>
              <div className="sub-title-2">
                <h5>Share via</h5>
              </div>
          </div>
      </div>

      <div className="text-container">
        <p>5 af de 10 rækkehuse er allerede solgt! </p>
        <p>30 min kørsel/tog fra Malmø har man denne idylliske by, som er i rivende udvikling. Höör er en udviklingsby, som vi kender fra bl.a Holbæk, Køge, Ringsted i Danmark og byen har næsten 17.000 indbyggere. Byen har en togstation, som går fra Stockholm til Malmø og derfor en by man gerne vil bo i, hvis man vil lidt ud af byerne som Malmø og Helsingborg. </p>
        <p>Höör har skole, institutioner, restauranter, indkøb og et super hyggeligt strøg plads, hvor man hygger med butikker, spisning etc - en meget populær by. </p>
        <p>Byen er i udvikling og derfor har kommunen udstykket et større område, hvor disse rækkehuse bliver opført. Der er allerede bygget en del i området og det er allered en lille bydel i byen. </p>
        <p>Vi er utrolig glade for, at kunne præsenterer jer for denne gode investering og ser frem til at lave flere opgaver i området og i Sverige.</p>
        <p>Bemærk det er først muligt at indbetale på deponeringskontoen når projektet er fuldtegnet.</p>
      </div>

      <div className='container-bottom'>

        <div className='image'>
          <img src={house} alt='image'/>
        </div>
        
        
        <div className='info-container'>
          <h3>A good return</h3>
          <img src={Check} alt='check'/>
        <div className='info'>
          <div className='column-left'>
            <div className='text-info'>
              <p>16,699,622 DKK</p>
              <h4>AMOUNT RAISED</h4>
            </div>
            <div className='text-info'>
              <p>10.00%</p>
              <h4>INVESTORRENTE PA</h4>
            </div>
            <div className='text-info'>
              <p>12 - 15 months</p>
              <h4>PROJECT PERIOD</h4>
            </div>
          </div>

          <div className='column-right'>
            <div className='text-info'>
              <p>16,700,000 DKK</p>
              <h4>PROJECT SIZE</h4>
            </div>
            
            <div className='text-info'>
              <p>10,000 DKK</p>
              <h4>MIN. DEPOSIT</h4>
            </div>
            
            <div className='text-info'>
              <p>30.00%</p>
              <h4>CONVERING</h4>
            </div>
          </div>
        </div>

      </div>
      </div>
    </div>
  );
}

export default App;

import oden from './images/humans/Oden.png';
import freja from './images/humans/Freja.png';
import tor from './images/humans/Tor.png';
import hades from './images/humans/Hades.png';
import frej from './images/humans/Frej.png';

function Gods() {
  return (
    <div>
      <div class="grid-layout">
          <div class="gods">
              <img id="oden" src={oden} alt="Oden" /> 
              <div class="name">Oden</div>
          </div>
          <div class="gods">
              <img id="freja" src={freja} alt="Freja" /> 
              <div class="name">Freja</div>
          </div>
          <div class="gods">
              <img id="tor" src={tor} alt="Tor" /> 
              <div class="name">Tor</div>
          </div>
          <div class="gods">
              <img id="hades" src={hades} alt="Hades" /> 
              <div class="name">Hades</div>
          </div>
          <div class="gods">
              <img id="frej" src={frej} alt="Frej" /> 
              <div class="name">Frej</div>

          </div>
      </div>     
    </div>
  );
}

export default Gods;

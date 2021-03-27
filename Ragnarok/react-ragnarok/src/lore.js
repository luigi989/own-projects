import bow from './images/lore/Bow.png';
import club from './images/lore/Club.png';
import hammer from './images/lore/Hammer.png';
import sword from './images/lore/Sword.png';

function Lore() {
  return (
    <div>
        <div class="grid-layout">
            <div class="lore">
                <img id="bow" src={bow} alt="Bow" /> 
                <div class="name">Bow</div>
            </div>
            <div class="lore">
                <img id="club" src={club} alt="Club" /> 
                <div class="name">Club</div>
            </div>
            <div class="lore">
                <img id="hammer" src={hammer} alt="Tor's Hammer" /> 
                <div class="name">Tor's hammer</div>
            </div>
            <div class="lore">
                <img id="sword" src={sword} alt="Sword" /> 
                <div class="name">Sword</div>
            </div>
        </div> 
    </div>
  );
}

export default Lore;

import ash_zombie from './images/mobs/Ash Zombie.png';
import bat from './images/mobs/Bat.png';
import bear from './images/mobs/Bear.png';
import icebear from './images/mobs/Icebear.png';
import skeleton_bear from './images/mobs/Skeleton Bear.png';
import vampire from './images/mobs/Vampire.png';
import wolf from './images/mobs/Wolf.png';

function Creatures() {
  return (
    <div>
        <div class="grid-layout">
            <div class="creatures">
                <img id="ash_zombie" src={ash_zombie} alt="Ash Zombie" /> 
                <div class="name">Ash Zombie</div>
            </div>
            <div class="creatures">
                <img id="bat" src={bat} alt="Bat" /> 
                <div class="name">Bat</div>
            </div>
            <div class="creatures">
                <img id="bear" src={bear} alt="Bear" /> 
                <div class="name">Bear</div>
            </div>
            <div class="creatures">
                <img id="icebear" src={icebear} alt="IceBear" /> 
                <div class="name">Icebear</div>
            </div>
            <div class="creatures">
                <img id="skelton_bear" src={skeleton_bear} alt="Skeleton Bear" /> 
                <div class="name">Skeleton Bear</div>
            </div>
            <div class="creatures">
                <img id="vampire" src={vampire} alt="Vampire" /> 
                <div class="name">Vampire</div>
            </div>
            <div class="creatures">
                <img id="wolf" src={wolf} alt="Wolf" /> 
                <div class="name">Wolf</div>
            </div>
        </div>     
    </div>
  );
}

export default Creatures;

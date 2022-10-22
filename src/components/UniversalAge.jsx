import { useState } from 'react';
//Api
import planets from '../Api/planets.json';
import guides from '../util/guides';

//Styles:
import '../styles/cursor.css';
import '../styles/UniversalAge.css';
import '../styles/InputAge.css';

//Videos
import BG from '../BG/starsky.mp4';
import InputAge from './InputAge';
import UniversalInfo from './UniversalInfo';
import DisplayAge from './DisplayAge';
import PlanetSwipper from './PlanetSwipper';
import Lang from './Lang';
import Developer from './Developer';
import Cursor from './Cursor';

function UniversalAge() {
  const [birthday, setBirthday] = useState('');
  const [planet, setPlanet] = useState('earth');
  const [lang, setLang] = useState(localStorage.getItem('lang') ?? "en");

  return (
    <>
      <Cursor />
      <video className='videoBG' muted={true} autoPlay={true} loop={true} src={BG}></video>
      <div className="universalage">
        <InputAge birthday={birthday} setBirthday={setBirthday} />
        <UniversalInfo birthday={birthday} setBirthday={setBirthday} planet={planet} planets={planets} lang={lang} guides={guides} />
        <DisplayAge birthday={birthday} planet={planet} planets={planets} lang={lang} guides={guides} />
        <PlanetSwipper planet={planet} setPlanet={setPlanet} planets={planets.en} />
        <Lang lang={lang} setLang={setLang} />
        <Developer />
      </div>
    </>
  );
}

export default UniversalAge;

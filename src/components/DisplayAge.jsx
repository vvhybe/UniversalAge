import React, { useCallback } from 'react';

function DisplayAge({ birthday, planet, planets, lang, guides }) {
  // # earth revolution period = 365d 6h 9min
  // # 6h = 0.25day -> 6h + 6h + 6h + 6h = 24h
  // # 1440min = 1day it means 9min = 0.00625day
  // # then Earth revolution period in days = 365 + 0.25 + 0.0625 = 365.25625 

  const daysdiffer = date => ((new Date() - new Date(date)) / 8.64e7); // to get the number of days between the current date and the birthdate
  const planetRev = (rev) => (rev !== 365.25625 ? rev / 365.25625 : rev);

  const earthAge = daysdiffer(birthday) / planetRev(planets.en.earth.rev);
  const universalAge = useCallback(() => ((planet === "earth") ? earthAge : (earthAge / planetRev(planets.en[planet].rev))), [earthAge, planet, planets.en]);
  const age = universalAge().toString();

  return (
    <h1 className='displayAge'>
      <span>{guides[lang].myAge(planets[lang][planet].name)}</span>
      {age}
    </h1>
  )
}

export default DisplayAge;
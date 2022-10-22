import React from 'react'

function UniversalInfo({ birthday, setBirthday, planet, planets, lang, guides }) {
  const crntPlanetInfo = planets[lang][planet];
  const langGuides = guides[lang];
  const limitYear = new Date().getFullYear() - 3;

  const changeBirthDay = (birth) => {
    setBirthday(birth);
    localStorage.setItem('birthday', birth);
  }

  return (
    <main className='universalInfo'>
      <article className="overview">
        <h1 className='planetTitle'>{crntPlanetInfo.name}</h1>
        <p className='planetOverview'>{crntPlanetInfo.overview}</p>
      </article>

      <article className="info">
        <input type={"date"} className='diplayBirthdate' min="1980-01-01" max={limitYear + "-12-31"} value={birthday} onChange={e => { changeBirthDay(e.target.value) }} />
        <ul className='planetInfo'>
          <li>{crntPlanetInfo.distance}<span className='title'>{langGuides.distance}</span></li>
          <li>{crntPlanetInfo.radius}<span className='title'>{langGuides.radius}</span></li>
          <li>{crntPlanetInfo.surfaceArea}<span className='title'>{langGuides.surfaceArea}</span></li>
          <li>{crntPlanetInfo.mass}<span className='title'>{langGuides.mass}</span></li>
          <li>{crntPlanetInfo.density}<span className='title'>{langGuides.density}</span></li>
          <li>{crntPlanetInfo.age}<span className='title'>{langGuides.age}</span></li>
        </ul>
      </article>
    </main>
  )
}

export default UniversalInfo;
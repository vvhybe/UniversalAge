import React, { useState, useEffect } from 'react';
import moon from '../Planets/moon.mp4';

function InputAge({ birthday, setBirthday }) {
    const [model, setModel] = useState(true);
    const limitYear = new Date().getFullYear() - 3;

    useEffect(() => {
        const localBirthday = localStorage.getItem('birthday');
        setBirthday(localBirthday);
        setModel(localBirthday ? false : true);
    }, [setBirthday]);

    const storeBirthDay = (birth) => {
        setBirthday(birth);
    }

    const toggelModel = (e) => {
        e.preventDefault();
        if (birthday) {
            localStorage.setItem('birthday', birthday);
            setModel(false);
        }
    }

    return model ? (
        <div className="modalBox">
            <form className={model ? 'inptAge show' : 'inptAge close'} method='GET' onSubmit={e => toggelModel(e)}>
                <video muted={true} autoPlay={true} loop={true} src={moon}></video>
                <h1 className='wlcmtitle'><span>Welcome To </span>The UniversalAge</h1>
                <p className='presentation'>Where you will be able to see your age on Earth, from the angle of our solar system planets.</p>
                <label htmlFor="birthday">
                    <span>Enter your Birthday:</span>
                    <input type="date" min="1980-01-01" max={limitYear + "-12-31"} onChange={e => storeBirthDay(e.target.value)} />
                </label>
                <button type="submit">Confirm</button>
            </form>
        </div>
    ) : null;
}

export default InputAge;
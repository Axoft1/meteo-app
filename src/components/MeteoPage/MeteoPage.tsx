import { useDispatch } from 'react-redux';

import { ChangeEvent, FC, useEffect, useState } from 'react';

import { getByCity } from '../../store/city/city.actions';

import { IResults } from '../../types/IMeteo';
import { useAppSelector } from '../../hooks/redux';
import { AppDispatch } from '../../store/store';
import { getWeather } from '../../store/meteo/meteo.actions';

import styles from './MeteoPage.module.scss';

const MeteoPage: FC = () => {
  const {
    city: { meteoCity },
    meteo: { weatherCity },
  } = useAppSelector((state) => state);
  const [cityList, setCityList] = useState<IResults[]>([] as IResults[]);
  const [city, setCity] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();

  const getMeteo = (latitude: number, longitude: number, name: string) => {;
    setCity(name);
    dispatch(getByCity(''));
    dispatch(getWeather({ latitude: latitude, longitude: longitude }));
    setCityList([]);
    setValue('');
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    dispatch(getByCity(e.target.value));
  };

  useEffect(() => {
    meteoCity && setCityList(meteoCity.results);
  }, [meteoCity, weatherCity]);

  return (
    <div className={styles.main}>
      <div className={styles.form}>
        <input
          type="text"
          value={value}
          list="citys"
          onChange={(e) => onChange(e)}
          placeholder="City"
        />
        <ul className={styles.cityUl}>
          {cityList
            ? cityList.map((el,i) => (
              <li
                className={styles.cityLi}
                key={`${el.name}${i}`}
                onClick={() => getMeteo(el.latitude, el.longitude, el.name)}
                data-testid="cityLi"
              >
                {el.name}
              </li>
            ))
            : ''}
        </ul>
      </div>
      {weatherCity.daily ? (
        <div data-testid="current_weather">
          <h2>{city}</h2>
          <div>{`Now ${weatherCity.current_weather.temperature} ${weatherCity.daily_units.temperature_2m_max}`}</div>
          <div className={styles.weatherList}>
            <div>
              Weather for 7 days
              {weatherCity.daily.time.map((e, i) => (
                <div key={`${e}${i}`}>{e}</div>
              ))}
            </div>
            <div>
              Max.
              {weatherCity.daily.temperature_2m_max.map((e, i) => (
                <div key={`${e}max${i}`}>{e}</div>
              ))}
            </div>
            <div>
              Min.
              {weatherCity.daily.temperature_2m_min.map((e, i) => (
                <div key={`${e}min${i}`}>{e}</div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default MeteoPage;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { countries as countriesApi } from '../api';

export default function Countries() {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [countries, setContries] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await countriesApi.fetch(name);
        console.log(data);
        setContries(data);
      } catch (err) {
        setError(true);
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return (<>Loading...</>);
  if (error) return (<>Page in Progress...</>);
  return (
    <>
      {countries.length && countries.map((country) => (<li key={country.id}>{country.country}</li>))}
    </>
  );
}

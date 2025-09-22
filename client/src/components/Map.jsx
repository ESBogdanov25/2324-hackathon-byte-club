import React, { useEffect, useState } from 'react';
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Navbar, Footer } from "./";

const Map = () => {
  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });

  const hospitals = [
    { name: "МЦ Света София", lat: 42.49450, lng: 27.47348 },
    { name: "МБАЛ Бургасмед", lat: 42.46331, lng: 27.42073 },
    { name: "Център за кожно-венерически заболявания", lat: 42.50031, lng: 27.47478 },
    { name: "Комплексен онкологичен център", lat: 42.50136, lng:  27.47540},
    { name: "Диагностично консултативен център", lat: 42.50133, lng: 27.47665 },
    { name: "Специализирана болница за лечение на пневмо-фтизиатрични заболявания", lat: 42.50072 , lng: 27.47715 },
    { name: "ДКЦ Ел Масри", lat: 42.50948, lng: 27.46953 },
    { name: "Областен диспансер за психични заболявания Проф. д-p Иван Темков", lat: 42.51413, lng: 27.47414 },
    { name: "УМБАЛ Бургас", lat: 42.51367, lng: 27.46607 },
    { name: "МБАЛ Д-p Маджуров", lat: 42.51846, lng: 27.46553 },
    { name: "Лайф Хоспитал", lat: 42.52751, lng: 27.46806 },
    { name: "МБАЛ Сърце и мозък", lat: 42.52748, lng: 27.44532 },
    { name: "МБАЛ Пловдив", lat: 42.15812, lng: 24.71754 },
    { name: "3 ДКЦ", lat: 42.16852, lng: 24.74660 },
    { name: "Св. Иван Рилски", lat: 42.16793, lng: 24.74772 },
    { name: "5-то ДКЦ", lat: 42.13224, lng:  24.79369},
    { name: "МЦ Димед", lat: 42.13436, lng: 24.79252 },
    { name: "Раредис", lat: 42.12993, lng: 24.78112 },
    { name: "Св. Пантелеймон", lat: 42.12151, lng: 24.75034 },
    { name: "МБАЛ Св. Каридад", lat: 42.12218, lng: 24.74668 },
    { name: "СБАЛ Св.Анна", lat: 42.12013, lng: 24.73099 },
    { name: "Областен диспансер за кожно-венерически заболявания", lat: 42.13079, lng: 24.74672 },
    { name: "УМБАЛ Еврохоспитал", lat: 42.11100, lng: 24.70950 },
    { name: "МТБ Пловдив", lat: 42.12709, lng: 24.71694 },
    { name: "УМБАЛ Каспела", lat: 42.13018, lng: 24.71629 },
    { name: "УМБАЛ Свети Георги", lat: 42.13848, lng: 24.71304 },
    { name: "УМБАЛ Пълмед", lat: 42.13839, lng: 24.71736 },
    { name: "ДКЦ Свети Георги", lat: 42.13939, lng: 24.73699 },
    { name: "МБАЛ Свети Мина", lat: 42.13632, lng: 24.74296 },
    { name: "BMA МБАЛ Пловдив", lat: 42.13691, lng: 24.75710 },
    { name: "Торакс", lat: 42.15080, lng: 24.74322  },
    { name: "Eврохоспитал", lat: 43.24078, lng:  27.98124},
    { name: "Онкологична болница-Марко Антонов", lat: 43.24078, lng: 27.98124 },
    { name: "Градска болница", lat: 43.20637, lng: 27.90917 },
    { name: "Диспансер за белодробни заболявания", lat: 43.20974, lng: 27.89079 },
    { name: "V ДКЦ Св. Екатерина", lat: 43.20882, lng: 27.89535 },
    { name: "Медик Дент ЕООД", lat: 43.21409, lng: 27.90034 },
    { name: "МБАЛ Света Анна", lat: 43.21386, lng: 27.91769 },
    { name: "Очна клиника Св.Николай Чудотворец", lat: 43.21787, lng: 27.92339 },
    { name: "Военно-морска болница", lat: 43.22776, lng: 27.92633 },
    { name: "МБАЛ Света Марина", lat: 43.22691, lng: 27.93690 },
    { name: "ФАМИЛИЯ ДЕНТ ЕООД", lat: 43.23069, lng: 27.87897 },
  ];

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    if (!map && userLocation.lat !== 0 && userLocation.lng !== 0) {
      const leafletMap = L.map('map', {
        minZoom: 5
      }).setView([userLocation.lat, userLocation.lng], 14);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(leafletMap);

      setMap(leafletMap);
    }
  }, [map, userLocation]);

  useEffect(() => {
    if (map && userLocation.lat !== 0 && userLocation.lng !== 0) {
      // Add marker for user's location
      L.marker([userLocation.lat, userLocation.lng])
        .addTo(map)
        .bindPopup('Your Location');

      // Add hospital markers with red color
      hospitals.forEach(hospital => {
        L.marker([hospital.lat, hospital.lng], {
          icon: L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
          })
        })
          .addTo(map)
          .bindPopup(hospital.name);
      });
    }
  }, [map, userLocation]);

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div id="map" className="w-3/4 h-2/3 border-2 border-gray-300 rounded-xl mt-56 md:mt-20" />
      </div>
      <Footer />
    </>
  );
};

export default Map;

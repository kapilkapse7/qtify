import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from './api/api';
import Section from './components/Section/Section';
import styles from "./App.module.css";

const App = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);

  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newTab) => {
    console.log(newTab, "activeTab");
    setActiveTab(newTab);
  };

  const filterSongsByGenre = (tab) => {
    let genreKey;
    if (tab === 0) {
      applyFilter(songs);
      return;
    } else if (tab === 1) {
      genreKey = "rock";
    } else if (tab === 2) {
      genreKey = "pop";
    } else if (tab === 3) {
      genreKey = "jazz";
    } else if (tab === 4) {
      genreKey = "blues";
    }

    const filtered = songs.filter((track) => track.genre.key === genreKey);
    applyFilter(filtered);
  };

  const applyFilter = (filteredSongs) => {
    setFilteredSongs(filteredSongs);
  };

  const fetchAllSongs = async () => {
    try {
      const data = await fetchSongs();
      setSongs(data);
      setFilteredSongs(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTopAlbumsData = async () => {
    try {
      const albums = await fetchTopAlbums();
      setTopAlbums(albums);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchNewAlbumsData = async () => {
    try {
      const albums = await fetchNewAlbums();
      setNewAlbums(albums);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    filterSongsByGenre(activeTab);
  }, [activeTab]);

  useEffect(() => {
    fetchTopAlbumsData();
    fetchNewAlbumsData();
    fetchAllSongs();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section data={topAlbums} title="Top Albums" type="album" />
        <Section data={newAlbums} title="New Albums" type="album" />
      </div>
      <div className={styles.songs}>
        <Section data={filteredSongs} title="Songs" type="song" value={activeTab} handleChange={handleTabChange} />
      </div>
    </div>
  );
};

export default App;

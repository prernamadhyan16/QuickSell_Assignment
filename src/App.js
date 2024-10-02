import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import axios from 'axios';
import './App.css';
import NavBar from './components/NavBar'; // Import NavBar

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'status');
  const [sortOption, setSortOption] = useState(localStorage.getItem('sortOption') || 'priority');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
        setTickets(response.data.tickets);
        setUsers(response.data.users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('grouping', grouping);
  }, [grouping]);

  useEffect(() => {
    localStorage.setItem('sortOption', sortOption);
  }, [sortOption]);

  return (
    <div className="app">
      <NavBar
        grouping={grouping}
        setGrouping={setGrouping}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <Board tickets={tickets} users={users} grouping={grouping} sortOption={sortOption} />
    </div>
  );
};

export default App;

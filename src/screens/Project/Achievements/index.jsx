import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Loader } from './styles';
import axios from 'axios';
import api from '../../../services/api';
import { achievementsMap } from '../../../utils/achievements';

export function Achievements({ projectId }) {
  const { user } = useSelector(state => state.configs);
  const [achievements, setAchievements] = useState(null);
  const controller = new AbortController();

  useEffect(() => {
    async function load() {
      try {
        const { achievements: data } = await api.project(projectId, user.access_token, controller.signal)
        setAchievements(data.filter(achievement => achievement.unlocked));
      } catch (err) {
        if (!axios.isCancel(err)) console.warn(err);
      }
    }

    load();
    return () => controller.abort();
  }, [])

  if (!achievements) return <Loader />;

  return achievements.map((achievement, index) => (
    <Container
      key={`achievement-${index}`}
      Image={achievementsMap[achievement.name].image}
      title={achievementsMap[achievement.name].title}
      caption={achievementsMap[achievement.name].caption}
    />
  ));
}

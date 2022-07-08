import React from 'react';
import { ProgressBar } from 'react-native-paper';
import { Container, ListContainer, Section, Item, RightContainer, RightLabel } from './styles';

function doConvertBusinessTime(startedAt, endedAt) {
  const configs = { hour: '2-digit', minute: '2-digit' };
  const start = new Date(startedAt).toLocaleTimeString([], configs);
  const end = new Date(endedAt).toLocaleTimeString([], configs);
  return `${start}h às ${end}h`;
}

export function Absences({ absences }) {

  return (
    <ListContainer>
      {absences.map((absence, index) => (
        <Container key={`absence-container-${index}`}>
          <Section
            id={index.toString()}
            title={new Date(`${absence.date}T00:00:00`).toLocaleDateString()}
          >
            <ProgressBar progress={absence.attendance_percentage} />
            {absence.meetings.map((meeting, index) => (
              <Item
                key={`absence-item-${index}`}
                title={meeting.name}
                right={() => (
                  <RightContainer elevation={5}>
                    <RightLabel>
                      {`${Math.round(meeting.attendance_percentage * 100)}%`}
                    </RightLabel>
                  </RightContainer>
                )}
                description={doConvertBusinessTime(meeting.started_at, meeting.ended_at)}
              />
            ))}
          </Section>
        </Container>
      ))}
    </ListContainer >
  );
}

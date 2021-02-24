import React from 'react';
import {
  Button,
  Text,
  Icon,
} from 'native-base';
import {
  Pressable,
  View,
  SectionList,

} from 'react-native';
import styles from './ActivitiesListStyles';
import { ACTIVITIES } from '../../consts';

const ActivitiesList = () => {
  const [selectedSection, setSelectedSection] = React.useState('Exercise');

  const Activity = ({ title }) => (
    <View style={styles.activity}>
      <Text style={styles.activityTitle}>{title}</Text>
    </View>
  );

  const handleRenderSection = (selected) => ({ section, item }) => {
    if (selected === section.title) return <Activity title={item} />;
    return null;
  };

  const handleTitlePressEvent = (pressedTitle) => (currentTitle) => {
    const newTitle = pressedTitle === currentTitle ? '' : pressedTitle;

    setSelectedSection(newTitle);
  };

  return (
    <>
      <SectionList
        sections={ACTIVITIES}
        keyExtractor={(item, index) => item + index}
        renderItem={({ section, item }) => handleRenderSection(selectedSection)({ section, item })}
        renderSectionHeader={({ section: { title } }) => (
          <Pressable onPress={() => handleTitlePressEvent(title)(selectedSection)}>
            <Text style={styles.header}>{title}</Text>
          </Pressable>
        )}
      />

      <Button rounded style={styles.button} large>
        <Icon name="ios-add" />
      </Button>
    </>
  );
};

export default ActivitiesList;

import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Container,
  IconsContainer,
  Description,
  DetailsButton,
  DetailsButtonText,
} from './styles';

const Main: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <IconsContainer>
        <Icon name="react" size={40} color="#61DAFB" />
        <Icon name="plus" size={20} />
        <Icon name="language-typescript" size={40} color="#3178C6" />
        <Icon name="equal" size={20} />
        <Icon name="heart" size={40} color="#FE251B" />
      </IconsContainer>

      <Description testID="main-description">
        This is a template to create React Native applications with TypeScript
        and other pretty cool stuff.
      </Description>

      <DetailsButton onPress={() => navigate('Details')}>
        <DetailsButtonText>TEST NAVIGATION</DetailsButtonText>
      </DetailsButton>
    </Container>
  );
};

export default Main;

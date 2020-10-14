import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Container,
  Description,
  DetailsButton,
  DetailsButtonText,
} from './styles';

const Main: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
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

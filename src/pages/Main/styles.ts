import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const IconsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Description = styled.Text`
  font-size: 18px;
  margin: 20px;
  text-align: center;
`;

export const DetailsButton = styled.TouchableOpacity`
  width: 150px;
  height: 40px;
  background-color: #e3e3e3;
  justify-content: center;
  align-items: center;
`;

export const DetailsButtonText = styled.Text`
  color: #333;
`;

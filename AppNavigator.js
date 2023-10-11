import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './HomePage';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        {/* Add other screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

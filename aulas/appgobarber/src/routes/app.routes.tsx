import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from 'src/pages/Profile';
import CreateAppointment from 'src/pages/CreateAppointment';
import AppointmentCreated from 'src/pages/AppointmentCreated';
import Dashboard from '../pages/Dashboard';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      cardStyle: {
        backgroundColor: '#312e38',
      },
    }}
  >
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="CreateAppointment" component={CreateAppointment} />
    <App.Screen name="AppoitmentCreated" component={AppointmentCreated} />

    <App.Screen name="Profile" component={Profile} />
  </App.Navigator>
);

export default AppRoutes;

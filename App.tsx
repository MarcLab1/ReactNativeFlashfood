import './gesture-handler';
import {StyleSheet} from 'react-native';
import React from 'react';
import Nav from './scr/navigation/Nav';
import {ThemeProvider} from './scr/style/ThemeContext';
import {CartProvider} from './scr/cart/CartContext';

const App = () => {
  return (
    <ThemeProvider>
      <CartProvider>
        <Nav />
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;

export const colors = {
  black: '#000',
  white: '#fff',
};

const styles = StyleSheet.create({});

//adb shell "cmd uimode night yes"
//adb shell "cmd uimode night no"

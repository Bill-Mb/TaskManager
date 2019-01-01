import React from 'react';
import { injectIntl } from 'react-intl';// To get translate message
import T from './translations';
import { StyleSheet, Text, View, Button as NativeButton } from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';



@injectIntl
export default class RootLayout extends React.Component {
  componentWillMount() {

  }

  render() {
    const { formatMessage: f } = this.props.intl;

    return (
      <View style={styles.container}>
        <Text>{f(T.welcome)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

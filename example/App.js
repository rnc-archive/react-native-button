/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

import * as React from 'react';
import {
  Alert,
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Button } from 'react-native'; // This should import from the local src directory, but I haven't been able to get that to work.

// Examples which show the user how to correctly use the library
interface Example {
  id: string;
  title: string;
  description: string;
  render(): React.ReactNode;
}

function onButtonPress(buttonName) {
  Alert.alert(`${buttonName} has been pressed!`);
}

const EXAMPLES: Example[] = [
  {
    id: 'simpleButton',
    title: 'Simple Button',
    description: ('The title and onPress handler are required. It is ' +
    'recommended to set accessibilityLabel to help make your app usable by ' +
    'everyone.': string),
    render: function(): React.Node {
      return (
          <Button
              onPress={() => onButtonPress('Simple')}
              testID="simple_button"
              color={theme.LinkColor}
              title="Press Me"
              accessibilityLabel="See an informative alert"
          />
      );
    },
  },
  {
    id: 'adjustedColor',
    title: 'Adjusted color',
    description: ('Adjusts the color in a way that looks standard on each ' +
    'platform. On iOS, the color prop controls the color of the text. On ' +
    'Android, the color adjusts the background color of the button.': string),
     render: function(): React.Node {
       return (
           <Button
               onPress={() => onButtonPress('Purple')}
               testID="purple_button"
               color={theme.SystemPurpleColor}
               title="Press Purple"
               accessibilityLabel="Learn more about purple"
          />
      );
    },
  },
  {
    id: 'fitToTextLayout',
    title: 'Fit to text layout',
    description: ('This layout strategy lets the title define the width of ' +
    'the button': string),
    render: function(): React.Node {
      return (
          <View style={styles.container}>
            <Button
                onPress={() => onButtonPress('Left')}
                testID="left_button"
                color={theme.LinkColor}
                title="This looks great!"
                accessibilityLabel="This sounds great!"
            />
            <Button
                onPress={() => onButtonPress('Right')}
                testID="right_button"
                color={theme.SystemPurpleColor}
                title="Ok!"
                accessibilityLabel="Ok, Great!"
            />
          </View>
      );
    },
  },
  {
    id: 'disabledButton',
    title: 'Disabled Button',
    description: 'All interactions for the component are disabled.',
    render: function(): React.Node {
      return (
          <Button
              disabled
              onPress={() => onButtonPress('Disabled')}
              testID="disabled_button"
              title="I Am Disabled"
              accessibilityLabel="See an informative alert"
          />
      );
    },
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  sectionTitle: {
    fontSize: 24,
    marginHorizontal: 8,
    marginTop: 24,
  },
  exampleContainer: {
    padding: 16,
    marginVertical: 4,
    backgroundColor: '#FFF',
    borderColor: '#EEE',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  exampleTitle: {
    fontSize: 18,
  },
  exampleDescription: {
    color: '#333333',
    marginBottom: 16,
  },
  exampleInnerContainer: {
    borderColor: '#EEE',
    borderTopWidth: 1,
    paddingTop: 16,
  },
  button: {
    borderColor: '#696969',
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d3d3d3',
  },
});

const theme = {
  LinkColor: '#007affff',
  SystemPurpleColor: '#af52deff',
};

interface State {
  activeTestCase: Example | null;
}

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      activeTestCase: null,
    };
  }

  render() {
    return (
      <ScrollView testID="scrollView" style={styles.container}>
        <SafeAreaView>
          <>
            <Text testID="examplesTitle" style={styles.sectionTitle}>
              Examples
            </Text>
            {EXAMPLES.map(this._renderExample)}
          </>
        </SafeAreaView>
      </ScrollView>
    );
  }

  _renderExample = (example: Example) => {
    return (
        <View
            testID={`example-${example.id}`}
            key={example.title}
            style={styles.exampleContainer}>
          <Text style={styles.exampleTitle}>{example.title}</Text>
          <Text style={styles.exampleDescription}>{example.description}</Text>
          <View style={styles.exampleInnerContainer}>{example.render()}</View>
        </View>
    );
  };
}

export default App;

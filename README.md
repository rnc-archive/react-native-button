
# react-native-button

## Getting started

`$ npm install react-native-button --save`

### Mostly automatic installation

`$ react-native link react-native-button`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-button` and add `RNCButton.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNCButton.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactnativecommunity.button.RNCButtonPackage;` to the imports at the top of the file
  - Add `new RNCButtonPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-button'
  	project(':react-native-button').projectDir = new File(rootProject.projectDir, 	'../../node_modules/react-native-button/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-button')
  	```


## Usage
```javascript
import RNCButton from 'react-native-button';

// TODO: What to do with the module?
RNCButton;
```
  
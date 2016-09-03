# react-native-check-box
Checkbox component for react native, it works on iOS and Android.

## Content

- [Installation](#installation)
- [Demo](#demo)
- [Getting started](#getting-started)
- [API](#api)
- [Contribution](#contribution)

## Installation

* 1.Run `npm i react-native-check-box --save`
* 2.`import Toast, {DURATION} from 'react-native-check-box'`    

## Demo  
* [Examples](https://github.com/crazycodeboy/react-native-check-box/tree/master/examples)

![Screenshots](https://raw.githubusercontent.com/crazycodeboy/react-native-check-box/master/examples/Screenshots/react-native-check-box-screenshots.gif)

## Getting started  

Add `react-native-check-box` to your js file.   

`import CheckBox from 'react-native-check-box'`  

Inside your component's render method, use CheckBox:   

```javascript
<CheckBox
    style={{flex: 1, padding: 10}}
    onClick={()=>this.onClick(data)}
    isChecked={data.checked}
    leftText={leftText}
/>;
```

Then you can use it like this:   


### Basic usage  

````javascript
 <CheckBox
     style={{flex: 1, padding: 10}}
     onClick={()=>this.onClick(data)}
     isChecked={data.checked}
     leftText={leftText}
 />;
 ```

### Custom CheckBox   

```javascript
renderCheckBox(data) {
    var leftText = data.name;
    return (
        <CheckBox
            style={{flex: 1, padding: 10}}
            onClick={()=>this.onClick(data)}
            isChecked={data.checked}
            leftText={leftText}
            checkedImage={<Image source={require('../../page/my/img/ic_check_box.png')} style={this.props.theme.styles.tabBarSelectedIcon}/>}
            unCheckedImage={<Image source={require('../../page/my/img/ic_check_box_outline_blank.png')} style={this.props.theme.styles.tabBarSelectedIcon}/>}
        />);
}
```

**More Usage:**    

[GitHubPopular](https://github.com/crazycodeboy/GitHubPopular/blob/develop/js/page/my/CustomKeyPage.js)



## API


Props              | Type     | Optional | Default     | Description
----------------- | -------- | -------- | ----------- | -----------
style  | View.propTypes.style  | true |   |   Custom style checkbox
leftText | React.PropTypes.string |true |   | Custom left Text
checkedImage  |  React.PropTypes.element | Default image | true  | Custom  checked Image
unCheckedImage  |  React.PropTypes.element |  Default image  | true  | Custom  unchecked Image
isChecked  |  React.PropTypes.bool |  true  |  false  | Initialization checkbox checked


## Contribution

Issues are welcome. Please add a screenshot of bug and code snippet. Quickest way to solve issue is to reproduce it on one of the examples.

Pull requests are welcome. If you want to change API or making something big better to create issue and discuss it first.

---

**MIT Licensed**

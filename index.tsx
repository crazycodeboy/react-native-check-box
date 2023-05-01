
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableHighlight,
    ViewProps,
    TextStyle,
    GestureResponderEvent,
    ViewStyle
} from 'react-native';

export interface CheckBoxStyle {
    container: ViewStyle,
    leftText: TextStyle,
    rightText: TextStyle
}

export interface CheckBoxProps extends ViewProps {
    leftText?: string;
    leftTextView?: unknown;
    rightText?: string;
    leftTextStyle: TextStyle;
    rightTextView?: unknown;
    rightTextStyle: TextStyle;
    checkedImage?: unknown;
    unCheckedImage?: unknown;
    onClick: (e: GestureResponderEvent) => void;
    isChecked: boolean;
    isIndeterminate: boolean;
    checkBoxColor?: string;
    checkedCheckBoxColor?: string;
    uncheckedCheckBoxColor?: string;
    disabled?: boolean;
    indeterminateImage?: any;
}

export interface DefaultProps {
    isChecked: boolean;
    isIndeterminate: boolean;
    leftTextStyle: TextStyle;
    rightTextStyle: TextStyle;
}

export default class CheckBox extends Component<CheckBoxProps, {}> {
    constructor(props: CheckBoxProps) {
        super(props);
    }
    public static defaultProps: DefaultProps = {
        isChecked: false,
        isIndeterminate: false,
        leftTextStyle: {},
        rightTextStyle: {}
    }

    private onClick(e: GestureResponderEvent): void {
        if (this.props.onClick) {
            this.props.onClick(e);
        }
    }

    private _renderLeft(): JSX.Element | any {
        if (this.props.leftTextView) return this.props.leftTextView;
        if (!this.props.leftText) return null;
        return (
            <Text style={[styles.leftText, this.props.leftTextStyle]}>{this.props.leftText}</Text>
        );
    }

    private _renderRight(): JSX.Element | any {
        if (this.props.rightTextView) return this.props.rightTextView;
        if (!this.props.rightText) return null;
        return (
            <Text style={[styles.rightText, this.props.rightTextStyle]}>{this.props.rightText}</Text>
        );
    }

    private _renderImage(): any {
        if (this.props.isIndeterminate) {
            return this.props.indeterminateImage ? this.props.indeterminateImage : this.genCheckedImage();
        }
        if (this.props.isChecked) {
            return this.props.checkedImage ? this.props.checkedImage : this.genCheckedImage();
        } else {
            return this.props.unCheckedImage ? this.props.unCheckedImage : this.genCheckedImage();
        }
    }

    private _getCheckedCheckBoxColor(): string | undefined {
        return this.props.checkedCheckBoxColor ? this.props.checkedCheckBoxColor : this.props.checkBoxColor
    }

    private _getUncheckedCheckBoxColor(): string | undefined {
        return this.props.uncheckedCheckBoxColor ? this.props.uncheckedCheckBoxColor : this.props.checkBoxColor
    }

    private _getTintColor(): string | undefined {
        return this.props.isChecked ? this._getCheckedCheckBoxColor() : this._getUncheckedCheckBoxColor()
    }

    private genCheckedImage(): any {
        let source;
        if (this.props.isIndeterminate) {
            source = require('./img/ic_indeterminate_check_box.png');
        }
        else {
            source = this.props.isChecked ? require('./img/ic_check_box.png') : require('./img/ic_check_box_outline_blank.png');
        }

        return (
            <Image source={source} style={{ tintColor: this._getTintColor() }} />
        );
    }

    public render(): JSX.Element {
        return (
            <TouchableHighlight
                style={this.props.style}
                onPress={(e: GestureResponderEvent) => this.onClick(e)}
                underlayColor='transparent'
                disabled={this.props.disabled}
            >
                <View style={styles.container}>
                    {this._renderLeft()}
                    {this._renderImage()}
                    {this._renderRight()}
                </View>
            </TouchableHighlight>
        );
    }
}
const styles: CheckBoxStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftText: {
        flex: 1,
    },
    rightText: {
        flex: 1,
        marginLeft: 10
    }
});

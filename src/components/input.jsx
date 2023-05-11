import React from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { View, Text} from "react-native";
import { TextInput } from "react-native-paper";
import { styles } from "../themes/appTheme";
import { useDispatch } from "react-redux";

const INPUT_CHANGE = 'INPUT_CHANGE'
const INPUT_BLUR = 'INPUT_BLUR'

const inputReducer = (state, action) => {
    switch(action.type) {
        case INPUT_CHANGE:
            return {
                ...state,
                value: action.value,
                isValid: action.isValid
            }
        case INPUT_BLUR: 
            return{
                ...state,
                touched: true
            }
        default: 
            return state
    }
}

export const Input = (props) => {
    const dispatch = useDispatch()
    const [inputState, inputDispatch] = useReducer(inputReducer, {
        value: props.initialValue ? props.initialValue : '',
        isValid: props.initiallyValid,
        touched: false
    });

    const { onInputChange, id } = props;

    useEffect(() => {
        if(inputState.touched){
            onInputChange(inputState.value, inputState.isValid)
        }
    }, [inputState, onInputChange]);

    const textChangeHandler = text => {
        const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        let isValid = true;

        if(props.required && text.trim().length ===0) isValid = false
        if(props.email && !emailRegex.test(text.toLowerCase())) isValid = false
        if(props.min != null && +text < props.min) isValid = false
        if(props.max != null && +text > props.max) isValid = false
        if(props.minLength != null && text.legth < props.minLength) isValid = false

        inputDispatch({
            type: INPUT_CHANGE,
            value: text,
            isValid: isValid
        })
    }

    const onBlurHandler = () => dispatch({type: INPUT_BLUR})

    return(
        <View>
        <TextInput
            {...props}
            label={props.label}
            style={styles.formInput}
            autoCapitalize='none'
            value={inputState.value}
            onChangeText={textChangeHandler}
            onBlur={onBlurHandler}
        />
        {!inputState.isValid && inputState.touched && (<view>
            <Text>
                {props.errorText}
            </Text>
        </view>)}
        </View>
    )
}
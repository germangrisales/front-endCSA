import React, {Component} from 'react';
import Select from 'react-select';
import chroma from 'chroma-js';
import { ValueContainer } from 'react-select/lib/animated';
/*
function styleFn(base, state) {
    // optionally spread base styles
    return { ...base, color: state.isFocused ? 'blue' : 'red' };
}
*/



const customStyles = {
    option: (base, state) => ({
        ...base,
        
        borderBottom: '0.5px dashed silver',
        color: state.isFullscreen ? 'red' : 'black',
        padding: 20,
    }),
    
}


class MultiSelect extends Component{

    constructor(...props){
        super(...props)

        this.state = {

            options: this.props.options,
            value: []

        }

        this.handleSelectChange = this.handleSelectChange.bind(this)

        this.getValue = this.getValue.bind(this) 

    }

    handleSelectChange(value){

        this.setState({ value })

    }

    getValue(){
        const {value} = this.props
        return value === undefined ? this.state.value : value
    }


    render(){

        return(
            <Select
            
                isMulti
                styles={customStyles}
                simpleValues={true}
                joinValues={true}
                name={this.props.name}
                value={this.getValue()}
                options={this.state.options}
                onChange= {this.handleSelectChange}
                placeholder={this.props.placeholder}
            
            />
            
        )

    }
}

export default MultiSelect
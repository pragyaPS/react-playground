import React, { Component } from "react";
class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {flag: false};
        this.handleChange = this.handleChange.bind(this);
    }
 
    handleChange(){
        this.setState({flag: !this.state.flag});
    }

    render() {
        const { flag } = this.state;
        return (
        <>
        <button onClick={this.handleChange}>{flag ? 'on' : 'off'}</button>
        { flag && <TextComponent/>}
        </>
        )
    }
}
class TextComponent extends Component {
    componentDidMount() {
        console.log('mount');
    }
    componentWillUnmount(){
        console.log('Unmount');
    }
   render() {
       return (<div>text component</div>)
   }
}
// export const TextComponent = () => {return (<div>text component</div>)};
export default ClassComponent;
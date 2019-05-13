import React, {Component} from 'react';

class DisplayObj extends Component{
    render(){
        var content = [], data = this.props.data;
        if(data.length === 0) return (<h1>NO DATA</h1>);
        // console.log(data)
        data.forEach(element => {
            content.push(<tr key={element.key}><td>{element.key}</td><td>{element.text}</td></tr>);
        });
        return(
            <table>
                <tbody>
                {content}
                </tbody>
            </table>
        )
    }

}

export default DisplayObj;
import React from "react";

class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        if (location.stat === undefined){
            history.push("/");
        }
    }
    render(){
        const {location} = this.props;
        if (location.stat) {
            return <span>{location.stat.title}</span>
        } else {
            return null;
        }
    }
}

export default Detail;
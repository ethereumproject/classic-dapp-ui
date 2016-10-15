import React from 'react';
var Radium = require('radium');

import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import FontIcon from 'material-ui/FontIcon';




import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

var root_style = {

    height: "100%",
    backgroundColor: "white",
};


var divStyle1 = {
    //"fontFamily": "'Lato', sans-serif",
    //"lineHeight": "500px",
    //color: 'black',
    // backgroundImage: 'url(' + imgUrl + ')',
    //width: "250px",
    height: "50%",
    //"background-image": 'url("img/1.png")',
    //"backgroundSize": "50%",
    //textAlign: "center",
    //padding: "10px",
    //fontSize: "30px",
    //boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    //backgroundColor: "#4CAF50",


};

var div_vertical = {
    //"position": "relative",
    "fontFamily": "'Lato', sans-serif",
    fontSize: "30px",
    //"transform":"translateY(calc(50%))",
    //height: "40px",
    //width: "200px",
    "textAlign": "center",
    //backgroundColor: "yellow",

    "position": "relative",
    "top": "50%",
    transform: "translateY(-50%)"

};

// tutorial2.js
var Comment_1 = React.createClass({

    getInitialState: function() {
        return {

        };
    },


    handleClick() {
        //this.setState({liked: !this.state.liked});
        //this.classList.toggle('opened');
        console.log(this);
        //this.setState({top: '100px'});
        //this.setState({color: 'green'});
        //this.classList.toggle('opened');
    },

    render: function() {
        return (
            <div style={divStyle1} className="commentList">
                <div  style={div_vertical} >
                    <p >
                        Ethereum Classic
                    </p>
                </div>
            </div>
        );
    }
});

var divStyle2 = {
    color: 'green',
    // backgroundImage: 'url(' + imgUrl + ')',
    //width: "250px",
    height: "50%",
    //"background-image": 'url("img/1.png")',
    //"backgroundSize": "50%",
    //textAlign: "center",
    //padding: "10px",
    //fontSize: "20px",
    //boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    backgroundColor: "#B8E986",
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all' // 'ms' is the only lowercase vendor prefix



};


var Comment_2 = React.createClass({
    onLinkClicked () {
        console.log('Clicked!');
        //console.log(React.findDOMNode(this).classList())
    },

    render: function() {
        return (

            <div style={divStyle2} className="commentList">
            </div>

        );
    }
});

var divStyle4 = {
    width: "1100px",
    position: "fixed",
    //top: "50%",
    top: "50%",
    right: 0,
    left: 0,
    //"maxWidth": "1000px", /* for  below IE7 use `width: 660px;` */
    //"margin": "auto",
    //"margin-left":"10%",
    //backgroundColor: "red",
    "margin":"0px auto",
    //transform:"translateY(50%)",
    //"position": "fixed",

};



var divStyle5 = {
    "fontFamily": "'Lato', sans-serif",
    "width": "200px",
    "minHeight": "200px",
    "border": "1px solid #f1f1f1",
    "display": "inline-block",
    backgroundColor: "white",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    "margin": "25px",


};

var img_center_style = {

    //"position": "relative",
    //"top": "50%",
    //transform: "translateY(-200px)",
    transform: "translateY(50px) translateX(60px)"
}





var Comment_5 = React.createClass({
    onLinkClicked () {
        console.log('Clicked!');
        //console.log(React.findDOMNode(this).classList())
    },

    onSomeButtonClicked() {
        const { userId, dispatch } = this.props
        dispatch({type: 'USER_FETCH_REQUESTED', payload: {userId}})
    },

    onMouseEnterHandler: function() {
        this.setState({
            hover: true
        });
        console.log('enter');
    },
    handleClick() {
        console.log("Like!");
        //this.setState({liked: !this.state.liked});
    },

    handleMouseOver () {
        this.setState({ isHovering: true });
    },

    render: function() {
        return (

            <div style={divStyle4}>
                <ul>
                    <li onMouseOver= {this.onSomeButtonClicked}  style={divStyle5}>

                        <img style={img_center_style}  src="./img/icon1.png"
                             alt="lobster" width="88" height="112"/>

                    </li>


                    <li style={divStyle5}>

                        <img style={img_center_style}  src="./img/icon_trans.png"
                             alt="lobster" width="88" height="112"/>
                    </li>


                    <li style={divStyle5}>

                        <img style={img_center_style}  src="./img/icon_wallet.png"
                             alt="lobster" width="88" height="112"/>
                    </li>



                    <li style={divStyle5}>

                        <img style={img_center_style}  src="./img/icon_id.png"
                             alt="lobster" width="88" height="112"/>
                    </li>


                </ul>
            </div>


        );
    }
});


class Comment_6 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            maxLength: this.props.maxLength,
        };
    }

    onSomeButtonClicked(){
        console.log(this); // null
        console.log("C1"); // null
    }

    static defaultProps = {
        checked: false,
        maxLength: 10,
    };

    static propTypes = {
        checked: React.PropTypes.bool.isRequired,
        maxLength: React.PropTypes.number.isRequired
    };

    render() {

        const { value, onIncrement, onDecrement, onIncrementAsync, onFetchData  } = this.props;

        return (

            <div style={divStyle4}>
                <ul>
                    <li onMouseOver= {this.onSomeButtonClicked}  style={divStyle5}>

                        <img style={img_center_style}  src="./img/icon1.png"
                             alt="lobster" width="88" height="112"/>

                    </li>


                    <li style={divStyle5}>

                        <img style={img_center_style}  src="./img/icon_trans.png"
                             alt="lobster" width="88" height="112"/>
                    </li>


                    <li style={divStyle5}>

                        <img style={img_center_style}  src="./img/icon_wallet.png"
                             alt="lobster" width="88" height="112"/>
                    </li>



                    <li style={divStyle5}>

                        <img style={img_center_style}  src="./img/icon_id.png"
                             alt="lobster" width="88" height="112"/>
                    </li>


                </ul>
            </div>
        )
    }
}




var CommentBox = React.createClass({
    render: function() {
        return (
            <div style={root_style} >
                <Comment_1 />
                <Comment_2 />
                <Comment_6 />
            </div>
        );
    }
});





const MenuExampleSimple = () => (
    <CommentBox  />

);

export default MenuExampleSimple;
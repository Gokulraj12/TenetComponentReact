import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props)
        //creating a  reference variable to

        this.state = { spans: 0 };

        this.imageRef = React.createRef();


    }

    componentDidMount() {
        //console.log(this.imageRef);
        this.imageRef.current.addEventListener("load", this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10);
        console.log(spans);

        this.setState({ spans });
    }


    render() {
        const { description, urls } = this.props.image; //destructuring

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img alt={description}
                    src={urls.regular}
                    ref={this.imageRef}
                />
            </div>
        );
    }
}

export default ImageCard;
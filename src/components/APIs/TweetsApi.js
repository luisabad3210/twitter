import React from 'react';
import BitcoinImg from '../Images/bitcoin.png';
import Data from './TweetData.json';


class TweetsApi extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tweets: [],
        }
    }


    // I was using googles news api but had to change into a json file instead //

    

    // componentDidMount() {
    //     fetch('https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=6107f6de55684cbab80484c839fbee1e')
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((myJson) => {
    //         this.setState({tweets: myJson.articles});
    //         console.log(this.state.tweets)
    //     });
    // }

    render() {
        return (
            <div>
                {Data.map((item, index) => {
                    return (
                        <div key={index} className='tweets'>
                            <img className='bitcoinImg' alt="bitcoin profile pic" src={BitcoinImg} width='50' height='50'/><i className="postName"> Bitcoin {item.date.slice(0,10)}</i>
                            <div className="title">{item.title}</div>
                            <img className='TweetImg' alt='' src={item.urlToImage} />
                            <div className='tweetBody' >{item.description}</div>
                            <button className='Btn'>Comment</button>
                            <button className='Btn'>Retweet</button>
                            <button className='Btn'>Like</button>
                            <button className='Btn'>Share</button>
                            <hr></hr>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default TweetsApi
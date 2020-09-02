import React from 'react';
import Data from './TrendingData.json';

class TrendingApi extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
        }
    }


    // I was using googles news api but had to change into a json file instead //


    // componentDidMount() {
    //     fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=6107f6de55684cbab80484c839fbee1e')
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((myJson) => {
    //         this.setState({articles: myJson.articles});
    //         console.log(this.state.articles)
    //     });
    // }

    render() {
        return (
            <div className='trending-container'>
                <div className='trends-for-you'><h2>Whats Happening</h2> <div>Powered by Google News</div></div>
                <hr></hr>
                {Data.map((item, index) => {
                    return (
                        <div key={index} className='trending'>
                        <h5 className="trendingTitle">{item.title}</h5>
                        <div className="trendingBody">{item.description}</div>
                        <form action={item.url}>
                            <button className='Btn' type="submit">Read More</button>
                        </form>
                        <hr></hr>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default TrendingApi

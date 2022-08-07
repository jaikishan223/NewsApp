//rce
import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export class News extends Component {
    // articles = [
    //     {
    //         "source": {
    //             "id": "cnn",
    //             "name": "CNN"
    //         },
    //         "author": "Homero De la Fuente, CNN",
    //         "title": "International Swimming Federation votes to restrict transgender athletes from competing in elite women's aquatics competitions - CNN",
    //         "description": "The International Swimming Federation (FINA) has voted to approve a new policy that will restrict most transgender athletes from competing in elite women's aquatics competitions.",
    //         "url": "https://www.cnn.com/2022/06/19/us/fina-vote-transgender-athletes/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220619142050-02-fina-swimming-logo-file-super-tease.jpg",
    //         "publishedAt": "2022-06-20T07:01:00Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "YouTube"
    //         },
    //         "author": null,
    //         "title": "John Cena and AJ Styles meet for the very first time - WWE",
    //         "description": "The Phenomenal One makes his presence known to The Cenation Leader on Raw in 2016.Stream WWE on Peacock https://pck.tv/3l4d8TP in the U.S. and on WWE Network...",
    //         "url": "https://www.youtube.com/watch?v=ovHHTmfmkD4",
    //         "urlToImage": "https://i.ytimg.com/vi/ovHHTmfmkD4/hqdefault.jpg",
    //         "publishedAt": "2022-06-20T07:00:28Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "ESPN"
    //         },
    //         "author": "Mark Schlabach",
    //         "title": "Matt Fitzpatrick's first major win, Phil Mickelson and the biggest takeaways from the 2022 U.S. Open - ESPN",
    //         "description": "The U.S. Open had a little of everything -- from off-the-course drama to a wild finish in which Matt Fitzpatrick walked away with his first major title.",
    //         "url": "https://www.espn.com/golf/story/_/id/34118750/matt-fitzpatrick-first-major-win-phil-mickelson-biggest-takeaways-2022-us-open",
    //         "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0619%2Fr1027008_1296x729_16%2D9.jpg",
    //         "publishedAt": "2022-06-20T06:51:04Z",
    //         "content": "BROOKLINE, Mass. -- Before Sunday, England's Matt Fitzpatrick had never won a professional golf tournament in the United States.\r\nNow, he has won two of the biggest golf events in the world on the sa… [+9370 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Formula 1"
    //         },
    //         "author": "F1",
    //         "title": "HIGHLIGHTS: Watch the action from an exciting race in Montreal, as Verstappen holds off Sainz to seal victory | Formula 1® - Formula 1",
    //         "description": "Max Verstappen survived a late attack from the Ferrari of Carlos Sainz, to seal his first Canadian Grand Prix victory, and by doing so, extending his lead at the top of the drivers' championship to 46 points.",
    //         "url": "https://www.formula1.com/en/latest/article.highlights-watch-the-action-from-an-exciting-race-in-montreal-as-verstappen.5LrFCZ6LOVmei1maIBLDHV.html",
    //         "urlToImage": "https://d2n9h2wits23hf.cloudfront.net/image/v1/static/6057949432001/a2d2c5a5-bdce-4ccd-b9bc-11322fd432e3/fa9d9fb2-2a04-42fa-980a-86b26535f090/640x360/match/image.jpg",
    //         "publishedAt": "2022-06-20T05:35:03Z",
    //         "content": "Max Verstappen survived a late attack from the Ferrari of Carlos Sainz to seal his first Canadian Grand Prix victory, and by doing so, extending his lead at the top of the drivers' championship to 46… [+1069 chars]"
    //     }] 

    static defaultProps ={
       country:'in',
       pageSize:8,
       category:'general',
    }

    static propTypes ={
       country:PropTypes.string,   //pts
       pageSize:PropTypes.number,
       category:PropTypes.string,
    }

    capitalizeFirstLetter = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        console.log("Hello I am contructor")
        this.state = {
            articles: [], //this.articles
            loading: false,
            page: 1
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey` ;
    }

async updateNews(pageNo){
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6b69c9a859884eb7a34ed959d326fb6c&page=${this.state.page}&pagesize=${this.props.pageSize}`
    this.setState({loading:true});
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json()
    this.props.setProgress(70);
    // console.log(parsedData);
    this.setState({ articles: parsedData.articles,totalResults: parsedData.totalResults,loading:false })
    this.props.setProgress(100);
}


    async componentDidMount() {
        console.log("cdm");
        this.updateNews();
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6b69c9a859884eb7a34ed959d326fb6c&page=1&pagesize=${this.props.pageSize}`
        // this.setState({loading:true});
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(parsedData);
        // this.setState({ articles: parsedData.articles,totalResults: parsedData.totalResults,loading:false })
    }

     handlePrevClick = async ()=>{
        // console.log("Previous");
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6b69c9a859884eb7a34ed959d326fb6c&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
        // this.setState({loading:true});
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(parsedData);
       
        // this.setState({
        //     page:this.state.page - 1,
        //     articles: parsedData.articles,
        //     loading:false
        // })
        this.setState({page:this.state.page-1})
        this.updateNews();
    }

    handleNextClick = async ()=>{
        console.log("Next") ;
    //     if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

      
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&category=${this.props.category}&apiKey=6b69c9a859884eb7a34ed959d326fb6c&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
    //     this.setState({loading:true});
    //     let data = await fetch(url);
    //     let parsedData = await data.json()
    //     console.log(parsedData);
       
    //     this.setState({
    //         page:this.state.page + 1,
    //         articles: parsedData.articles,
    //         loading:false
    //     })
    // }
    this.setState({page:this.state.page+1})
    this.updateNews();
    }

    render() {
        console.log("cdm")
        return (
            <div className='container my-3'>
                <h1 className="text-center" style={{margin:'40px 0px'}}>NewsMonkey-Top Headlines from {this.capitalizeFirstLetter(this.props.category)}</h1>
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        console.log(element)
                        return <div className="col-md-4" key={element.url}>
                            <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}


                </div>

                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News

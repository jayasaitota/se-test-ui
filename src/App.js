import React ,{Component} from 'react';
import NewsApi from './NewsApi';

import SearchBar from './components/SearchBar';
import ArticleDetails from './components/ArticleDetails';
import Loader from './components/Loader';

class App extends Component{
  state = {
    newsArticles : [], 
    filteredArticles:[],
    showFilterData:false,
    showNoRecordsMsg:false
  };

  componentDidMount(){
    const getTopArticles = async()=>{
      let {data} = await NewsApi.get('/top-headlines',{
        params:{
          country:'us'
        }
      })
      this.setState({
        newsArticles:data.articles,
        showNoRecordsMsg:!data.articles.length?true:false
      })
    }
    getTopArticles()
  }

  // Serach for the articles with keyword on users submit action
  onSearchSubmit =async (topic)=>{
    let {data} = await NewsApi.get('/everything',{
       params:{
        q:topic,
        from:new Date().toISOString().split('T')[0],
        sortBy:"popularity"
       }
     })
     this.setState({
       newsArticles:data.articles,
       showNoRecordsMsg:!data.articles.length?true:false
     })
   };

   //Filter the articles title with searchKeywords
   filterArticles =async (e)=>{
      if(!e){
       await this.setState({
        showFilterData:false,
          filteredArticles:[]
        })
      }else{
        await this.setState({
          showFilterData:true,
          filteredArticles:this.state.newsArticles.filter((item)=>item.title.toLowerCase().includes(e.toLowerCase()))
        })
      }
   }

  render(){
    return (
      <div className="ui container" style={{marginTop:"10px"}}>
        <SearchBar onSubmit={this.onSearchSubmit} onSearchTextChange= {this.filterArticles} />
        <div className='ui items'>
          <ArticleDetails articles = {this.state.showFilterData?this.state.filteredArticles:this.state.newsArticles} />
        </div>
          {
            this.state.showNoRecordsMsg?<h3>No records Found</h3>:
            !this.state.newsArticles.length?
            <Loader />:null
          }
      </div>
    );
  }
}

export default App
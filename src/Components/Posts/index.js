import React,{Component} from 'react';
import PropTypes from 'prop-types';
import SinglePost from './singlePost';
import { ButtonFilter } from '../../Utils/misc';

import {getFirstTitle,getRestofTitles,getfilterType} from '../../Utils/api';

class Posts extends Component {

  state = {
    post: [],
    page: 1,
    filter:false,
    type:"",
  }

  constructor(props) {
    super(props);

    //infinte scroll
    window.onscroll = () => {
      const {page,filter,type} = this.state
      if (
       window.innerHeight + document.documentElement.scrollTop
       === document.documentElement.offsetHeight
      ) {
        if (filter) {
          this.onScrollApi(type,page + 1,getfilterType);
        }else{
          this.onScrollApi(page,type,getRestofTitles);
        }

     }
    }
  }

  //infinte scroll helper function
  onScrollApi = (type,page,api) =>{
    const {post} = this.state
    api(type,page).then(a=>{
      if(a.Response && post.length <= a.totalResults){
       const allPosts = post.concat(a.Search)
       const increment = page + 1;
       this.setState({post:allPosts,page:increment})
      }
    })
  }

  //loading first 10 titles on page load
  componentDidMount(){
    getFirstTitle().then(a=> {
      this.setState({post:a.Search})
    })
  }

  //click event for filters
  handleClick = (type) => {
    const page = 1
    getfilterType(type,page).then(res=> {
      this.setState({post:res.Search,page,type,filter:true,})
    })
  }

  render() {
    const {post} = this.state
    const filterTypes = ['movie','game','series'];
    return (
      <div
        style={{
          display:'flex',
          flexDirection: 'column'
        }}
          >
        <div
          style=
          {{
            margin:20,
            alignSelf: 'center'
          }}
          >
          {filterTypes.map((a,i) => (
            <ButtonFilter  key={i} type={a} onClick={() => (this.handleClick(a))} >{a}</ButtonFilter>
          )
        )}
        </div>

        {post.map((a,i) => (
          <SinglePost
            key = {i}
            image= {a.Poster}
            name = {a.Title}
            date = {a.Year}
            />
        ))}

      </div>
    );
  }
}

Posts.propTypes = {
  post:PropTypes.array,
  page:PropTypes.number,
  filter:PropTypes.bool,
  type:PropTypes.string,

}

export default Posts;

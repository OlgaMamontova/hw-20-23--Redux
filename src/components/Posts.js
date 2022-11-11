import React, { Component } from "react";
import { connect } from "react-redux";
import MARK from '../assets/check-mark.png';
import { listAuthors } from "../constans"

class Posts extends Component{      
    render(){
    const { posts } = this.props;
    return (
        <div>
            {posts.map((post, i) => {
                const { content, authorName, image, date, comments, likes, shares } = post;
                return (
                    <div key={i} className="post">
                         {listAuthors.map((author, i) => {
                            if(author.name == authorName){                                    
                                return (
                                    <div key={i} className="header">
                                        <img className="logo" src={author.photo}/>
                                        <h3>{authorName}</h3>
                                        <img className="icon" src={MARK}/>
                                        <p>{author.nickname}</p>
                                        <p>{date}</p>
                                    </div>
                                    )                                
                                }
                            })}                       
                        <div className="text">
                            {content}
                        </div>
                        <div className="wrapper_image">
                            <img src={image}/>
                        </div>
                        <footer>
                            <span>
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="#c8ccd1" clipRule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/></svg>
                                {likes}                           
                            </span>
                            <span> <svg
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path
                                fill="#c8ccd1"
                                d="M8,11a1,1,0,1,0,1,1A1,1,0,0,0,8,11Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,12,11Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,16,11ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,.3-.71,1,1,0,0,0-.3-.7A8,8,0,1,1,12,20Z"
                                id="id_101"
                                ></path>
                            </svg> {comments}</span>
                            <span> <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="#c8ccd1"><path d="M16.272 5.451c-.176-.45-.272-.939-.272-1.451 0-2.208 1.792-4 4-4s4 1.792 4 4-1.792 4-4 4c-1.339 0-2.525-.659-3.251-1.67l-7.131 3.751c.246.591.382 1.239.382 1.919 0 .681-.136 1.33-.384 1.922l7.131 3.751c.726-1.013 1.913-1.673 3.253-1.673 2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4c0-.51.096-.999.27-1.447l-7.129-3.751c-.9 1.326-2.419 2.198-4.141 2.198-2.76 0-5-2.24-5-5s2.24-5 5-5c1.723 0 3.243.873 4.143 2.201l7.129-3.75zm3.728 11.549c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm-15-9c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm15-7c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3z"/></svg> {shares}</span>
                        </footer>
                    </div>
                )          
                }
            )}
        </div>
    );
   }
}

const getStateToProps = state => {
    return {
        posts: state.posts
    }   
}

export default connect(getStateToProps, null)(Posts);
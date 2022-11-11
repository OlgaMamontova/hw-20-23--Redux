import React, { Component } from "react";
import { connect } from "react-redux";
import { addPost } from "../redux/actions";
import { listAuthors, randomNumber } from "../constans";

class Form extends Component {
    state = {
        content: '',
        authorName: '',
        image: '',
        date: new Date().toLocaleString(),
        comments: randomNumber(),
        likes: randomNumber(),
        shares: randomNumber(),
    }
        
    onChangeContent = e => this.setState({content: e.target.value});
    onChangeAuthorName = e => this.setState({authorName: e.target.value});
    onChangeImage = e => this.setState({image: e.target.value});
    onSubmit = () => {
        this.props.addPost(this.state)
        this.setState({content: ''})
        this.setState({authorName: ''})
        this.setState({image: ''})
        this.setState({date: new Date().toLocaleString()})
        this.setState({comments: randomNumber()})
        this.setState({likes: randomNumber()})
        this.setState({shares: randomNumber()})
    }

    render() {
        return (
            <div className="form">                
                    <p>
                        <label htmlFor="authors">Choose an author: </label>                        
                        <select 
                            name="authors" 
                            id="authors" 
                            value={this.state.authorName}
                            onChange={e => this.onChangeAuthorName(e)}>
                            <option value="">--Please choose an option--</option>
                            {listAuthors.map((author, i) => {
                                return <option value={author.name} key={i}>{author.name}</option>
                            })}
                        </select>
                    </p> 
                    <p>Paste URL image: 
                        <input 
                            type="text" 
                            value={this.state.image}
                            onChange={e => this.onChangeImage(e)}
                        />
                    </p>      
                    <p>Enter the text of the post:</p>
                    <textarea 
                        id="" 
                        name="content" 
                        rows="3" 
                        cols="50" 
                        value={this.state.content}
                        onChange={e => this.onChangeContent(e)}
                    ></textarea>                  
                    <button
                     onClick={this.onSubmit} 
                     className="button"
                     disabled={!(this.state.content && this.state.authorName)}>
                        Add post</button>                
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addPost: content => dispatch(addPost(content))
    }
}

export default connect(null, mapDispatchToProps)(Form);
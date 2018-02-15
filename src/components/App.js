import React, {Component} from 'react';
import {connect} from 'react-redux'
import {setCategories, pickCategory} from '../actions'
import {Link} from 'react-router-dom';


class App extends Component {

    componentDidMount(){
        if(this.props.categories.length === 0){
            fetch('http://jservice.io/api/categories?count=100')
            .then(data => {return data.json()})
            .then(response => this.props.onReceiveCategories(response))
        }
    }

    render() {
        return(
            <div>
                <h2>Jeopardy</h2>
                {
                    this.props.categories.map(category => {
                        return (
                            <div key={category.id} >
                                <Link to='/category' onClick={() => this.props.onPickCategory(category)} > <h4>{category.title}</h4></Link>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onReceiveCategories: (categories) => dispatch(setCategories(categories)),
        onPickCategory: (category) => dispatch(pickCategory(category))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
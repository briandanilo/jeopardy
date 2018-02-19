import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import Clue from './Clue'

class Category extends Component {

    state={
        clues: []
    }

    componentDidMount(){
            fetch(`http://jservice.io/api/clues?category=${this.props.category.id}`)
            .then(data => data.json()
            .then(response => this.setState({clues: response}))
            )
    }
    componentWillMount(){
        if(this.props.category.id === undefined){
            this.props.history.push('/')
        }
    }

    render(){
        return(
            <div>
                <Link className='link-home' to='/' > <h4>Home</h4> </Link>
                <h2>{this.props.category.title}</h2>
                {
                    this.state.clues.map(clue => {
                        return(
                                <Clue  key={clue.id} clue={clue} />
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        category: state.category
    }
}

export default connect(mapStateToProps)(Category);
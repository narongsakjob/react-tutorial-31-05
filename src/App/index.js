import React from 'react'
import Game from '../Game'
import Highscore from '../Highscore'
import HighscoreStorage from '../Highscore/storage'

export default class App extends React.Component {

    state = {
        page: 'game',
    }  

    highscore = new HighscoreStorage();

    render() {
        switch(this.state.page){
            case 'game' :
                return <Game onGameFinish={this.onGameFinish}/>
            case 'highscore' :
                return <Highscore highscore = {this.highscore.highscore} onPlayAgain={this.onPlayAgain}/>
            default :
                return <div>Error</div>
        }
    }

    onGameFinish = (score) => {

        let name = prompt(`Your score is ${score}.\nEnter your name `)

        if(name) {
            this.highscore.add(name,score)
        }

        this.setState({
            page: 'highscore',
        })

    }

    onPlayAgain = () => {
        this.setState({page: 'game'})
    }

}
import React from 'react'
import Timer from '../Timer'
import Score from '../Score'
import App from '../App'

export default class Game extends React.Component {
    state = {
        click : 0,
        gameStart : false,
    }
    timeLimit = 5000
    timeStart = 0
    render() {
        let message
        let timer = null

        if(this.state.gameStart) {
            message = <Score score = {this.state.click}/>
            timer = (
                <Timer timeLimit = {this.timeLimit} timeStart = {this.timeStart} />
            )
        } else {
            message = 'กดตรงไหนก้ได้เพื่อเริ่มเล่น'
        }

        return (
            <div>
                <div id="title" className="title">Clickr</div>
                <div id="message">{message}</div>
                {timer}
            </div>
        )
    }

    componentWillMount() {
        window.addEventListener('click',this.onClick)
    }

    onClick = () => {

        if(this.state.gameStart && this.getTimeLeft() < 0) {
            return
        }

        
        this.setState({
            click: this.state.click+1,
        })
        
        if(!this.state.gameStart){
            this.timeStart = new Date().getTime()    
            this.setState({
                gameStart: true
            })
            setTimeout(() => {
                this.props.onGameFinish(this.state.click)
            },this.timeLimit)

        }
    }

    

    getTimeLeft() {
        let currerntTime = new Date().getTime()
        let timeDiff = (this.timeLimit+this.timeStart) - currerntTime
        return timeDiff
    }

    


}






    

    

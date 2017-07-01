import React from 'react'
export default class Timer extends React.Component {

    render() {
        
    let timer = ` เวลาเหลืออยู่ ${this.formatTime(this.getTimeLeft())} sec `    

        return (          
            <div id="timer">{timer}</div>
        )       
    }

    formatTime(time) {
        return  (time/1000).toFixed(1)
    }

    getTimeLeft() {
        let currerntTime = new Date().getTime()
        let timeDiff = (this.props.timeLimit+this.props.timeStart) - currerntTime
        return timeDiff
    }

    componentDidMount() {
        this.startTimer()
    }

    startTimer() {
        this.interval = setInterval(() => {
            
            let timeDiff = this.getTimeLeft()
            
            if(timeDiff < 0 ) {
                clearInterval(this.interval)
                return
            }
            this.forceUpdate();
            
        },100)
    }

}
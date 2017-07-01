import React from 'react'

export default class Highscore extends React.Component {

    render() {

        let table = [];

        for(let i = this.props.highscore.length-1; i >=0 ; i--) {
            table.push((
                <tr key={i}>
                    <td>{this.props.highscore.length - i}</td>
                    <td>{this.props.highscore[i].name}</td>
                    <td>{this.props.highscore[i].score}</td>
                </tr>
            ))
        }

        return (
            <div>
                <h1>Highscore</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table}
                    </tbody>
                </table>
                <button onClick={this.props.onPlayAgain}>Play Again</button>
            </div>
        )
    }

}
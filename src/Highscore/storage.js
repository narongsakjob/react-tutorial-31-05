export default class HighscoreStorage {

    highscore = []

    save() {

    }

    load() {

    }

    add(name,score) {
        this.highscore.push({name,score});
        this.highscore.sort((a,b) => a.score-b.score)
    }

    cap(limit) {

    }

}
import Storage from '../src/Highscore/storage'
import {expect} from 'chai'

describe('HeighscoreStorage',() => {
    
    it('has a highscore attribute' , () => {

        let storage = new Storage()
        expect(storage.highscore).to.be.an('array')

    })


    describe('#add',() => {
       it('add score to highscore',() => {
           
           let storage = new Storage()
           storage.add('test',10)
           
           expect(storage.highscore).to.eql([
               {name:'test',score:'30'},
           ])

       })
       it('sort highscore by highest to lowest' , () => {

            let storage = new Storage()
            storage.add('test1',10)
            storage.add('test2',20)
            storage.add('test3',30)

            expect(storage.highscore).to.eql([
                {name:'test1',score:10},
                {name:'test2',score:20},
                {name:'test3',score:30}
            ])

       })
    })

    describe('#cap',() => {
        it('limit highscore to given length')
        it('do nothing if highscore is under the length')
    })

})



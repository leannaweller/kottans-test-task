import expect from 'expect.js';
import {getUser,getRepos,getRepo} from './actions';
import fetch from 'isomorphic-fetch';
const dispatch = (action) => {
  console.dir(action);
}
describe('actions',  function() {
  it('get user',async function() {
      var res = await getUser('leannaweller')(dispatch);
      if(res){
        expect(res).to.be.an('object');
        expect(res).to.have.keys(['login', 'id','avatar_url']);
      }

  });

  it('get repos',async function() {
      var res = await getRepos('leannaweller',{page:1,per_page:10})(dispatch);
      if(res){
        expect(res).to.be.an('array');
        if(typeof res === 'array' && res.length > 0){
          expect(res[0]).to.have.keys(['login', 'id','avatar_url','private','fork','html_url']);
        }
      }
  });

  it('get repo',async function() {
      var res = await getRepo('leannaweller','socket-chat')(dispatch);
      expect(res).to.be.an('object');
      if(typeof res === 'object'){
        expect(res).to.have.keys(['contributors','prs','langs']);
      }
  });
});

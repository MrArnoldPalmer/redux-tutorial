import {createStore} from 'redux';
import should from 'should';

const store = createStore(counter);

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

counter(0, {type: 'INCREMENT'}).should.equal(1);
counter(0, {type: 'DECREMENT'}).should.equal(-1);
counter(0, {type: 'SOMETHING_ELSE'}).should.equal(0);

function render() {
    document.querySelector('#main').innerText = store.getState();
}

render();
store.subscribe(render);

const increment =  document.createElement('button');
const decrement = document.createElement('button');
increment.innerText = 'Increment';
decrement.innerText = 'Decrement';

increment.addEventListener('click', () => {
  store.dispatch({
    type: 'INCREMENT'
  });
});

decrement.addEventListener('click', () => {
  store.dispatch({
    type: 'DECREMENT'
  });
});

document.body.appendChild(increment);
document.body.appendChild(decrement);

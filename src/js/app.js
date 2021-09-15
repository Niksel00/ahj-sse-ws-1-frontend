import Chat from './Chat';

const chat = new Chat(document.querySelector('.chat'), 'wss://ahj-sse-ws-1-heroku.herokuapp.com/ws');
chat.init();

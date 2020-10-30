import io from 'socket.io-client';

const ENDPOINT = 'https://chat-bym.herokuapp.com/';
const socket = io(ENDPOINT);



export default socket;
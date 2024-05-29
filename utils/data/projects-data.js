import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Twitter Sentiment Analysis',
        description: "I developed an AI-powered sentiment analysis tool for Twitter data using the BERT algorithm. This tool leverages BERT's advanced natural language processing capabilities to analyze tweets in real-time, providing high-accuracy sentiment analysis. Voice inputs are converted to text for analysis, and the results are compiled into comprehensive reports. These reports are formatted as PDFs and delivered to users, offering valuable insights into the sentiment trends within the Twitter data.",
        tools: [ 'Hugging Face Transformers', 'TensorFlow', 'Python', 'Pandas', 'NumPy', 'SpeechRecognition', 'Matplotlib', 'Seaborn'],
        role: 'Machine Learning Engineer',
        code: 'https://github.com/ArunKumar-2004/Twitter-Sentiment-Analysis-',
        demo: '',
        platform:'Github',
        image: crefin,
    },
    {
        id: 2,
        name: 'Tic Tac Toe Online Multiplayer Game',
        description: 'I developed an online multiplayer Tic Tac Toe game using React, Express, Node.js, and Firebase. The frontend interface is built with React, providing a dynamic and responsive user experience. Express and Node.js power the backend, managing game logic and real-time interactions between players. Firebase is used for real-time database functionality, allowing instant updates and synchronization of game state across all connected clients. Authentication and user management are also handled by Firebase, ensuring a secure and seamless multiplayer experience. The result is a robust and engaging online game where players can compete in real-time from anywhere in the world.',
        tools: ['React', 'Express', 'Node.js', 'Firebase', 'Redux', 'Socket.IO',  'Firebase Authentication', 'Firebase Firestore', 'Material-UI', 'ESLint', 'Prettier'],
        role: 'Full Stack Developer',
        code: 'https://github.com/ArunKumar-2004/Tic-Tac-Toe-Online-Multiplayer-Game',
        demo: '',
        platform:'Github',
        image: travel,
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
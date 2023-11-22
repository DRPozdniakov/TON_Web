import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import TelegramBot from 'node-telegram-bot-api';

const manifestUrl = 'https://DRPozdniakov.github.io/TON_Web/tonconnect-manifest.json';
const botToken = 'AAEiYSm4X16caaXNAaXPMpI-h8venO6vhF0';

const bot = new TelegramBot(botToken, { polling: true });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <App />
  </TonConnectUIProvider>,
)

// Listen for '/start' command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

    // Send a welcome message
    bot.sendMessage(chatId, 'Hello! I am your Telegram bot. How can I help you?');
  });

// Listen for incoming messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // Echo the received message
  bot.sendMessage(chatId, `You said: ${msg.text}`);
});
(() => {
  let quotes;
  let activeQuote;
  const el = document.querySelector('.quote');
  const buttonQuote = document.querySelector('.button--quote');
  const buttonTweet = document.querySelector('.button--tweet');
  function renderQuote(data) {
    el.innerHTML = '';
    const quoteEl = document.createElement('BLOCKQUOTE');
    const authorEl = document.createElement('SPAN');
    quoteEl.innerHTML = `"${data.quote}"`;
    authorEl.innerHTML = `- ${data.author}`;
    el.appendChild(quoteEl);
    el.appendChild(authorEl);
  }
  function getQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    activeQuote = randomQuote.quote;
    renderQuote(randomQuote);
  }
  function sendTweet(e) {
    e.preventDefault();
    let url = buttonTweet.getAttribute('href');
    url += `&text="${activeQuote}"`;
    window.open(url, 'Twitter', 'toolbar=0,status=0,width=620,height=280');
  }
  function getData() {
    fetch('../data/quote.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        quotes = data;
        getQuote();
      });
  }
  getData();
  buttonQuote.addEventListener('click', () => getQuote(), false);
  buttonTweet.addEventListener('click', (e) => sendTweet(e), false);
})();

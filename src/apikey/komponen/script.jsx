
import React from 'react';
import './styles.css'; 

class Script extends React.Component {
  componentDidMount() {
    const apiKey = '49d3259aea2e4a65a116d7a3dd93f8ba';
    const apiUrl = 'https://newsapi.org/v2/';

    const ambilBerita = (url) => {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const daftarBerita = document.getElementById('newsList');
          daftarBerita.innerHTML = '';
          data.articles.forEach(article => {
            const beritaItem = document.createElement('div');
            beritaItem.classList.add('card', 'mb-3');
            beritaItem.innerHTML = `
              <div class="news-item">
                <div class="news-image">
                  <img src="${article.urlToImage}" alt="${article.title}">
                </div>
                <div class="news-content">
                  <h5 class="news-title">${article.title}</h5>
                  <h6 class="news-source">Sumber: ${article.source.name}</h6>
                  <p class="news-description">${article.description}</p>
                  <a href="${article.url}" class="news-link" target="_blank">Baca lebih lanjut</a>
                </div>
              </div>
            `;
            daftarBerita.appendChild(beritaItem);
          });
        })
        .catch(error => console.error('Error fetching data:', error));
    };

    const cariBerita = () => {
      const kueriPencarian = document.getElementById('searchInput').value;
      if (kueriPencarian.length > 0) {
        const urlPencarian = `${apiUrl}everything?q=${kueriPencarian}&apiKey=${apiKey}`;
        ambilBerita(urlPencarian);
      } else {
        ambilBerita(`${apiUrl}top-headlines?country=id&apiKey=${apiKey}`);
      }
    };

    document.getElementById('searchInput').addEventListener('input', cariBerita);

    ambilBerita(`${apiUrl}top-headlines?country=id&apiKey=${apiKey}`);
  }

  render() {
    return null; 
  }
}

export default Script;

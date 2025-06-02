
if (typeof loadPlayer === "function") {
  loadPlayer('player', 'https://cdn-fundacao-2110.ciclano.io:1443/fundacao-2110/fundacao-2110/playlist.m3u8');
} else {
  console.warn("A função 'loadPlayer' não foi encontrada. Verifique se o script oficial carregou corretamente.");
}

const express = require("express");
const app = express();

// Rota inicial
app.get("/", function(req, res) {
    res.send("<h1 style='text-align:center;'>Seja Bem vindo ao Mundo da F1!</h1><img src='/F1.jpg' alt='Imagem F1'>");
});

// Lista de pilotos
app.get("/pilotos", function(req, res) {
    res.send("<h1 style='text-align:center;'>Tabela de Pilotos!</h1><ol><li>1° Max Verstappen</li><li>2° Sergio Perez</li><li>3º Lewis Hamilton</li><li>4º Fernando Alonso</li><li>5º Carlos Sainz</li><li>6º Charles Leclerc</li><li>7° Lando Norris</li><li>8° Oscar Piastri</li><li>9° George Russell</li><li>10° Lance Stroll</li></ol>");
});

// Lista de Equipes
app.get("/equipes", function(req, res) {
    res.send("<h1 style='text-align:center;'>Tabela dos Construtores!</h1><ol><li>Red Bull Oracle Racing</li><li>Mercedes Amg Petronas</li><li>Scuderia Ferrari</li><li>Aston Martin F1 Team</li><li>Mclaren F1 Team</li><li>Alpine Renault</li><li>Williams F1 Team</li><li>Money Haas F1</li><li>Alfa Romeu Sauber F1 Team</li><li>Scuderia Alpha Tauri</li></ol>");
});

// Lista de Circuitos
app.get("/circuitos", function(req, res) {
    res.send("<h1 style='text-align:center;'>Informações sobre Circuitos de F1</h1><p>A Fórmula 1 é realizada em diversos circuitos ao redor do mundo. Cada circuito tem suas próprias características, desafios e história. Alguns dos circuitos icônicos incluem Spa-Francorchamps na Bélgica, Monza na Itália e Silverstone no Reino Unido.</p>");
});

// Lista de Campeões Mundiais
app.get("/campeoes", function(req, res) {
    res.send("<h1 style='text-align:center;'>Campeões Mundiais de Fórmula 1</h1><p>Alguns dos grandes campeões mundiais de Fórmula 1 incluem Michael Schumacher, Lewis Hamilton, Juan Manuel Fangio, Ayrton Senna, Alain Prost e atualmente o Max Verstappen com 3 titulos mundiais. Eles deixaram um impacto duradouro no esporte com suas habilidades e conquistas.</p>");
});

app.listen(process.env.PORT ?? 3000, function(erro) {
    if (erro) {
        console.log("Erro ao Iniciar.");
    } else {
        console.log("Its lights out and away we go!!!");
    }
});

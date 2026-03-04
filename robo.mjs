// robo.mjs
import fs from 'node:fs';
import path from 'node:path';

// Caminho exato onde o site lê a informação
const ARQUIVO_TREM = path.join(process.cwd(), 'public', 'api', 'trem.json');

async function checarSuperVia() {
    console.log("🤖 [ROBÔ] Indo ao site da SuperVia buscar o status...");
    
    try {
        // Faz a requisição na página de status da SuperVia
        const resposta = await fetch('https://www.supervia.com.br/pt-br/status-da-operacao');
        const html = await resposta.text();

        let estadoRamal = "indisponivel";

        // Busca básica no HTML para encontrar o status de Guapimirim
        // Na prática real, como a SuperVia muda muito o site, o ideal é usar uma biblioteca como 'cheerio'
        if (html.includes('Guapimirim') && html.includes('Operação Normal')) {
            estadoRamal = "normal";
        } else if (html.includes('Guapimirim') && html.includes('Suspensa')) {
            estadoRamal = "suspenso";
        } else if (html.includes('Guapimirim') && html.includes('Intervalos irregulares')) {
            estadoRamal = "atrasado";
        } else if (html.includes('Guapimirim') && html.includes('Manutenção')) {
            estadoRamal = "manutencao";
        } else if (html.includes('Guapimirim') && html.includes('Parcial')) {
            estadoRamal = "parcial";
        } else {
            // Se o robô não achar nada muito claro, assume normal por padrão ou usa o último status
            estadoRamal = "normal"; 
        }

        const horaAtual = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

        const novoStatus = {
            estado: estadoRamal,
            ultimaAtualizacao: horaAtual
        };

        // Escreve o novo status no arquivo que o seu site lê!
        fs.writeFileSync(ARQUIVO_TREM, JSON.stringify(novoStatus, null, 2));
        console.log(`✅ [ROBÔ] Status atualizado para: ${estadoRamal} às ${horaAtual}`);

    } catch (erro) {
        console.error("❌ [ROBÔ] Erro ao acessar a SuperVia:", erro);
    }
}

// Roda a primeira vez imediatamente
checarSuperVia();

// Configura o robô para rodar a cada 5 minutos (300.000 milissegundos)
setInterval(checarSuperVia, 300000);
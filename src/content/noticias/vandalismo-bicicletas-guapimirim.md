---
titulo: "Vandalismo: Bicicletas gratuitas de Guapimirim viram alvo de depredação e mau uso"
resumo: "Projeto que deveria beneficiar a mobilidade dos bairros sofre com a ação de uma minoria. Imagens mostram correntes arrebentadas e unidades sendo recolhidas."
data: "2026-04-11T18:30:00"
categoria: "Cidade Alerta"
imagem: "/fotos/vandalismo-bikes-guapi.jpg" # Use a imagem mais impactante como capa
destaque: true
tags: ["Vandalismo", "Mobilidade", "Bicicletas", "Patrimônio Público", "Guapimirim", "Denúncia"]
---

Uma iniciativa criada para facilitar a vida do cidadão e melhorar a mobilidade urbana em Guapimirim está esbarrando em um velho problema: a falta de conscientização. O sistema de bicicletas públicas gratuitas do município tem sido alvo frequente de vandalismo e mau uso por parte de uma minoria inconsequente.

A denúncia, repercutida inicialmente pela página parceira *Info Guapi*, traz imagens que causam revolta. Elas mostram veículos a serviço do projeto recolhendo bicicletas danificadas em um reboque e o nível impressionante da depredação.

### O estrago em detalhes

Abaixo, você confere uma galeria exclusiva com as imagens enviadas pelos seguidores, que mostram a extensão do dano causado ao patrimônio de todos:

<div class="relative w-full aspect-[16/9] rounded-lg overflow-hidden group shadow-md border border-gray-100 bg-gray-100 my-8">
    <div id="bike-slider-track" class="flex w-full h-full transition-transform duration-500 ease-in-out">
        <div class="w-full h-full shrink-0 relative">
            <img src="/fotos/uno-bike.jpg" alt="Detalhe da corrente arrebentada e torcida" class="w-full h-full object-contain" />
        </div>
        <div class="w-full h-full shrink-0 relative">
            <img src="/fotcorrente-quebradaimage_fa1979.jpg" alt="Veículo da prefeitura recolhendo bicicletas depredadas" class="w-full h-full object-contain" />
        </div>
        <div class="w-full h-full shrink-0 relative">
            <img src="/fotos/vandalismo-bikes-guapi.jpg" alt="Outro ângulo do vandalismo no pneu traseiro" class="w-full h-full object-contain" />
        </div>
    </div>
    
    <button id="bike-btn-prev" class="absolute left-4 top-1/2 -translate-y-1/2 bg-navy-base hover:bg-red-base text-white p-3 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] border-2 border-white z-10" aria-label="Imagem anterior">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
    </button>
    
    <button id="bike-btn-next" class="absolute right-4 top-1/2 -translate-y-1/2 bg-navy-base hover:bg-red-base text-white p-3 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] border-2 border-white z-10" aria-label="Próxima imagem">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
    </button>
</div>

As fotos evidenciam atos que vão além do simples mau uso: em uma das unidades, a corrente de tração foi completamente arrebentada e torcida nos raios da roda traseira.

### Prejuízo para quem realmente precisa

As bicicletas gratuitas são um benefício direto para a população dos bairros, servindo muitas vezes como o único meio de transporte rápido de dezenas de trabalhadores e estudantes para chegar ao centro da cidade ou ao terminal rodoviário/ferroviário. 

Quando uma bicicleta é depredada, ela precisa ser recolhida para manutenção, diminuindo a frota disponível e prejudicando exatamente o cidadão de bem que precisa do serviço no seu dia a dia.

### O apelo das autoridades e da comunidade

O patrimônio público não é "de ninguém"; ele é construído e mantido com o dinheiro dos impostos de toda a população. Destruir um bem público é crime tipificado no Código Penal, com pena que pode chegar a detenção e multa.

O portal **emguapi.com** se junta ao apelo das páginas locais e das autoridades: a fiscalização mais eficiente contra esse tipo de crime é a própria comunidade. 

Ao presenciar qualquer pessoa vandalizando, quebrando ou fazendo uso imprudente das bicicletas públicas (como carregar excesso de peso ou realizar manobras destrutivas), **não hesite: filme, fotografe e denuncie imediatamente** às autoridades locais através do **190**. A impunidade só acaba quando a comunidade não se cala.

<script>
    // Lógica do Carrossel de Imagens das Bikes
    const trackBikes = document.getElementById('bike-slider-track');
    const btnPrevBikes = document.getElementById('bike-btn-prev');
    const btnNextBikes = document.getElementById('bike-btn-next');
    
    let currentIdxBikes = 0;
    const totalSlidesBikes = 3;

    function updateBikeSlider() {
        if (!trackBikes) return;
        trackBikes.style.transform = `translateX(-${currentIdxBikes * 100}%)`;
    }

    if (btnNextBikes && btnPrevBikes) {
        btnNextBikes.addEventListener('click', () => {
            currentIdxBikes = (currentIdxBikes + 1) % totalSlidesBikes;
            updateBikeSlider();
        });

        btnPrevBikes.addEventListener('click', () => {
            currentIdxBikes = (currentIdxBikes - 1 + totalSlidesBikes) % totalSlidesBikes;
            updateBikeSlider();
        });
    }
</script>
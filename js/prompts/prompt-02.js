/**
 * -------------------------------------------------------------------------
 * PROMPT 02: EN LA CAFETERÍA (A1) / 咖啡廳點餐 (A1)
 * -------------------------------------------------------------------------
 * * 🇪🇸 PROPÓSITO DEL PROMPT:
 * Enseñar el bloque comunicativo de pedir en un restaurante.
 * Se centra en tres funciones: Pedir (Quiero...), Cortesía (Por favor/Gracias)
 * y Pagar (La cuenta). Elimina la ansiedad del principiante proporcionando
 * un guion estructurado y predecible.
 * * * 🇹🇼 提示詞目的 (Purpose):
 * 教導在餐廳點餐的溝通模組。
 * 重點在於三個功能：點餐 (Quiero...)、禮貌用語 (Por favor/Gracias)
 * 以及結帳 (La cuenta)。透過提供結構化且可預測的腳本，消除初學者的焦慮。
 * * -------------------------------------------------------------------------
 */

const prompt02Data = {
    id: 'prompt-02',
    level: 'A1',
    recommendedTime: 180, // 3 minutos
    
    vocabulary: {
        bebidas: [
            { es: "Un café", cn: "咖啡" },
            { es: "Un té", cn: "茶" },
            { es: "Agua", cn: "水" }, // Nota: Agua a veces no lleva 'un', pero para A1 simplificamos o lo dejamos sin artículo en el uso
            { es: "Un jugo", cn: "果汁" },
            { es: "Una cerveza", cn: "啤酒" }
        ],
        frases: [
            { es: "Quiero...", cn: "我想要..." },
            { es: "Por favor", cn: "請 / 麻煩你" },
            { es: "Gracias", cn: "謝謝" },
            { es: "La cuenta", cn: "帳單 (買單)" }
        ]
    }
};

/**
 * Función: Inyectar vocabulario
 */
function loadPrompt02Vocabulary() {
    const container = document.getElementById('vocab-container');
    if (!container) return;

    container.innerHTML = '';

    // 1. Bebidas y Comida
    const h4Bebidas = document.createElement('h4');
    h4Bebidas.textContent = "☕ Bebidas (飲料)";
    container.appendChild(h4Bebidas);

    const ulBebidas = document.createElement('ul');
    prompt02Data.vocabulary.bebidas.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="vocab-es">${item.es}</span> <span class="vocab-cn">${item.cn}</span>`;
        ulBebidas.appendChild(li);
    });
    container.appendChild(ulBebidas);

    // 2. Frases Clave
    const h4Frases = document.createElement('h4');
    h4Frases.textContent = "✨ Frases Clave (關鍵句)";
    h4Frases.style.marginTop = "1.5rem";
    container.appendChild(h4Frases);

    const ulFrases = document.createElement('ul');
    prompt02Data.vocabulary.frases.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="vocab-es">${item.es}</span> <span class="vocab-cn">${item.cn}</span>`;
        ulFrases.appendChild(li);
    });
    container.appendChild(ulFrases);
}

/**
 * Función: Timer
 */
function initPrompt02Timer() {
    const btnStart = document.getElementById('btn-start');
    
    if (btnStart && typeof window.startTimer === 'function') {
        const newBtn = btnStart.cloneNode(true);
        btnStart.parentNode.replaceChild(newBtn, btnStart);
        
        newBtn.addEventListener('click', () => {
            window.startTimer(prompt02Data.recommendedTime);
        });
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    loadPrompt02Vocabulary();
    initPrompt02Timer();
    console.log('✅ Prompt 02 Logic Loaded / 邏輯已加載');
});

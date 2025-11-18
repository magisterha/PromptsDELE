/**
 * -------------------------------------------------------------------------
 * PROMPT 05: DESCRIBIR UN LUGAR (A1) / 描述地點 (A1)
 * -------------------------------------------------------------------------
 * * 🇪🇸 PROPÓSITO DEL PROMPT:
 * Enseñar el uso del verbo impersonal 'HAY'. 
 * El objetivo es eliminar la confusión con 'SER' (descripción) o 'TENER' (posesión).
 * Es fundamental para situaciones de turismo (preguntar direcciones, servicios).
 * * 🇹🇼 提示詞目的 (Purpose):
 * 教導無人稱動詞 'HAY' (有) 的用法。
 * 目標是消除與 'SER' (是/描述) 或 'TENER' (擁有) 的混淆。
 * 這對於旅遊情境 (詢問方向、設施) 至關重要。
 * -------------------------------------------------------------------------
 */

const prompt05Data = {
    id: 'prompt-05',
    level: 'A1',
    recommendedTime: 180, // 3 minutos
    
    vocabulary: {
        lugares: [ // Lugares comunes en un barrio
            { es: "Un parque", cn: "公園" },
            { es: "Un restaurante", cn: "餐廳" },
            { es: "Una farmacia", cn: "藥局" },
            { es: "Un supermercado", cn: "超市" },
            { es: "Una estación de metro", cn: "捷運站" },
            { es: "Un baño", cn: "廁所" } // Vital para turistas
        ],
        cuantificadores: [ // Para practicar singular vs plural
            { es: "Un / Una", cn: "一個 (單數)" },
            { es: "Muchos / Muchas", cn: "很多 (複數)" },
            { es: "Pocos", cn: "很少" },
            { es: "Dos / Tres", cn: "2 / 3" }
        ]
    }
};

/**
 * Función: Inyectar vocabulario
 */
function loadPrompt05Vocabulary() {
    const container = document.getElementById('vocab-container');
    if (!container) return;

    container.innerHTML = '';

    // 1. Lugares (Lugares)
    const h4Lug = document.createElement('h4');
    h4Lug.textContent = "🏙️ Lugares (地點)";
    container.appendChild(h4Lug);

    const ulLug = document.createElement('ul');
    prompt05Data.vocabulary.lugares.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="vocab-es">${item.es}</span> <span class="vocab-cn">${item.cn}</span>`;
        ulLug.appendChild(li);
    });
    container.appendChild(ulLug);

    // 2. Cantidad (Cuantificadores)
    const h4Cant = document.createElement('h4');
    h4Cant.textContent = "🔢 Cantidad (數量)";
    h4Cant.style.marginTop = "1.5rem";
    container.appendChild(h4Cant);

    const ulCant = document.createElement('ul');
    prompt05Data.vocabulary.cuantificadores.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="vocab-es">${item.es}</span> <span class="vocab-cn">${item.cn}</span>`;
        ulCant.appendChild(li);
    });
    container.appendChild(ulCant);
}

/**
 * Función: Timer
 */
function initPrompt05Timer() {
    const btnStart = document.getElementById('btn-start');
    
    if (btnStart && typeof window.startTimer === 'function') {
        const newBtn = btnStart.cloneNode(true);
        btnStart.parentNode.replaceChild(newBtn, btnStart);
        
        newBtn.addEventListener('click', () => {
            window.startTimer(prompt05Data.recommendedTime);
        });
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    loadPrompt05Vocabulary();
    initPrompt05Timer();
    console.log('✅ Prompt 05 Logic Loaded / 邏輯已加載');
});

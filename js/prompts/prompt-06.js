/**
 * -------------------------------------------------------------------------
 * PROMPT 06: RUTINA DIARIA - A2 (日常作息)
 * -------------------------------------------------------------------------
 * * 🇪🇸 PROPÓSITO DEL PROMPT:
 * Transición al nivel A2. Introduce los "Verbos Reflexivos", un concepto
 * gramatical difícil para hablantes de chino (donde la reflexividad no se marca igual).
 * El objetivo es automatizar el pronombre "ME" antes del verbo conjugado.
 * * 🇹🇼 提示詞目的 :
 * 過渡至 A2 級別。介紹「反身動詞」，這對華語使用者來說是一個困難的文法概念
 * (因為中文的反身用法標記不同)。
 * 目標是在變位動詞前自動加上代名詞 "ME"。
 * -------------------------------------------------------------------------
 */

const prompt06Data = {
    id: 'prompt-06',
    level: 'A2',
    recommendedTime: 240, // 4 minutos (A2 requiere más elaboración)
    
    vocabulary: {
        verbos: [ // Verbos Reflexivos Clave
            { es: "Levantarse", form: "Me levanto", cn: "起床" },
            { es: "Ducharse", form: "Me ducho", cn: "洗澡" },
            { es: "Cepillarse", form: "Me cepillo", cn: "刷牙" },
            { es: "Vestirse (e>i)", form: "Me visto", cn: "穿衣服" },
            { es: "Acostarse (o>ue)", form: "Me acuesto", cn: "睡覺/躺下" }
        ],
        conectores: [ // Esencial para narrar rutinas
            { es: "Primero", cn: "首先" },
            { es: "Después", cn: "之後" },
            { es: "Luego", cn: "然後" },
            { es: "Por la mañana", cn: "在早上" },
            { es: "Por la noche", cn: "在晚上" }
        ]
    }
};

/**
 * Función: Inyectar vocabulario
 */
function loadPrompt06Vocabulary() {
    const container = document.getElementById('vocab-container');
    if (!container) return;

    container.innerHTML = '';

    // 1. Verbos Reflexivos (Acciones)
    const h4Verbos = document.createElement('h4');
    h4Verbos.innerHTML = "🔄 Acciones (反身動詞)<br><span style='font-size:0.8em; color:#666'>Yo ME... (我...)</span>";
    container.appendChild(h4Verbos);

    const ulVerbos = document.createElement('ul');
    prompt06Data.vocabulary.verbos.forEach(item => {
        const li = document.createElement('li');
        // Mostramos el infinitivo y la forma conjugada 'Yo' para ayudar
        li.innerHTML = `
            <div style="margin-bottom:2px;"><strong>${item.form}</strong> <span class="vocab-cn">(${item.cn})</span></div>
            <div style="font-size:0.8em; color:#888;">Inf: ${item.es}</div>
        `;
        ulVerbos.appendChild(li);
    });
    container.appendChild(ulVerbos);

    // 2. Conectores de Tiempo (Secuencia)
    const h4Con = document.createElement('h4');
    h4Con.textContent = "⏳ Secuencia (順序)";
    h4Con.style.marginTop = "1.5rem";
    container.appendChild(h4Con);

    const ulCon = document.createElement('ul');
    prompt06Data.vocabulary.conectores.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="vocab-es">${item.es}</span> <span class="vocab-cn">${item.cn}</span>`;
        ulCon.appendChild(li);
    });
    container.appendChild(ulCon);
}

/**
 * Función: Timer
 */
function initPrompt06Timer() {
    const btnStart = document.getElementById('btn-start');
    
    if (btnStart && typeof window.startTimer === 'function') {
        const newBtn = btnStart.cloneNode(true);
        btnStart.parentNode.replaceChild(newBtn, btnStart);
        
        newBtn.addEventListener('click', () => {
            window.startTimer(prompt06Data.recommendedTime);
        });
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    loadPrompt06Vocabulary();
    initPrompt06Timer();
    console.log('✅ Prompt 06 Logic Loaded / 邏輯已加載');
});

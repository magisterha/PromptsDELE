/**
 * -------------------------------------------------------------------------
 * PROMPT 04: EXPRESAR GUSTOS (A1) / 喜好 (A1)
 * -------------------------------------------------------------------------
 * * 🇪🇸 PROPÓSITO DEL PROMPT:
 * Enseñar el uso correcto del verbo 'GUSTAR', que suele ser contraintuitivo
 * para hablantes de chino (y otros idiomas) por su estructura de objeto indirecto.
 * Se enfoca en la concordancia de número: Gusta (Singular) vs Gustan (Plural).
 * * 🇹🇼 提示詞目的 (Purpose):
 * 教導 'GUSTAR' 動詞的正確用法，由於其間接受詞結構，
 * 對華語使用者來說通常違反直覺。
 * 重點在於數量的協調：Gusta (單數) vs Gustan (複數)。
 * -------------------------------------------------------------------------
 */

const prompt04Data = {
    id: 'prompt-04',
    level: 'A1',
    recommendedTime: 180, // 3 minutos
    
    vocabulary: {
        singular: [ // Usar con ME GUSTA
            { es: "El café", cn: "咖啡" },
            { es: "La música", cn: "音樂" },
            { es: "El cine", cn: "電影" },
            { es: "La comida", cn: "食物" },
            { es: "Taiwán", cn: "台灣" }
        ],
        plural: [ // Usar con ME GUSTAN
            { es: "Los perros", cn: "狗" },
            { es: "Los gatos", cn: "貓" },
            { es: "Las flores", cn: "花" },
            { es: "Los deportes", cn: "運動" },
            { es: "Las arañas", cn: "蜘蛛" }
        ]
    }
};

/**
 * Función: Inyectar vocabulario
 */
function loadPrompt04Vocabulary() {
    const container = document.getElementById('vocab-container');
    if (!container) return;

    container.innerHTML = '';

    // 1. Singular (Gusta)
    const h4Sing = document.createElement('h4');
    h4Sing.innerHTML = "☝️ Singular (單數) <br><span style='font-size:0.8em; color:#666;'>Usa: Me gust<strong>a</strong>...</span>";
    container.appendChild(h4Sing);

    const ulSing = document.createElement('ul');
    prompt04Data.vocabulary.singular.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="vocab-es">${item.es}</span> <span class="vocab-cn">${item.cn}</span>`;
        ulSing.appendChild(li);
    });
    container.appendChild(ulSing);

    // 2. Plural (Gustan)
    const h4Plur = document.createElement('h4');
    h4Plur.innerHTML = "✌️ Plural (複數) <br><span style='font-size:0.8em; color:#666;'>Usa: Me gusta<strong>n</strong>...</span>";
    h4Plur.style.marginTop = "1.5rem";
    container.appendChild(h4Plur);

    const ulPlur = document.createElement('ul');
    prompt04Data.vocabulary.plural.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="vocab-es">${item.es}</span> <span class="vocab-cn">${item.cn}</span>`;
        ulPlur.appendChild(li);
    });
    container.appendChild(ulPlur);
}

/**
 * Función: Timer
 */
function initPrompt04Timer() {
    const btnStart = document.getElementById('btn-start');
    
    if (btnStart && typeof window.startTimer === 'function') {
        const newBtn = btnStart.cloneNode(true);
        btnStart.parentNode.replaceChild(newBtn, btnStart);
        
        newBtn.addEventListener('click', () => {
            window.startTimer(prompt04Data.recommendedTime);
        });
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    loadPrompt04Vocabulary();
    initPrompt04Timer();
    console.log('✅ Prompt 04 Logic Loaded / 邏輯已加載');
});

/**
 * -------------------------------------------------------------------------
 * PROMPT 01: PRESENTACIÓN PERSONAL (A1) / 自我介紹 (A1)
 * -------------------------------------------------------------------------
 * * 🇪🇸 PROPÓSITO DEL PROMPT:
 * Este ejercicio simula a un "Maestro Bilingüe" para principiantes absolutos.
 * Su objetivo es automatizar tres bloques comunicativos: Nombre, Nacionalidad y Profesión.
 * Se basa en la reducción de la "carga cognitiva" (cognitive load): utiliza la lengua materna 
 * (Chino Tradicional) para explicar la gramática y corregir errores, dejando el español 
 * exclusivamente para la práctica del habla.
 * * 🇹🇼 提示詞目的 (Purpose):
 * 這個練習模擬一位針對初學者的「雙語老師」。
 * 其目標是自動化三個溝通模組：姓名、國籍和職業。
 * 設計基於降低「認知負擔」(cognitive load)：使用母語（繁體中文）來解釋文法
 * 和糾正錯誤，讓西班牙語僅用於口語練習。
 * * -------------------------------------------------------------------------
 */

const prompt01Data = {
    id: 'prompt-01',
    level: 'A1',
    recommendedTime: 180, // 3 minutos
    
    // Datos para inyectar en el panel de ayuda (Vocabulary Helper)
    vocabulary: {
        nacionalidades: [
            { es: "Taiwán", cn: "台灣", note: "Soy de..." },
            { es: "España", cn: "西班牙", note: "Soy de..." },
            { es: "América Latina", cn: "拉丁美洲", note: "Soy de..." },
            { es: "China", cn: "中國", note: "Soy de..." }
        ],
        profesiones: [
            { es: "Estudiante", cn: "學生", note: "Soy..." },
            { es: "Profesor/a", cn: "老師", note: "Soy..." },
            { es: "Ingeniero/a", cn: "工程師", note: "Soy..." },
            { es: "Empleado/a", cn: "上班族", note: "Soy..." },
            { es: "Funcionario/a", cn: "公務員", note: "Soy..." }
        ]
    }
};

/**
 * Función: Inyectar vocabulario específico en el DOM
 * Genera listas HTML dinámicas basadas en los datos de arriba.
 */
function loadPrompt01Vocabulary() {
    const container = document.getElementById('vocab-container');
    if (!container) return;

    // Limpiamos el contenedor por seguridad
    container.innerHTML = '';

    // 1. Renderizar Nacionalidades
    const h4Nat = document.createElement('h4');
    h4Nat.textContent = "📍 Origen (國籍)";
    container.appendChild(h4Nat);

    const ulNat = document.createElement('ul');
    prompt01Data.vocabulary.nacionalidades.forEach(item => {
        const li = document.createElement('li');
        // Estructura limpia: Español en negrita, Chino en gris suave
        li.innerHTML = `<span class="vocab-es">${item.es}</span> <span class="vocab-cn">${item.cn}</span>`;
        ulNat.appendChild(li);
    });
    container.appendChild(ulNat);

    // 2. Renderizar Profesiones
    const h4Prof = document.createElement('h4');
    h4Prof.textContent = "💼 Profesión (職業)";
    h4Prof.style.marginTop = "1.5rem"; 
    container.appendChild(h4Prof);

    const ulProf = document.createElement('ul');
    prompt01Data.vocabulary.profesiones.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="vocab-es">${item.es}</span> <span class="vocab-cn">${item.cn}</span>`;
        ulProf.appendChild(li);
    });
    container.appendChild(ulProf);
}

/**
 * Función: Configurar el Timer con el tiempo específico del prompt
 * Busca la función global 'startTimer' definida en main.js
 */
function initPrompt01Timer() {
    const btnStart = document.getElementById('btn-start');
    
    // Verificamos que el botón existe y que la función global existe
    if (btnStart && typeof window.startTimer === 'function') {
        const newBtn = btnStart.cloneNode(true);
        btnStart.parentNode.replaceChild(newBtn, btnStart);
        
        newBtn.addEventListener('click', () => {
            window.startTimer(prompt01Data.recommendedTime);
        });
    }
}

// Inicialización cuando el documento carga
document.addEventListener('DOMContentLoaded', () => {
    loadPrompt01Vocabulary();
    initPrompt01Timer();
    console.log('✅ Prompt 01 Logic Loaded / 邏輯已加載');
});

import { createRoot } from "react-dom/client";
import { ReadingBar } from "./ReadingBar";

export interface IWidgetConfig {
    height?: number;
    bg?: string;
    color?: string;
}

const defaultConfig: IWidgetConfig = {
    height: 4,
    bg: '#515151',
    color: '#83BF46',
};

/**
 * Функция которая встраивает виджет - запускает в loader-слое
 * @param container - Контейнер куда встраиваем наш виджет
 * @param config - Настройки виджета
 */
export function setWidget(container: HTMLElement, config: IWidgetConfig): void {
    const widgetConfig = {
        ...defaultConfig,
        ...config
    }
    // Очищаем контейнер и готовим к монтированию
    container.innerHTML = '';
    container.style.position = 'relative';

    const root = createRoot(container);
    root.render(<ReadingBar {...widgetConfig} />);
}

/**
 *  Добавить функцию update, которая обновляет уже встроенный виджет (для preview)
 * 
 * Получается, что потом созданная пользователем конфиг в buildere передается и в preview для update
 * И на сервер для сохранения
 * 
 * В дальнейшем продакшен лоадер скрипт в cdn будет брать именно сохраненный на сервере конфиг 
 */
import { createRoot, Root } from "react-dom/client";
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

let root: Root | null = null;
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

    // Если root ещё не создан — создаём его один раз
    if (!root) {
        // Очищаем контейнер при первом монтировании
        container.innerHTML = "";
        container.style.position = "relative";

        root = createRoot(container);
    }

    root.render(<ReadingBar {...widgetConfig} />);
}


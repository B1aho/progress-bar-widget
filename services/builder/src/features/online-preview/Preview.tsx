import { IWidgetConfig } from "@workspace/widget/src/mount";

export function Preview({ }: IWidgetConfig) {

    return (
        <div className="w-2/3 h-[100vh] p-2 bg-gray-300">
            <iframe className="w-full h-[100vh] rounded-md" src="http://127.0.0.1:5173/preview.html">
            </iframe>
        </div>
    )
}
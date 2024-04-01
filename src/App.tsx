import { sendGTM, GTMEventKey, CustomEventName, GTMConstants } from './utils/gtm';

function App() {
    return (
        <>
            <a
                onClick={() => {
                    sendGTM({
                        [GTMEventKey.EVENT_NAME]: CustomEventName.CLICK_QUOTE,
                        [GTMEventKey.SECTION]: `${GTMConstants.SECTION_PLACEHOLDER}_SECTION`,
                        [GTMEventKey.CLICK_ITEM]: '測試測試',
                    });
                }}
            >
                GA4
            </a>
        </>
    );
}

export default App;
